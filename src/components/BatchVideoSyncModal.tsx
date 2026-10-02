import React, { useState, useEffect } from 'react';
import { 
  X, 
  Upload, 
  CheckCircle2, 
  AlertCircle, 
  Film, 
  Sparkles, 
  Play, 
  Trash2,
  FolderOpen
} from 'lucide-react';
import { RICH_PRENATAL_EXERCISES, RichPrenatalExercise } from '../data/prenatalExercisesData';
import { saveExerciseVideo, getAllStoredVideoIds, removeExerciseVideo } from '../utils/videoStorage';

interface BatchVideoSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSyncComplete?: () => void;
}

export const BatchVideoSyncModal: React.FC<BatchVideoSyncModalProps> = ({
  isOpen,
  onClose,
  onSyncComplete
}) => {
  const [storedVideoIds, setStoredVideoIds] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<{ exerciseId: string; file: File }[]>([]);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  // Carrega IDs já armazenados
  const refreshStored = async () => {
    const ids = await getAllStoredVideoIds();
    setStoredVideoIds(ids);
  };

  useEffect(() => {
    if (isOpen) {
      refreshStored();
      setSelectedFiles([]);
      setFeedbackMsg(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Lógica inteligente de correspondência entre arquivos de vídeo e os 20 exercícios
  const handleFilesChosen = (filesList: FileList | null) => {
    if (!filesList || filesList.length === 0) return;

    const files = Array.from(filesList).filter(f => f.type.startsWith('video/') || f.name.endsWith('.mp4'));
    const matched: { exerciseId: string; file: File }[] = [];

    // Mapeador de palavras-chave para os 20 exercícios clínicos de yoga e pilates
    const keywordMap: { [key: string]: string[] } = {
      'seated-tadasana': ['tadasana', 'cadeira', 'aterramento', '11'],
      'heart-womb-connection': ['coracao', 'coração', 'ventre', 'sementinha', 'toque', '14'],
      'seated-piriformis-chair': ['piriforme', 'ciatico', 'ciático', '15'],
      'cervical-shoulder-release': ['cervical', 'ombro', 'trapezio', 'trapézio', '13'],
      'standing-mountain-prayer': ['montanha', 'mountain', 'prece', '8'],
      'easy-seated-sukhasana': ['sukhasana', 'facil', 'fácil', '6'],
      'tabletop-pelvic-toetaps': ['tabletop', 'mesa', '4 apoios', 'toetaps', 'assoalho', '4'],
      'seated-hamstring-stretch': ['isquiotibial', 'hamstring', 'caimbras', '12'],
      'deep-malasana-squat': ['malasana', 'cocoras', 'cócoras', '2'],
      'goddess-chair-opening': ['goddess', 'deusa', '10'],
      'birth-ball-pelvic-circles': ['bola', 'ball', 'parto', 'pelvico', 'pélvico', 'circulo', 'círculo', '7'],
      'open-child-pose': ['crianca', 'criança', 'child', 'balasana', 'aberta', '3'],
      'cobra-cat-wave': ['cobra', 'gato', 'vaca', 'cat', 'ondulacao', 'ondulação', '1'],
      'supported-glute-bridge-knee-pillow': ['ponte', 'bridge', 'gluteo', 'glúteo', 'almofada', '17'],
      'savasana-side-bolster': ['savasana', 'bolster', 'veia cava', 'lateral', '9'],
      'zafu-mindful-breathing': ['zafu', 'meditacao', 'meditação', 'diafragmatica', '5'],
      'mother-baby-heart-connection': ['mae e bebe', 'mãe e bebê', 'amorosa', 'vinculacao', '16'],
      'baby-sling-squat': ['sling', 'agachamento com bebe', '10'],
      'baby-sway-dance': ['danca', 'dança', 'sway', 'ritmo', '7'],
      'baby-supported-tree-pose': ['arvore', 'árvore', 'tree', 'equilibrio', '8']
    };

    // Tentar correspondência automática
    const availableExercises = [...RICH_PRENATAL_EXERCISES];

    files.forEach((file, index) => {
      const lowerName = file.name.toLowerCase();
      let matchedExerciseId: string | null = null;

      // 1. Checa palavras-chave no nome do arquivo
      for (const [exId, words] of Object.entries(keywordMap)) {
        if (words.some(w => lowerName.includes(w))) {
          matchedExerciseId = exId;
          break;
        }
      }

      // 2. Se não encontrou por palavra-chave, tenta por número no nome do arquivo
      if (!matchedExerciseId) {
        const numberMatch = lowerName.match(/\d+/);
        if (numberMatch) {
          const num = parseInt(numberMatch[0], 10);
          const foundByNum = availableExercises.find(e => e.videoNumber === num);
          if (foundByNum) {
            matchedExerciseId = foundByNum.id;
          }
        }
      }

      // 3. Se ainda não associou, associa na ordem posicional
      if (!matchedExerciseId && index < availableExercises.length) {
        matchedExerciseId = availableExercises[index].id;
      }

      if (matchedExerciseId) {
        matched.push({ exerciseId: matchedExerciseId, file });
      }
    });

    setSelectedFiles(matched);
    setFeedbackMsg(`${files.length} arquivo(s) selecionado(s). Verifique a lista abaixo e clique em Salvar.`);
  };

  // Salvar todos os vídeos selecionados no IndexedDB
  const handleSaveAll = async () => {
    if (selectedFiles.length === 0) return;
    setIsSaving(true);
    try {
      for (const item of selectedFiles) {
        await saveExerciseVideo(item.exerciseId, item.file);
      }
      await refreshStored();
      setFeedbackMsg(`🎉 ${selectedFiles.length} vídeo(s) integrados com sucesso e salvos permanentemente no seu navegador!`);
      setSelectedFiles([]);
      onSyncComplete?.();
    } catch (err) {
      console.error(err);
      setFeedbackMsg('Ocorreu um erro ao gravar os vídeos localmente.');
    } finally {
      setIsSaving(false);
    }
  };

  // Remover vídeo salvo
  const handleRemove = async (exerciseId: string) => {
    await removeExerciseVideo(exerciseId);
    await refreshStored();
    onSyncComplete?.();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 md:p-6 overflow-y-auto animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden text-slate-100">
        
        {/* HEADER */}
        <div className="p-5 md:p-6 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center">
              <Film size={24} />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-black text-white">
                Sincronização dos Vídeos Clínicos
              </h3>
              <p className="text-xs text-slate-400 font-medium">
                Carregue os arquivos MP4 para reprodução natural e contínua em todos os 20 exercícios
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-2xl transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* CORPO */}
        <div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-6">
          
          {/* ÁREA DE SELEÇÃO / DROPZONE DE MÚLTIPLOS VÍDEOS */}
          <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 border-dashed text-center relative hover:bg-slate-950/80 transition-all">
            <input
              type="file"
              multiple
              accept="video/mp4,video/webm,video/quicktime"
              onChange={(e) => handleFilesChosen(e.target.files)}
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
            />
            
            <div className="w-14 h-14 rounded-3xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto mb-3">
              <FolderOpen size={28} />
            </div>

            <h4 className="text-base font-black text-white mb-1">
              Selecione Todos os Vídeos de Uma Vez
            </h4>
            <p className="text-xs text-slate-400 max-w-md mx-auto mb-4 leading-relaxed">
              Arraste ou selecione múltiplos arquivos MP4 do seu computador. O sistema mapeia cada vídeo para seu exercício e armazena de forma persistente no seu navegador.
            </p>

            <span className="inline-flex items-center gap-2 px-4 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md transition-all pointer-events-none">
              <Upload size={14} /> Escolher Arquivos de Vídeo (.mp4)
            </span>
          </div>

          {/* MENSAGEM DE FEEDBACK */}
          {feedbackMsg && (
            <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-xs font-bold text-emerald-300 flex items-center gap-2">
              <Sparkles size={16} className="shrink-0" />
              {feedbackMsg}
            </div>
          )}

          {/* LISTA DOS 20 EXERCÍCIOS E SEU STATUS ATUAL */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                Grade dos 20 Exercícios ({storedVideoIds.length}/20 com Vídeo Ativo)
              </h4>
              {selectedFiles.length > 0 && (
                <button
                  onClick={handleSaveAll}
                  disabled={isSaving}
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <CheckCircle2 size={14} />
                  {isSaving ? 'Gravando no Navegador...' : `Gravar ${selectedFiles.length} Vídeo(s)`}
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {RICH_PRENATAL_EXERCISES.map((ex) => {
                const isStored = storedVideoIds.includes(ex.id);
                const pendingMatch = selectedFiles.find(f => f.exerciseId === ex.id);

                return (
                  <div
                    key={ex.id}
                    className={`p-3 rounded-2xl border flex items-center justify-between gap-3 text-xs transition-all ${
                      isStored
                        ? 'bg-slate-950/90 border-emerald-500/40 text-slate-200'
                        : pendingMatch
                        ? 'bg-amber-950/20 border-amber-500/40 text-amber-200'
                        : 'bg-slate-950/40 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-xl shrink-0">{ex.icon}</span>
                      <div className="truncate">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] font-black uppercase text-slate-400">
                            {ex.phaseBadge}
                          </span>
                        </div>
                        <p className="font-bold text-white truncate text-xs">{ex.name}</p>
                        {pendingMatch && (
                          <p className="text-[10px] text-amber-400 truncate">
                            Pronto para salvar: {pendingMatch.file.name}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-2">
                      {isStored ? (
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md flex items-center gap-1">
                            <CheckCircle2 size={12} /> Ativo
                          </span>
                          <button
                            onClick={() => handleRemove(ex.id)}
                            className="p-1 text-slate-500 hover:text-rose-400 rounded transition-all"
                            title="Remover vídeo salvo"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      ) : (
                        <span className="text-[10px] font-bold text-slate-500 bg-slate-800 px-2 py-0.5 rounded-md">
                          Aguardando
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between shrink-0">
          <p className="text-xs text-slate-400">
            Os vídeos gravados são salvos em IndexedDB diretamente no seu dispositivo e continuam tocando sem conexão.
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all"
          >
            Concluir
          </button>
        </div>
      </div>
    </div>
  );
};
