import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExerciseVideoPlayer } from './ExerciseVideoPlayer';
import { 
  Heart, 
  Wind, 
  Sparkles, 
  FileText, 
  Check, 
  Printer, 
  Download, 
  Sun, 
  Moon, 
  Volume2, 
  ShieldCheck, 
  UserCheck, 
  Baby, 
  Flame, 
  Activity,
  Smile,
  ChevronRight,
  Info,
  Timer,
  Play,
  Square,
  Trash2,
  AlertTriangle,
  Share2,
  Clock,
  History,
  BarChart2,
  CheckCircle2,
  PhoneCall,
  RefreshCw,
  Copy,
  Plus,
  Video,
  Box,
  Eye,
  Film
} from 'lucide-react';
import { playPositiveChime, playSoftClick, playNotificationBell } from '../sounds';
import { ContractionLog } from '../types';
import { RICH_PRENATAL_EXERCISES, RichPrenatalExercise } from '../data/prenatalExercisesData';
import { ExerciseDetailModal } from './ExerciseDetailModal';

export interface BirthPlanOptions {
  companion: boolean;
  dimLights: boolean;
  musicChoice: boolean;
  freeMovement: boolean;
  hydrationAllowed: boolean;
  massageAndBall: boolean;
  epiduralChoice: boolean;
  noEpisiotomy: boolean;
  squattingPosition: boolean;
  delayedCordClamping: boolean;
  skinToSkin: boolean;
  firstHourBreastfeeding: boolean;
  babyTestingOnLap: boolean;
  humanizedCsection: boolean;
  notes: string;
}

// DEFINIÇÃO DOS 5 EXERCÍCIOS DE RESPIRAÇÃO
export interface BreathingTechnique {
  id: string;
  title: string;
  subtitle: string;
  benefit: string;
  icon: string;
  inhaleSec: number;
  holdSec: number;
  exhaleSec: number;
  restSec: number;
  instructions: string[];
}

export const BREATHING_TECHNIQUES: BreathingTechnique[] = [
  {
    id: 'box',
    title: 'Respiração Quadrada (Box 4x4)',
    subtitle: 'Equilíbrio e Foco no Parto/Crises',
    benefit: 'Reduz os níveis de cortisol e desacelera o ritmo cardíaco imediatamente em momentos de pico de estresse.',
    icon: '🔲',
    inhaleSec: 4,
    holdSec: 4,
    exhaleSec: 4,
    restSec: 4,
    instructions: [
      'Inale o ar pelo nariz preenchendo a caixa torácica em 4 segundos.',
      'Mantenha os pulmões cheios e segure suavemente por 4 segundos.',
      'Exale devagar pela boca soltando todo o ar em 4 segundos.',
      'Permaneça com os pulmões vazios e relaxados por 4 segundos.'
    ]
  },
  {
    id: '478',
    title: 'Respiração 4-7-8 (Calmante para Sono)',
    subtitle: 'Combate à Insônia e Exaustão',
    benefit: 'Acalma o sistema nervoso autônomo e induz o relaxamento profundo antes de dormir.',
    icon: '🌙',
    inhaleSec: 4,
    holdSec: 7,
    exhaleSec: 8,
    restSec: 1,
    instructions: [
      'Encoste a ponta da língua no céu da boca atrás dos dentes superiores.',
      'Inale silenciosamente pelo nariz contando até 4.',
      'Mantenha a respiração presa confortavelmente por 7 segundos.',
      'Exale completamente pela boca fazendo um som suave "whoosh" por 8 segundos.'
    ]
  },
  {
    id: 'candle',
    title: 'Sopro da Vela (Inala 3s / Exala 6s)',
    subtitle: 'Manejo de Contrações & Assoalho Pélvico',
    benefit: 'Soprar de forma suave e prolongada relaxa a musculatura do períneo e facilita a passagem do bebê.',
    icon: '🕯️',
    inhaleSec: 3,
    holdSec: 1,
    exhaleSec: 6,
    restSec: 1,
    instructions: [
      'Inale fundo pelo nariz imaginando uma flor cheirosa por 3 segundos.',
      'Faça um biquinho com os lábios como se fosse soprar a chama de uma vela sem apagá-la.',
      'Exale muito devagar e de forma contínua pelo biquinho por 6 segundos.',
      'Sinta a bacia e os ombros derreterem de relaxamento.'
    ]
  },
  {
    id: 'shoulder',
    title: 'Soltura de Ombro e Mandíbula',
    subtitle: 'Alívio da Tensão de Amamentar',
    benefit: 'Libera o encurtamento da cervical, trapézio e peitoral causado pela postura da amamentação.',
    icon: '🧘‍♀️',
    inhaleSec: 4,
    holdSec: 2,
    exhaleSec: 5,
    restSec: 1,
    instructions: [
      'Inale subindo os dois ombros até quase tocar as orelhas em 4 segundos.',
      'Segure no topo sentindo a tensão acumulada por 2 segundos.',
      'Exale pela boca entreaberta soltando os ombros de uma vez só com um suspiro "Aaaah".',
      'Desencoste os dentes e relaxe completamente a mandíbula.'
    ]
  },
  {
    id: 'vocal',
    title: 'Vocalização "Ohm" / Zumbido da Abelha',
    subtitle: 'Vibração Anestésica Natural',
    benefit: 'A vibração sonora grave estimula o nervo vago e libera endorfinas que diminuem a percepção da dor.',
    icon: '🐝',
    inhaleSec: 4,
    holdSec: 1,
    exhaleSec: 7,
    restSec: 2,
    instructions: [
      'Encoste levemente os lábios sem apertar os dentes.',
      'Inale profundamente pelo nariz em 4 segundos.',
      'Exale fazendo um zumbido grave longo "Mmmmmm" fazendo os lábios e o peito vibrarem.',
      'Sinta a vibração acalmando a mente e relaxando a área pélvica.'
    ]
  }
];

// DEFINIÇÃO DOS EXERCÍCIOS DE YOGA E ALÍVIO BASEADOS NOS VÍDEOS REAIS
export type YogaExercise = RichPrenatalExercise;

// SELEÇÃO DAS 8 POSTURAS DESTAQUE PARA A SUB-ABA DE YOGA & ALÍVIO
export const YOGA_EXERCISES: RichPrenatalExercise[] = [
  RICH_PRENATAL_EXERCISES.find(e => e.id === 'deep-malasana-squat')!,
  RICH_PRENATAL_EXERCISES.find(e => e.id === 'cobra-cat-wave')!,
  RICH_PRENATAL_EXERCISES.find(e => e.id === 'open-child-pose')!,
  RICH_PRENATAL_EXERCISES.find(e => e.id === 'birth-ball-pelvic-circles')!,
  RICH_PRENATAL_EXERCISES.find(e => e.id === 'standing-mountain-prayer')!,
  RICH_PRENATAL_EXERCISES.find(e => e.id === 'seated-piriformis-chair')!,
  RICH_PRENATAL_EXERCISES.find(e => e.id === 'savasana-side-bolster')!,
  RICH_PRENATAL_EXERCISES.find(e => e.id === 'tabletop-pelvic-toetaps')!
];

// DEFINIÇÃO DOS EXERCÍCIOS PARA CADA UMA DAS 5 FASES DA MÃE COM BEBÊ
export type PhaseExercise = RichPrenatalExercise;

export interface MotherPhaseData {
  phaseId: string;
  phaseName: string;
  subtitle: string;
  badge: string;
  colorTheme: string;
  description: string;
  exercises: RichPrenatalExercise[];
}

export const MOTHER_PHASES: MotherPhaseData[] = [
  {
    phaseId: 'phase1',
    phaseName: '1º Trimestre (Semente & Adaptação)',
    subtitle: 'Semanas 1 a 13 • Calma, Aterramento & Fixação',
    badge: '1º Trimestre',
    colorTheme: 'from-emerald-500 to-teal-700',
    description: 'Foco no alívio de enjoo, náuseas, cansaço extremo, descompressão do nervo ciático e acolhimento emocional com a chegada do bebê.',
    exercises: RICH_PRENATAL_EXERCISES.filter(ex => ex.phaseId === 'phase1')
  },
  {
    phaseId: 'phase2',
    phaseName: '2º Trimestre (Energia & Crescimento)',
    subtitle: 'Semanas 14 a 27 • Disposição, Espaço & Fortalecimento',
    badge: '2º Trimestre',
    colorTheme: 'from-amber-500 to-orange-600',
    description: 'Fase dourada de energia! Fortalecimento de pernas e assoalho pélvico, expansão da caixa torácica e prevenção de câimbras.',
    exercises: RICH_PRENATAL_EXERCISES.filter(ex => ex.phaseId === 'phase2')
  },
  {
    phaseId: 'phase3',
    phaseName: '3º Trimestre (Preparação para o Parto)',
    subtitle: 'Semanas 28 a 40+ • Abertura Pélvica & Encaixe',
    badge: '3º Trimestre',
    colorTheme: 'from-rose-500 to-pink-700',
    description: 'Preparo biomecânico da bacia, alargamento em até 30%, rotação do bebê, alívio lombar imediato e postura de entrega.',
    exercises: RICH_PRENATAL_EXERCISES.filter(ex => ex.phaseId === 'phase3')
  },
  {
    phaseId: 'phase4',
    phaseName: 'Pós-Parto Imediato / Quarentena',
    subtitle: '0 a 3 Meses • Restauração, Assoalho Pélvico & Diástase',
    badge: 'Puerpério',
    colorTheme: 'from-purple-600 to-indigo-800',
    description: 'Reativação suave do transverso abdominal sem sobrecarregar a diástase, alívio da postura de amamentação e descanso da veia cava.',
    exercises: RICH_PRENATAL_EXERCISES.filter(ex => ex.phaseId === 'phase4')
  },
  {
    phaseId: 'phase5',
    phaseName: 'Pós-Parto com Bebê no Colo / Sling',
    subtitle: '3+ Meses • Conexão, Movimento & Sling Yoga',
    badge: 'Mãe + Bebê',
    colorTheme: 'from-pink-500 to-rose-700',
    description: 'Exercícios rítmicos e seguros com o bebê junto, estimulando o sistema vestibular do pequeno e restaurando a mãe com alegria!',
    exercises: RICH_PRENATAL_EXERCISES.filter(ex => ex.phaseId === 'phase5')
  }
];

export const MotherHealth: React.FC<{
  profile: any;
  onUpdateProfile: (updated: any) => void;
  isPremium: boolean;
}> = ({ profile, onUpdateProfile, isPremium }) => {
  const [activeSubTab, setActiveSubTab] = useState<'birthPlan' | 'contractions' | 'breathing' | 'yoga' | 'phaseExercises' | 'support'>('birthPlan');
  
  // ESTADO DO PLANO DE PARTO
  const [birthPlan, setBirthPlan] = useState<BirthPlanOptions>(() => {
    return profile?.birthPlanOptions || {
      companion: true,
      dimLights: true,
      musicChoice: true,
      freeMovement: true,
      hydrationAllowed: true,
      massageAndBall: true,
      epiduralChoice: true,
      noEpisiotomy: true,
      squattingPosition: true,
      delayedCordClamping: true,
      skinToSkin: true,
      firstHourBreastfeeding: true,
      babyTestingOnLap: true,
      humanizedCsection: true,
      notes: "Desejo um parto respeitoso, onde minhas vontades e o bem-estar do meu bebê sejam priorizados."
    };
  });

  const [showPrintModal, setShowPrintModal] = useState(false);

  // ESTADO DO CONTADOR DE CONTRAÇÕES
  const [contractionLogs, setContractionLogs] = useState<ContractionLog[]>(() => {
    return profile?.contractionLogs || [];
  });
  const [isTimingContraction, setIsTimingContraction] = useState(false);
  const [contractionStartTime, setContractionStartTime] = useState<Date | null>(null);
  const [contractionElapsedSeconds, setContractionElapsedSeconds] = useState(0);
  const [selectedIntensity, setSelectedIntensity] = useState<'mild' | 'moderate' | 'strong'>('moderate');
  const [showExportModal, setShowExportModal] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  // Sync com alterações de perfil externas
  useEffect(() => {
    if (profile?.contractionLogs && JSON.stringify(profile.contractionLogs) !== JSON.stringify(contractionLogs)) {
      setContractionLogs(profile.contractionLogs);
    }
  }, [profile?.contractionLogs]);

  // Cronômetro da contração ativa
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimingContraction && contractionStartTime) {
      interval = setInterval(() => {
        const seconds = Math.floor((new Date().getTime() - contractionStartTime.getTime()) / 1000);
        setContractionElapsedSeconds(seconds);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimingContraction, contractionStartTime]);

  const handleStartContraction = () => {
    const now = new Date();
    setContractionStartTime(now);
    setContractionElapsedSeconds(0);
    setIsTimingContraction(true);
    playPositiveChime();
  };

  const handleStopContraction = () => {
    if (!contractionStartTime) return;
    const endTime = new Date();
    const durationSeconds = Math.max(1, Math.floor((endTime.getTime() - contractionStartTime.getTime()) / 1000));
    
    // Calcula o intervalo desde o início da contração anterior
    let intervalSeconds: number | null = null;
    if (contractionLogs.length > 0) {
      const prevStartTime = new Date(contractionLogs[0].startTime).getTime();
      intervalSeconds = Math.max(1, Math.floor((contractionStartTime.getTime() - prevStartTime) / 1000));
    }

    const newLog: ContractionLog = {
      id: Date.now().toString(),
      startTime: contractionStartTime.toISOString(),
      endTime: endTime.toISOString(),
      durationSeconds,
      intervalSeconds,
      intensity: selectedIntensity
    };

    const updated = [newLog, ...contractionLogs];
    setContractionLogs(updated);
    onUpdateProfile({ contractionLogs: updated });

    setIsTimingContraction(false);
    setContractionStartTime(null);
    setContractionElapsedSeconds(0);
    playNotificationBell();
  };

  const handleDeleteContraction = (id: string) => {
    const updated = contractionLogs.filter(l => l.id !== id);
    setContractionLogs(updated);
    onUpdateProfile({ contractionLogs: updated });
    playSoftClick();
  };

  const handleClearContractions = () => {
    if (window.confirm("Deseja realmente apagar todo o histórico de contrações?")) {
      setContractionLogs([]);
      onUpdateProfile({ contractionLogs: [] });
      playSoftClick();
    }
  };

  const formatSeconds = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    if (mins > 0) {
      return `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;
    }
    return `${secs}s`;
  };

  const getLaborAnalysis = () => {
    if (contractionLogs.length === 0) {
      return {
        status: 'idle',
        badge: 'Pronto para monitorar',
        color: 'bg-slate-100 text-slate-600 border-slate-200',
        title: 'Contador de Contrações Rítmicas',
        description: 'Toque em "Iniciar Contração" assim que sentir o endurecimento da barriga ou o início da dor.'
      };
    }

    const now = new Date().getTime();
    const recentLogs = contractionLogs.filter(l => (now - new Date(l.startTime).getTime()) <= 2 * 3600 * 1000);

    if (recentLogs.length < 3) {
      return {
        status: 'monitoring',
        badge: 'Monitorando Padrão',
        color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
        title: 'Coletando Padrão Rítmico',
        description: `Você possui ${recentLogs.length} registro(s) recente(s). Registre ao menos 3 contrações para calcularmos a média de ritmo.`
      };
    }

    const validIntervals = recentLogs.map(l => l.intervalSeconds).filter((i): i is number => i !== null);
    const avgIntervalSecs = validIntervals.length > 0 
      ? Math.round(validIntervals.reduce((a, b) => a + b, 0) / validIntervals.length)
      : 0;

    const avgDurationSecs = Math.round(recentLogs.reduce((a, b) => a + b.durationSeconds, 0) / recentLogs.length);

    // Regra de Parto Ativo (5-1-1 / 4-1-1)
    if (avgIntervalSecs > 0 && avgIntervalSecs <= 330 && avgDurationSecs >= 45) {
      return {
        status: 'active_labor',
        badge: '🚨 TRABALHO DE PARTO ATIVO!',
        color: 'bg-rose-500 text-white border-rose-600 shadow-rose-200 shadow-lg',
        title: '⚠️ ALERTA DE MATERNIDADE (Regra 5-1-1 Atendida)',
        description: `Contrações ritmadas a cada ${formatSeconds(avgIntervalSecs)}, com duração média de ${formatSeconds(avgDurationSecs)}. Contate imediatamente sua obstetra/equipe médica ou vá à maternidade!`,
        avgIntervalSecs,
        avgDurationSecs
      };
    } else if (avgIntervalSecs > 0 && avgIntervalSecs <= 480) {
      return {
        status: 'transition',
        badge: '🟡 FASE DE TRANSIÇÃO / REGULARIZANDO',
        color: 'bg-amber-500 text-white border-amber-600',
        title: 'Contrações Regularizando',
        description: `Intervalo médio de ${formatSeconds(avgIntervalSecs)} e duração média de ${formatSeconds(avgDurationSecs)}. Mantenha a calma, prepare a mala da maternidade e pratique o Sopro da Vela.`,
        avgIntervalSecs,
        avgDurationSecs
      };
    } else {
      return {
        status: 'latent',
        badge: '🟢 FASE LATENTE / BRAXTON HICKS',
        color: 'bg-emerald-500 text-white border-emerald-600',
        title: 'Contrações Espaçadas ou de Treinamento',
        description: `Intervalo médio de ${formatSeconds(avgIntervalSecs)} e duração de ${formatSeconds(avgDurationSecs)}. Continue descansando, alimente-se levemente e alterne posições.`,
        avgIntervalSecs,
        avgDurationSecs
      };
    }
  };

  const laborAnalysis = getLaborAnalysis();

  const generateShareText = () => {
    if (contractionLogs.length === 0) return "Nenhuma contração registrada no Casulo.";
    let txt = `⏱️ *RELATÓRIO DE CONTRAÇÕES (CASULO)*\n`;
    txt += `📅 Data: ${new Date().toLocaleDateString('pt-BR')}\n`;
    txt += `📊 Registros: ${contractionLogs.length}\n`;
    if (laborAnalysis.avgIntervalSecs) {
      txt += `⏱️ Intervalo Médio: ${formatSeconds(laborAnalysis.avgIntervalSecs)}\n`;
      txt += `⏱️ Duração Média: ${formatSeconds(laborAnalysis.avgDurationSecs)}\n`;
    }
    txt += `\n*Histórico de Contrações:*\n`;
    contractionLogs.slice(0, 10).forEach((log, idx) => {
      const time = new Date(log.startTime).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
      const duration = formatSeconds(log.durationSeconds);
      const interval = log.intervalSeconds ? formatSeconds(log.intervalSeconds) : 'Inicial';
      const intensityLabel = log.intensity === 'mild' ? 'Suave' : log.intensity === 'moderate' ? 'Moderada' : 'Forte';
      txt += `${idx + 1}. ${time} | Duração: ${duration} | Intervalo: ${interval} (${intensityLabel})\n`;
    });
    return txt;
  };

  const handleCopySummary = () => {
    const txt = generateShareText();
    navigator.clipboard.writeText(txt).then(() => {
      setCopiedSummary(true);
      playPositiveChime();
      setTimeout(() => setCopiedSummary(false), 3000);
    }).catch(() => {
      alert(txt);
    });
  };

  // ESTADO DOS 5 EXERCÍCIOS DE RESPIRAÇÃO
  const [selectedBreathingId, setSelectedBreathingId] = useState<string>('box');
  const selectedBreathing = BREATHING_TECHNIQUES.find((b) => b.id === selectedBreathingId) || BREATHING_TECHNIQUES[0];
  
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState<'Inhale' | 'Hold' | 'Exhale' | 'Rest'>('Inhale');
  const [breathingTimer, setBreathingTimer] = useState(selectedBreathing.inhaleSec);

  // Mudar tempo inicial quando muda a técnica
  useEffect(() => {
    setIsBreathingActive(false);
    setBreathingPhase('Inhale');
    setBreathingTimer(selectedBreathing.inhaleSec);
  }, [selectedBreathingId]);

  // TIMER CÍCLICO DA RESPIRAÇÃO
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isBreathingActive) {
      interval = setInterval(() => {
        setBreathingTimer((prev) => {
          if (prev > 1) return prev - 1;
          
          // MUDANÇA DE FASE
          if (breathingPhase === 'Inhale') {
            setBreathingPhase('Hold');
            return selectedBreathing.holdSec;
          } else if (breathingPhase === 'Hold') {
            setBreathingPhase('Exhale');
            return selectedBreathing.exhaleSec;
          } else if (breathingPhase === 'Exhale') {
            if (selectedBreathing.restSec > 0) {
              setBreathingPhase('Rest');
              return selectedBreathing.restSec;
            } else {
              setBreathingPhase('Inhale');
              return selectedBreathing.inhaleSec;
            }
          } else {
            setBreathingPhase('Inhale');
            return selectedBreathing.inhaleSec;
          }
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isBreathingActive, breathingPhase, selectedBreathing]);

  // ESTADO DA FASE DA MÃE SELECIONADA (1º, 2º, 3º Trimestre, Puerpério, Sling)
  const [selectedPhaseIndex, setSelectedPhaseIndex] = useState<number>(0);
  const currentPhaseData = MOTHER_PHASES[selectedPhaseIndex];

  // MODAL DE FICHA COMPLETA & VÍDEO DO EXERCÍCIO
  const [selectedModalExercise, setSelectedModalExercise] = useState<RichPrenatalExercise | null>(null);

  const toggleBirthPlanOption = (key: keyof BirthPlanOptions) => {
    if (typeof birthPlan[key] === 'boolean') {
      const updated = { ...birthPlan, [key]: !birthPlan[key] };
      setBirthPlan(updated);
      onUpdateProfile({ birthPlanOptions: updated });
      playSoftClick();
    }
  };

  return (
    <div className="space-y-8 animate-fade-in pb-16">
      {/* BANNER PRINCIPAL */}
      <div className="bg-gradient-to-br from-rose-500 via-pink-600 to-purple-700 text-white p-8 rounded-[3rem] shadow-2xl relative overflow-hidden border-b-[8px] border-black/10">
        <div className="absolute top-0 right-0 p-6 text-8xl opacity-10 rotate-12">🌺</div>
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-white/20 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md">
            Espaço da Mãe • Cuidado Integral
          </span>
        </div>
        <h2 className="text-3xl font-black tracking-tight leading-tight">
          Saúde, Parto & <br/><span className="text-amber-200">Acolhimento Materno</span>
        </h2>
        <p className="text-xs font-bold text-rose-100 mt-2 max-w-xs leading-relaxed">
          5 técnicas de respiração, 6 posturas de yoga e 5 exercícios ilustrados para cada uma das fases da mãe com seu bebê.
        </p>

        {/* NAVEGAÇÃO DE SUB-ABAS */}
        <div className="mt-6 flex bg-black/20 p-1.5 rounded-[2rem] gap-1 backdrop-blur-md overflow-x-auto no-scrollbar">
          <button 
            onClick={() => { setActiveSubTab('birthPlan'); playSoftClick(); }}
            className={`flex-1 py-3 px-3 rounded-[1.5rem] text-[9px] font-black uppercase tracking-wider transition-all whitespace-nowrap ${
              activeSubTab === 'birthPlan' ? 'bg-white text-rose-600 shadow-md' : 'text-white/80 hover:text-white'
            }`}
          >
            📋 Plano de Parto
          </button>
          <button 
            onClick={() => { setActiveSubTab('contractions'); playSoftClick(); }}
            className={`flex-1 py-3 px-3 rounded-[1.5rem] text-[9px] font-black uppercase tracking-wider transition-all whitespace-nowrap ${
              activeSubTab === 'contractions' ? 'bg-white text-rose-600 shadow-md' : 'text-white/80 hover:text-white'
            }`}
          >
            ⏱️ Contrações
          </button>
          <button 
            onClick={() => { setActiveSubTab('breathing'); playSoftClick(); }}
            className={`flex-1 py-3 px-3 rounded-[1.5rem] text-[9px] font-black uppercase tracking-wider transition-all whitespace-nowrap ${
              activeSubTab === 'breathing' ? 'bg-white text-rose-600 shadow-md' : 'text-white/80 hover:text-white'
            }`}
          >
            🌬️ Respiração Guiada
          </button>
          <button 
            onClick={() => { setActiveSubTab('yoga'); playSoftClick(); }}
            className={`flex-1 py-3 px-3 rounded-[1.5rem] text-[9px] font-black uppercase tracking-wider transition-all whitespace-nowrap ${
              activeSubTab === 'yoga' ? 'bg-white text-rose-600 shadow-md' : 'text-white/80 hover:text-white'
            }`}
          >
            🧘 Yoga & Alívio
          </button>
          <button 
            onClick={() => { setActiveSubTab('phaseExercises'); playSoftClick(); }}
            className={`flex-1 py-3 px-3 rounded-[1.5rem] text-[9px] font-black uppercase tracking-wider transition-all whitespace-nowrap ${
              activeSubTab === 'phaseExercises' ? 'bg-white text-rose-600 shadow-md' : 'text-white/80 hover:text-white'
            }`}
          >
            👶 Exercícios por Fase
          </button>
          <button 
            onClick={() => { setActiveSubTab('support'); playSoftClick(); }}
            className={`flex-1 py-3 px-3 rounded-[1.5rem] text-[9px] font-black uppercase tracking-wider transition-all whitespace-nowrap ${
              activeSubTab === 'support' ? 'bg-white text-rose-600 shadow-md' : 'text-white/80 hover:text-white'
            }`}
          >
            💛 Acolhimento
          </button>
        </div>
      </div>

      {/* SUB-ABA: CONTADOR DE CONTRAÇÕES RÍTMICAS */}
      {activeSubTab === 'contractions' && (
        <div className="space-y-6 animate-fade-in">
          {/* HEADER DA SEÇÃO */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-2">
            <div>
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2">
                <Timer className="text-rose-500" size={24} /> Contador de Contrações Rítmicas
              </h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">
                Marque a duração, intervalo e intensidade com diagnóstico automático
              </p>
            </div>
            <button 
              onClick={handleCopySummary}
              className="px-4 py-2.5 bg-rose-500 text-white font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-lg flex items-center gap-2 active:scale-95 transition-all hover:bg-rose-600"
            >
              {copiedSummary ? <CheckCircle2 size={16} /> : <Share2 size={16} />} 
              {copiedSummary ? "Copiado para Enviar!" : "Copiar Relatório Médico"}
            </button>
          </div>

          {/* BANNER DE ANÁLISE / ALERTA DE PARTO ATIVO */}
          <div className={`p-6 rounded-[2.5rem] border transition-all ${laborAnalysis.color}`}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/20 rounded-2xl shrink-0 backdrop-blur-sm">
                {laborAnalysis.status === 'active_labor' ? (
                  <AlertTriangle size={32} className="animate-bounce" />
                ) : (
                  <Activity size={32} />
                )}
              </div>
              <div className="space-y-1">
                <span className="inline-block text-[9px] font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  {laborAnalysis.badge}
                </span>
                <h4 className="text-lg font-black tracking-tight">{laborAnalysis.title}</h4>
                <p className="text-xs font-medium opacity-90 leading-relaxed">{laborAnalysis.description}</p>
              </div>
            </div>
          </div>

          {/* PAINEL CENTRAL DO CRONÔMETRO */}
          <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                {isTimingContraction ? '⏱️ Contração em Andamento' : 'Pronto para Registrar'}
              </span>
              <div className="text-6xl font-black tracking-tight text-slate-800 font-mono">
                {formatSeconds(contractionElapsedSeconds)}
              </div>
            </div>

            {/* SELETOR DE INTENSIDADE DA CONTRAÇÃO */}
            <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-2xl border border-slate-100">
              <span className="text-[10px] font-black text-slate-400 uppercase px-2">Intensidade:</span>
              <button 
                onClick={() => { setSelectedIntensity('mild'); playSoftClick(); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedIntensity === 'mild' 
                    ? 'bg-emerald-500 text-white shadow-sm' 
                    : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                Leve 🟢
              </button>
              <button 
                onClick={() => { setSelectedIntensity('moderate'); playSoftClick(); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedIntensity === 'moderate' 
                    ? 'bg-amber-500 text-white shadow-sm' 
                    : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                Moderada 🟡
              </button>
              <button 
                onClick={() => { setSelectedIntensity('strong'); playSoftClick(); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedIntensity === 'strong' 
                    ? 'bg-rose-500 text-white shadow-sm' 
                    : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                Forte 🔴
              </button>
            </div>

            {/* BOTÃO PRINCIPAL DE AÇÃO */}
            {!isTimingContraction ? (
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStartContraction}
                className="w-48 h-48 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-rose-200 flex flex-col items-center justify-center gap-2 border-4 border-white cursor-pointer"
              >
                <div className="p-4 bg-white/20 rounded-full backdrop-blur-md">
                  <Play size={36} className="ml-1" />
                </div>
                <span>INICIAR CONTRAÇÃO</span>
              </motion.button>
            ) : (
              <motion.button 
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStopContraction}
                className="w-48 h-48 rounded-full bg-gradient-to-br from-rose-600 to-red-700 text-white font-black text-sm uppercase tracking-wider shadow-2xl shadow-rose-300 flex flex-col items-center justify-center gap-2 border-4 border-white cursor-pointer"
              >
                <div className="p-4 bg-white/20 rounded-full backdrop-blur-md animate-pulse">
                  <Square size={36} />
                </div>
                <span>PARAR CONTRAÇÃO</span>
              </motion.button>
            )}

            <p className="text-[11px] font-medium text-slate-400 max-w-xs">
              Toque no botão vermelho assim que a dor/pressão parar para salvar o tempo e calcular o intervalo.
            </p>
          </div>

          {/* MÉTRICAS DAS ÚLTIMAS CONTRAÇÕES */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm space-y-1">
              <div className="flex items-center gap-2 text-rose-500 text-[10px] font-black uppercase">
                <Clock size={14} /> Intervalo Médio (1h)
              </div>
              <p className="text-2xl font-black text-slate-800">
                {laborAnalysis.avgIntervalSecs ? formatSeconds(laborAnalysis.avgIntervalSecs) : '--'}
              </p>
              <p className="text-[10px] text-slate-400 font-medium">Tempo entre o início de cada dor</p>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm space-y-1">
              <div className="flex items-center gap-2 text-indigo-500 text-[10px] font-black uppercase">
                <Timer size={14} /> Duração Média (1h)
              </div>
              <p className="text-2xl font-black text-slate-800">
                {laborAnalysis.avgDurationSecs ? formatSeconds(laborAnalysis.avgDurationSecs) : '--'}
              </p>
              <p className="text-[10px] text-slate-400 font-medium">Tempo que dura cada barriga dura</p>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm space-y-1">
              <div className="flex items-center gap-2 text-amber-500 text-[10px] font-black uppercase">
                <History size={14} /> Total Registradas
              </div>
              <p className="text-2xl font-black text-slate-800">
                {contractionLogs.length}
              </p>
              <p className="text-[10px] text-slate-400 font-medium">Histórico salvo no perfil</p>
            </div>
          </div>

          {/* HISTÓRICO DE CONTRAÇÕES */}
          <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-4">
            <div className="flex justify-between items-center px-2">
              <h4 className="text-sm font-black text-slate-800 uppercase tracking-wider flex items-center gap-2">
                <History size={16} className="text-rose-500" /> Histórico de Registros
              </h4>
              {contractionLogs.length > 0 && (
                <button 
                  onClick={handleClearContractions}
                  className="text-[10px] font-black text-slate-400 hover:text-rose-500 uppercase tracking-widest flex items-center gap-1 transition-colors"
                >
                  <Trash2 size={12} /> Limpar Tudo
                </button>
              )}
            </div>

            {contractionLogs.length === 0 ? (
              <div className="text-center py-10 space-y-2">
                <span className="text-4xl">⏱️</span>
                <p className="text-xs font-bold text-slate-600">Nenhuma contração registrada ainda.</p>
                <p className="text-[10px] text-slate-400 max-w-xs mx-auto">
                  Utilize o botão acima quando sentir as primeiras dores ou endurecimento da barriga.
                </p>
              </div>
            ) : (
              <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                {contractionLogs.map((log, idx) => {
                  const startTimeStr = new Date(log.startTime).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
                  return (
                    <div key={log.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-3 hover:bg-slate-100/80 transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-600 font-black text-xs flex items-center justify-center shrink-0">
                          #{contractionLogs.length - idx}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-black text-slate-800">{startTimeStr}</span>
                            <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${
                              log.intensity === 'mild' ? 'bg-emerald-100 text-emerald-700' :
                              log.intensity === 'moderate' ? 'bg-amber-100 text-amber-700' :
                              'bg-rose-100 text-rose-700'
                            }`}>
                              {log.intensity === 'mild' ? 'Leve' : log.intensity === 'moderate' ? 'Moderada' : 'Forte'}
                            </span>
                          </div>
                          <div className="text-[10px] font-medium text-slate-500 mt-0.5">
                            Duração: <strong className="text-slate-700">{formatSeconds(log.durationSeconds)}</strong> • Intervalo: <strong className="text-slate-700">{log.intervalSeconds ? formatSeconds(log.intervalSeconds) : 'Inicial'}</strong>
                          </div>
                        </div>
                      </div>

                      <button 
                        onClick={() => handleDeleteContraction(log.id)}
                        className="p-2 text-slate-300 hover:text-rose-500 rounded-xl transition-colors active:scale-90"
                        title="Excluir este registro"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* GUIA DA REGRA MÉDICA 5-1-1 */}
          <div className="bg-gradient-to-br from-slate-900 to-rose-950 text-white p-6 rounded-[2.5rem] space-y-3">
            <h4 className="text-xs font-black text-rose-300 uppercase tracking-wider flex items-center gap-2">
              <Info size={16} /> Entendendo a Regra 5-1-1 do Trabalho de Parto
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm space-y-1">
                <span className="text-xl font-black text-rose-400 block">5 Minutos</span>
                <p className="text-[10px] text-slate-300 font-medium leading-snug">
                  As contrações ocorrem a cada 5 minutos (medidos do início de uma ao início da próxima).
                </p>
              </div>
              <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm space-y-1">
                <span className="text-xl font-black text-rose-400 block">1 Minuto</span>
                <p className="text-[10px] text-slate-300 font-medium leading-snug">
                  Cada contração dura cerca de 60 segundos (1 minuto completo de dor/endurecimento).
                </p>
              </div>
              <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm space-y-1">
                <span className="text-xl font-black text-rose-400 block">1 Hora</span>
                <p className="text-[10px] text-slate-300 font-medium leading-snug">
                  Esse padrão rítmico permanece contínuo por pelo menos 1 hora ininterrupta.
                </p>
              </div>
            </div>
            <p className="text-[10px] text-slate-300 font-medium italic pt-1">
              Nota: Este aplicativo é uma ferramenta de acompanhamento e suporte. Sempre siga as orientações médicas diretas da sua médica obstetra ou doula.
            </p>
          </div>
        </div>
      )}

      {/* SUB-ABA 1: PLANO DE PARTO INTERATIVO */}
      {activeSubTab === 'birthPlan' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center px-2">
            <div>
              <h3 className="text-xl font-black text-slate-800">Criador de Plano de Parto</h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">
                Monte e imprima para entregar na maternidade
              </p>
            </div>
            <button 
              onClick={() => setShowPrintModal(true)}
              className="px-5 py-3 bg-slate-900 text-white font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-lg flex items-center gap-2 active:scale-95 transition-all"
            >
              <Printer size={14} /> Imprimir / PDF
            </button>
          </div>

          <div className="space-y-4">
            {/* SEÇÃO 1: AMBIENTE E ACOMPANHANTE */}
            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-3">
              <h4 className="text-xs font-black text-rose-500 uppercase tracking-wider flex items-center gap-2">
                <UserCheck size={16} /> Ambiente & Trabalho de Parto
              </h4>
              <div className="space-y-2">
                <BirthCheckItem 
                  label="Presença livre do meu acompanhante de escolha em tempo integral" 
                  checked={birthPlan.companion} 
                  onChange={() => toggleBirthPlanOption('companion')} 
                />
                <BirthCheckItem 
                  label="Ambiente calmo, com iluminação suave e privacidade" 
                  checked={birthPlan.dimLights} 
                  onChange={() => toggleBirthPlanOption('dimLights')} 
                />
                <BirthCheckItem 
                  label="Liberdade de movimentação, caminhada e posições confortáveis" 
                  checked={birthPlan.freeMovement} 
                  onChange={() => toggleBirthPlanOption('freeMovement')} 
                />
                <BirthCheckItem 
                  label="Permissão para ingerir água e líquidos leves durante o trabalho de parto" 
                  checked={birthPlan.hydrationAllowed} 
                  onChange={() => toggleBirthPlanOption('hydrationAllowed')} 
                />
                <BirthCheckItem 
                  label="Uso de métodos não farmacológicos (massagens, chuveiro, bola suíça)" 
                  checked={birthPlan.massageAndBall} 
                  onChange={() => toggleBirthPlanOption('massageAndBall')} 
                />
              </div>
            </div>

            {/* SEÇÃO 2: EXPULSIVO E NASCIMENTO */}
            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-3">
              <h4 className="text-xs font-black text-indigo-500 uppercase tracking-wider flex items-center gap-2">
                <Flame size={16} /> Nascimento & Expulsivo
              </h4>
              <div className="space-y-2">
                <BirthCheckItem 
                  label="Opção de anestesia (analgesia) se eu solicitar no momento adequado" 
                  checked={birthPlan.epiduralChoice} 
                  onChange={() => toggleBirthPlanOption('epiduralChoice')} 
                />
                <BirthCheckItem 
                  label="Sem episiotomia de rotina (corte no períneo) e sem Manobra de Kristeller" 
                  checked={birthPlan.noEpisiotomy} 
                  onChange={() => toggleBirthPlanOption('noEpisiotomy')} 
                />
                <BirthCheckItem 
                  label="Livre escolha da posição para o nascimento (cócoras, de lado, 4 apoios)" 
                  checked={birthPlan.squattingPosition} 
                  onChange={() => toggleBirthPlanOption('squattingPosition')} 
                />
              </div>
            </div>

            {/* SEÇÃO 3: CUIDADOS COM O BEBÊ (GOLDEN HOUR) */}
            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-3">
              <h4 className="text-xs font-black text-emerald-600 uppercase tracking-wider flex items-center gap-2">
                <Baby size={16} /> Primeira Hora Dourada (Golden Hour)
              </h4>
              <div className="space-y-2">
                <BirthCheckItem 
                  label="Clampagem tardia do cordão umbilical (esperar parar de pulsar)" 
                  checked={birthPlan.delayedCordClamping} 
                  onChange={() => toggleBirthPlanOption('delayedCordClamping')} 
                />
                <BirthCheckItem 
                  label="Contato pele a pele imediato por no mínimo 1 hora ininterrupta" 
                  checked={birthPlan.skinToSkin} 
                  onChange={() => toggleBirthPlanOption('skinToSkin')} 
                />
                <BirthCheckItem 
                  label="Estímulo à amamentação na primeira hora de vida no colo da mãe" 
                  checked={birthPlan.firstHourBreastfeeding} 
                  onChange={() => toggleBirthPlanOption('firstHourBreastfeeding')} 
                />
                <BirthCheckItem 
                  label="Exames, pesagem e vacinas realizados no colo da mãe quando possível" 
                  checked={birthPlan.babyTestingOnLap} 
                  onChange={() => toggleBirthPlanOption('babyTestingOnLap')} 
                />
              </div>
            </div>

            {/* SEÇÃO 4: PLANO B (CESÁREA HUMANIZADA) */}
            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-3">
              <h4 className="text-xs font-black text-purple-600 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck size={16} /> Cesárea Humanizada (se necessária)
              </h4>
              <div className="space-y-2">
                <BirthCheckItem 
                  label="Presença constante do acompanhante na sala cirúrgica" 
                  checked={birthPlan.humanizedCsection} 
                  onChange={() => toggleBirthPlanOption('humanizedCsection')} 
                />
              </div>
            </div>

            {/* NOTAS ADICIONAIS */}
            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-2">
              <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider">Observações Pessoais:</h4>
              <textarea 
                value={birthPlan.notes}
                onChange={(e) => {
                  const updated = { ...birthPlan, notes: e.target.value };
                  setBirthPlan(updated);
                  onUpdateProfile({ birthPlanOptions: updated });
                }}
                rows={3}
                placeholder="Escreva preferências especiais (alergias, doula, móbile...)"
                className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-rose-400 outline-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* SUB-ABA 2: 5 EXERCÍCIOS DE RESPIRAÇÃO GUIADA COM TIMER ANIMADO */}
      {activeSubTab === 'breathing' && (
        <div className="space-y-6">
          <div className="px-2">
            <h3 className="text-xl font-black text-slate-800">5 Exercícios de Respiração Guiada</h3>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">
              Escolha a técnica ideal para o seu momento e controle a ansiedade
            </p>
          </div>

          {/* SELETOR DOS 5 EXERCÍCIOS */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {BREATHING_TECHNIQUES.map((tech) => (
              <button
                key={tech.id}
                onClick={() => {
                  setSelectedBreathingId(tech.id);
                  playSoftClick();
                }}
                className={`p-3.5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                  selectedBreathingId === tech.id
                    ? 'bg-rose-500 text-white border-rose-600 shadow-lg scale-[1.02]'
                    : 'bg-white text-slate-700 border-slate-100 hover:border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{tech.icon}</span>
                  <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-md ${
                    selectedBreathingId === tech.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {tech.inhaleSec}s-{tech.holdSec}s-{tech.exhaleSec}s
                  </span>
                </div>
                <h4 className="text-[11px] font-black leading-tight">{tech.title}</h4>
              </button>
            ))}
          </div>

          {/* PALCO VIRTUAL DO TIMER DA RESPIRAÇÃO */}
          <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-slate-100 text-center space-y-6 relative overflow-hidden">
            <div className="space-y-1">
              <span className="bg-rose-100 text-rose-700 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                {selectedBreathing.subtitle}
              </span>
              <h3 className="text-2xl font-black text-slate-800 mt-2">{selectedBreathing.title}</h3>
              <p className="text-xs font-bold text-slate-500 max-w-sm mx-auto leading-relaxed">
                {selectedBreathing.benefit}
              </p>
            </div>

            {/* GUIA VISUAL DINÂMICO DE RESPIRAÇÃO */}
            <div className="relative w-full max-w-xl mx-auto py-6 flex flex-col items-center justify-center">
              <div className="relative flex items-center justify-center my-4">
                <motion.div
                  animate={{
                    scale: breathingPhase === 'Inhale' ? 1.3 : breathingPhase === 'Hold' ? 1.3 : 0.85,
                    opacity: breathingPhase === 'Inhale' ? 0.95 : breathingPhase === 'Hold' ? 1 : 0.75
                  }}
                  transition={{ duration: breathingPhase === 'Inhale' ? selectedBreathing.inhaleSec : selectedBreathing.exhaleSec, ease: "easeInOut" }}
                  className="w-56 h-56 rounded-full bg-gradient-to-tr from-rose-400 via-pink-500 to-amber-300 shadow-2xl flex flex-col items-center justify-center text-white p-6 relative"
                >
                  <div className="absolute inset-2 rounded-full border-2 border-dashed border-white/40" />
                  <span className="text-4xl mb-1">🌸</span>
                  <span className="text-3xl font-black font-mono">{breathingTimer}s</span>
                  <span className="text-[10px] font-black uppercase tracking-widest mt-1 text-white/95">
                    {breathingPhase === 'Inhale' && 'Inale pelo Nariz'}
                    {breathingPhase === 'Hold' && 'Segure o Ar'}
                    {breathingPhase === 'Exhale' && 'Solte pela Boca'}
                    {breathingPhase === 'Rest' && 'Pausa & Relaxa'}
                  </span>
                </motion.div>
              </div>

              {/* RITMO CLÍNICO */}
              <div className="mt-2 bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-black tracking-wider flex items-center gap-2 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Ritmo: {selectedBreathing.inhaleSec}s Inalação • {selectedBreathing.holdSec}s Retenção • {selectedBreathing.exhaleSec}s Expiração
              </div>
            </div>

            {/* PASSOS DA TÉCNICA */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-left space-y-2 max-w-md mx-auto">
              <h5 className="text-[10px] font-black text-rose-600 uppercase tracking-wider flex items-center gap-1">
                <Info size={12} /> Como Praticar Passo a Passo:
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                {selectedBreathing.instructions.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-4 h-4 bg-rose-200 text-rose-800 rounded-full text-[9px] font-black flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTROLE INICIAR / PAUSAR */}
            <button 
              onClick={() => {
                setIsBreathingActive(!isBreathingActive);
                playPositiveChime();
              }}
              className={`w-full max-w-md py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl transition-all active:scale-95 ${
                isBreathingActive ? 'bg-slate-900 text-white' : 'bg-rose-500 text-white hover:brightness-110'
              }`}
            >
              {isBreathingActive ? '⏹️ Pausar Exercício' : '▶️ Iniciar Exercício Guiado'}
            </button>
          </div>
        </div>
      )}

      {/* SUB-ABA 3: YOGA & ALÍVIO COM ILUSTRAÇÃO DOS MOVIMENTOS E VÍDEOS */}
      {activeSubTab === 'yoga' && (
        <div className="space-y-6">
          <div className="px-2">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-black text-slate-800">Posturas de Yoga & Alívio com Fichas Clínicas e Vídeos</h3>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">
                  Vídeos Clínicos HD • Reprodução Nativa • Sincronização Respiratória
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-rose-100 text-rose-700 text-xs font-black px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                  <Sparkles size={14} /> 20 Aulas Guiadas
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {YOGA_EXERCISES.map((yoga) => (
              <div 
                key={yoga.id} 
                className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-4 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* CABEÇALHO DO CARD */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl p-3 bg-rose-50 rounded-2xl shrink-0">{yoga.icon}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="bg-slate-900 text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                            {yoga.phaseBadge}
                          </span>
                          <span className="bg-emerald-100 text-emerald-800 text-[8px] font-black px-2 py-0.5 rounded-md uppercase">
                            {yoga.difficulty}
                          </span>
                        </div>
                        <h4 className="text-base font-black text-slate-800 mt-1 leading-snug">{yoga.name}</h4>
                        {yoga.sanskritName && (
                          <p className="text-[10px] font-bold text-slate-400 italic">{yoga.sanskritName}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* VÍDEO MP4 NATIVO DO EXERCÍCIO */}
                  <div className="w-full h-64 rounded-2xl overflow-hidden shadow-inner border border-slate-900/10 bg-black">
                    <ExerciseVideoPlayer 
                      exercise={yoga}
                      compact={false}
                      className="w-full h-full"
                    />
                  </div>

                  {/* BENEFÍCIO CLÍNICO & FISIOLOGIA */}
                  <div className="space-y-2">
                    <div className="bg-emerald-50 p-3 rounded-2xl border border-emerald-100 text-xs font-bold text-emerald-800">
                      🌿 <strong>Objetivo & Alívio:</strong> {yoga.primaryBenefit}
                    </div>

                    <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-xs text-slate-600 font-medium">
                      <p className="line-clamp-2"><strong>Fisiologia:</strong> {yoga.clinicalPhysiology}</p>
                    </div>

                    {/* GUIA DE RESPIRAÇÃO RÁPIDO */}
                    <div className="bg-teal-50/70 p-2.5 rounded-xl border border-teal-100 flex items-center gap-2 text-[11px] text-teal-900 font-bold">
                      <Wind size={15} className="text-teal-600 shrink-0" />
                      <span className="truncate"><strong>Respiração:</strong> {yoga.breathingSync.inhale} • {yoga.breathingSync.exhale}</span>
                    </div>
                  </div>
                </div>

                {/* BOTÃO DE ABRIR FICHA COMPLETA COM VÍDEO E CRONÔMETRO */}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSelectedModalExercise(yoga);
                      playSoftClick();
                    }}
                    className="w-full py-3.5 px-4 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-black rounded-2xl text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Video size={16} /> Ver Vídeo HD & Ficha Completa
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-ABA 4: EXERCÍCIOS PARA CADA FASE DA MÃE COM SEU BEBÊ */}
      {activeSubTab === 'phaseExercises' && (
        <div className="space-y-6">
          <div className="px-2">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-black text-slate-800">Exercícios por Fase da Mãe com seu Bebê</h3>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">
                  Biomecânica avançada, segurança gestacional e vídeos clínicos em alta definição
                </p>
              </div>
            </div>
          </div>

          {/* SELETOR DE FASES (5 FASES) */}
          <div className="flex bg-slate-200/80 p-1.5 rounded-[2rem] gap-1 overflow-x-auto no-scrollbar">
            {MOTHER_PHASES.map((phase, index) => (
              <button
                key={phase.phaseId}
                onClick={() => {
                  setSelectedPhaseIndex(index);
                  playSoftClick();
                }}
                className={`flex-1 py-3 px-4 rounded-[1.5rem] text-[9px] font-black uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedPhaseIndex === index
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {phase.badge}
              </button>
            ))}
          </div>

          {/* CABEÇALHO DA FASE SELECIONADA */}
          <div className={`bg-gradient-to-r ${currentPhaseData.colorTheme} text-white p-6 rounded-[2.5rem] shadow-xl space-y-2`}>
            <div className="flex justify-between items-center">
              <span className="bg-white/20 text-white text-[9px] font-black uppercase px-3 py-1 rounded-full">
                Fase Selecionada
              </span>
              <span className="text-xs font-black">{currentPhaseData.subtitle}</span>
            </div>
            <h3 className="text-2xl font-black">{currentPhaseData.phaseName}</h3>
            <p className="text-xs font-medium text-white/90 leading-relaxed max-w-xl">
              {currentPhaseData.description}
            </p>
          </div>

          {/* LISTA DOS 4 EXERCÍCIOS DA FASE COM INFORMAÇÕES RICAS */}
          <div className="space-y-4">
            {currentPhaseData.exercises.map((ex, idx) => (
              <div key={ex.id} className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* VÍDEO MP4 NATIVO DO EXERCÍCIO */}
                <div className="md:col-span-5 w-full space-y-3">
                  <div className="w-full h-64 rounded-2xl overflow-hidden shadow-inner border border-slate-900/10 bg-black">
                    <ExerciseVideoPlayer 
                      exercise={ex}
                      compact={false}
                      className="w-full h-full"
                    />
                  </div>
                  
                  {/* BOTÃO PARA ABRIR O VÍDEO & FICHA COMPLETA */}
                  <button
                    onClick={() => {
                      setSelectedModalExercise(ex);
                      playSoftClick();
                    }}
                    className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-2xl text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Video size={16} className="text-rose-400" /> Ver Vídeo HD & Ficha Teórica Completa
                  </button>
                </div>

                {/* INFORMAÇÕES RICAS E INSTRUÇÕES DO EXERCÍCIO */}
                <div className="md:col-span-7 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-xl bg-rose-500/10 text-rose-600 font-black text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-2xl">{ex.icon}</span>
                      <div>
                        <h4 className="text-base font-black text-slate-800 leading-tight">{ex.name}</h4>
                        {ex.sanskritName && (
                          <p className="text-[10px] font-bold text-slate-400 italic">{ex.sanskritName}</p>
                        )}
                      </div>
                    </div>
                    <span className="bg-rose-100 text-rose-700 text-[9px] font-black uppercase px-2.5 py-1 rounded-full">
                      {ex.difficulty} • {ex.recommendedDuration}
                    </span>
                  </div>

                  {/* OBJETIVO & ALÍVIO */}
                  <div className="bg-emerald-50 p-3 rounded-2xl border border-emerald-100 text-xs font-bold text-emerald-800">
                    💡 <strong>Objetivo:</strong> {ex.primaryBenefit}
                  </div>

                  {/* RESPIRAÇÃO & SEGURANÇA */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="bg-teal-50/80 p-2.5 rounded-xl border border-teal-100 text-teal-900">
                      <span className="text-[9px] font-black text-teal-700 uppercase block mb-0.5">🌬️ Respiração:</span>
                      <p className="text-[11px] font-semibold">{ex.breathingSync.inhale}</p>
                    </div>
                    <div className="bg-amber-50/80 p-2.5 rounded-xl border border-amber-100 text-amber-900">
                      <span className="text-[9px] font-black text-amber-700 uppercase block mb-0.5">⚠️ Cuidados:</span>
                      <p className="text-[11px] font-semibold">{ex.safetyAlerts[0] || 'Respeite seu limite.'}</p>
                    </div>
                  </div>

                  {/* INSTRUÇÕES PASSO A PASSO */}
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-xs font-medium text-slate-700 space-y-1.5">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Como Praticar:</span>
                    <ol className="list-decimal list-inside space-y-1 text-slate-600">
                      {ex.steps.slice(0, 3).map((step, sIdx) => (
                        <li key={sIdx} className="leading-snug">
                          {typeof step === 'string' ? step : <span><strong>{step.title}:</strong> {step.description}</span>}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-ABA 5: ACOLHIMENTO & MÃES SOLO */}
      {activeSubTab === 'support' && (
        <div className="space-y-4">
          <div className="bg-amber-50 border-2 border-amber-200 p-6 rounded-[2.5rem] space-y-3">
            <h4 className="text-sm font-black text-amber-900 uppercase flex items-center gap-2">
              <Heart className="fill-amber-500 text-amber-500" size={18} /> Mães Solo & Rede de Apoio
            </h4>
            <p className="text-xs font-bold text-amber-950 leading-relaxed">
              Se você está vivenciando a maternidade sem a presença do pai, lembre-se: você é inteira e capaz. Sua força não vem de preencher lacunas alheias, mas do amor que você cultiva diariamente.
            </p>
            <div className="bg-white/80 p-4 rounded-2xl border border-amber-200 text-[10px] font-black text-amber-900">
              💡 DICA DE OURO: Aceite ajuda de amigas, vizinhas e familiares sem culpa. Delegue tarefas domésticas para focar no seu descanso mental.
            </div>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 p-6 rounded-[2.5rem] space-y-3">
            <h4 className="text-sm font-black text-purple-900 uppercase flex items-center gap-2">
              <Smile size={18} className="text-purple-600" /> Lidando com Birras sem Desmoronar
            </h4>
            <p className="text-xs font-bold text-purple-950 leading-relaxed">
              A birra não é um ataque contra você — é um cérebro imaturo sobrecarregado de emoções. Mantenha-se como a âncora calma na tempestade do seu filho.
            </p>
            <p className="text-[10px] font-black text-purple-700 uppercase">
              1) Abaixe-se na altura dos olhos dele • 2) Valide o sentimento ("Eu sei que você está chateado") • 3) Ofereça abraço sem forçar.
            </p>
          </div>
        </div>
      )}

      {/* MODAL IMPRIMÍVEL DO PLANO DE PARTO */}
      <AnimatePresence>
        {showPrintModal && (
          <div className="fixed inset-0 z-[1000] bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-6">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-lg rounded-[3rem] p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto no-scrollbar border-b-[10px] border-slate-200"
            >
              <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-xl font-black text-slate-800">Plano de Parto Impresso</h3>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Documento da Gestante</p>
                </div>
                <button 
                  onClick={() => setShowPrintModal(false)}
                  className="w-10 h-10 bg-slate-100 rounded-full font-black text-slate-500 text-sm flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              {/* CONTEÚDO IMPRESSO DA MATERNIDADE */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-slate-800 space-y-4 font-sans text-xs">
                <div className="border-b border-slate-300 pb-3">
                  <h4 className="font-black text-base uppercase">Plano de Parto de {profile?.name || 'Gestante'}</h4>
                  <p className="text-[10px] text-slate-500 font-bold">À Equipe Médica e de Enfermagem da Maternidade</p>
                </div>

                <p className="italic text-slate-600 text-[11px]">
                  "Gostaria de apresentar minhas preferências para o trabalho de parto e nascimento do meu bebê, caso tudo corra bem e sem complicações médicas."
                </p>

                <div className="space-y-2">
                  <h5 className="font-black text-rose-600 uppercase text-[10px]">Preferências Selecionadas:</h5>
                  <ul className="list-disc list-inside space-y-1 text-[11px]">
                    {birthPlan.companion && <li>Presença do acompanhante de escolha.</li>}
                    {birthPlan.dimLights && <li>Ambiente com iluminação suave e privacidade.</li>}
                    {birthPlan.freeMovement && <li>Liberdade de movimentação e posições.</li>}
                    {birthPlan.hydrationAllowed && <li>Ingestão de água/líquidos permitida.</li>}
                    {birthPlan.massageAndBall && <li>Uso de métodos não farmacológicos de dor.</li>}
                    {birthPlan.noEpisiotomy && <li>Sem episiotomia de rotina e sem manobra de Kristeller.</li>}
                    {birthPlan.delayedCordClamping && <li>Clampagem tardia do cordão umbilical.</li>}
                    {birthPlan.skinToSkin && <li>Contato pele a pele imediato na 1ª hora.</li>}
                    {birthPlan.firstHourBreastfeeding && <li>Amamentação na 1ª hora no colo.</li>}
                  </ul>
                </div>

                {birthPlan.notes && (
                  <div className="border-t border-slate-300 pt-3">
                    <h5 className="font-black uppercase text-[10px]">Observações:</h5>
                    <p className="text-[10px] text-slate-700 mt-1">{birthPlan.notes}</p>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => {
                    window.print();
                    playPositiveChime();
                  }}
                  className="flex-1 py-4 bg-slate-900 text-white font-black rounded-2xl text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2"
                >
                  <Printer size={16} /> Imprimir Agora
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL DE FICHA COMPLETA & VÍDEO DO EXERCÍCIO */}
      <ExerciseDetailModal
        exercise={selectedModalExercise}
        onClose={() => setSelectedModalExercise(null)}
        hasBaby={selectedPhaseIndex >= 3}
      />
    </div>
  );
};

// COMPONENTE VISUALIZADOR ANIMADO DOS MOVIMENTOS
const MovementIllustration: React.FC<{ type: string }> = ({ type }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-white relative">
      {type === 'catcow' && (
        <div className="flex flex-col items-center space-y-2">
          <motion.div 
            animate={{ rotate: [-8, 8, -8], y: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="flex items-center gap-2 text-amber-300 font-bold text-sm bg-slate-900/80 px-4 py-2 rounded-2xl border border-slate-800"
          >
            <span className="text-2xl">🐈</span>
            <div className="text-left">
              <span className="block text-[10px] text-amber-400 font-black uppercase">Onda Espinhal Gato-Vaca</span>
              <span className="text-[9px] text-slate-300">Inala curva ➔ Exala arredonda</span>
            </div>
          </motion.div>
          <div className="w-32 h-1 bg-amber-400/30 rounded-full animate-pulse" />
        </div>
      )}

      {type === 'child' && (
        <div className="flex flex-col items-center space-y-2">
          <motion.div 
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="flex items-center gap-2 text-rose-300 font-bold text-sm bg-slate-900/80 px-4 py-2 rounded-2xl border border-slate-800"
          >
            <span className="text-2xl">🧘‍♀️</span>
            <div className="text-left">
              <span className="block text-[10px] text-rose-300 font-black uppercase">Balasana Abertura Pélvica</span>
              <span className="text-[9px] text-slate-300">Testa no chão • Abertura de coxas</span>
            </div>
          </motion.div>
        </div>
      )}

      {type === 'legs' && (
        <div className="flex flex-col items-center space-y-2">
          <motion.div 
            animate={{ y: [-6, 0, -6] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex items-center gap-2 text-sky-300 font-bold text-sm bg-slate-900/80 px-4 py-2 rounded-2xl border border-slate-800"
          >
            <span className="text-2xl">🦶</span>
            <div className="text-left">
              <span className="block text-[10px] text-sky-300 font-black uppercase">Drenagem Venosa na Parede</span>
              <span className="text-[9px] text-slate-300">Sangue fluindo de volta ⬇️</span>
            </div>
          </motion.div>
        </div>
      )}

      {type === 'squat' && (
        <div className="flex flex-col items-center space-y-2">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex items-center gap-2 text-emerald-300 font-bold text-sm bg-slate-900/80 px-4 py-2 rounded-2xl border border-slate-800"
          >
            <span className="text-2xl">👑</span>
            <div className="text-left">
              <span className="block text-[10px] text-emerald-300 font-black uppercase">Cócoras Malasana</span>
              <span className="text-[9px] text-slate-300">Abertura Bacia + 30%</span>
            </div>
          </motion.div>
        </div>
      )}

      {type === 'wings' && (
        <div className="flex flex-col items-center space-y-2">
          <motion.div 
            animate={{ scaleX: [0.9, 1.1, 0.9] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="flex items-center gap-2 text-purple-300 font-bold text-sm bg-slate-900/80 px-4 py-2 rounded-2xl border border-slate-800"
          >
            <span className="text-2xl">🦅</span>
            <div className="text-left">
              <span className="block text-[10px] text-purple-300 font-black uppercase">Abertura de Peito em Cacto</span>
              <span className="text-[9px] text-slate-300">Aproxima escápulas ➔ Abre o peito</span>
            </div>
          </motion.div>
        </div>
      )}

      {type === 'hips' || type === 'pelvicCircle' ? (
        <div className="flex flex-col items-center space-y-2">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="w-16 h-16 border-4 border-dashed border-amber-400 rounded-full flex items-center justify-center"
          >
            <span className="text-2xl">🔴</span>
          </motion.div>
          <span className="text-[9px] font-black text-amber-300 uppercase tracking-widest">
            Círculos Contínuos de Quadril
          </span>
        </div>
      ) : null}

      {type === 'seatedGround' && (
        <div className="flex flex-col items-center space-y-2">
          <motion.div 
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex items-center gap-2 text-emerald-300 font-bold text-sm bg-slate-900/80 px-4 py-2 rounded-2xl border border-slate-800"
          >
            <span className="text-2xl">🪑</span>
            <div className="text-left">
              <span className="block text-[10px] text-emerald-300 font-black uppercase">Aterramento e Coluna Ercta</span>
              <span className="text-[9px] text-slate-300">Pés firmes • Respiração profunda</span>
            </div>
          </motion.div>
        </div>
      )}

      {type === 'sideStretch' && (
        <div className="flex flex-col items-center space-y-2">
          <motion.div 
            animate={{ rotate: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="flex items-center gap-2 text-teal-300 font-bold text-sm bg-slate-900/80 px-4 py-2 rounded-2xl border border-slate-800"
          >
            <span className="text-2xl">🌾</span>
            <div className="text-left">
              <span className="block text-[10px] text-teal-300 font-black uppercase">Alongamento Lateral Suave</span>
              <span className="text-[9px] text-slate-300">Espaço para a barriga</span>
            </div>
          </motion.div>
        </div>
      )}

      {type === 'gluteBridge' && (
        <div className="flex flex-col items-center space-y-2">
          <motion.div 
            animate={{ y: [6, -6, 6] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="flex items-center gap-2 text-indigo-300 font-bold text-sm bg-slate-900/80 px-4 py-2 rounded-2xl border border-slate-800"
          >
            <span className="text-2xl">🌉</span>
            <div className="text-left">
              <span className="block text-[10px] text-indigo-300 font-black uppercase">Elevação Pelvica Suave</span>
              <span className="text-[9px] text-slate-300">Ativa Glúteos + Assoalho</span>
            </div>
          </motion.div>
        </div>
      )}

      {type === 'squatHold' && (
        <div className="flex flex-col items-center space-y-2">
          <motion.div 
            animate={{ y: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex items-center gap-2 text-rose-300 font-bold text-sm bg-slate-900/80 px-4 py-2 rounded-2xl border border-slate-800"
          >
            <span className="text-2xl">🪑</span>
            <div className="text-left">
              <span className="block text-[10px] text-rose-300 font-black uppercase">Cócoras com Cadeira</span>
              <span className="text-[9px] text-slate-300">Segurança & Suporte Total</span>
            </div>
          </motion.div>
        </div>
      )}

      {type === 'catWave' && (
        <div className="flex flex-col items-center space-y-2">
          <motion.div 
            animate={{ x: [-8, 8, -8] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex items-center gap-2 text-amber-300 font-bold text-sm bg-slate-900/80 px-4 py-2 rounded-2xl border border-slate-800"
          >
            <span className="text-2xl">🐈</span>
            <div className="text-left">
              <span className="block text-[10px] text-amber-300 font-black uppercase">Balanço do Gato</span>
              <span className="text-[9px] text-slate-300">Desalívio do peso fetal ↔️</span>
            </div>
          </motion.div>
        </div>
      )}

      {type === 'butterfly' && (
        <div className="flex flex-col items-center space-y-2">
          <motion.div 
            animate={{ scaleY: [0.9, 1.1, 0.9] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="flex items-center gap-2 text-pink-300 font-bold text-sm bg-slate-900/80 px-4 py-2 rounded-2xl border border-slate-800"
          >
            <span className="text-2xl">🦋</span>
            <div className="text-left">
              <span className="block text-[10px] text-pink-300 font-black uppercase">Asas de Borboleta (Baddha)</span>
              <span className="text-[9px] text-slate-300">Relaxamento de adutores</span>
            </div>
          </motion.div>
        </div>
      )}

      {type === 'zipperAbs' && (
        <div className="flex flex-col items-center space-y-2">
          <motion.div 
            animate={{ scale: [1, 0.9, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex items-center gap-2 text-purple-300 font-bold text-sm bg-slate-900/80 px-4 py-2 rounded-2xl border border-slate-800"
          >
            <span className="text-2xl">🤐</span>
            <div className="text-left">
              <span className="block text-[10px] text-purple-300 font-black uppercase">Ativação Zíper Transverso</span>
              <span className="text-[9px] text-slate-300">Reabilitação de Diástase</span>
            </div>
          </motion.div>
        </div>
      )}

      {type === 'chestOpen' && (
        <div className="flex flex-col items-center space-y-2">
          <motion.div 
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex items-center gap-2 text-indigo-300 font-bold text-sm bg-slate-900/80 px-4 py-2 rounded-2xl border border-slate-800"
          >
            <span className="text-2xl">🚪</span>
            <div className="text-left">
              <span className="block text-[10px] text-indigo-300 font-black uppercase">Abertura de Peitoral</span>
              <span className="text-[9px] text-slate-300">Alívio da Postura Amamentar</span>
            </div>
          </motion.div>
        </div>
      )}

      {type === 'babySling' && (
        <div className="flex flex-col items-center space-y-2">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex items-center gap-2 text-rose-300 font-bold text-sm bg-slate-900/80 px-4 py-2 rounded-2xl border border-slate-800"
          >
            <span className="text-2xl">👶👩</span>
            <div className="text-left">
              <span className="block text-[10px] text-rose-300 font-black uppercase">Agachamento com Bebê (Sling)</span>
              <span className="text-[9px] text-slate-300">Fortalece pernas + Vínculo tátil</span>
            </div>
          </motion.div>
        </div>
      )}

      {type === 'babyDance' && (
        <div className="flex flex-col items-center space-y-2">
          <motion.div 
            animate={{ x: [-12, 12, -12], rotate: [-3, 3, -3] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="flex items-center gap-2 text-pink-300 font-bold text-sm bg-slate-900/80 px-4 py-2 rounded-2xl border border-slate-800"
          >
            <span className="text-2xl">💃👶</span>
            <div className="text-left">
              <span className="block text-[10px] text-pink-300 font-black uppercase">Dança Pelvica Rítmica</span>
              <span className="text-[9px] text-slate-300">Acalma cólicas do bebê 🎶</span>
            </div>
          </motion.div>
        </div>
      )}

      {type === 'babyTree' && (
        <div className="flex flex-col items-center space-y-2">
          <motion.div 
            animate={{ y: [-3, 3, -3] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex items-center gap-2 text-emerald-300 font-bold text-sm bg-slate-900/80 px-4 py-2 rounded-2xl border border-slate-800"
          >
            <span className="text-2xl">🌳👶</span>
            <div className="text-left">
              <span className="block text-[10px] text-emerald-300 font-black uppercase">Postura da Árvore com Bebê</span>
              <span className="text-[9px] text-slate-300">Equilíbrio e estabilidade</span>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const BirthCheckItem: React.FC<{ label: string; checked: boolean; onChange: () => void }> = ({ label, checked, onChange }) => (
  <button 
    onClick={onChange}
    className={`w-full p-4 rounded-2xl border transition-all flex items-center gap-3 text-left active:scale-95 ${
      checked ? 'bg-rose-50 border-rose-300 text-slate-900 font-bold' : 'bg-slate-50 border-slate-100 text-slate-400'
    }`}
  >
    <div className={`w-6 h-6 rounded-lg flex items-center justify-center font-black text-xs transition-colors shrink-0 ${
      checked ? 'bg-rose-500 text-white' : 'bg-slate-200 text-transparent'
    }`}>
      ✓
    </div>
    <span className="text-xs leading-snug">{label}</span>
  </button>
);

const YogaCard: React.FC<{ title: string; emoji: string; benefit: string; instructions: string }> = ({ title, emoji, benefit, instructions }) => (
  <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 flex items-start gap-4">
    <span className="text-4xl p-3 bg-rose-50 rounded-2xl shrink-0">{emoji}</span>
    <div className="space-y-1">
      <h4 className="text-sm font-black text-slate-800">{title}</h4>
      <p className="text-[10px] font-black text-rose-500 uppercase">{benefit}</p>
      <p className="text-xs font-medium text-slate-600 mt-2 leading-relaxed">{instructions}</p>
    </div>
  </div>
);

export default MotherHealth;
