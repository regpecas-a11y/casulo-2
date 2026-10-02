// CASULO SLEEP SOUNDS - COMPONENT
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Moon, 
  Lock, 
  Play, 
  Pause, 
  Volume2, 
  Timer, 
  Activity, 
  Heart, 
  Wind, 
  Droplets, 
  Zap, 
  Sparkles,
  ChevronDown,
  Maximize2,
  CloudRain,
  Waves,
  Fan,
  Music,
  User,
  Baby
} from 'lucide-react';
import { 
  playWomb, 
  playWhiteNoise, 
  playPinkNoise, 
  playBrownNoise, 
  playFrequency, 
  playMix, 
  playRain,
  playOcean,
  playFan,
  playVacuum,
  playHeartbeatOnly,
  playLullaby,
  playGuidedMeditationMother,
  playBreathingGuideAudio,
  stopAllSleepSounds,
  toggleWakeLock,
  updateSleepVolume,
  updateSleepParam,
  resumeAudioContext
} from '../sleepSounds';

interface SleepSoundsProps {
  isPremium: boolean;
  onUpgrade: () => void;
}

interface SoundItem {
  id: string;
  name: string;
  emoji: string;
  desc: string;
  freq: string;
  premium: boolean;
  category: 'mother' | 'baby';
  icon: any;
}

const SOUNDS: SoundItem[] = [
  // MODO MÃE
  { id: 'motherMeditation', name: 'Meditação Guia', emoji: '🧘‍♀️', desc: 'Desaceleração do estresse & ansiedade', freq: '432 Hz + Harmônicos', premium: false, category: 'mother', icon: User },
  { id: '432hz', name: 'Frequência 432 Hz', emoji: '💛', desc: 'Redução do cortisol & harmonia natural', freq: 'Frequência de Cura', premium: true, category: 'mother', icon: Sparkles },
  { id: '528hz', name: 'Frequência 528 Hz', emoji: '💚', desc: 'Paz profunda e regeneração celular', freq: 'Milagre da Vida', premium: true, category: 'mother', icon: Zap },
  { id: 'breathingGuide', name: 'Respiração 4-7-8', emoji: '🫁', desc: 'Inala, segura e expira para relaxar', freq: 'Ritmo Anti-Ansiedade', premium: true, category: 'mother', icon: Wind },
  { id: 'ocean', name: 'Ondas do Mar', emoji: '🌊', desc: 'Maré calma para desligar a mente', freq: 'Suave & Rítmico', premium: true, category: 'mother', icon: Waves },
  { id: 'rain', name: 'Chuva na Janela', emoji: '🌧️', desc: 'Sensação aconchegante de abrigo', freq: 'Ruído da Natureza', premium: false, category: 'mother', icon: CloudRain },

  // MODO BEBÊ
  { id: 'womb', name: 'Som do Útero', emoji: '🤰', desc: 'Ambiente intrauterino com fluido', freq: 'Simulador Materno', premium: true, category: 'baby', icon: Heart },
  { id: 'heartbeat', name: 'Batimento Cardíaco', emoji: '💓', desc: 'Ritmo reconfortante do coração da mãe', freq: '65 BPM Suave', premium: true, category: 'baby', icon: Heart },
  { id: 'white', name: 'Ruído Branco', emoji: '🌊', desc: 'Máscara acústica para bloqueio de barulhos', freq: 'Espectro Completo', premium: false, category: 'baby', icon: Wind },
  { id: 'pink', name: 'Ruído Rosa', emoji: '🌸', desc: 'Equilíbrio e suavidade para sonecas', freq: 'Freq. Balanceada', premium: true, category: 'baby', icon: Droplets },
  { id: 'brown', name: 'Ruído Marrom', emoji: '🤎', desc: 'Graves profundos que acalmam', freq: 'Graves Reconfortantes', premium: true, category: 'baby', icon: Activity },
  { id: 'fan', name: 'Ventilador de Teto', emoji: '🌀', desc: 'Zumbido contínuo e relaxante', freq: 'Frequência Constante', premium: false, category: 'baby', icon: Fan },
  { id: 'vacuum', name: 'Aspirador de Pó', emoji: '🧹', desc: 'Eficaz no alívio de crises de cólica', freq: 'Acalma Cólicas', premium: true, category: 'baby', icon: Zap },
  { id: 'lullaby', name: 'Caixa de Música', emoji: '🎶', desc: 'Melodia pentatônica para ninar', freq: 'Canção de Ninar', premium: true, category: 'baby', icon: Music },
];

const TIMERS = [
  { label: '30min', value: 30 * 60 },
  { label: '1h', value: 60 * 60 },
  { label: '2h', value: 120 * 60 },
  { label: '4h', value: 240 * 60 },
  { label: '∞', value: -1 },
];

const SleepSounds: React.FC<SleepSoundsProps> = ({ isPremium, onUpgrade }) => {
  const [activeTab, setActiveTab] = useState<'mother' | 'baby'>('mother');
  const [activeSoundId, setActiveSoundId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSound, setSelectedSound] = useState<SoundItem | null>(null);
  const [volume, setVolume] = useState(60);
  const [paramValue, setParamValue] = useState(60); // BPM, Warmth, Depth, etc.
  const [vibrato, setVibrato] = useState<'off' | 'suave' | 'medio'>('suave');
  const [timer, setTimer] = useState(TIMERS[0]);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isWakeLockActive, setIsWakeLockActive] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === 'visible' && isPlaying) {
        resumeAudioContext();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      stopAllSleepSounds();
    };
  }, [isPlaying]);

  useEffect(() => {
    if (timeLeft !== null && timeLeft > 0 && isPlaying) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev === null || prev <= 0) {
            handleStop();
            return 0;
          }
          if (prev <= 60 && prev > 0) {
            const fadeVol = (volume / 100) * (prev / 60);
            updateSleepVolume(fadeVol);
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timeLeft, isPlaying, volume, selectedSound]);

  const handlePlay = async (sound: SoundItem) => {
    try {
      if (sound.premium && !isPremium) {
        onUpgrade();
        return;
      }

      if (activeSoundId === sound.id && isPlaying) {
        handleStop();
        return;
      }

      setActiveSoundId(sound.id);
      setIsPlaying(true);
      setSelectedSound(sound);
      
      if (timer.value !== -1) {
        setTimeLeft(timer.value);
      } else {
        setTimeLeft(null);
      }

      await startSound(sound.id, volume / 100, paramValue, vibrato);
    } catch (err) {
      console.error("Erro ao tocar som:", err);
      handleStop();
    }
  };

  const startSound = async (id: string, vol: number, param: number, vib: string) => {
    switch (id) {
      case 'motherMeditation': await playGuidedMeditationMother(vol); break;
      case 'breathingGuide': await playBreathingGuideAudio(vol); break;
      case 'ocean': await playOcean(vol); break;
      case 'rain': await playRain(vol); break;
      case 'womb': await playWomb(vol, param); break;
      case 'heartbeat': await playHeartbeatOnly(vol, param); break;
      case 'white': await playWhiteNoise(vol); break;
      case 'pink': await playPinkNoise(vol, param / 100); break;
      case 'brown': await playBrownNoise(vol, param); break;
      case 'fan': await playFan(vol); break;
      case 'vacuum': await playVacuum(vol); break;
      case 'lullaby': await playLullaby(vol); break;
      case '432hz': await playFrequency(432, vol, vib); break;
      case '528hz': await playFrequency(528, vol, vib); break;
      case 'mix': await playMix(vol); break;
    }
  };

  const handleStop = () => {
    stopAllSleepSounds();
    setIsPlaying(false);
    setActiveSoundId(null);
    setTimeLeft(null);
  };

  const handleVolumeChange = (v: number) => {
    setVolume(v);
    if (isPlaying && activeSoundId) {
      updateSleepVolume(v / 100);
    }
  };

  const handleParamChange = (v: number) => {
    setParamValue(v);
    if (isPlaying && activeSoundId) {
      if (activeSoundId === 'womb' || activeSoundId === 'heartbeat') {
        updateSleepParam('bpm', v);
      } else if (activeSoundId === 'pink') {
        updateSleepParam('warmth', v / 100);
      } else if (activeSoundId === 'brown') {
        updateSleepParam('depth', v);
      }
    }
  };

  const handleVibratoChange = async (v: 'off' | 'suave' | 'medio') => {
    try {
      setVibrato(v);
      if (isPlaying && selectedSound && (selectedSound.id === '432hz' || selectedSound.id === '528hz')) {
        await startSound(selectedSound.id, volume / 100, paramValue, v);
      }
    } catch (err) {
      console.error("Erro ao mudar vibrato:", err);
    }
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) return `${h}h ${m}m`;
    if (m > 0) return `${m}m ${s}s`;
    return `${s}s`;
  };

  const handleWakeLock = async () => {
    try {
      const nextState = !isWakeLockActive;
      await toggleWakeLock(nextState);
      setIsWakeLockActive(nextState);
    } catch (err) {
      console.error("Erro ao alternar WakeLock:", err);
    }
  };

  const filteredSounds = SOUNDS.filter(s => s.category === activeTab);

  return (
    <div className="min-h-screen bg-[#06080f] text-white p-6 pb-32 font-sans overflow-y-auto no-scrollbar">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6 mt-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight flex items-center gap-3">
            Sons & Frequências <Moon className="text-amber-400 fill-amber-400" size={26} />
          </h2>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">
            Player Multifuncional: MÃE & BEBÊ
          </p>
        </div>
        <button 
          onClick={handleWakeLock}
          className={`p-3 rounded-2xl transition-all ${isWakeLockActive ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' : 'bg-slate-800/50 text-slate-400'}`}
        >
          <Maximize2 size={20} />
        </button>
      </div>

      {/* MODE SELECTOR TABS (MÃE vs BEBÊ) */}
      <div className="flex bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800 mb-8">
        <button
          onClick={() => setActiveTab('mother')}
          className={`flex-1 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
            activeTab === 'mother' 
              ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg' 
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <User size={16} /> Modo Mãe (Bem-Estar)
        </button>
        <button
          onClick={() => setActiveTab('baby')}
          className={`flex-1 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
            activeTab === 'baby' 
              ? 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-lg' 
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Baby size={16} /> Modo Bebê (Ninar)
        </button>
      </div>

      {/* GRID DE SONS DO MODO SELECIONADO */}
      <div className="grid grid-cols-2 gap-4">
        {filteredSounds.map((sound) => {
          const isActive = activeSoundId === sound.id;
          const isLocked = sound.premium && !isPremium;

          return (
            <motion.button
              key={sound.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePlay(sound)}
              className={`relative p-5 rounded-[2rem] text-left transition-all border-2 flex flex-col gap-3 overflow-hidden ${
                isActive 
                  ? activeTab === 'mother' 
                    ? 'bg-rose-600 border-rose-400 shadow-xl shadow-rose-950/50'
                    : 'bg-indigo-600 border-indigo-400 shadow-xl shadow-indigo-950/50'
                  : 'bg-slate-900/40 border-slate-800/60 hover:border-slate-700'
              }`}
            >
              {/* WAVE ANIMATION IF ACTIVE */}
              {isActive && isPlaying && (
                <motion.div 
                  animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.35, 0.1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-white rounded-full"
                />
              )}

              <div className="flex justify-between items-start z-10">
                <span className="text-3xl">{sound.emoji}</span>
                {isLocked && <Lock size={14} className="text-slate-500" />}
              </div>
              
              <div className="z-10">
                <h3 className="font-black text-sm tracking-tight leading-snug">{sound.name}</h3>
                <p className={`text-[8px] font-black uppercase tracking-widest ${isActive ? 'text-white/90' : 'text-slate-500'}`}>
                  {sound.freq}
                </p>
              </div>

              <p className={`text-[9px] font-medium leading-tight z-10 ${isActive ? 'text-white/80' : 'text-slate-400'}`}>
                {sound.desc}
              </p>
            </motion.button>
          );
        })}
      </div>

      {/* MIX BUTTON */}
      <div className="mt-8">
        <button 
          onClick={() => {
            if (!isPremium) { onUpgrade(); return; }
            handlePlay({ 
              id: 'mix', 
              name: 'Mix Casulo Especial', 
              emoji: '✨', 
              desc: 'Frequência 432Hz Harmônica + Ruído Rosa Acolhedor', 
              freq: 'Combinação Perfeita', 
              premium: true, 
              category: activeTab,
              icon: Sparkles 
            });
          }}
          className={`w-full p-5 rounded-[2rem] border-2 border-dashed flex items-center justify-center gap-3 transition-all ${
            activeSoundId === 'mix' 
              ? 'bg-emerald-600 border-emerald-400 text-white' 
              : 'bg-slate-900/30 border-slate-800 text-slate-400 hover:bg-slate-900/60'
          }`}
        >
          <Sparkles size={20} className="text-amber-400" />
          <span className="text-[10px] font-black uppercase tracking-widest">Ativar Mix: 432Hz + Ruído Rosa</span>
          {!isPremium && <Lock size={12} />}
        </button>
      </div>

      {/* PLAYER EXPANDIDO (BOTTOM SHEET) */}
      <AnimatePresence>
        {selectedSound && (
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-[600] bg-slate-950 border-t-4 border-slate-800 rounded-t-[3.5rem] p-8 pb-12 shadow-2xl"
          >
            <div className="w-12 h-1.5 bg-slate-800 rounded-full mx-auto mb-8" />
            
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-indigo-500/20 rounded-[2rem] flex items-center justify-center text-4xl relative">
                {selectedSound.emoji}
                {isPlaying && (
                  <motion.div 
                    animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute inset-0 border-4 border-amber-400 rounded-[2rem]"
                  />
                )}
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight">{selectedSound.name}</h3>
                <p className="text-amber-400 text-[10px] font-black uppercase tracking-widest">{selectedSound.freq}</p>
                {timeLeft !== null && (
                  <p className="text-emerald-400 text-[10px] font-black uppercase tracking-widest mt-1 animate-pulse">
                    ⏱ {formatTime(timeLeft)} restantes
                  </p>
                )}
              </div>
              <button 
                onClick={() => setSelectedSound(null)}
                className="ml-auto p-3 bg-slate-800 rounded-full text-slate-400"
              >
                <ChevronDown size={24} />
              </button>
            </div>

            <div className="space-y-6">
              {/* VOLUME */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                    <Volume2 size={14} /> Volume Principal
                  </span>
                  <span className="text-[10px] font-black text-amber-400">{volume}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" max="100" 
                  value={volume} 
                  onChange={(e) => handleVolumeChange(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              {/* SPECIFIC PARAMETER */}
              {(selectedSound.id === 'womb' || selectedSound.id === 'heartbeat') && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Ritmo Cardíaco (BPM)</span>
                    <span className="text-[10px] font-black text-amber-400">{paramValue} BPM</span>
                  </div>
                  <input 
                    type="range" 
                    min="55" max="80" 
                    value={paramValue} 
                    onChange={(e) => handleParamChange(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>
              )}

              {selectedSound.id === 'pink' && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Calor e Maciez do Som</span>
                    <span className="text-[10px] font-black text-amber-400">{paramValue}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" max="100" 
                    value={paramValue} 
                    onChange={(e) => handleParamChange(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>
              )}

              {selectedSound.id === 'brown' && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Profundidade dos Graves</span>
                    <span className="text-[10px] font-black text-amber-400">{paramValue} Hz</span>
                  </div>
                  <input 
                    type="range" 
                    min="120" max="250" 
                    value={paramValue} 
                    onChange={(e) => handleParamChange(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>
              )}

              {(selectedSound.id === '432hz' || selectedSound.id === '528hz') && (
                <div className="space-y-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Vibrato Ondular Natural</span>
                  <div className="flex gap-2">
                    {(['off', 'suave', 'medio'] as const).map(v => (
                      <button 
                        key={v}
                        onClick={() => handleVibratoChange(v)}
                        className={`flex-1 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${vibrato === v ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'}`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* TIMER */}
              <div className="space-y-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Timer size={14} /> Desligamento Automático (Timer)
                </span>
                <div className="flex gap-2">
                  {TIMERS.map(t => {
                    const isTimerLocked = t.value !== -1 && t.value > 1800 && !isPremium;
                    return (
                      <button 
                        key={t.label}
                        onClick={() => {
                          if (isTimerLocked) { onUpgrade(); return; }
                          setTimer(t);
                          if (isPlaying) setTimeLeft(t.value === -1 ? null : t.value);
                        }}
                        className={`flex-1 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all relative ${timer.label === t.label ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-400'}`}
                      >
                        {t.label}
                        {isTimerLocked && <Lock size={8} className="absolute top-1 right-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* PLAY/PAUSE */}
              <button 
                onClick={() => isPlaying ? handleStop() : handlePlay(selectedSound)}
                className={`w-full py-5 rounded-2xl flex items-center justify-center gap-3 transition-all ${isPlaying ? 'bg-slate-800 text-white' : 'bg-gradient-to-r from-amber-500 to-rose-500 text-slate-950 font-black shadow-xl'}`}
              >
                {isPlaying ? <Pause fill="white" /> : <Play fill="currentColor" />}
                <span className="font-black uppercase tracking-widest text-xs">{isPlaying ? 'Pausar Áudio' : 'Reproduzir Som Agora'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default SleepSounds;
