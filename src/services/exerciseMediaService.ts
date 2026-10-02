import { db, storage } from '../lib/firebase';
import { doc, getDoc, setDoc, onSnapshot, collection } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export interface ExerciseMediaRecord {
  exerciseId: string;
  videoUrl: string;
  sourceType: 'firebase_storage' | 'external_url' | 'local';
  updatedAt: number;
  fileName?: string;
  sizeBytes?: number;
}

const MEDIA_COLLECTION = 'exercise_media';

// Carrega os links remotos de todos os exercícios do Firestore
export function subscribeToExerciseMedia(
  callback: (mediaMap: Record<string, ExerciseMediaRecord>) => void
): () => void {
  try {
    const colRef = collection(db, MEDIA_COLLECTION);
    return onSnapshot(colRef, (snapshot) => {
      const mediaMap: Record<string, ExerciseMediaRecord> = {};
      snapshot.forEach((docSnap) => {
        const data = docSnap.data() as ExerciseMediaRecord;
        if (data && data.videoUrl) {
          mediaMap[docSnap.id] = data;
        }
      });
      callback(mediaMap);
    }, (error) => {
      console.warn('Erro ao escutar mídias de exercícios no Firestore:', error);
      callback({});
    });
  } catch (err) {
    console.warn('Erro ao configurar listener do Firestore:', err);
    callback({});
    return () => {};
  }
}

// Obtém o link de mídia de um exercício específico
export async function getExerciseMedia(exerciseId: string): Promise<ExerciseMediaRecord | null> {
  try {
    const docRef = doc(db, MEDIA_COLLECTION, exerciseId);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return snap.data() as ExerciseMediaRecord;
    }
    return null;
  } catch (error) {
    console.warn(`Erro ao buscar mídia de ${exerciseId} no Firestore:`, error);
    return null;
  }
}

// Salva um link (URL direta) para um exercício no Firestore
export async function saveExerciseVideoUrl(
  exerciseId: string, 
  videoUrl: string, 
  sourceType: 'firebase_storage' | 'external_url' | 'local' = 'external_url'
): Promise<void> {
  const docRef = doc(db, MEDIA_COLLECTION, exerciseId);
  const record: ExerciseMediaRecord = {
    exerciseId,
    videoUrl: videoUrl.trim(),
    sourceType,
    updatedAt: Date.now()
  };
  await setDoc(docRef, record, { merge: true });
}

// Faz upload de um arquivo MP4 para o Firebase Storage e salva o link no Firestore
export async function uploadExerciseVideoToFirebase(
  exerciseId: string,
  file: File,
  onProgress?: (percent: number) => void
): Promise<string> {
  // Salva no caminho videos/{exerciseId}.mp4
  const storageRef = ref(storage, `videos/${exerciseId}.mp4`);
  const uploadTask = uploadBytesResumable(storageRef, file, {
    contentType: 'video/mp4'
  });

  return new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        if (onProgress) onProgress(progress);
      },
      (error) => {
        console.error('Erro no upload para o Firebase Storage:', error);
        reject(error);
      },
      async () => {
        try {
          const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
          // Salva no Firestore
          const docRef = doc(db, MEDIA_COLLECTION, exerciseId);
          await setDoc(docRef, {
            exerciseId,
            videoUrl: downloadUrl,
            sourceType: 'firebase_storage',
            updatedAt: Date.now(),
            fileName: file.name,
            sizeBytes: file.size
          }, { merge: true });

          resolve(downloadUrl);
        } catch (err) {
          reject(err);
        }
      }
    );
  });
}
