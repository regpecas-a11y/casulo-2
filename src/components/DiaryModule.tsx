
import React, { useState, useEffect, useMemo } from 'react';
import { ChildProfile, DiaryEntry, FeedingEntry, DiaperChange, Medication, SleepSession, AgendaEvent } from '../types';
import { PushNotifications } from '@capacitor/push-notifications'; // CASULO PUSH FIX - 3
import { Calendar, Clock, FileText, Download, Plus, Bell, MapPin, MessageSquare, GraduationCap, Stethoscope, Presentation, Heart, Sparkles, Camera, Utensils, Book, PenLine } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { JOURNEY_STEPS, RECIPES, MARCOS } from '../constants';
import { CHEF_BOOK_RECIPES } from '../recipes_data';
import { playPageTurn, playDiarySave, playCameraClick, playMilestoneComplete, playXPGain } from '../sounds';

const ALL_RECIPES = [...RECIPES, ...CHEF_BOOK_RECIPES];

interface DiaryModuleProps {
  profile: ChildProfile;
  onUpdateProfile: (updated: ChildProfile) => void;
  themeColor: string;
  childMonths: number;
  targetSection?: string | null;
  onClearTarget?: () => void;
}

// --- COMPONENTES AUXILIARES ---

const MemoryCollection: React.FC<{ profile: ChildProfile }> = ({ profile }) => {
  const memories = useMemo(() => {
    const photos = profile.completedPhotos || [];
    const milestonePhotos = profile.milestonePhotos || {};
    const items: { id: string; emoji: string; title: string; era: string; photoUrl?: string }[] = [];

    // Check JOURNEY_STEPS
    JOURNEY_STEPS.forEach(step => {
      const camId = step.cameraTrigger?.id;
      const photoUrl = milestonePhotos[step.id] || (camId ? milestonePhotos[camId] : undefined);
      const isCompleted = photos.includes(step.id) || (camId ? photos.includes(camId) : false) || !!photoUrl;
      if (isCompleted) {
        items.push({
          id: step.id,
          emoji: step.icon,
          title: step.cameraTrigger?.title || step.title,
          era: step.ageRange,
          photoUrl
        });
      }
    });

    // Check MARCOS
    Object.entries(MARCOS).forEach(([id, marco]) => {
      const photoUrl = milestonePhotos[id];
      const isCompleted = photos.includes(id) || !!photoUrl;
      if (isCompleted && !items.some(it => it.id === id)) {
        items.push({
          id,
          emoji: marco.emoji,
          title: marco.title,
          era: marco.era,
          photoUrl
        });
      }
    });

    return items;
  }, [profile]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (memories.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % memories.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [memories.length]);

  if (memories.length === 0) return null;

  const currentMemory = memories[currentIndex];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-2">
        <h4 className="text-[10px] font-black text-white/60 uppercase tracking-widest">Marcos do Mapa</h4>
      </div>
      <div className="relative w-full h-[220px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentMemory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex flex-col items-center justify-center text-center p-6 relative"
          >
            {currentMemory.photoUrl ? (
              <div className="absolute inset-0 w-full h-full">
                <img src={currentMemory.photoUrl} alt={currentMemory.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-left">
                  <p className="text-[8px] font-black text-amber-300 uppercase tracking-widest mb-0.5">{currentMemory.era}</p>
                  <h5 className="text-base font-black text-white leading-tight uppercase drop-shadow-md">{currentMemory.title}</h5>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <span className="text-6xl mb-3">{currentMemory.emoji}</span>
                <p className="text-[8px] font-black text-white/60 uppercase tracking-widest mb-1">{currentMemory.era}</p>
                <h5 className="text-lg font-black text-white leading-tight drop-shadow-lg uppercase">{currentMemory.title}</h5>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Indicadores do Carrossel */}
        {memories.length > 1 && (
          <div className="absolute top-4 right-6 flex gap-1.5 z-10">
            {memories.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-6 bg-white' : 'w-2 bg-white/40'}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const BirthdayTribute: React.FC<{ profile: ChildProfile; age: number }> = ({ profile, age }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-rose-500 via-purple-600 to-indigo-600 p-10 rounded-[4rem] text-white shadow-2xl relative overflow-hidden border-b-[12px] border-black/20"
    >
      <div className="absolute top-0 right-0 p-8 text-8xl opacity-20 rotate-12 animate-pulse">🎂</div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 space-y-6">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full backdrop-blur-md">
            <Sparkles className="text-yellow-300" size={20} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Hoje é um dia especial</span>
        </div>

        <h2 className="text-4xl font-black tracking-tighter leading-none">
          Parabéns, <br/>
          <span className="text-yellow-300">{profile.name}!</span>
        </h2>

        <div className="p-6 bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/20">
          <p className="text-sm font-bold leading-relaxed italic">
            "Hoje celebramos {age} {age === 1 ? 'ano' : 'anos'} de descobertas, sorrisos e um amor que só cresce. Parabéns a toda a família por nutrir esse casulo com tanto carinho!"
          </p>
        </div>

        <div className="flex items-center gap-4 pt-2">
          <div className="flex -space-x-3">
            {[1,2,3].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-white/20 flex items-center justify-center text-xl">
                {i === 1 ? '❤️' : i === 2 ? '✨' : '🎈'}
              </div>
            ))}
          </div>
          <p className="text-[9px] font-black uppercase tracking-widest text-white/60">Com amor, Casulo</p>
        </div>
      </div>
      
      <div className="mt-10">
        <MemoryCollection profile={profile} />
      </div>
    </motion.div>
  );
};

const DiarySection: React.FC<{ title: string; icon: string; color: string; children: React.ReactNode; isOpenInitial?: boolean }> = ({ title, icon, color, children, isOpenInitial = true }) => {
  const [isOpen, setIsOpen] = useState(isOpenInitial);
  
  useEffect(() => {
    if (isOpenInitial) setIsOpen(true);
  }, [isOpenInitial]);

  return (
    <div id={`section-${title.replace(/\s+/g, '-').toLowerCase()}`} className="bg-white rounded-[3rem] shadow-sm border border-slate-100 overflow-hidden transition-all duration-300">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full p-8 flex items-center justify-between hover:bg-slate-50 transition-all focus:outline-none">
         <div className="flex items-center gap-5">
            <div className={`w-12 h-12 bg-${color}-50 rounded-2xl flex items-center justify-center text-2xl shadow-inner`}>{icon}</div>
            <div className="text-left">
               <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest leading-none">{title}</h3>
               <p className="text-[8px] font-black text-slate-300 uppercase tracking-tighter mt-1">Clique para expandir</p>
            </div>
         </div>
         <span className={`text-slate-200 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className="p-8 pt-0 border-t border-slate-50 animate-fade-in">
           {children}
        </div>
      )}
    </div>
  );
};

const DiaryModule: React.FC<DiaryModuleProps> = ({ profile, onUpdateProfile, themeColor, childMonths, targetSection, onClearTarget }) => {
  const [currentDateStr, setCurrentDateStr] = useState(new Date().toISOString().split('T')[0]);
  const [isQuickRecordOpen, setIsQuickRecordOpen] = useState(false);
  
  useEffect(() => {
    if (targetSection) {
      const id = `section-${targetSection.replace(/\s+/g, '-').toLowerCase()}`;
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Add a temporary highlight effect
        element.classList.add('ring-4', 'ring-indigo-400', 'ring-opacity-50');
        setTimeout(() => {
          element.classList.remove('ring-4', 'ring-indigo-400', 'ring-opacity-50');
          if (onClearTarget) onClearTarget();
        }, 3000);
      }
    }
  }, [targetSection]);

  // Estados da Agenda
  const [isAgendaModalOpen, setIsAgendaModalOpen] = useState(false);
  const [editingAgendaId, setEditingAgendaId] = useState<string | null>(null);
  const [agendaForm, setAgendaForm] = useState<Partial<AgendaEvent>>({
    title: '',
    time: '09:00',
    type: 'OTHER',
    notes: '',
    reminderEnabled: true
  });

  const agendaEvents = useMemo(() => profile.agendaEvents || [], [profile.agendaEvents]);

  const isLastDayOfMonth = useMemo(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow.getDate() === 1;
  }, []);

  // Determinar a fase da criança para o template
  const agePhase = useMemo(() => {
    if (childMonths < 6) return 'BABY_0_6';
    if (childMonths < 12) return 'INFANT_6_12';
    if (childMonths < 36) return 'TODDLER_1_3';
    return 'CHILD_3_PLUS';
  }, [childMonths]);

  // Helper para formatar data BR
  const formatDateBR = (dateStr: string) => {
    const d = new Date(dateStr + 'T12:00:00');
    return d.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
  };

  // Helper para dias de vida
  const daysOfLife = useMemo(() => {
    if (!profile.birthDate) return 0;
    const birth = new Date(profile.birthDate);
    const curr = new Date(currentDateStr);
    if (isNaN(birth.getTime()) || isNaN(curr.getTime())) return 0;
    return Math.floor((curr.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
  }, [profile.birthDate, currentDateStr]);

  const isBirthday = useMemo(() => {
    if (!profile.birthDate) return false;
    const birth = new Date(profile.birthDate + 'T12:00:00');
    const today = new Date(currentDateStr + 'T12:00:00');
    if (isNaN(birth.getTime()) || isNaN(today.getTime())) return false;
    return birth.getDate() === today.getDate() && birth.getMonth() === today.getMonth();
  }, [profile.birthDate, currentDateStr]);

  const childAgeYears = useMemo(() => {
    if (!profile.birthDate) return 0;
    const birth = new Date(profile.birthDate + 'T12:00:00');
    const today = new Date(currentDateStr + 'T12:00:00');
    if (isNaN(birth.getTime()) || isNaN(today.getTime())) return 0;
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }, [profile.birthDate, currentDateStr]);

  // Carregar ou Criar entrada do dia
  const currentEntry = useMemo(() => {
    const entries = profile.diaryEntries || {};
    
    const skeleton: DiaryEntry = {
      date: currentDateStr,
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
    };

    if (entries[currentDateStr]) {
      // Deep merge basic structure to ensure new fields exist
      const existing = entries[currentDateStr];
      return {
        ...skeleton,
        ...existing,
        sleep: { 
          ...skeleton.sleep, 
          ...existing.sleep, 
          nightWakes: existing.sleep?.nightWakes || [], 
          naps: existing.sleep?.naps || [] 
        },
        feeding: existing.feeding || [],
        hygiene: { 
          ...skeleton.hygiene, 
          ...existing.hygiene, 
          changes: existing.hygiene?.changes || [] 
        },
        health: { 
          ...skeleton.health, 
          ...existing.health, 
          temp: { ...skeleton.health.temp, ...existing.health?.temp },
          meds: existing.health?.meds || [],
          vaccines: existing.health?.vaccines || [],
          symptoms: existing.health?.symptoms || []
        },
        school: { 
          ...skeleton.school, 
          ...existing.school,
          media: existing.school?.media || []
        },
        activities: { 
          ...skeleton.activities, 
          ...existing.activities, 
          reading: { ...skeleton.activities.reading, ...existing.activities?.reading, titles: existing.activities?.reading?.titles || [] },
          screen: { ...skeleton.activities?.screen, ...existing.activities?.screen } 
        },
        mood: { 
          ...skeleton.mood, 
          ...existing.mood, 
          communication: { ...skeleton.mood?.communication, ...existing.mood?.communication, words: existing.mood?.communication?.words || [], phrases: existing.mood?.communication?.phrases || [] } 
        },
        shopping: { 
          ...skeleton.shopping, 
          ...existing.shopping,
          supermarket: existing.shopping?.supermarket || [],
          pharmacy: existing.shopping?.pharmacy || [],
          clothing: existing.shopping?.clothing || [],
          stationery: existing.shopping?.stationery || [],
          reminders: existing.shopping?.reminders || [],
          futureCommitments: existing.shopping?.futureCommitments || []
        },
        parentNotes: { 
          ...skeleton.parentNotes, 
          ...existing.parentNotes,
          photos: existing.parentNotes?.photos || [],
          tags: existing.parentNotes?.tags || []
        },
        finance: {
          ...skeleton.finance,
          ...existing.finance,
          transactions: existing.finance?.transactions || [],
          milestones: existing.finance?.milestones || []
        },
        kitchen: {
          ...skeleton.kitchen,
          ...existing.kitchen,
          cookedRecipes: existing.kitchen?.cookedRecipes || [],
          mealPlan: existing.kitchen?.mealPlan || []
        },
        journeyAchievements: { 
          ...skeleton.journeyAchievements, 
          ...existing.journeyAchievements,
          tasks: existing.journeyAchievements?.tasks || [],
          missions: existing.journeyAchievements?.missions || [],
          photos: existing.journeyAchievements?.photos || [],
          games: existing.journeyAchievements?.games || [],
          books: existing.journeyAchievements?.books || [],
          activities: existing.journeyAchievements?.activities || [],
          familyTalks: existing.journeyAchievements?.familyTalks || []
        }
      };
    }

    return skeleton;
  }, [profile.diaryEntries, currentDateStr]);

  const updateEntry = (updated: Partial<DiaryEntry>) => {
    const newEntries = { ...(profile.diaryEntries || {}), [currentDateStr]: { ...currentEntry, ...updated } };
    onUpdateProfile({ ...profile, diaryEntries: newEntries });
  };

  const addFeeding = (feed: Partial<FeedingEntry>) => {
    const now = new Date();
    const timestamp = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    const entry: FeedingEntry = { type: 'breast', time: timestamp, side: 'L', duration: 15, ...feed };
    updateEntry({ feeding: [...currentEntry.feeding, entry] });
  };

  const addDiaper = (diaper: Partial<DiaperChange>) => {
    const now = new Date();
    const timestamp = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    const entry: DiaperChange = { id: Date.now().toString(), time: timestamp, type: 'pee', consistency: 'normal', rash: 'none', ...diaper };
    updateEntry({ hygiene: { ...currentEntry.hygiene, changes: [...currentEntry.hygiene.changes, entry] } });
  };

  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [editingGameIndex, setEditingGameIndex] = useState<number | null>(null);
  const [editingBookIndex, setEditingBookIndex] = useState<number | null>(null);
  const [editingRecipeIndex, setEditingRecipeIndex] = useState<number | null>(null);
  const [editingActivityIndex, setEditingActivityIndex] = useState<number | null>(null);
  const [editingTalkIndex, setEditingTalkIndex] = useState<number | null>(null);
  const [gameNote, setGameNote] = useState('');

  useEffect(() => {
    // Check if there's a hash or some state to open a specific section
    // For now, we'll just use a simple effect if we add a prop later
  }, []);

  const saveAchievementNote = (type: 'game' | 'book' | 'recipe' | 'activity' | 'talk') => {
    if (!currentEntry.journeyAchievements) return;
    
    const achievements = { ...currentEntry.journeyAchievements };
    
    if (type === 'game' && editingGameIndex !== null) {
      const updated = [...achievements.games];
      updated[editingGameIndex] = { ...updated[editingGameIndex], note: gameNote };
      achievements.games = updated;
      setEditingGameIndex(null);
    } else if (type === 'book' && editingBookIndex !== null) {
      const updated = [...(achievements.books || [])];
      updated[editingBookIndex] = { ...updated[editingBookIndex], note: gameNote };
      achievements.books = updated;
      setEditingBookIndex(null);
    } else if (type === 'recipe' && editingRecipeIndex !== null) {
      const updated = [...(achievements.recipes || [])];
      updated[editingRecipeIndex] = { ...updated[editingRecipeIndex], note: gameNote };
      achievements.recipes = updated;
      setEditingRecipeIndex(null);
    } else if (type === 'activity' && editingActivityIndex !== null) {
      const updated = [...(achievements.activities || [])];
      updated[editingActivityIndex] = { ...updated[editingActivityIndex], note: gameNote };
      achievements.activities = updated;
      setEditingActivityIndex(null);
    } else if (type === 'talk' && editingTalkIndex !== null) {
      const updated = [...(achievements.familyTalks || [])];
      updated[editingTalkIndex] = { ...updated[editingTalkIndex], note: gameNote };
      achievements.familyTalks = updated;
      setEditingTalkIndex(null);
    }

    updateEntry({ journeyAchievements: achievements });
    playDiarySave(); // CASULO SOUND - Diary save
    setGameNote('');
  };

  const openAchievementNoteEditor = (type: 'game' | 'book' | 'recipe' | 'activity' | 'talk', index: number, currentNote?: string) => {
    if (type === 'game') setEditingGameIndex(index);
    if (type === 'book') setEditingBookIndex(index);
    if (type === 'recipe') setEditingRecipeIndex(index);
    if (type === 'activity') setEditingActivityIndex(index);
    if (type === 'talk') setEditingTalkIndex(index);
    setGameNote(currentNote || '');
  };

  const handleSaveAgendaEvent = () => {
    if (!agendaForm.title?.trim()) {
      alert("Por favor, insira um título para o compromisso.");
      return;
    }
    if (!agendaForm.date) {
      alert("Por favor, selecione uma data.");
      return;
    }

    const newEvent: AgendaEvent = {
      id: editingAgendaId || Date.now().toString(),
      date: agendaForm.date,
      time: agendaForm.time || '09:00',
      title: agendaForm.title.trim(),
      type: agendaForm.type || 'OTHER',
      notes: agendaForm.notes || '',
      reminderEnabled: !!agendaForm.reminderEnabled
    };

    let updatedEvents: AgendaEvent[];
    if (editingAgendaId) {
      updatedEvents = agendaEvents.map(e => e.id === editingAgendaId ? newEvent : e);
    } else {
      updatedEvents = [...agendaEvents, newEvent];
    }

    onUpdateProfile({ ...profile, agendaEvents: updatedEvents });
    playDiarySave(); // CASULO SOUND - Diary save
    setIsAgendaModalOpen(false);
    setEditingAgendaId(null);
    setAgendaForm({ title: '', date: currentDateStr, time: '09:00', type: 'OTHER', notes: '', reminderEnabled: true });

    if (newEvent.reminderEnabled && 'Notification' in window) {
      // CASULO PUSH FIX - 3
      // ANTES: if (Notification.permission === 'granted') { ... } else if (Notification.permission !== 'denied') { Notification.requestPermission(); }
      PushNotifications.requestPermissions().then(result => {
        if (result.receive === 'granted') {
          PushNotifications.register().catch(e => console.error("Error registering push:", e));
          console.log(`Lembrete agendado para: ${newEvent.title}`);
        }
      }).catch(e => console.error("Error requesting push permissions:", e));
    }
  };

  const handleDeleteAgendaEvent = (id: string) => {
    const updatedEvents = agendaEvents.filter(e => e.id !== id);
    onUpdateProfile({ ...profile, agendaEvents: updatedEvents });
  };

  const exportMonthlyReport = () => {
    const now = new Date();
    const month = now.toLocaleString('pt-BR', { month: 'long' });
    const year = now.getFullYear();
    
    // Filtrar eventos e diários do mês atual
    const currentMonthPrefix = `${year}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    const monthlyEvents = agendaEvents.filter(e => e.date.startsWith(currentMonthPrefix));
    const monthlyEntries = Object.entries(profile.diaryEntries || {})
      .filter(([date]) => date.startsWith(currentMonthPrefix))
      .map(([date, entry]) => ({ date, ...(entry as DiaryEntry) }));

    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += `Relatorio Mensal - ${month.toUpperCase()} ${year}\n\n`;
    
    csvContent += "--- AGENDA E COMPROMISSOS ---\n";
    csvContent += "Data,Hora,Titulo,Tipo,Observacoes\n";
    monthlyEvents.forEach(e => {
      csvContent += `${e.date},${e.time},"${e.title}",${e.type},"${e.notes.replace(/"/g, '""')}"\n`;
    });

    csvContent += "\n--- MARCOS E ATIVIDADES ---\n";
    csvContent += "Data,Destaque,Humor,Qualidade Sono\n";
    monthlyEntries.forEach(e => {
      csvContent += `${e.date},"${e.activities.highlight.replace(/"/g, '""')}",${e.mood.general},${e.sleep.quality}/5\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Relatorio_Casulo_${profile.name}_${month}_${year}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="animate-fade-in space-y-6 pb-24 px-4 pt-4 relative">
      
      {/* HEADER DIÁRIO */}
      <div className="bg-[#4A90E2] text-white p-8 rounded-[3rem] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <div className="flex justify-between items-start mb-6">
           <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Agenda Casulo</p>
              <h2 className="text-2xl font-black tracking-tighter leading-tight mt-1">Diário de {profile.name}</h2>
           </div>
           <div className="text-right">
              <p className="text-xs font-black uppercase">{formatDateBR(currentDateStr)}</p>
              <div className="flex gap-2 justify-end mt-2">
                 <span className="text-[8px] font-black bg-white/20 px-2 py-1 rounded-full uppercase tracking-tighter">Dia {daysOfLife} de vida</span>
                 <span className="text-[8px] font-black bg-white/20 px-2 py-1 rounded-full uppercase tracking-tighter">{childMonths} meses</span>
              </div>
           </div>
        </div>

        {/* NAVEGAÇÃO ENTRE DIAS */}
        <div className="flex items-center gap-4 bg-black/10 p-1.5 rounded-2xl border border-white/10">
           <button onClick={() => {
              const prev = new Date(currentDateStr + 'T12:00:00');
              prev.setDate(prev.getDate() - 1);
              setCurrentDateStr(prev.toISOString().split('T')[0]);
              playPageTurn(); // CASULO SOUND - Page turn
           }} className="w-10 h-10 flex items-center justify-center font-black">❮</button>
           <div className="flex-1 text-center font-black text-[10px] uppercase tracking-widest">{currentDateStr === new Date().toISOString().split('T')[0] ? 'HOJE' : currentDateStr}</div>
           <button onClick={() => {
              const next = new Date(currentDateStr + 'T12:00:00');
              next.setDate(next.getDate() + 1);
              setCurrentDateStr(next.toISOString().split('T')[0]);
              playPageTurn(); // CASULO SOUND - Page turn
           }} className="w-10 h-10 flex items-center justify-center font-black">❯</button>
        </div>
      </div>

      {/* HOMENAGEM DE ANIVERSÁRIO */}
      {isBirthday && (
        <BirthdayTribute profile={profile} age={childAgeYears} />
      )}

      {/* AGENDA INTELIGENTE */}
      <div className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight">Agenda Inteligente</h2>
          {isLastDayOfMonth && (
            <button 
              onClick={exportMonthlyReport}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-full text-[9px] font-black uppercase shadow-lg hover:bg-emerald-600 transition-all"
            >
              <Download size={12} />
              Exportar Relatório
            </button>
          )}
        </div>

        <div className="bg-white rounded-[3rem] shadow-sm border border-slate-100 p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Calendar className="text-indigo-500" size={20} />
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Próximos Compromissos</span>
            </div>
            <button 
              onClick={() => {
                setEditingAgendaId(null);
                setAgendaForm({ 
                  title: '', 
                  date: currentDateStr, 
                  time: '09:00', 
                  type: 'OTHER', 
                  notes: '', 
                  reminderEnabled: true 
                });
                setIsAgendaModalOpen(true);
              }}
              className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-100 transition-all"
            >
              <Plus size={20} />
            </button>
          </div>

          <div className="relative pl-8 space-y-8 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
            {agendaEvents.filter(e => e.date >= currentDateStr).sort((a,b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time)).map(event => (
              <div key={event.id} className="relative group">
                <div className={`absolute -left-[27px] top-1 w-4 h-4 rounded-full border-4 border-white shadow-sm z-10 ${
                  event.type === 'MEDICAL' ? 'bg-rose-400' : 
                  event.type === 'SCHOOL' ? 'bg-indigo-400' : 
                  event.type === 'PRESENTATION' ? 'bg-amber-400' : 'bg-slate-400'
                }`}></div>
                
                <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 hover:border-indigo-200 transition-all cursor-pointer" onClick={() => {
                  setEditingAgendaId(event.id);
                  setAgendaForm(event);
                  setIsAgendaModalOpen(true);
                }}>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      {event.type === 'MEDICAL' && <Stethoscope size={14} className="text-rose-500" />}
                      {event.type === 'SCHOOL' && <GraduationCap size={14} className="text-indigo-500" />}
                      {event.type === 'PRESENTATION' && <Presentation size={14} className="text-amber-500" />}
                      {event.type === 'OTHER' && <Clock size={14} className="text-slate-500" />}
                      <h4 className="text-xs font-black text-slate-800 uppercase tracking-tight">{event.title}</h4>
                    </div>
                    <span className="text-[9px] font-black text-slate-400 bg-white px-2 py-1 rounded-lg border border-slate-100">{event.date === currentDateStr ? 'HOJE' : event.date.split('-').reverse().slice(0,2).join('/')} • {event.time}</span>
                  </div>
                  
                  {event.notes && (
                    <div className="flex items-start gap-2 mt-3 p-3 bg-white/60 rounded-xl border border-slate-100/50">
                      <MessageSquare size={10} className="text-slate-300 mt-0.5" />
                      <p className="text-[10px] font-bold text-slate-500 italic leading-relaxed">"{event.notes}"</p>
                    </div>
                  )}

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-1">
                      {event.reminderEnabled && <Bell size={10} className="text-emerald-500" />}
                      <span className="text-[8px] font-black text-slate-300 uppercase tracking-tighter">{event.reminderEnabled ? 'Lembrete Ativo' : 'Sem Lembrete'}</span>
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleDeleteAgendaEvent(event.id); }}
                      className="text-[8px] font-black text-rose-300 uppercase hover:text-rose-500"
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {agendaEvents.filter(e => e.date >= currentDateStr).length === 0 && (
              <div className="py-10 text-center opacity-30">
                <Calendar size={40} className="mx-auto mb-4" />
                <p className="text-[10px] font-black uppercase tracking-widest">Nenhum compromisso agendado</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* TRIBUTO DE ANIVERSÁRIO */}
        {(() => {
          if (!profile.birthDate) return null;
          const today = new Date();
          const birth = new Date(profile.birthDate);
          if (isNaN(birth.getTime())) return null;
          const isBirthday = today.getDate() === birth.getDate() && today.getMonth() === birth.getMonth();
          if (!isBirthday) return null;
          
          const age = today.getFullYear() - birth.getFullYear();
          return (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gradient-to-br from-rose-400 to-amber-400 p-8 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-3xl group-hover:scale-150 transition-transform duration-1000" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-[2rem] flex items-center justify-center text-3xl shadow-inner">
                    🎂
                  </div>
                  <div>
                    <h2 className="text-2xl font-black tracking-tighter leading-tight">Parabéns, {profile.name}!</h2>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Hoje completamos {age} {age === 1 ? 'ano' : 'anos'} de vida</p>
                  </div>
                </div>
                <p className="text-sm font-bold leading-relaxed opacity-90 italic">
                  "Cada dia ao seu lado é um presente. Que sua jornada continue sendo repleta de descobertas, sorrisos e muito amor. O Casulo celebra cada batida do seu coração!"
                </p>
                <div className="flex gap-2">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest">✨ Dia Especial</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest">🎁 +500 XP</span>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 p-4 opacity-20 text-6xl rotate-12">🎈</div>
            </motion.div>
          );
        })()}
        
        {/* BLOCO: SONO (Sempre visível) */}
        <DiarySection title="Sono e Descanso" icon="😴" color="sky">
           <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                 <p className="text-[9px] font-black text-slate-400 uppercase">Dormiu</p>
                 <input type="time" value={currentEntry.sleep.bedtime} onChange={e => updateEntry({ sleep: { ...currentEntry.sleep, bedtime: e.target.value } })} className="w-full p-3 bg-slate-50 rounded-xl border border-slate-100 font-black text-xs" />
              </div>
              <div className="space-y-1">
                 <p className="text-[9px] font-black text-slate-400 uppercase">Acordou</p>
                 <input type="time" value={currentEntry.sleep.wakeTime} onChange={e => updateEntry({ sleep: { ...currentEntry.sleep, wakeTime: e.target.value } })} className="w-full p-3 bg-slate-50 rounded-xl border border-slate-100 font-black text-xs" />
              </div>
           </div>
           <div className="mt-4">
              <p className="text-[9px] font-black text-slate-400 uppercase mb-2">Qualidade</p>
              <div className="flex gap-2">
                 {[1,2,3,4,5].map(v => (
                   <button key={v} onClick={() => updateEntry({ sleep: { ...currentEntry.sleep, quality: v } })} className={`flex-1 py-3 rounded-xl transition-all ${currentEntry.sleep.quality >= v ? 'bg-amber-400 text-white shadow-md' : 'bg-slate-50 text-slate-300'}`}>⭐</button>
                 ))}
              </div>
           </div>
        </DiarySection>

        {/* BLOCO: ALIMENTAÇÃO (Template dinâmico) */}
        {agePhase === 'BABY_0_6' && (
           <DiarySection title="Amamentação / Fórmula" icon="🤱" color="rose">
              <div className="space-y-4">
                 <div className="flex gap-2">
                    <button onClick={() => addFeeding({ type: 'breast', side: 'L' })} className="flex-1 py-3 bg-white border-2 border-slate-100 rounded-xl text-[8px] font-black uppercase">Esquerdo</button>
                    <button onClick={() => addFeeding({ type: 'breast', side: 'R' })} className="flex-1 py-3 bg-white border-2 border-slate-100 rounded-xl text-[8px] font-black uppercase">Direito</button>
                    <button onClick={() => addFeeding({ type: 'bottle' })} className="flex-1 py-3 bg-white border-2 border-slate-100 rounded-xl text-[8px] font-black uppercase">Mamadeira</button>
                 </div>
                 <div className="space-y-2">
                    {currentEntry.feeding.map((f, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                         <span className="text-[10px] font-black text-slate-700">{f.type === 'breast' ? `🤱 Peito ${f.side}` : '🍼 Fórmula'}</span>
                         <span className="text-[9px] font-bold text-slate-400">{f.time}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </DiarySection>
        )}

        {(agePhase === 'INFANT_6_12' || agePhase === 'TODDLER_1_3') && (
           <DiarySection title="Refeições do Dia" icon="🍽️" color="emerald">
              <div className="space-y-4">
                 {['Café', 'Almoço', 'Lanche', 'Jantar'].map(meal => (
                    <div key={meal} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                       <span className="text-xs font-black text-slate-700 uppercase">{meal}</span>
                       <button onClick={() => addFeeding({ type: 'solid', items: [meal] })} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-[9px] font-black uppercase text-emerald-500">Registrar</button>
                    </div>
                 ))}
                 <div className="space-y-2">
                    {currentEntry.feeding.map((f, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                         <span className="text-[10px] font-black text-emerald-700 uppercase">{f.items?.[0] || 'Refeição'}</span>
                         <span className="text-[9px] font-bold text-emerald-400">{f.time}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </DiarySection>
        )}

        {agePhase === 'CHILD_3_PLUS' && (
           <DiarySection title="Escola e Lição" icon="🎒" color="indigo">
              <div className="space-y-4">
                 <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-xs font-black text-slate-700 uppercase">Frequentou hoje?</span>
                    <button 
                      onClick={() => updateEntry({ school: { ...currentEntry.school, attended: !currentEntry.school.attended } })}
                      className={`px-6 py-2 rounded-full text-[9px] font-black uppercase transition-all ${currentEntry.school.attended ? 'bg-emerald-400 text-white' : 'bg-white border border-slate-200 text-slate-300'}`}
                    >
                      {currentEntry.school.attended ? 'SIM ✓' : 'NÃO'}
                    </button>
                 </div>
                 <textarea 
                   placeholder="Recados da professora ou lição de casa..."
                   value={currentEntry.school.activities}
                   onChange={e => updateEntry({ school: { ...currentEntry.school, activities: e.target.value } })}
                   className="w-full h-24 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-[10px] font-bold text-slate-600 focus:outline-none focus:border-indigo-200"
                 ></textarea>
              </div>
           </DiarySection>
        )}

        {/* BLOCO: HIGIENE (Visível para < 3 anos) */}
        {childMonths < 36 && (
           <DiarySection title="Fraldas e Banho" icon="💩" color="amber">
              <div className="space-y-4">
                 <div className="flex gap-2">
                    <button onClick={() => addDiaper({ type: 'pee' })} className="flex-1 py-3 bg-white border-2 border-slate-100 rounded-xl text-[10px]">💧</button>
                    <button onClick={() => addDiaper({ type: 'poo' })} className="flex-1 py-3 bg-white border-2 border-slate-100 rounded-xl text-[10px]">💩</button>
                 </div>
                 <div className="flex flex-wrap gap-2">
                    {currentEntry.hygiene.changes.map((c, i) => (
                      <span key={i} className="px-3 py-1 bg-amber-50 rounded-full border border-amber-100 text-[9px] font-black text-amber-600">{c.type === 'pee' ? '💧' : '💩'} {c.time}</span>
                    ))}
                 </div>
                 <div className="flex items-center justify-between mt-4">
                    <span className="text-[10px] font-black text-slate-700 uppercase">HORA DO BANHO</span>
                    <input type="time" value={currentEntry.hygiene.bathTime} onChange={e => updateEntry({ hygiene: { ...currentEntry.hygiene, bathTime: e.target.value } })} className="p-2 bg-slate-50 rounded-lg border border-slate-100 font-black text-[10px]" />
                 </div>
              </div>
           </DiarySection>
        )}

        {/* BLOCO: SAÚDE E BEM-ESTAR */}
        <DiarySection title="Saúde e Bem-estar" icon="🏥" color="rose">
           <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-1">
                    <p className="text-[9px] font-black text-slate-400 uppercase">Temperatura</p>
                    <div className="flex gap-2">
                       <input 
                         type="number" 
                         step="0.1"
                         placeholder="36.5"
                         value={currentEntry.health.temp.value} 
                         onChange={e => updateEntry({ health: { ...currentEntry.health, temp: { ...currentEntry.health.temp, value: e.target.value } } })}
                         className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-100 font-black text-xs" 
                       />
                       <span className="flex items-center text-xs font-black text-slate-400">°C</span>
                    </div>
                 </div>
                 <div className="space-y-1">
                    <p className="text-[9px] font-black text-slate-400 uppercase">Local</p>
                    <select 
                      value={currentEntry.health.temp.location} 
                      onChange={e => updateEntry({ health: { ...currentEntry.health, temp: { ...currentEntry.health.temp, location: e.target.value } } })}
                      className="w-full p-3 bg-slate-50 rounded-xl border border-slate-100 font-black text-xs"
                    >
                       <option value="Axila">Axila</option>
                       <option value="Ouvido">Ouvido</option>
                       <option value="Testa">Testa</option>
                    </select>
                 </div>
              </div>

              <div className="space-y-2">
                 <p className="text-[9px] font-black text-slate-400 uppercase">Medicamentos do Dia</p>
                 <div className="flex gap-2">
                    <input 
                      type="text" 
                      id="med-name"
                      placeholder="Nome do remédio"
                      className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-100 font-black text-[10px]" 
                    />
                    <button 
                      onClick={() => {
                        const input = document.getElementById('med-name') as HTMLInputElement;
                        if (input.value) {
                          const newMed: Medication = {
                            id: Date.now().toString(),
                            name: input.value,
                            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                            dose: '1 dose',
                            taken: true
                          };
                          updateEntry({ health: { ...currentEntry.health, meds: [...currentEntry.health.meds, newMed] } });
                          input.value = '';
                        }
                      }}
                      className="px-4 bg-rose-500 text-white rounded-xl font-black text-[10px] uppercase"
                    >
                      Add
                    </button>
                 </div>
                 <div className="space-y-2">
                    {currentEntry.health.meds.map((m, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-rose-50 rounded-xl border border-rose-100">
                         <div className="flex items-center gap-2">
                            <span className="text-xs">💊</span>
                            <span className="text-[10px] font-black text-rose-700 uppercase">{m.name}</span>
                         </div>
                         <span className="text-[9px] font-bold text-rose-400">{m.time}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="space-y-2">
                 <p className="text-[9px] font-black text-slate-400 uppercase">Sintomas Observados</p>
                 <div className="flex flex-wrap gap-2">
                    {['Febre', 'Tosse', 'Coriza', 'Cólica', 'Dentição', 'Manchas'].map(s => {
                      const isSelected = currentEntry.health.symptoms.includes(s);
                      return (
                        <button 
                          key={s}
                          onClick={() => {
                            const newSymptoms = isSelected 
                              ? currentEntry.health.symptoms.filter(item => item !== s)
                              : [...currentEntry.health.symptoms, s];
                            updateEntry({ health: { ...currentEntry.health, symptoms: newSymptoms } });
                          }}
                          className={`px-3 py-1.5 rounded-full text-[9px] font-black uppercase transition-all ${isSelected ? 'bg-rose-500 text-white shadow-md' : 'bg-slate-50 text-slate-400 border border-slate-100'}`}
                        >
                          {s}
                        </button>
                      );
                    })}
                 </div>
              </div>
           </div>
        </DiarySection>

        {/* BLOCO: ATIVIDADES E ESTÍMULOS */}
        <DiarySection title="Atividades e Estímulos" icon="🎨" color="amber">
           <div className="space-y-6">
              <div className="space-y-3">
                 <p className="text-[9px] font-black text-slate-400 uppercase">Tempo de Tela (Minutos)</p>
                 <div className="flex items-center gap-4">
                    <div className="flex-1 space-y-1">
                       <div className="flex justify-between text-[8px] font-black text-slate-300 uppercase">
                          <span>TV</span>
                          <span>{currentEntry.activities.screen.tv} min</span>
                       </div>
                       <input 
                         type="range" min="0" max="120" step="10"
                         value={currentEntry.activities.screen.tv}
                         onChange={e => updateEntry({ activities: { ...currentEntry.activities, screen: { ...currentEntry.activities.screen, tv: parseInt(e.target.value) } } })}
                         className="w-full accent-amber-400"
                       />
                    </div>
                    <div className="flex-1 space-y-1">
                       <div className="flex justify-between text-[8px] font-black text-slate-300 uppercase">
                          <span>Celular</span>
                          <span>{currentEntry.activities.screen.mobile} min</span>
                       </div>
                       <input 
                         type="range" min="0" max="120" step="10"
                         value={currentEntry.activities.screen.mobile}
                         onChange={e => updateEntry({ activities: { ...currentEntry.activities, screen: { ...currentEntry.activities.screen, mobile: parseInt(e.target.value) } } })}
                         className="w-full accent-amber-400"
                       />
                    </div>
                 </div>
                 <div className={`p-3 rounded-2xl text-center ${currentEntry.activities.screen.tv + currentEntry.activities.screen.mobile > currentEntry.activities.screen.goal ? 'bg-rose-50 text-rose-500' : 'bg-emerald-50 text-emerald-500'}`}>
                    <p className="text-[9px] font-black uppercase">Total: {currentEntry.activities.screen.tv + currentEntry.activities.screen.mobile} / {currentEntry.activities.screen.goal} min meta</p>
                 </div>
              </div>

              <div className="space-y-2">
                 <p className="text-[9px] font-black text-slate-400 uppercase">Leitura do Dia</p>
                 <div className="flex gap-2">
                    <input 
                      type="text" 
                      id="book-title"
                      placeholder="Título do livro"
                      className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-100 font-black text-[10px]" 
                    />
                    <button 
                      onClick={() => {
                        const input = document.getElementById('book-title') as HTMLInputElement;
                        if (input.value) {
                          updateEntry({ activities: { ...currentEntry.activities, reading: { ...currentEntry.activities.reading, titles: [...currentEntry.activities.reading.titles, input.value] } } });
                          input.value = '';
                        }
                      }}
                      className="px-4 bg-amber-500 text-white rounded-xl font-black text-[10px] uppercase"
                    >
                      Add
                    </button>
                 </div>
                 <div className="flex flex-wrap gap-2">
                    {currentEntry.activities.reading.titles.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-amber-50 rounded-full border border-amber-100 text-[9px] font-black text-amber-600">📖 {t}</span>
                    ))}
                 </div>
              </div>

              <div className="space-y-1">
                 <p className="text-[9px] font-black text-slate-400 uppercase">Destaque da Atividade Física</p>
                 <input 
                   type="text" 
                   placeholder="Ex: Brincamos no parque, engatinhou muito..."
                   value={currentEntry.activities.physical.type} 
                   onChange={e => updateEntry({ activities: { ...currentEntry.activities, physical: { ...currentEntry.activities.physical, type: e.target.value } } })}
                   className="w-full p-3 bg-slate-50 rounded-xl border border-slate-100 font-black text-xs" 
                 />
              </div>
           </div>
        </DiarySection>

        {/* BLOCO: HUMOR E COMUNICAÇÃO */}
        <DiarySection title="Humor e Descobertas" icon="😊" color="indigo">
           <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-1">
                    <p className="text-[9px] font-black text-slate-400 uppercase">Humor Geral</p>
                    <select 
                      value={currentEntry.mood.general} 
                      onChange={e => updateEntry({ mood: { ...currentEntry.mood, general: e.target.value } })}
                      className="w-full p-3 bg-slate-50 rounded-xl border border-slate-100 font-black text-xs"
                    >
                       <option value="Feliz">Feliz 😊</option>
                       <option value="Normal">Normal 😐</option>
                       <option value="Irritado">Irritado 😠</option>
                       <option value="Cansado">Cansado 😴</option>
                    </select>
                 </div>
                 <div className="space-y-1">
                    <p className="text-[9px] font-black text-slate-400 uppercase">Música do Dia</p>
                    <input 
                      type="text" 
                      placeholder="Trilha sonora..."
                      value={currentEntry.mood.communication.music} 
                      onChange={e => updateEntry({ mood: { ...currentEntry.mood, communication: { ...currentEntry.mood.communication, music: e.target.value } } })}
                      className="w-full p-3 bg-slate-50 rounded-xl border border-slate-100 font-black text-xs" 
                    />
                 </div>
              </div>
              <div className="space-y-1">
                 <p className="text-[9px] font-black text-slate-400 uppercase">Melhor Momento</p>
                 <input 
                   type="text" 
                   placeholder="O que foi mais especial?"
                   value={currentEntry.mood.bestMoment.description} 
                   onChange={e => updateEntry({ mood: { ...currentEntry.mood, bestMoment: { ...currentEntry.mood.bestMoment, description: e.target.value } } })}
                   className="w-full p-3 bg-slate-50 rounded-xl border border-slate-100 font-black text-xs" 
                 />
              </div>
           </div>
        </DiarySection>

        {/* BLOCO: LISTA DE COMPRAS */}
        <DiarySection title="Lista de Compras" icon="🛒" color="slate">
           <div className="space-y-4">
              <div className="space-y-2">
                 <p className="text-[9px] font-black text-slate-400 uppercase">Itens Necessários</p>
                 <div className="flex gap-2">
                    <input 
                      type="text" 
                      id="shop-item"
                      placeholder="O que está faltando?"
                      className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-100 font-black text-[10px]" 
                    />
                    <button 
                      onClick={() => {
                        const input = document.getElementById('shop-item') as HTMLInputElement;
                        if (input.value) {
                          updateEntry({ shopping: { ...currentEntry.shopping, supermarket: [...currentEntry.shopping.supermarket, input.value] } });
                          input.value = '';
                        }
                      }}
                      className="px-4 bg-slate-800 text-white rounded-xl font-black text-[10px] uppercase"
                    >
                      Add
                    </button>
                 </div>
                 <div className="space-y-2">
                    {currentEntry.shopping.supermarket.map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 group">
                         <span className="text-[10px] font-black text-slate-700 uppercase">{item}</span>
                         <button 
                           onClick={() => {
                             const newList = currentEntry.shopping.supermarket.filter((_, idx) => idx !== i);
                             updateEntry({ shopping: { ...currentEntry.shopping, supermarket: newList } });
                           }}
                           className="text-slate-300 hover:text-rose-500 transition-colors"
                         >
                           ✕
                         </button>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </DiarySection>

        {/* BLOCO: BIBLIOTECA CASULO */}
        {currentEntry.journeyAchievements?.books && currentEntry.journeyAchievements.books.length > 0 && (
          <DiarySection title="Biblioteca Casulo" icon="📚" color="indigo" isOpenInitial={targetSection === 'Biblioteca Casulo'}>
            <div className="space-y-2">
              {currentEntry.journeyAchievements.books.map((b, i) => (
                <button 
                  key={i} 
                  onClick={() => openAchievementNoteEditor('book', i, b.note)}
                  className="w-full p-4 rounded-[2rem] border flex flex-col gap-2 text-left transition-all group shadow-sm bg-indigo-50 border-indigo-100 hover:bg-indigo-100"
                >
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <Book size={14} className="text-indigo-500" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-indigo-700">{b.title}</p>
                        <p className="text-[8px] font-bold uppercase text-indigo-300">
                          Leitura Concluída
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] font-black text-indigo-300">{b.timestamp}</span>
                      <PenLine size={12} className="text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  {b.note ? (
                    <div className="p-3 bg-white/60 rounded-2xl border border-indigo-200/50">
                      <p className="text-[10px] font-bold italic leading-relaxed text-indigo-800">"{b.note}"</p>
                    </div>
                  ) : (
                    <div className="p-3 bg-white/30 rounded-2xl border border-dashed flex items-center justify-center gap-2 border-indigo-200">
                      <Plus size={10} className="text-indigo-300" />
                      <p className="text-[8px] font-black uppercase text-indigo-300">Relatar Experiência</p>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </DiarySection>
        )}

        {/* BLOCO: LIVRO DE RECEITAS */}
        {currentEntry.journeyAchievements?.recipes && currentEntry.journeyAchievements.recipes.length > 0 && (
          <DiarySection title="Livro de Receitas" icon="🍳" color="orange" isOpenInitial={targetSection === 'Livro de Receitas'}>
            <div className="space-y-2">
              {currentEntry.journeyAchievements.recipes.map((r, i) => (
                <button 
                  key={i} 
                  onClick={() => openAchievementNoteEditor('recipe', i, r.note)}
                  className="w-full p-4 rounded-[2rem] border flex flex-col gap-2 text-left transition-all group shadow-sm bg-orange-50 border-orange-100 hover:bg-orange-100"
                >
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <Utensils size={14} className="text-orange-500" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-orange-700">{r.title}</p>
                        <p className="text-[8px] font-bold uppercase text-orange-300">
                          Receita Preparada
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] font-black text-orange-300">{r.timestamp}</span>
                      <PenLine size={12} className="text-orange-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  {r.note ? (
                    <div className="p-3 bg-white/60 rounded-2xl border border-orange-200/50">
                      <p className="text-[10px] font-bold italic leading-relaxed text-orange-800">"{r.note}"</p>
                    </div>
                  ) : (
                    <div className="p-3 bg-white/30 rounded-2xl border border-dashed flex items-center justify-center gap-2 border-orange-200">
                      <Plus size={10} className="text-orange-300" />
                      <p className="text-[8px] font-black uppercase text-orange-300">Relatar Experiência</p>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </DiarySection>
        )}

        {/* BLOCO: ATIVIDADE DO MARCO */}
        {currentEntry.journeyAchievements?.activities && currentEntry.journeyAchievements.activities.length > 0 && (
          <DiarySection title="Atividade do Marco" icon="✨" color="emerald" isOpenInitial={targetSection === 'Atividade do Marco'}>
            <div className="space-y-2">
              {currentEntry.journeyAchievements.activities.map((a, i) => (
                <button 
                  key={i} 
                  onClick={() => openAchievementNoteEditor('activity', i, a.note)}
                  className="w-full p-4 bg-emerald-50 rounded-[2rem] border border-emerald-100 flex flex-col gap-2 text-left hover:bg-emerald-100 transition-all group shadow-sm"
                >
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <Sparkles size={14} className="text-emerald-500" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-emerald-700 uppercase">{a.title}</p>
                        <p className="text-[8px] font-bold text-emerald-300 uppercase">Prática Concluída</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] font-black text-emerald-300">{a.timestamp}</span>
                      <PenLine size={12} className="text-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  {a.note ? (
                    <div className="p-3 bg-white/60 rounded-2xl border border-emerald-200/50">
                      <p className="text-[10px] font-bold text-emerald-800 italic leading-relaxed">"{a.note}"</p>
                    </div>
                  ) : (
                    <div className="p-3 bg-white/30 rounded-2xl border border-dashed border-emerald-200 flex items-center justify-center gap-2">
                      <Plus size={10} className="text-emerald-300" />
                      <p className="text-[8px] font-black text-emerald-300 uppercase">Relatar Experiência</p>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </DiarySection>
        )}

        {/* BLOCO: PAPO EM FAMÍLIA */}
        {currentEntry.journeyAchievements?.familyTalks && currentEntry.journeyAchievements.familyTalks.length > 0 && (
          <DiarySection title="Papo em Família" icon="💬" color="rose" isOpenInitial={targetSection === 'Papo em Família'}>
            <div className="space-y-2">
              {currentEntry.journeyAchievements.familyTalks.map((t, i) => (
                <button 
                  key={i} 
                  onClick={() => openAchievementNoteEditor('talk', i, t.note)}
                  className="w-full p-4 bg-rose-50 rounded-[2rem] border border-rose-100 flex flex-col gap-2 text-left hover:bg-rose-100 transition-all group shadow-sm"
                >
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <MessageSquare size={14} className="text-rose-500" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-rose-700 uppercase">{t.title}</p>
                        <p className="text-[8px] font-bold text-rose-300 uppercase">Conversa Realizada</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] font-black text-rose-300">{t.timestamp}</span>
                      <PenLine size={12} className="text-rose-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  {t.note ? (
                    <div className="p-3 bg-white/60 rounded-2xl border border-rose-200/50">
                      <p className="text-[10px] font-bold text-rose-800 italic leading-relaxed">"{t.note}"</p>
                    </div>
                  ) : (
                    <div className="p-3 bg-white/30 rounded-2xl border border-dashed border-rose-200 flex items-center justify-center gap-2">
                      <Plus size={10} className="text-rose-300" />
                      <p className="text-[8px] font-black text-rose-300 uppercase">Relatar Experiência</p>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </DiarySection>
        )}

        {/* BLOCO: CONQUISTAS DO MAPA (Outros) */}
        {currentEntry.journeyAchievements && (currentEntry.journeyAchievements.tasks?.length > 0 || currentEntry.journeyAchievements.missions?.length > 0 || currentEntry.journeyAchievements.photos?.length > 0 || currentEntry.journeyAchievements.games?.length > 0) && (
          <DiarySection title="Marcos da Jornada" icon="🗺️" color="indigo">
             <div className="space-y-6">
                {currentEntry.journeyAchievements.tasks?.length > 0 && (
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase mb-2">Tarefas Concluídas</p>
                    <div className="flex flex-wrap gap-2">
                      {currentEntry.journeyAchievements.tasks.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-indigo-50 rounded-full border border-indigo-100 text-[9px] font-black text-indigo-600">✓ {t}</span>
                      ))}
                    </div>
                  </div>
                )}
                {currentEntry.journeyAchievements.missions?.length > 0 && (
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase mb-2">Missões do Dia</p>
                    <div className="flex flex-wrap gap-2">
                      {currentEntry.journeyAchievements.missions.map((m, i) => (
                        <span key={i} className="px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100 text-[9px] font-black text-emerald-600">⚡ {m}</span>
                      ))}
                    </div>
                  </div>
                )}
                {currentEntry.journeyAchievements.photos?.length > 0 && (
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase mb-2">Marcos Fotográficos</p>
                    <div className="flex flex-wrap gap-2">
                      {currentEntry.journeyAchievements.photos.map((p, i) => (
                        <span key={i} className="px-3 py-1 bg-sky-50 rounded-full border border-sky-100 text-[9px] font-black text-sky-600">📸 {p}</span>
                      ))}
                    </div>
                  </div>
                )}
                 {currentEntry.journeyAchievements.games?.length > 0 && (
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase mb-2">Mini-Games & Interações</p>
                    <div className="space-y-2">
                      {currentEntry.journeyAchievements.games.map((g, i) => (
                        <button 
                          key={i} 
                          onClick={() => openAchievementNoteEditor('game', i, g.note)}
                          className="w-full p-3 bg-amber-50 rounded-xl border border-amber-100 flex flex-col gap-2 text-left hover:bg-amber-100 transition-all group"
                        >
                          <div className="flex justify-between items-center w-full">
                            <div>
                              <p className="text-[10px] font-black text-amber-700 uppercase">{g.title}</p>
                              {g.detail && <p className="text-[8px] font-bold text-amber-500 uppercase">{g.detail}</p>}
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-[8px] font-black text-amber-300">{g.timestamp}</span>
                              <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">✍️</span>
                            </div>
                          </div>
                          {g.note && (
                            <div className="p-2 bg-white/50 rounded-lg border border-amber-200/50">
                              <p className="text-[9px] font-bold text-amber-800 italic">"{g.note}"</p>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
             </div>
          </DiarySection>
        )}

        {/* BLOCO: FINANÇAS (Integração) */}
        {currentEntry.finance && (currentEntry.finance.transactions.length > 0 || currentEntry.finance.milestones.length > 0) && (
           <DiarySection title="Caixa Finanças" icon="💳" color="emerald">
              <div className="space-y-4">
                 {currentEntry.finance.milestones.length > 0 && (
                   <div className="space-y-2">
                      <p className="text-[9px] font-black text-slate-400 uppercase">Conquistas & Metas</p>
                      {currentEntry.finance.milestones.map((m, i) => (
                        <div key={i} className="p-3 bg-blue-50 rounded-xl border border-blue-100 flex items-center gap-3">
                           <span className="text-lg">🎯</span>
                           <p className="text-[10px] font-black text-blue-700 uppercase">{m}</p>
                        </div>
                      ))}
                   </div>
                 )}
                 {currentEntry.finance.transactions.length > 0 && (
                   <div className="space-y-2">
                      <p className="text-[9px] font-black text-slate-400 uppercase">Movimentações do Dia</p>
                      {currentEntry.finance.transactions.map((t, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                           <div className="flex items-center gap-3">
                              <span className="text-lg">{t.type === 'INCOME' ? '💰' : '💸'}</span>
                              <div className="min-w-0">
                                 <p className="text-[10px] font-black text-slate-800 truncate">{t.description}</p>
                                 <p className="text-[8px] font-bold text-slate-400 uppercase">{t.category}</p>
                              </div>
                           </div>
                           <p className={`text-[10px] font-black ${t.type === 'INCOME' ? 'text-emerald-500' : 'text-slate-800'}`}>
                              {t.type === 'INCOME' ? '+' : '-'} R$ {t.amount.toLocaleString()}
                           </p>
                        </div>
                      ))}
                   </div>
                 )}
              </div>
           </DiarySection>
        )}

        {/* BLOCO: COZINHA (Integração) */}
        {currentEntry.kitchen && currentEntry.kitchen.cookedRecipes.length > 0 && (
           <DiarySection title="Cozinha do Dia" icon="🍳" color="orange">
              <div className="space-y-4">
                 <p className="text-[9px] font-black text-slate-400 uppercase">Receitas Preparadas</p>
                 <div className="grid grid-cols-1 gap-2">
                    {currentEntry.kitchen.cookedRecipes.map((recipeId, i) => {
                       const recipe = ALL_RECIPES.find(r => r.id === recipeId);
                       return (
                         <div key={i} className="p-4 bg-orange-50 rounded-2xl border border-orange-100 flex items-center gap-4">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm">
                               {recipe?.category === 'CAFÉ DA MANHÃ' ? '🥣' : 
                                recipe?.category === 'ALMOÇO' ? '🍽️' : 
                                recipe?.category === 'CAFÉ DA TARDE' ? '🥪' : 
                                recipe?.category === 'JANTAR' ? '🍲' : '🍎'}
                            </div>
                            <div className="flex-1">
                               <p className="text-[11px] font-black text-slate-800 leading-tight">{recipe?.name || "Receita Especial"}</p>
                               <p className="text-[8px] font-bold text-orange-500 uppercase mt-0.5">{recipe?.category || "Cozinha"}</p>
                            </div>
                            <Utensils className="w-4 h-4 text-orange-300" />
                         </div>
                       );
                    })}
                 </div>
              </div>
           </DiarySection>
        )}

        {/* BLOCO: GALERIA DO DIA */}
        {currentEntry.parentNotes.photos && currentEntry.parentNotes.photos.length > 0 && (
          <DiarySection title="Galeria do Dia" icon="📸" color="sky">
            <div className="grid grid-cols-2 gap-3">
              {currentEntry.parentNotes.photos.map((photo, i) => (
                <div key={i} className="relative group aspect-square rounded-[2rem] overflow-hidden border-2 border-sky-100 shadow-sm">
                  <img 
                    src={photo} 
                    alt={`Foto do dia ${i + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <button 
                      onClick={() => {
                        const newPhotos = [...currentEntry.parentNotes.photos];
                        newPhotos.splice(i, 1);
                        updateEntry({ parentNotes: { ...currentEntry.parentNotes, photos: newPhotos } });
                      }}
                      className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-rose-500 transition-colors"
                    >
                      <Plus size={14} className="rotate-45" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </DiarySection>
        )}

        {/* BLOCO: NOTAS LIVRES (Sempre no final) */}
        <DiarySection title="Como foi seu dia?" icon="📝" color="slate">
           <div className="space-y-4">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Espaço livre para salvar acontecimentos, marcos e sentimentos.</p>
              <textarea 
                placeholder="Hoje descobrimos que..."
                value={currentEntry.parentNotes.text}
                onChange={e => updateEntry({ parentNotes: { ...currentEntry.parentNotes, text: e.target.value } })}
                className="w-full h-40 p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100 text-xs font-bold text-slate-600 focus:outline-none focus:border-slate-300 transition-all resize-none shadow-inner"
              ></textarea>
              <div className="flex justify-between items-center px-4">
                 <span className="text-[8px] font-black text-slate-300 uppercase">Salvo automaticamente</span>
                 <span className="text-xl opacity-20">✍️</span>
              </div>
           </div>
        </DiarySection>

        {/* RESUMO RÁPIDO */}
        <div className="bg-slate-900 p-8 rounded-[3rem] text-white shadow-xl space-y-4">
           <h3 className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Resumo de Hoje</h3>
           <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-2xl">
                 <p className="text-[8px] font-black uppercase opacity-40 mb-1">Eventos</p>
                 <p className="text-xl font-black">{currentEntry.feeding.length + currentEntry.hygiene.changes.length}</p>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl">
                 <p className="text-[8px] font-black uppercase opacity-40 mb-1">Qualidade Sono</p>
                 <p className="text-xl font-black">{currentEntry.sleep.quality}/5</p>
              </div>
           </div>
        </div>

      </div>

      {/* MODAL EDITOR DE NOTAS DE CONQUISTAS */}
      {(editingGameIndex !== null || editingBookIndex !== null || editingRecipeIndex !== null || editingActivityIndex !== null || editingTalkIndex !== null) && (
        <div className="fixed inset-0 z-[1100] bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in">
           <div className="bg-white w-full max-w-sm rounded-[3rem] p-8 shadow-2xl animate-slide-up space-y-6">
              <div className="flex justify-between items-center">
                 <div>
                    <h3 className="text-lg font-black text-slate-800 uppercase tracking-widest">Relatar Experiência</h3>
                    <p className={`text-[10px] font-black uppercase ${
                      editingGameIndex !== null ? 'text-amber-500' :
                      editingBookIndex !== null ? 'text-indigo-500' :
                      editingRecipeIndex !== null ? 'text-orange-500' :
                      editingActivityIndex !== null ? 'text-emerald-500' : 'text-rose-500'
                    }`}>
                      {editingGameIndex !== null ? currentEntry.journeyAchievements?.games?.[editingGameIndex]?.title :
                       editingBookIndex !== null ? currentEntry.journeyAchievements?.books?.[editingBookIndex]?.title :
                       editingRecipeIndex !== null ? currentEntry.journeyAchievements?.recipes?.[editingRecipeIndex]?.title :
                       editingActivityIndex !== null ? currentEntry.journeyAchievements?.activities?.[editingActivityIndex]?.title :
                       currentEntry.journeyAchievements?.familyTalks?.[editingTalkIndex!]?.title}
                    </p>
                 </div>
                 <button onClick={() => {
                   setEditingGameIndex(null);
                   setEditingBookIndex(null);
                   setEditingRecipeIndex(null);
                   setEditingActivityIndex(null);
                   setEditingTalkIndex(null);
                 }} className="text-slate-300 text-2xl font-black">✕</button>
              </div>
              
              <textarea 
                autoFocus
                placeholder={
                  editingBookIndex !== null ? "Como foi a leitura? Como a criança reagiu ao livro?" :
                  editingRecipeIndex !== null ? "Como foi o preparo? O bebê gostou da receita?" :
                  editingActivityIndex !== null ? "Como foi a prática? O que a criança mais gostou?" :
                  editingTalkIndex !== null ? "Qual foi a principal reflexão da família?" :
                  "Como foi esse momento? Alguma observação especial?"
                }
                value={gameNote}
                onChange={e => setGameNote(e.target.value)}
                className={`w-full h-32 p-5 bg-slate-50 rounded-2xl border border-slate-100 text-xs font-bold text-slate-600 focus:outline-none resize-none ${
                  editingGameIndex !== null ? 'focus:border-amber-200' :
                  editingBookIndex !== null ? 'focus:border-indigo-200' :
                  editingRecipeIndex !== null ? 'focus:border-orange-200' :
                  editingActivityIndex !== null ? 'focus:border-emerald-200' : 'focus:border-rose-200'
                }`}
              ></textarea>

              <button 
                onClick={() => {
                  const type = editingGameIndex !== null ? 'game' :
                               editingBookIndex !== null ? 'book' :
                               editingRecipeIndex !== null ? 'recipe' :
                               editingActivityIndex !== null ? 'activity' : 'talk';
                  saveAchievementNote(type);
                }}
                className={`w-full py-4 text-white font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-all ${
                  editingGameIndex !== null ? 'bg-amber-400' :
                  editingBookIndex !== null ? 'bg-indigo-400' :
                  editingRecipeIndex !== null ? 'bg-orange-400' :
                  editingActivityIndex !== null ? 'bg-emerald-400' : 'bg-rose-400'
                }`}
              >
                Salvar no Diário
              </button>
           </div>
        </div>
      )}

      {/* BOTÃO FLUTUANTE */}
      <button 
        onClick={() => setIsQuickRecordOpen(true)}
        className="fixed bottom-28 right-6 w-16 h-16 bg-slate-900 text-white rounded-full shadow-2xl z-[600] flex items-center justify-center text-3xl active:scale-95 transition-all border-b-8 border-black/50"
      >
        ⚡
      </button>

      {/* MODAL REGISTRO RÁPIDO */}
      {isQuickRecordOpen && (
        <div className="fixed inset-0 z-[1000] bg-slate-900/95 backdrop-blur-md flex items-end justify-center p-6 animate-fade-in">
           <div className="bg-white w-full max-w-sm rounded-[3.5rem] p-10 shadow-2xl animate-slide-up space-y-8">
              <div className="flex justify-between items-center">
                 <h3 className="text-xl font-black text-slate-800 uppercase tracking-widest">Atalho Rápido</h3>
                 <button onClick={() => setIsQuickRecordOpen(false)} className="text-slate-300 text-3xl font-black focus:outline-none">✕</button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <button onClick={() => { addFeeding({ type: 'breast' }); setIsQuickRecordOpen(false); }} className="p-6 bg-rose-50 rounded-3xl flex flex-col items-center gap-2 border border-rose-100">
                    <span className="text-3xl">🤱</span>
                    <span className="text-[10px] font-black uppercase">Mamada</span>
                 </button>
                 <button onClick={() => { addDiaper({ type: 'pee' }); setIsQuickRecordOpen(false); }} className="p-6 bg-amber-50 rounded-3xl flex flex-col items-center gap-2 border border-amber-100">
                    <span className="text-3xl">💩</span>
                    <span className="text-[10px] font-black uppercase">Fralda</span>
                 </button>
              </div>
           </div>
        </div>
      )}

      {/* MODAL AGENDA */}
      {isAgendaModalOpen && (
        <div className="fixed inset-0 z-[1100] bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in">
           <div className="bg-white w-full max-w-sm rounded-[3rem] p-8 shadow-2xl animate-slide-up space-y-6 max-h-[90vh] overflow-y-auto no-scrollbar">
              <div className="flex justify-between items-center">
                 <div>
                    <h3 className="text-lg font-black text-slate-800 uppercase tracking-widest">{editingAgendaId ? 'Editar Compromisso' : 'Novo Compromisso'}</h3>
                    <p className="text-[10px] font-black text-indigo-500 uppercase">Agenda Inteligente</p>
                 </div>
                 <button onClick={() => { setIsAgendaModalOpen(false); setEditingAgendaId(null); }} className="text-slate-300 text-2xl font-black">✕</button>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-[9px] font-black text-slate-400 uppercase">Título</p>
                  <input 
                    type="text" 
                    placeholder="Ex: Consulta Pediátrica"
                    value={agendaForm.title || ''}
                    onChange={e => setAgendaForm({...agendaForm, title: e.target.value})}
                    className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs font-black text-slate-800 focus:outline-none focus:border-indigo-200"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-slate-400 uppercase">Data</p>
                    <input 
                      type="date" 
                      value={agendaForm.date || ''}
                      onChange={e => setAgendaForm({...agendaForm, date: e.target.value})}
                      className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs font-black text-slate-800 focus:outline-none focus:border-indigo-200"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-slate-400 uppercase">Hora</p>
                    <input 
                      type="time" 
                      value={agendaForm.time || ''}
                      onChange={e => setAgendaForm({...agendaForm, time: e.target.value})}
                      className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs font-black text-slate-800 focus:outline-none focus:border-indigo-200"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-[9px] font-black text-slate-400 uppercase">Tipo</p>
                  <div className="grid grid-cols-2 gap-2">
                    {(['SCHOOL', 'MEDICAL', 'PRESENTATION', 'OTHER'] as const).map(type => (
                      <button 
                        key={type}
                        onClick={() => setAgendaForm({...agendaForm, type})}
                        className={`py-3 rounded-xl text-[8px] font-black uppercase transition-all ${agendaForm.type === type ? 'bg-indigo-500 text-white shadow-md' : 'bg-slate-50 text-slate-400'}`}
                      >
                        {type === 'SCHOOL' ? 'Escola' : type === 'MEDICAL' ? 'Médico' : type === 'PRESENTATION' ? 'Apresentação' : 'Outro'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-[9px] font-black text-slate-400 uppercase">Observações do Pai/Mãe</p>
                  <textarea 
                    placeholder="Memórias, detalhes ou o que levar..."
                    value={agendaForm.notes || ''}
                    onChange={e => setAgendaForm({...agendaForm, notes: e.target.value})}
                    className="w-full h-24 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-[10px] font-bold text-slate-600 focus:outline-none focus:border-indigo-200 resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-2">
                    <Bell size={14} className="text-indigo-500" />
                    <span className="text-[10px] font-black text-slate-700 uppercase">Lembrete Ativo</span>
                  </div>
                  <button 
                    onClick={() => setAgendaForm({...agendaForm, reminderEnabled: !agendaForm.reminderEnabled})}
                    className={`w-12 h-6 rounded-full relative transition-all ${agendaForm.reminderEnabled ? 'bg-emerald-400' : 'bg-slate-200'}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${agendaForm.reminderEnabled ? 'right-1' : 'left-1'}`}></div>
                  </button>
                </div>
              </div>

              <button 
                onClick={handleSaveAgendaEvent}
                className="w-full py-5 bg-slate-800 text-white font-black rounded-2xl shadow-xl active:scale-95 transition-all uppercase text-[10px] tracking-widest"
              >
                {editingAgendaId ? 'Atualizar Compromisso' : 'Agendar Agora'}
              </button>
           </div>
        </div>
      )}
    </div>
  );
};

export default DiaryModule;
