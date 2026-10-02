
// CASULO DAILY FEED
import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Flame, 
  ChevronRight, 
  CheckCircle2, 
  Camera as CameraIcon, 
  BookOpen, 
  History, 
  Share2, 
  X,
  Calendar,
  Heart,
  Star,
  Utensils
} from 'lucide-react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Share } from '@capacitor/share';
import { Capacitor } from '@capacitor/core';
import { ChildProfile, JourneyStep, DiaryEntry } from '../types';
import { JOURNEY_STEPS, MARCOS, FOOD_DATABASE } from '../constants';
import { playMilestoneComplete, playXPGain, playOnboardingComplete, playCameraClick, playNotificationBell } from '../sounds';
import { cancelNotification } from '../services/localNotificationService';

const createEmptyEntry = (date: string): DiaryEntry => ({
  date,
  sleep: { bedtime: '', wakeTime: '', quality: 0, nightWakes: [], naps: [], notes: '' },
  feeding: [],
  hygiene: { changes: [], bathTime: '', bathTemp: 'Morna ✓', massage: false, oralHygiene: { morning: false, night: false, tongue: false }, notes: '' },
  health: { temp: { value: '', time: '', location: 'Axila' }, meds: [], vaccines: [], symptoms: [], notes: '' },
  school: { attended: false, entry: '', exit: '', activities: '', homework: { subject: '', done: 'no', time: 0, difficulty: 'Média' }, behavior: { mood: 'Normal', social: 'Bem', attention: 'Normal', teacherNote: '' }, media: [] },
  activities: { physical: { type: '', duration: 0, location: '', liked: true }, creative: { type: '', duration: 0, photo: null }, reading: { titles: [], duration: 0, liked: true }, screen: { tv: 0, mobile: 0, goal: 60 }, highlight: '' },
  mood: { general: 'Normal', bestMoment: { time: '', description: '' }, difficultMoment: { time: '', description: '', solution: '' }, tantrums: 0, communication: { words: [], phrases: [], music: '', question: '' } },
  shopping: { supermarket: [], pharmacy: [], clothing: [], stationery: [], reminders: [], futureCommitments: [] },
  parentNotes: { text: '', photos: [], tags: [], reflection: '', dayRating: 5, gratitude: '' },
  finance: { transactions: [], milestones: [] },
  kitchen: { cookedRecipes: [], mealPlan: [] },
  journeyAchievements: { tasks: [], missions: [], photos: [], games: [], books: [], activities: [], familyTalks: [] }
});

const DAILY_INSIGHTS = [
  "O contato visual durante as trocas de fralda fortalece o vínculo afetivo.",
  "Cantar para o bebê ajuda no desenvolvimento da linguagem e acalma o sistema nervoso.",
  "Explorar diferentes texturas (tecidos, esponjas) estimula o desenvolvimento sensorial.",
  "Descrever suas ações em voz alta ajuda o bebê a associar palavras a objetos e ações.",
  "Um banho morno e uma massagem suave podem melhorar a qualidade do sono noturno.",
  "Aproveitar alguns minutos de sol da manhã é importante para a vitamina D e o ciclo circadiano.",
  "O tempo de bruços (tummy time) é essencial para fortalecer os músculos do pescoço e costas.",
  "Responder aos balbucios do bebê incentiva a comunicação e a autoconfiança.",
  "Ler para o bebê, mesmo que ele ainda não entenda as palavras, cria o hábito da leitura.",
  "Brincadeiras de 'cadê o bebê?' ajudam a desenvolver a noção de permanência do objeto.",
  "O toque pele a pele libera ocitocina, reduzindo o estresse para pais e bebês.",
  "Observar o que atrai a atenção do bebê ajuda você a conhecer sua personalidade única.",
  "Pequenas pausas para você respirar fundo ajudam a manter a calma na rotina.",
  "A repetição é como os bebês aprendem; não tenha medo de repetir a mesma brincadeira.",
  "O choro é a primeira forma de comunicação; observe os diferentes tons para entender as necessidades."
];

interface DailyFeedProps {
  profile: ChildProfile;
  onUpdateProfile: (data: Partial<ChildProfile>) => void;
  onNavigate: (tab: any, section?: string) => void;
}

const DailyFeed: React.FC<DailyFeedProps> = ({ profile, onUpdateProfile, onNavigate }) => {
  const [showHistory, setShowHistory] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const showLocalToast = (msg: string) => {
    setToast(msg);
    playNotificationBell();
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const registrarComFoto = async () => {
    try {
      // Pedir permissão primeiro
      if (Capacitor.isNativePlatform()) {
        const permission = await Camera.requestPermissions({ permissions: ['camera'] });
        if (permission.camera !== 'granted') {
          showLocalToast('⚠️ Permissão de câmera necessária.');
          onNavigate('diary');
          return;
        }
      }

      // Abrir câmera
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera
      });

      if (image.base64String) {
        const base64Photo = `data:image/jpeg;base64,${image.base64String}`;
        const today = new Date().toISOString().split('T')[0];
        const entries = profile.diaryEntries || {};
        const currentEntry = entries[today] || createEmptyEntry(today);
        
        const updatedEntry = {
          ...currentEntry,
          parentNotes: {
            ...currentEntry.parentNotes,
            photos: [...(currentEntry.parentNotes?.photos || []), base64Photo]
          }
        };

        onUpdateProfile({
          diaryEntries: {
            ...entries,
            [today]: updatedEntry
          }
        });

        // CASULO NOTIFICATION - Cancel daily reminder
        cancelNotification(3).catch(console.error);
        
        playCameraClick();
      }
      
      // Navegar para o diário para ver o registro
      onNavigate('diary');

    } catch (error: any) {
      if (error.message !== 'User cancelled photos app') {
        console.error('Erro ao tirar foto:', error);
      }
      // Se cancelar ou der erro, apenas navega
      onNavigate('diary');
    }
  };

  // --- CÁLCULOS DE IDADE ---
  const ageInfo = useMemo(() => {
    if (!profile || !profile.birthDate) {
      return {
        display: "👶 Recém-nascido",
        years: 0,
        months: 0,
        isBirthday: false
      };
    }

    const birth = new Date(profile.birthDate);
    if (isNaN(birth.getTime())) {
      return {
        display: "👶 Recém-nascido",
        years: 0,
        months: 0,
        isBirthday: false
      };
    }

    const now = new Date();
    const diffTime = now.getTime() - birth.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    // Gestação (se birthDate for no futuro ou muito recente?)
    // No Casulo, birthDate pode ser a data prevista do parto se estiver na gestação era.
    const isGestating = diffDays < 0;
    
    if (isGestating) {
      const weeks = Math.floor(Math.abs(diffDays) / 7);
      const remainingWeeks = 40 - weeks;
      return {
        display: `🤰 Semana ${remainingWeeks}`,
        years: - (remainingWeeks / 52), // Aproximação para minYears
        months: - (remainingWeeks / 4.34),
        isBirthday: false
      };
    }

    const years = Math.floor(diffDays / 365.25);
    const months = Math.floor((diffDays % 365.25) / 30.44);
    const days = Math.floor((diffDays % 365.25) % 30.44);

    const isBirthday = now.getDate() === birth.getDate();

    let display = "";
    if (years > 0) display += `${years} ano${years > 1 ? 's' : ''} `;
    if (months > 0) display += `${months} ${months > 1 ? 'meses' : 'mês'} `;
    if (days > 0 && years < 2) display += `e ${days} dia${days > 1 ? 's' : ''}`;

    return {
      display: `👶 ${display.trim() || 'Recém-nascido'}`,
      years: diffDays / 365.25,
      months: diffDays / 30.44,
      isBirthday
    };
  }, [profile.birthDate]);

  // --- SAUDAÇÃO ---
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Bom dia";
    if (hour < 18) return "Boa tarde";
    return "Boa noite";
  }, []);

  // --- STREAK ---
  const streak = useMemo(() => {
    return profile.currentStreak || 0;
  }, [profile.currentStreak]);

  const dailyInsight = useMemo(() => {
    const daySeed = new Date().toISOString().split('T')[0];
    const index = daySeed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % DAILY_INSIGHTS.length;
    return DAILY_INSIGHTS[index];
  }, []);

  // --- CARDS DATA ---
  const currentStep = useMemo(() => {
    // Encontrar o step mais próximo da idade atual
    return JOURNEY_STEPS.reduce((prev, curr) => {
      return Math.abs(curr.minYears - ageInfo.years) < Math.abs(prev.minYears - ageInfo.years) ? curr : prev;
    });
  }, [ageInfo.years]);

  const nextMission = useMemo(() => {
    // Primeira missão não completada da era atual
    const eraSteps = JOURNEY_STEPS.filter(s => s.ageRange === currentStep.ageRange);
    for (const step of eraSteps) {
      if (!profile.completedMissions?.includes(step.mission.id)) {
        return step.mission;
      }
    }
    return null;
  }, [currentStep.ageRange, profile.completedMissions]);

  const registerPrompt = useMemo(() => {
    const m = ageInfo.months;
    if (m < 0) return "Como você está se sentindo hoje?";
    if (m < 6) return "Que tal uma foto do sorriso de hoje?";
    if (m < 12) return "Registrou os primeiros alimentos desta semana?";
    if (m < 24) return "Um vídeo dos primeiros passos vale para sempre.";
    return "Uma palavra engraçada que ele disse hoje?";
  }, [ageInfo.months]);

  // --- ACTIONS ---
  const completeMission = (missionId: string, xp: number) => {
    if (profile.completedMissions?.includes(missionId)) return;
    
    playMilestoneComplete();
    playXPGain();
    
    onUpdateProfile({
      xp: (profile.xp || 0) + xp,
      completedMissions: [...(profile.completedMissions || []), missionId]
    });
    
    // CASULO NOTIFICATION - Cancel mission notification
    cancelNotification(2).catch(console.error);
  };

  const markAsRead = () => {
    if (profile.completedKnowledge?.includes(currentStep.id)) return;
    playXPGain();
    onUpdateProfile({
      xp: (profile.xp || 0) + 50,
      completedKnowledge: [...(profile.completedKnowledge || []), currentStep.id]
    });
  };

  const handleShare = async () => {
    const text = `Confira a jornada de ${profile.name} no app Casulo! 🦋\n\n` + 
      timelineItems.slice(0, 5).map(item => `${item.icon} ${item.date.toLocaleDateString('pt-BR')}: ${item.title}`).join('\n') +
      (timelineItems.length > 5 ? '\n... e muito mais!' : '');

    try {
      // Check if Web Share API is available
      const canShare = await Share.canShare();
      
      if (canShare.value) {
        await Share.share({
          title: `História de ${profile.name}`,
          text: text,
          url: window.location.origin, // Use origin instead of full href for cleaner link
          dialogTitle: 'Compartilhar Jornada'
        });
      } else {
        throw new Error('Web Share not supported');
      }
    } catch (error) {
      console.warn('Share API failed, falling back to clipboard:', error);
      try {
        if (Capacitor.isNativePlatform()) {
          // On native, we might want to use a different clipboard API if needed, 
          // but navigator.clipboard is usually fine in modern webviews
          await navigator.clipboard.writeText(text);
          showLocalToast('História copiada para a área de transferência!');
        } else {
          await navigator.clipboard.writeText(text);
          showLocalToast('História copiada para a área de transferência!');
        }
      } catch (e) {
        console.error('Erro ao copiar:', e);
        showLocalToast('Não foi possível compartilhar no momento.');
      }
    }
  };

  // --- HISTORY TIMELINE ---
  const timelineItems = useMemo(() => {
    const items: any[] = [];

    // 1. Marcos e Missões
    (profile.completedMissions || []).forEach(mId => {
      const step = JOURNEY_STEPS.find(s => s.mission.id === mId);
      if (step) {
        items.push({
          date: new Date(), // Idealmente teríamos a data de conclusão
          type: 'mission',
          title: step.mission.title,
          icon: '🎯',
          color: 'emerald'
        });
      }
    });

    // 2. Fotos
    (profile.completedPhotos || []).forEach(pId => {
      const marco = MARCOS[pId];
      if (marco) {
        items.push({
          date: new Date(),
          type: 'photo',
          title: marco.title,
          icon: '📸',
          color: 'orange'
        });
      }
    });

    // 3. Diário
    Object.entries(profile.diaryEntries || {}).forEach(([date, entry]: [string, any]) => {
      const entryDate = new Date(date);
      if (isNaN(entryDate.getTime())) return; // Skip invalid dates

      // Nota do pai
      if (entry.parentNotes?.text) {
        items.push({
          date: entryDate,
          type: 'diary',
          title: entry.parentNotes.text,
          icon: '📖',
          color: 'blue'
        });
      }

      // Sono
      if (entry.sleep?.bedtime) {
        items.push({
          date: new Date(`${date}T${entry.sleep.bedtime || '20:00'}`),
          type: 'sleep',
          title: `Foi dormir às ${entry.sleep.bedtime}`,
          icon: '🌙',
          color: 'indigo'
        });
      }
      if (entry.sleep?.wakeTime) {
        items.push({
          date: new Date(`${date}T${entry.sleep.wakeTime || '07:00'}`),
          type: 'sleep',
          title: `Acordou às ${entry.sleep.wakeTime}`,
          icon: '☀️',
          color: 'yellow'
        });
      }

      // Refeições
      (entry.feeding || []).forEach((f: any) => {
        const mealTime = f.time || '12:00';
        const mealDate = new Date(`${date}T${mealTime}`);
        const finalMealDate = isNaN(mealDate.getTime()) ? entryDate : mealDate;

        const foodName = f.items?.join(', ') || 'Sólidos';
        const isNew = f.isNewFood;

        items.push({
          date: finalMealDate,
          type: 'food',
          title: isNew ? `Provou ${foodName}` : `Refeição: ${foodName}`,
          icon: isNew ? (FOOD_DATABASE.find(fd => fd.name === f.items?.[0])?.icon || '🥦') : '🍽️',
          color: 'emerald'
        });
      });

      // Higiene
      if (entry.hygiene?.bathTime) {
        items.push({
          date: new Date(`${date}T${entry.hygiene.bathTime}`),
          type: 'hygiene',
          title: 'Hora do banho 🛁',
          icon: '🧼',
          color: 'blue'
        });
      }
      (entry.hygiene?.changes || []).forEach((c: any) => {
        items.push({
          date: new Date(`${date}T${c.time || '12:00'}`),
          type: 'hygiene',
          title: `Troca de fralda (${c.type === 'pee' ? 'Xixi' : c.type === 'poo' ? 'Cocô' : 'Ambos'})`,
          icon: '👶',
          color: 'blue'
        });
      });

      // Saúde
      (entry.health?.meds || []).forEach((m: any) => {
        items.push({
          date: new Date(`${date}T${m.time || '12:00'}`),
          type: 'health',
          title: `Medicamento: ${m.name} (${m.dose})`,
          icon: '💊',
          color: 'rose'
        });
      });
      (entry.health?.vaccines || []).forEach((v: any) => {
        items.push({
          date: new Date(`${date}T${v.time || '12:00'}`),
          type: 'health',
          title: `Vacina: ${v.name}`,
          icon: '💉',
          color: 'rose'
        });
      });
      (entry.health?.symptoms || []).forEach((s: string) => {
        items.push({
          date: entryDate,
          type: 'health',
          title: `Sintoma: ${s}`,
          icon: '🌡️',
          color: 'rose'
        });
      });

      // Atividades e Marcos
      if (entry.activities?.highlight) {
        items.push({
          date: entryDate,
          type: 'activity',
          title: `Destaque: ${entry.activities.highlight}`,
          icon: '✨',
          color: 'orange'
        });
      }
      if (entry.activities?.milestone) {
        items.push({
          date: new Date(`${date}T${entry.activities.milestone.time || '12:00'}`),
          type: 'milestone',
          title: `Marco: ${entry.activities.milestone.title}`,
          icon: '🏆',
          color: 'orange'
        });
      }

      // Humor e Momentos
      if (entry.mood?.bestMoment?.description) {
        items.push({
          date: new Date(`${date}T${entry.mood.bestMoment.time || '12:00'}`),
          type: 'mood',
          title: `Melhor momento: ${entry.mood.bestMoment.description}`,
          icon: '🥰',
          color: 'yellow'
        });
      }

      // Conquistas (Livros e Receitas)
      (entry.journeyAchievements?.books || []).forEach((b: any) => {
        const itemTime = b.timestamp || '12:00';
        const itemDate = new Date(`${date}T${itemTime}`);
        const finalItemDate = isNaN(itemDate.getTime()) ? entryDate : itemDate;

        items.push({
          date: finalItemDate,
          type: 'book',
          title: b.title,
          icon: '📚',
          color: 'indigo'
        });
      });

      (entry.journeyAchievements?.recipes || []).forEach((r: any) => {
        const itemTime = r.timestamp || '12:00';
        const itemDate = new Date(`${date}T${itemTime}`);
        const finalItemDate = isNaN(itemDate.getTime()) ? entryDate : itemDate;

        items.push({
          date: finalItemDate,
          type: 'recipe',
          title: r.title,
          icon: '🍳',
          color: 'orange'
        });
      });
    });

    // 4. Papos em Família
    (profile.completedFamilyTalks || []).forEach(talkId => {
      items.push({
        date: new Date(),
        type: 'talk',
        title: `Papo: ${talkId}`,
        icon: '💬',
        color: 'purple'
      });
    });

    return items.sort((a, b) => b.date.getTime() - a.date.getTime());
  }, [profile]);

  return (
    <div className="p-6 space-y-8 pb-32">
      {/* CABEÇALHO */}
      <header className="flex justify-between items-start">
        <div className="space-y-1">
          <h1 className="text-2xl font-black text-slate-800 tracking-tighter">
            {greeting}, <span className="text-rose-400">{profile.name}</span>
          </h1>
          <div className="flex items-center gap-2">
            <span className="bg-white px-3 py-1 rounded-full text-[10px] font-black text-slate-500 shadow-sm border border-slate-100 uppercase tracking-widest">
              {ageInfo.display}
            </span>
            <span className="flex items-center gap-1 bg-orange-50 px-3 py-1 rounded-full text-[10px] font-black text-orange-600 shadow-sm border border-orange-100 uppercase tracking-widest">
              <Flame className="w-3 h-3 fill-orange-500" /> {streak} dias
            </span>
          </div>
        </div>
        <div className="w-12 h-12 bg-white rounded-2xl shadow-xl border-2 border-slate-100 flex items-center justify-center text-xl">
          {ageInfo.months < 0 ? '🤰' : '👶'}
        </div>
      </header>

      {/* ANIVERSÁRIO DE MÊS */}
      {ageInfo.isBirthday && (
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gradient-to-br from-yellow-400 to-orange-500 p-6 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-2xl backdrop-blur-md flex items-center justify-center text-2xl">🎉</div>
              <div>
                <h3 className="text-lg font-black tracking-tight">Mêsversário!</h3>
                <p className="text-xs font-bold opacity-90">{profile.name} completa {Math.floor(ageInfo.months)} meses hoje!</p>
              </div>
            </div>
            <button 
              onClick={() => {
                playOnboardingComplete();
                onNavigate('journey');
              }}
              className="w-full py-3 bg-white text-orange-600 font-black rounded-xl text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-all"
            >
              Registrar Marco Especial 📸
            </button>
          </div>
          <div className="absolute -right-4 -bottom-4 text-8xl opacity-20 rotate-12">🎂</div>
        </motion.div>
      )}

      {/* CARDS DIÁRIOS */}
      <div className="grid gap-4">
        {/* CARD 1 — O que esperar hoje */}
        <div className="bg-blue-50 p-6 rounded-[2.5rem] border-2 border-blue-100 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-black text-blue-900 uppercase tracking-widest">O que esperar hoje</h3>
          </div>
          <p className={`text-xs font-bold text-blue-700 leading-relaxed ${expandedCard === 1 ? '' : 'line-clamp-2'}`}>
            <span className="block mb-2 text-blue-900 font-black">💡 Dica do Dia:</span>
            {dailyInsight}
            <span className="block mt-4 pt-4 border-t border-blue-200/50">
              <span className="block mb-2 text-blue-900 font-black">📖 {currentStep.knowledgePillar.title}:</span>
              {currentStep.knowledgePillar.content}
            </span>
          </p>
          <button 
            onClick={() => setExpandedCard(expandedCard === 1 ? null : 1)}
            className="text-[10px] font-black text-blue-500 uppercase tracking-widest flex items-center gap-1"
          >
            {expandedCard === 1 ? 'Ver menos' : 'Ler tudo →'}
          </button>
        </div>

        {/* CARD 2 — Missão do dia */}
        {nextMission && (
          <div className="bg-emerald-50 p-6 rounded-[2.5rem] border-2 border-emerald-100 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Star className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-emerald-900 uppercase tracking-widest">Missão do dia</h3>
            </div>
            <div className="space-y-2">
              <h4 className="text-md font-black text-emerald-800">{nextMission.title}</h4>
              <p className="text-xs font-bold text-emerald-600 leading-relaxed">
                {nextMission.description}
              </p>
            </div>
            <button 
              onClick={() => completeMission(nextMission.id, nextMission.xpReward)}
              className="w-full py-4 bg-emerald-500 text-white font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              Marcar como feito
            </button>
          </div>
        )}

        {/* CARD 3 — Momento para registrar */}
        <div className="bg-orange-50 p-6 rounded-[2.5rem] border-2 border-orange-100 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <CameraIcon className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-black text-orange-900 uppercase tracking-widest">Momento para registrar</h3>
          </div>
          <p className="text-xs font-bold text-orange-700 leading-relaxed">
            {registerPrompt}
          </p>
          <button 
            onClick={registrarComFoto}
            className="w-full py-4 bg-orange-500 text-white font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <CameraIcon className="w-4 h-4" />
            Registrar agora
          </button>
        </div>

        {/* CARD 4 — Leitura da fase */}
        <div className="bg-purple-50 p-6 rounded-[2.5rem] border-2 border-purple-100 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-black text-purple-900 uppercase tracking-widest">Leitura da fase</h3>
          </div>
          <div className="space-y-2">
            <h4 className="text-md font-black text-purple-800">{currentStep.knowledgePillar.title}</h4>
            <p className={`text-xs font-bold text-purple-600 leading-relaxed ${expandedCard === 4 ? '' : 'line-clamp-2'}`}>
              {currentStep.knowledgePillar.content}
            </p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setExpandedCard(expandedCard === 4 ? null : 4)}
              className="flex-1 py-3 bg-white text-purple-600 border-2 border-purple-100 font-black rounded-xl text-[10px] uppercase tracking-widest active:scale-95 transition-all"
            >
              📖 {expandedCard === 4 ? 'Ver menos' : 'Ler mais'}
            </button>
            {!profile.completedKnowledge?.includes(currentStep.id) && (
              <button 
                onClick={markAsRead}
                className="flex-1 py-3 bg-purple-500 text-white font-black rounded-xl text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-all"
              >
                ✅ Lido
              </button>
            )}
          </div>
        </div>
      </div>

      {/* BOTÃO HISTÓRIA */}
      <button 
        onClick={() => setShowHistory(true)}
        className="w-full py-6 bg-slate-800 text-white font-black rounded-[2.5rem] shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs border-b-[6px] border-black/20"
      >
        <History className="w-5 h-5" />
        Ver história de {profile.name}
      </button>

      {/* MODAL HISTÓRIA */}
      <AnimatePresence>
        {showHistory && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] bg-[#FDFCF0] overflow-y-auto"
          >
            <div className="p-8 space-y-12 pb-32">
              <header className="flex justify-between items-center">
                <button onClick={() => setShowHistory(false)} className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <X className="w-6 h-6 text-slate-400" />
                </button>
                <div className="text-center">
                  <h2 className="text-2xl font-serif italic text-slate-800">A História de {profile.name}</h2>
                  <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Uma jornada de amor</p>
                </div>
                <button onClick={handleShare} className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <Share2 className="w-6 h-6 text-slate-400" />
                </button>
              </header>

              <div className="relative space-y-12">
                {/* Linha vertical */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200" />

                {timelineItems.length > 0 ? timelineItems.map((item, idx) => (
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    key={idx} 
                    className="relative pl-16"
                  >
                    <div className={`absolute left-3 w-6 h-6 bg-${item.color}-500 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center text-[10px]`}>
                      {item.icon}
                    </div>
                    <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 space-y-2">
                      <span className="text-[8px] font-black text-slate-300 uppercase tracking-[0.2em]">
                        {item.date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                      </span>
                      <p className="text-sm font-serif text-slate-700 leading-relaxed">
                        {item.title}
                      </p>
                    </div>
                  </motion.div>
                )) : (
                  <div className="text-center py-20 space-y-4">
                    <div className="text-6xl opacity-20">📖</div>
                    <p className="text-slate-400 font-serif italic">Sua história ainda está sendo escrita...</p>
                  </div>
                )}
              </div>
            </div>

            <div className="fixed bottom-8 left-8 right-8">
              <button 
                onClick={handleShare}
                className="w-full py-5 bg-slate-800 text-white font-black rounded-2xl shadow-2xl flex items-center justify-center gap-2 uppercase tracking-widest text-[10px]"
              >
                <Share2 className="w-4 h-4" />
                Compartilhar Jornada
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TOAST NOTIFICATION */}
      <AnimatePresence>
        {toast && (
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[3000] bg-slate-800 text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl border border-slate-700"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DailyFeed;
