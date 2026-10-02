import React, { useState, useEffect } from 'react';
import { 
  X, 
  Cloud, 
  Download, 
  CheckCircle2, 
  Upload, 
  Link as LinkIcon, 
  Sparkles, 
  RefreshCw, 
  Play, 
  HardDrive,
  Film,
  ExternalLink
} from 'lucide-react';
import { RICH_PRENATAL_EXERCISES, RichPrenatalExercise } from '../data/prenatalExercisesData';
import { 
  saveExerciseVideoUrl, 
  uploadExerciseVideoToFirebase, 
  subscribeToExerciseMedia, 
  ExerciseMediaRecord 
} from '../services/exerciseMediaService';
import { 
  cacheVideoForOffline, 
  isExerciseVideoCached, 
  getAllStoredVideoIds,
  saveExerciseVideo
} from '../utils/videoStorage';
import { BatchVideoSyncModal } from './BatchVideoSyncModal';

interface ExerciseMediaCloudModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExerciseMediaCloudModal: React.FC<ExerciseMediaCloudModalProps> = ({
  isOpen,
  onClose
}) => {
  const [mediaMap, setMediaMap] = useState<Record<string, ExerciseMediaRecord>>({});
  const [cachedIds, setCachedIds] = useState<string[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [inputUrl, setInputUrl] = useState<string>('');
  const [isSavingUrl, setIsSavingUrl] = useState<boolean>(false);
  const [uploadingId, setUploadingId] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isBatchOpen, setIsBatchOpen] = useState<boolean>(false);

  // Download em massa para offline
  const [isBatchDownloading, setIsBatchDownloading] = useState<boolean>(false);
  const [batchProgress, setBatchProgress] = useState<{ current: number; total: number; percent: number }>({
    current: 0,
    total: RICH_PRENATAL_EXERCISES.length,
    percent: 0
  });

  // Escutar atualizações do Firestore
  useEffect(() => {
    if (!isOpen) return;

    const unsubscribe = subscribeToExerciseMedia((data) => {
      setMediaMap(data);
    });

    // Carregar IDs em cache offline
    getAllStoredVideoIds().then((ids) => setCachedIds(ids));

    return () => unsubscribe();
  }, [isOpen]);

  if (!isOpen) return null;

  // Salvar link manual no Firestore
  const handleSaveUrl = async (exerciseId: string) => {
    if (!inputUrl.trim()) return;
    setIsSavingUrl(true);
    try {
      await saveExerciseVideoUrl(exerciseId, inputUrl.trim(), 'external_url');
      setEditingId(null);
      setInputUrl('');
    } catch (err) {
      console.error('Erro ao salvar URL:', err);
    } finally {
      setIsSavingUrl(false);
    }
  };

  // Upload de arquivo de vídeo para armazenamento local e nuvem
  const handleDirectUpload = async (exerciseId: string, file: File) => {
    setUploadingId(exerciseId);
    setUploadProgress(0);
    try {
      // 1. Salva imediatamente no IndexedDB para reprodução nativa offline instantânea
      await saveExerciseVideo(exerciseId, file);
      
      // 2. Tenta upload no Firebase Storage se disponível
      try {
        await uploadExerciseVideoToFirebase(exerciseId, file, (progress) => {
          setUploadProgress(progress);
        });
      } catch (fbErr) {
        console.warn('Firebase Storage offline ou não configurado, salvo localmente com sucesso:', fbErr);
      }

      const ids = await getAllStoredVideoIds();
      setCachedIds(ids);
    } catch (err) {
      console.error('Erro ao salvar vídeo:', err);
    } finally {
      setUploadingId(null);
    }
  };

  // Baixar todos os 20 vídeos para o armazenamento offline do celular/computador
  const handleDownloadAllOffline = async () => {
    setIsBatchDownloading(true);
    const total = RICH_PRENATAL_EXERCISES.length;

    for (let i = 0; i < total; i++) {
      const ex = RICH_PRENATAL_EXERCISES[i];
      const firestoreUrl = mediaMap[ex.id]?.videoUrl;
      const targetUrl = firestoreUrl || ex.videoUrl || `/videos/${ex.id}.mp4`;

      await cacheVideoForOffline(ex.id, targetUrl);

      setBatchProgress({
        current: i + 1,
        total,
        percent: Math.round(((i + 1) / total) * 100)
      });
    }

    const ids = await getAllStoredVideoIds();
    setCachedIds(ids);
    setIsBatchDownloading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* CABEÇALHO */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between flex-wrap gap-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-500 flex items-center justify-center shadow-lg">
              <Cloud size={24} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-rose-500/20 text-rose-300 text-[9px] font-black uppercase px-2.5 py-0.5 rounded-md border border-rose-500/30">
                  Firebase & Offline
                </span>
                <span className="text-xs text-slate-400 font-bold">20 Posturas</span>
              </div>
              <h3 className="text-xl font-black text-white">Central de Vídeos MP4 na Nuvem & Offline</h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsBatchOpen(true)}
              className="bg-rose-600 hover:bg-rose-500 text-white text-xs font-black px-4 py-2.5 rounded-2xl flex items-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <Upload size={14} />
              Enviar Vídeos em Lote
            </button>

            <button
              onClick={handleDownloadAllOffline}
              disabled={isBatchDownloading}
              className="bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 text-white text-xs font-black px-4 py-2.5 rounded-2xl flex items-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              {isBatchDownloading ? (
                <>
                  <RefreshCw className="animate-spin" size={14} />
                  Baixando {batchProgress.percent}%
                </>
              ) : (
                <>
                  <Download size={14} />
                  Baixar Todas as 20 Aulas Offline
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-all cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* BARRA DE PROGRESSO DO DOWNLOAD EM MASSA */}
        {isBatchDownloading && (
          <div className="bg-emerald-50 border-b border-emerald-100 p-4 space-y-2">
            <div className="flex items-center justify-between text-xs font-black text-emerald-900">
              <span className="flex items-center gap-2">
                <Download size={14} className="animate-bounce text-emerald-600" />
                Gravando vídeos na memória do dispositivo ({batchProgress.current} de {batchProgress.total})
              </span>
              <span>{batchProgress.percent}% Concluído</span>
            </div>
            <div className="w-full h-2.5 bg-emerald-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-600 rounded-full transition-all duration-300"
                style={{ width: `${batchProgress.percent}%` }}
              />
            </div>
          </div>
        )}

        {/* SUB-BARRA INFORMATIVA */}
        <div className="bg-slate-50 px-6 py-3 border-b border-slate-100 flex items-center justify-between text-xs font-medium text-slate-600 flex-wrap gap-2">
          <span>
            💡 <strong>Como funciona:</strong> Os vídeos tocam automaticamente por links diretos. Ao serem reproduzidos, ficam salvos para uso 100% offline.
          </span>
          <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2.5 py-1 rounded-full flex items-center gap-1">
            <HardDrive size={12} /> {cachedIds.length} de {RICH_PRENATAL_EXERCISES.length} salvos offline
          </span>
        </div>

        {/* LISTAGEM DOS 20 EXERCÍCIOS */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3">
          {RICH_PRENATAL_EXERCISES.map((ex, idx) => {
            const remoteMedia = mediaMap[ex.id];
            const isCached = cachedIds.includes(ex.id);
            const isEditing = editingId === ex.id;
            const isUploading = uploadingId === ex.id;
            const activeUrl = remoteMedia?.videoUrl || ex.videoUrl || `/videos/${ex.id}.mp4`;

            return (
              <div 
                key={ex.id}
                className="bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl p-4 transition-all space-y-3"
              >
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-black text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-2xl">{ex.icon}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-black text-slate-800">{ex.name}</h4>
                        <span className="text-[9px] font-black px-2 py-0.5 rounded bg-slate-200 text-slate-700 uppercase">
                          {ex.phaseBadge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-medium truncate max-w-md">
                        {remoteMedia?.sourceType === 'firebase_storage' ? (
                          <span className="text-amber-700 font-bold flex items-center gap-1">
                            <Cloud size={11} /> Firebase Storage: {remoteMedia.fileName || 'video.mp4'}
                          </span>
                        ) : remoteMedia?.videoUrl ? (
                          <span className="text-blue-700 font-bold flex items-center gap-1">
                            {remoteMedia.videoUrl.includes('youtu') ? (
                              <>
                                <Film size={11} className="text-red-600" /> YouTube: {remoteMedia.videoUrl}
                              </>
                            ) : (
                              <>
                                <LinkIcon size={11} /> Link Externo: {remoteMedia.videoUrl}
                              </>
                            )}
                          </span>
                        ) : (
                          <span className="text-slate-600 font-bold flex items-center gap-1">
                            <Sparkles size={11} className="text-rose-500" /> Demonstração Ilustrada & Anatômica Ativa
                          </span>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* STATUS & AÇÕES */}
                  <div className="flex items-center gap-2">
                    {isCached ? (
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2.5 py-1 rounded-full flex items-center gap-1">
                        <CheckCircle2 size={12} className="text-emerald-600" /> Offline Pronto
                      </span>
                    ) : (
                      <button
                        onClick={async () => {
                          await cacheVideoForOffline(ex.id, activeUrl);
                          const ids = await getAllStoredVideoIds();
                          setCachedIds(ids);
                        }}
                        className="bg-slate-200 hover:bg-slate-300 text-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 transition-all cursor-pointer"
                      >
                        <Download size={11} /> Baixar Offline
                      </button>
                    )}

                    {/* BOTÃO PARA EDITAR LINK */}
                    <button
                      onClick={() => {
                        if (isEditing) {
                          setEditingId(null);
                        } else {
                          setEditingId(ex.id);
                          setInputUrl(remoteMedia?.videoUrl || '');
                        }
                      }}
                      className="bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl flex items-center gap-1 transition-all cursor-pointer"
                    >
                      <LinkIcon size={12} /> {isEditing ? 'Fechar' : 'Alterar Link'}
                    </button>

                    {/* UPLOAD DIRETO PARA FIREBASE STORAGE */}
                    <label className="bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 text-[11px] font-bold px-3 py-1.5 rounded-xl flex items-center gap-1 transition-all cursor-pointer">
                      <Upload size={12} />
                      <span>{isUploading ? `${uploadProgress}%` : 'Subir no Firebase'}</span>
                      <input
                        type="file"
                        accept="video/mp4"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleDirectUpload(ex.id, file);
                        }}
                      />
                    </label>
                  </div>
                </div>

                {/* CAMPO DE EDIÇÃO DO LINK (QUANDO ABERTO) */}
                {isEditing && (
                  <div className="pt-2 border-t border-slate-200/80 flex items-center gap-2">
                    <input
                      type="url"
                      value={inputUrl}
                      onChange={(e) => setInputUrl(e.target.value)}
                      placeholder="Cole o link do YouTube (ex: https://youtube.com/watch?v=...) ou arquivo MP4..."
                      className="flex-1 bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-mono text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                    <button
                      onClick={() => handleSaveUrl(ex.id)}
                      disabled={isSavingUrl || !inputUrl.trim()}
                      className="bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-300 text-white text-xs font-black px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      {isSavingUrl ? <RefreshCw className="animate-spin" size={13} /> : <CheckCircle2 size={13} />}
                      Salvar Link no Firebase
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* RODAPÉ */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>
            Os links salvos no Firebase são transmitidos em tempo real para todos os alunos e gestantes que usam o aplicativo.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Concluir
          </button>
        </div>

        {/* MODAL DE SINCRONIZAÇÃO EM LOTE */}
        <BatchVideoSyncModal
          isOpen={isBatchOpen}
          onClose={() => {
            setIsBatchOpen(false);
            getAllStoredVideoIds().then((ids) => setCachedIds(ids));
          }}
          onSyncComplete={() => {
            getAllStoredVideoIds().then((ids) => setCachedIds(ids));
          }}
        />

      </div>
    </div>
  );
};
