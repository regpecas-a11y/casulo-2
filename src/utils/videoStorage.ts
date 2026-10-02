// Gerenciador de armazenamento local persistente e Cache Storage para execução 100% Offline de Vídeos MP4

const DB_NAME = 'casulo_prenatal_videos_db';
const DB_VERSION = 1;
const STORE_NAME = 'exercise_videos';
const CACHE_NAME = 'casulo_videos_cache_v1';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      return reject(new Error('IndexedDB não suportado'));
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// Salva vídeo Blob no IndexedDB
export async function saveExerciseVideo(exerciseId: string, file: Blob | File): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);

    const record = {
      id: exerciseId,
      blob: file,
      name: (file as File).name || `${exerciseId}.mp4`,
      size: file.size,
      updatedAt: Date.now()
    };

    const request = store.put(record);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

// Obtém o Blob salvo no IndexedDB
export async function getExerciseVideoBlob(exerciseId: string): Promise<Blob | null> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(exerciseId);

      request.onsuccess = () => {
        if (request.result && request.result.blob) {
          resolve(request.result.blob);
        } else {
          resolve(null);
        }
      };

      request.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

// Verifica se o vídeo está disponível offline (no IndexedDB ou no Cache Storage)
export async function isExerciseVideoCached(exerciseId: string, url?: string): Promise<boolean> {
  // 1. Checa IndexedDB
  const blob = await getExerciseVideoBlob(exerciseId);
  if (blob && blob.size > 0) return true;

  // 2. Checa Cache Storage
  if (typeof caches !== 'undefined' && url) {
    try {
      const cache = await caches.open(CACHE_NAME);
      const match = await cache.match(url);
      if (match) return true;
    } catch {
      // ignore
    }
  }

  return false;
}

// Baixa e armazena o vídeo em cache para uso 100% offline
export async function cacheVideoForOffline(
  exerciseId: string, 
  videoUrl: string,
  onProgress?: (percent: number) => void
): Promise<boolean> {
  try {
    const response = await fetch(videoUrl);
    if (!response.ok) return false;

    // Se temos Content-Length, podemos calcular progresso
    const contentLength = response.headers.get('content-length');
    let blob: Blob;

    if (contentLength && response.body) {
      const total = parseInt(contentLength, 10);
      let loaded = 0;
      const reader = response.body.getReader();
      const chunks: Uint8Array[] = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        if (value) {
          chunks.push(value);
          loaded += value.length;
          if (onProgress && total > 0) {
            onProgress(Math.round((loaded / total) * 100));
          }
        }
      }

      blob = new Blob(chunks, { type: 'video/mp4' });
    } else {
      blob = await response.blob();
      if (onProgress) onProgress(100);
    }

    // Salva no IndexedDB
    await saveExerciseVideo(exerciseId, blob);

    // Também adiciona ao Cache Storage se suportado
    if (typeof caches !== 'undefined') {
      try {
        const cache = await caches.open(CACHE_NAME);
        const cacheResponse = new Response(blob, {
          headers: { 'Content-Type': 'video/mp4' }
        });
        await cache.put(videoUrl, cacheResponse);
      } catch {
        // IndexedDB já garantiu o salvamento
      }
    }

    return true;
  } catch (error) {
    console.warn(`Erro ao salvar vídeo offline para ${exerciseId}:`, error);
    return false;
  }
}

// Retorna todos os IDs de exercícios que possuem vídeo offline salvo
export async function getAllStoredVideoIds(): Promise<string[]> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAllKeys();

      request.onsuccess = () => {
        const keys = (request.result || []).map(k => String(k));
        resolve(keys);
      };

      request.onerror = () => resolve([]);
    });
  } catch {
    return [];
  }
}

// Remove o vídeo offline de um exercício
export async function removeStoredVideo(exerciseId: string, url?: string): Promise<void> {
  try {
    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    store.delete(exerciseId);

    if (typeof caches !== 'undefined' && url) {
      const cache = await caches.open(CACHE_NAME);
      await cache.delete(url);
    }
  } catch (err) {
    console.warn('Erro ao remover vídeo offline:', err);
  }
}

export const removeExerciseVideo = removeStoredVideo;
