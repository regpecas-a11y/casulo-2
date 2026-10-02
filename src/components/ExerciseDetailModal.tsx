import React, { useState, useEffect } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  Video, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Clock, 
  Heart, 
  Activity, 
  ChevronRight,
  Maximize2,
  RotateCcw
} from 'lucide-react';
import { RichPrenatalExercise } from '../data/prenatalExercisesData';
import { ExerciseVideoPlayer } from './ExerciseVideoPlayer';

interface ExerciseDetailModalProps {
  exercise: RichPrenatalExercise | null;
  onClose: () => void;
  hasBaby?: boolean;
}

export const ExerciseDetailModal: React.FC<ExerciseDetailModalProps> = ({
  exercise,
  onClose,
  hasBaby = false
}) => {
  const [activeTab, setActiveTab] = useState<'instructions' | 'breathing' | 'safety' | 'anatomy'>('instructions');

  // CRONÔMETRO DE PRÁTICA
  const [timerSeconds, setTimerSeconds] = useState<number>(60);
  const [initialSeconds, setInitialSeconds] = useState<number>(60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerFinished, setTimerFinished] = useState<boolean>(false);

  // GUIA RESPIRATÓRIO SINCRONIZADO
  const [breathPhase, setBreathPhase] = useState<'Inhale' | 'Exhale'>('Inhale');

  useEffect(() => {
    if (!exercise) return;
    setIsTimerRunning(false);
    setTimerFinished(false);
    setTimerSeconds(60);
    setInitialSeconds(60);
  }, [exercise]);

  // Cronômetro e respiração
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            setTimerFinished(true);
            return 0;
          }
          return prev - 1;
        });

        // Alterna respiração a cada 4 segundos
        setBreathPhase((prev) => (prev === 'Inhale' ? 'Exhale' : 'Inhale'));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timerSeconds]);

  if (!exercise) return null;

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleResetTimer = (seconds: number) => {
    setIsTimerRunning(false);
    setTimerFinished(false);
    setInitialSeconds(seconds);
    setTimerSeconds(seconds);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 md:p-6 overflow-y-auto animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-slate-100">
        
        {/* HEADER DO MODAL */}
        <div className="p-5 md:p-6 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-3xl p-2.5 bg-rose-500/10 border border-rose-500/20 rounded-2xl">
              {exercise.icon}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300">
                  {exercise.phaseBadge}
                </span>
                <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300">
                  {exercise.difficulty}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-black text-white leading-tight mt-0.5">
                {exercise.name}
              </h3>
              <p className="text-xs text-slate-400 font-medium">
                {exercise.sanskritName} • <span className="text-slate-300">{exercise.targetArea}</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-2xl transition-all cursor-pointer"
            title="Fechar Ficha"
          >
            <X size={20} />
          </button>
        </div>

        {/* CORPO COM SCROLL */}
        <div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-6">
          
          {/* PAINEL DO VÍDEO MP4 NATIVO */}
          <div className="bg-slate-950 rounded-[2rem] border border-slate-800 p-3 md:p-4 space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="bg-rose-500/20 text-rose-400 border border-rose-500/30 text-[10px] font-black uppercase px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Video size={13} /> Vídeo Demonstrativo da Postura
                </span>
                <span className="text-[11px] font-bold text-slate-300">
                  {exercise.recommendedDuration}
                </span>
              </div>

              <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-400" /> Execução Guiada em Vídeo
              </span>
            </div>

            {/* ÁREA DE REPRODUÇÃO DO VÍDEO NATIVO */}
            <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden relative bg-black/60 border border-slate-800/80">
              <ExerciseVideoPlayer
                exercise={exercise}
                autoPlay={true}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* CRONÔMETRO DE PRÁTICA GUIADA */}
          <div className="bg-gradient-to-r from-slate-950 to-slate-900 p-5 rounded-[2rem] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative flex items-center justify-center">
                <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all ${
                  isTimerRunning ? 'border-amber-400 text-amber-300 animate-pulse' : 'border-slate-700 text-white'
                }`}>
                  <span className="text-base font-black font-mono">{formatTime(timerSeconds)}</span>
                </div>
              </div>
              <div>
                <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider block">
                  Treino Guiado da Postura
                </span>
                <h4 className="text-sm font-black text-white">
                  {timerFinished ? '🎉 Prática Concluída!' : isTimerRunning ? `Respiração: ${breathPhase === 'Inhale' ? 'Inspirando...' : 'Expirando...'}` : 'Iniciar Cronômetro de Permanência'}
                </h4>
                <p className="text-[11px] text-slate-400">
                  {exercise.recommendedDuration}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all shadow-md ${
                  isTimerRunning
                    ? 'bg-amber-400 text-slate-950 hover:bg-amber-300'
                    : 'bg-rose-500 text-white hover:bg-rose-600'
                }`}
              >
                {isTimerRunning ? <Pause size={15} /> : <Play size={15} />}
                {isTimerRunning ? 'Pausar' : 'Praticar Agora'}
              </button>

              <div className="flex gap-1 bg-slate-900 border border-slate-800 p-1 rounded-2xl text-[10px] font-bold">
                <button
                  onClick={() => handleResetTimer(30)}
                  className={`px-2.5 py-1 rounded-xl transition-all ${initialSeconds === 30 ? 'bg-slate-800 text-amber-300' : 'text-slate-400 hover:text-white'}`}
                >
                  30s
                </button>
                <button
                  onClick={() => handleResetTimer(60)}
                  className={`px-2.5 py-1 rounded-xl transition-all ${initialSeconds === 60 ? 'bg-slate-800 text-amber-300' : 'text-slate-400 hover:text-white'}`}
                >
                  60s
                </button>
                <button
                  onClick={() => handleResetTimer(120)}
                  className={`px-2.5 py-1 rounded-xl transition-all ${initialSeconds === 120 ? 'bg-slate-800 text-amber-300' : 'text-slate-400 hover:text-white'}`}
                >
                  2 min
                </button>
              </div>

              <button
                onClick={() => handleResetTimer(initialSeconds)}
                className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-2xl transition-all"
                title="Reiniciar Cronômetro"
              >
                <RotateCcw size={15} />
              </button>
            </div>
          </div>

          {/* BENEFÍCIO CLÍNICO & FISIOLOGIA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-950/30 border border-emerald-500/20 p-5 rounded-[2rem] space-y-1.5">
              <h5 className="text-[10px] font-black uppercase text-emerald-400 tracking-wider flex items-center gap-1.5">
                <Sparkles size={13} /> Benefício Principal & Alívio
              </h5>
              <p className="text-xs font-bold text-emerald-100 leading-relaxed">
                {exercise.primaryBenefit}
              </p>
            </div>

            <div className="bg-purple-950/30 border border-purple-500/20 p-5 rounded-[2rem] space-y-1.5">
              <h5 className="text-[10px] font-black uppercase text-purple-400 tracking-wider flex items-center gap-1.5">
                <Activity size={13} /> Fisiologia Obstétrica & Biomecânica
              </h5>
              <p className="text-xs text-purple-200 leading-relaxed font-medium">
                {exercise.clinicalPhysiology}
              </p>
            </div>
          </div>

          {/* ABAS DE DETALHAMENTO DA POSTURA */}
          <div className="space-y-4">
            <div className="flex bg-slate-950 border border-slate-800 p-1.5 rounded-2xl gap-1 overflow-x-auto text-xs font-black uppercase">
              <button
                onClick={() => setActiveTab('instructions')}
                className={`flex-1 py-2 px-3 rounded-xl transition-all whitespace-nowrap ${
                  activeTab === 'instructions' ? 'bg-rose-500 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                📋 Passo a Passo de Execução
              </button>
              <button
                onClick={() => setActiveTab('breathing')}
                className={`flex-1 py-2 px-3 rounded-xl transition-all whitespace-nowrap ${
                  activeTab === 'breathing' ? 'bg-rose-500 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                🫁 Guia de Respiração Sincronizada
              </button>
              <button
                onClick={() => setActiveTab('safety')}
                className={`flex-1 py-2 px-3 rounded-xl transition-all whitespace-nowrap ${
                  activeTab === 'safety' ? 'bg-rose-500 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                ⚠️ Segurança & Adaptações
              </button>
              <button
                onClick={() => setActiveTab('anatomy')}
                className={`flex-1 py-2 px-3 rounded-xl transition-all whitespace-nowrap ${
                  activeTab === 'anatomy' ? 'bg-rose-500 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                🧬 Músculos & Articulações
              </button>
            </div>

            {/* CONTEÚDO DA ABA 1: PASSO A PASSO */}
            {activeTab === 'instructions' && (
              <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 space-y-4">
                <h4 className="text-xs font-black uppercase text-amber-300 tracking-wider">
                  Sequência Segura de Alinhamento (4 Etapas):
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exercise.steps.map((step, idx) => (
                    <div key={idx} className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 space-y-1.5">
                      <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest block">
                        {step.title}
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CONTEÚDO DA ABA 2: RESPIRAÇÃO */}
            {activeTab === 'breathing' && (
              <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 space-y-4">
                <h4 className="text-xs font-black uppercase text-rose-400 tracking-wider">
                  Sincronização Respiratória (Inalação & Exalação):
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 space-y-2">
                    <span className="text-[10px] font-black uppercase text-emerald-400 block tracking-widest">
                      🌬️ Inalação (Entrada do Ar):
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      {exercise.breathingSync.inhale}
                    </p>
                  </div>

                  <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 space-y-2">
                    <span className="text-[10px] font-black uppercase text-amber-400 block tracking-widest">
                      💨 Exalação (Saída do Ar & Relaxamento):
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      {exercise.breathingSync.exhale}
                    </p>
                  </div>
                </div>

                <div className="bg-amber-950/30 border border-amber-500/20 p-4 rounded-2xl text-xs font-bold text-amber-200">
                  💡 <strong>Dica de Ouro da Instrutora:</strong> {exercise.breathingSync.tip}
                </div>
              </div>
            )}

            {/* CONTEÚDO DA ABA 3: SEGURANÇA & ADAPTAÇÕES */}
            {activeTab === 'safety' && (
              <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h5 className="text-[10px] font-black uppercase text-rose-400 tracking-wider flex items-center gap-1.5">
                      <AlertTriangle size={13} /> Erros Comuns a Evitar:
                    </h5>
                    <ul className="space-y-2 text-xs text-slate-300 font-medium">
                      {exercise.safetyAlerts.map((alert, i) => (
                        <li key={i} className="flex items-start gap-2 bg-rose-950/20 border border-rose-500/10 p-2.5 rounded-xl">
                          <span className="text-rose-400 font-bold shrink-0">✕</span>
                          <span>{alert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-[10px] font-black uppercase text-emerald-400 tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 size={13} /> Modificações e Adaptações Clínicas:
                    </h5>
                    <ul className="space-y-2 text-xs text-slate-300 font-medium">
                      {exercise.clinicalModifications.map((mod, i) => (
                        <li key={i} className="flex items-start gap-2 bg-emerald-950/20 border border-emerald-500/10 p-2.5 rounded-xl">
                          <span className="text-emerald-400 font-bold shrink-0">✓</span>
                          <span>{mod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* CONTEÚDO DA ABA 4: MÚSCULOS */}
            {activeTab === 'anatomy' && (
              <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 space-y-3">
                <h4 className="text-xs font-black uppercase text-purple-400 tracking-wider">
                  Músculos e Articulações Recrutados:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exercise.musclesWorked.map((muscle, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-slate-200"
                    >
                      💪 {muscle}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

        {/* FOOTER */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-400 font-medium">
            Ficha Clínica de Biomecânica Pré-Natal • Casulo Care
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all"
          >
            Concluir Leitura
          </button>
        </div>

      </div>
    </div>
  );
};
