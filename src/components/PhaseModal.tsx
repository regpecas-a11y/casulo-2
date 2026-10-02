
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { JOURNEY_STEPS, RECIPES, FOOD_DATABASE, MARCOS } from '../constants';
import { JourneyStep, ChildProfile, DiaryEntry, EducationalContent, EducationalActivity } from '../types';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { processImageForUpload } from '../services/imageService';
import { playCameraClick } from '../sounds';
import { cancelNotification } from '../services/localNotificationService';
import { getEducationalContent } from '../services/firebaseService';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Book, Sparkles, MessageCircle, CheckCircle2, PenLine, Send } from 'lucide-react';
import { usePremium } from '../contexts/PremiumContext';
import PremiumCard from './PremiumCard';
import BreastfeedingAnimationView from './BreastfeedingAnimationView';
import BabyRGDigitalCard from './BabyRGDigitalCard';
import MadrinhaVirtualModal from './MadrinhaVirtualModal';
import ParentalCertificateModal from './ParentalCertificateModal';
import FoodBLWAnimationView from './FoodBLWAnimationView';

type InteractionType = 'book' | 'activity' | 'talk' | 'objective' | 'knowledge' | 'task';
interface InteractionItem {
  type: InteractionType;
  item: any;
}

interface PhaseModalProps {
  step: JourneyStep;
  profile: ChildProfile;
  onUpdate: (updated: ChildProfile) => void;
  onClose: () => void;
  isPremium?: boolean;
  onNavigate?: (tab: string, section?: string) => void;
}

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

const PhaseModal: React.FC<PhaseModalProps> = ({ step, profile, onUpdate, onClose, isPremium = true, onNavigate }) => {
  const { handlePurchase, isLoading: isPurchasing } = usePremium();
  const completedTasks = profile.completedTasks || [];
  const completedMissions = profile.completedMissions || [];
  const completedPhotos = profile.completedPhotos || [];
  const [chuteCount, setChuteCount] = useState(0);
  const [isNapping, setIsNapping] = useState(false);
  const [forceBar, setForceBar] = useState(0);
  const [palateCount, setPalateCount] = useState(0);
  const [stepCount, setStepCount] = useState(0);
  const [eduContent, setEduContent] = useState<EducationalContent | null>(null);
  const [isLoadingEdu, setIsLoadingEdu] = useState(true);
  const [selectedGuide, setSelectedGuide] = useState<EducationalActivity | null>(null);
  const [selectedInteraction, setSelectedInteraction] = useState<InteractionItem | null>(null);
  const [interactionResponse, setInteractionResponse] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Weekly rotation logic
  const getWeekNumber = (d: Date) => {
    const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil((((date.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
    return weekNo;
  };

  const getWeeklySelection = <T,>(items: T[], count: number = 3): T[] => {
    if (!items || items.length <= count) return items || [];
    const week = getWeekNumber(new Date());
    // Use week as a seed to pick items
    const startIndex = (week * count) % items.length;
    const selection: T[] = [];
    for (let i = 0; i < count; i++) {
      selection.push(items[(startIndex + i) % items.length]);
    }
    return selection;
  };

  const rotatedContent = useMemo(() => {
    if (!eduContent) return null;
    return {
      ...eduContent,
      books: getWeeklySelection(eduContent.books),
      activities: getWeeklySelection(eduContent.activities),
      familyTalks: getWeeklySelection(eduContent.familyTalks)
    };
  }, [eduContent]);

  useEffect(() => {
    const fetchEdu = async () => {
      try {
        setIsLoadingEdu(true);
        const content = await getEducationalContent(step.minYears);
        setEduContent(content);
      } catch (error) {
        console.error("Erro ao carregar conteúdo educativo:", error);
      } finally {
        setIsLoadingEdu(false);
      }
    };
    fetchEdu();
  }, [step.minYears]);

  const toggleFavorite = (type: 'book' | 'activity', id: string) => {
    const favorites = profile.favorites || { books: [], activities: [] };
    const list = type === 'book' ? [...(favorites.books || [])] : [...(favorites.activities || [])];
    const index = list.indexOf(id);
    
    if (index > -1) {
      list.splice(index, 1);
    } else {
      list.push(id);
    }
    
    onUpdate({
      ...profile,
      favorites: {
        ...favorites,
        [type === 'book' ? 'books' : 'activities']: list
      }
    });
  };

  const isFavorite = (type: 'book' | 'activity', id: string) => {
    const favorites = profile.favorites || { books: [], activities: [] };
    const list = type === 'book' ? (favorites.books || []) : (favorites.activities || []);
    return list.includes(id);
  };

  const syncToDiary = (type: 'task' | 'mission' | 'photo' | 'game' | 'book' | 'activity' | 'talk' | 'objective' | 'knowledge', title: string, detail?: string, shouldNavigate: boolean = false) => {
    try {
      const today = new Date().toISOString().split('T')[0];
      const entries = profile.diaryEntries || {};
      const currentEntry = entries[today] || {
        date: today,
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

      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      const achievements = {
        tasks: currentEntry.journeyAchievements?.tasks || [],
        missions: currentEntry.journeyAchievements?.missions || [],
        photos: currentEntry.journeyAchievements?.photos || [],
        games: currentEntry.journeyAchievements?.games || [],
        books: currentEntry.journeyAchievements?.books || [],
        activities: currentEntry.journeyAchievements?.activities || [],
        familyTalks: currentEntry.journeyAchievements?.familyTalks || []
      };
      
      let targetSection = 'Marcos da Jornada';

      if (type === 'task') achievements.tasks = [...new Set([...achievements.tasks, title])];
      if (type === 'mission') achievements.missions = [...new Set([...achievements.missions, title])];
      if (type === 'photo') achievements.photos = [...new Set([...achievements.photos, title])];
      
      if (type === 'book') {
        achievements.books = [...(achievements.books || []), { title, timestamp }];
        targetSection = 'Biblioteca Casulo';
      } else if (type === 'activity') {
        achievements.activities = [...(achievements.activities || []), { title, timestamp }];
        targetSection = 'Atividade do Marco';
      } else if (type === 'talk') {
        achievements.familyTalks = [...(achievements.familyTalks || []), { title, timestamp, note: detail }];
        targetSection = 'Papo em Família';
      } else if (['game', 'objective', 'knowledge'].includes(type)) {
        achievements.games = [...achievements.games, { title, detail, timestamp }];
      }

      const updatedEntry: DiaryEntry = {
        ...currentEntry,
        journeyAchievements: achievements
      };

      // Harmony: Sync specific fields to their dedicated diary areas
      if (type === 'game' && title === 'Música do Momento' && detail) {
        updatedEntry.mood.communication.music = detail;
      }
      if (type === 'mission' || type === 'photo' || type === 'objective') {
        updatedEntry.activities.highlight = title;
      }
      if (type === 'book') {
        updatedEntry.activities.reading.titles = [...new Set([...updatedEntry.activities.reading.titles, title])];
      }
      if (type === 'talk' && detail) {
        updatedEntry.mood.communication.question = title;
        updatedEntry.parentNotes.reflection = detail;
      }
      if (type === 'knowledge' && detail) {
        updatedEntry.parentNotes.text = (updatedEntry.parentNotes.text ? updatedEntry.parentNotes.text + '\n' : '') + `Lido: ${title} - ${detail}`;
      }
      if (type === 'game' && title === 'Mapa de Paladar' && detail) {
        const foodName = detail.split(': ')[1];
        if (foodName) {
          updatedEntry.feeding = [
            ...updatedEntry.feeding,
            { type: 'solid', time: timestamp, items: [foodName], acceptance: 'liked', isNewFood: true }
          ];
        }
      }

      onUpdate({
        ...profile,
        diaryEntries: {
          ...entries,
          [today]: updatedEntry
        }
      });

      // CASULO NOTIFICATION - Cancel daily reminder
      cancelNotification(3).catch(err => console.warn('Erro ao cancelar notificação:', err));

      // Navigate to diary only if requested
      if (shouldNavigate && onNavigate) {
        onNavigate('diary', targetSection);
        onClose();
      }
    } catch (error) {
      console.error("Erro ao sincronizar com o diário:", error);
    }
  };

  const handleVibration = () => {
    try {
      if ('vibrate' in navigator) {
        navigator.vibrate([200, 100, 200]);
      }
      syncToDiary('game', 'Batimentos Cardíacos', 'Simulação de batimentos do bebê');
      alert("💓 Sentindo os batimentos... (Vibração simulada)");
    } catch (error) {
      console.error("Erro ao vibrar:", error);
    }
  };

  const handleChute = () => {
    try {
      setChuteCount(prev => prev + 1);
      if ('vibrate' in navigator) {
        navigator.vibrate(50);
      }
      if (chuteCount % 5 === 0) {
        syncToDiary('game', 'Contador de Chutes', `${chuteCount + 1} chutes registrados`);
      }
    } catch (error) {
      console.error("Erro ao registrar chute:", error);
    }
  };

  const handleSleepWheel = () => {
    try {
      const newIsNapping = !isNapping;
      setIsNapping(newIsNapping);
      
      const record = {
        date: new Date().toISOString().split('T')[0],
        type: newIsNapping ? 'nap' : 'wake' as 'nap' | 'wake',
        time: new Date().toLocaleTimeString()
      };

      const today = new Date().toISOString().split('T')[0];
      const entries = profile.diaryEntries || {};
      const currentEntry = entries[today] || createEmptyEntry(today);

      const updatedEntry = {
        ...currentEntry,
        sleep: {
          ...currentEntry.sleep,
          notes: currentEntry.sleep.notes ? `${currentEntry.sleep.notes}\n${newIsNapping ? 'Soneca iniciada' : 'Acordou da soneca'}` : (newIsNapping ? 'Soneca iniciada' : 'Acordou da soneca')
        }
      };

      onUpdate({
        ...profile,
        sleepRecords: [...(profile.sleepRecords || []), record],
        xp: (profile.xp || 0) + 10,
        diaryEntries: {
          ...entries,
          [today]: updatedEntry
        }
      });

      alert(newIsNapping ? "😴 Bebê dormindo... Gráfico de Nuvens iniciado." : "☀️ Bebê acordou! Gráfico de Sol gerado.");
    } catch (error) {
      console.error("Erro ao registrar sono:", error);
    }
  };

  const handleForceBar = () => {
    try {
      const newForce = Math.min(forceBar + 20, 100);
      setForceBar(newForce);
      
      if (newForce >= 100) {
        syncToDiary('game', 'Barra de Força', 'Nível máximo atingido');
        onUpdate({
          ...profile,
          xp: (profile.xp || 0) + 50
        });
        alert("💪 Nível de Força Máximo! Próximo nível desbloqueado.");
      }
    } catch (error) {
      console.error("Erro ao registrar força:", error);
    }
  };

  const handlePalateMap = () => {
    try {
      const foodIds = ['f1', 'f2', 'f3', 'v1', 'v2', 'v3', 'p1', 'p2', 'p3'];
      const currentFoodId = foodIds[palateCount % foodIds.length];
      
      // Find food name
      const foodItem = FOOD_DATABASE.find(f => f.id === currentFoodId);
      const foodName = foodItem ? foodItem.name : currentFoodId;

      setPalateCount(prev => prev + 1);
      
      syncToDiary('game', 'Mapa de Paladar', `Experimentou novo alimento: ${foodName}`);

      onUpdate({
        ...profile,
        palateMap: Array.from(new Set([...(profile.palateMap || []), currentFoodId])),
        xp: (profile.xp || 0) + 20
      });

      alert(`🥦 Alimento experimentado! (${foodName}) (${palateCount + 1}/10 para o selo Explorador)`);
    } catch (error) {
      console.error("Erro ao registrar paladar:", error);
    }
  };

  const handleStepCounter = () => {
    try {
      setStepCount(prev => prev + 10);
      syncToDiary('game', 'Contador de Passos', `+10 passos (Total: ${stepCount + 10})`);
      onUpdate({
        ...profile,
        xp: (profile.xp || 0) + 5
      });
      alert(`👣 Mais 10 passos registrados! Total: ${stepCount + 10} passos.`);
    } catch (error) {
      console.error("Erro ao registrar passos:", error);
    }
  };
  
  const toggleTask = (taskId: string, xp: number, taskTitle: string) => {
    const isCompleted = completedTasks.includes(taskId);
    let newCompleted = [...completedTasks];
    let newXp = (profile.xp || 0);

    if (isCompleted) {
      newCompleted = newCompleted.filter(id => id !== taskId);
      newXp -= xp;
    } else {
      newCompleted.push(taskId);
      newXp += xp;
      syncToDiary('task', taskTitle);
    }

    onUpdate({
      ...profile,
      completedTasks: newCompleted,
      xp: newXp
    });
  };

  const completeMission = (missionId: string, xp: number, missionTitle: string) => {
    if (completedMissions.includes(missionId)) return;
    
    syncToDiary('mission', missionTitle);

    onUpdate({
      ...profile,
      completedMissions: [...completedMissions, missionId],
      xp: (profile.xp || 0) + xp
    });
    
    // CASULO NOTIFICATION - Cancel mission notification
    cancelNotification(2).catch(err => console.warn('Erro ao cancelar notificação:', err));
  };

  const handlePhotoTrigger = async () => {
    if (!step.cameraTrigger || completedPhotos.includes(step.cameraTrigger.id)) return;
    
    try {
      // Pedir permissão primeiro
      const permission = await Camera.requestPermissions({ permissions: ['camera'] });
      if (permission.camera !== 'granted') {
        alert('⚠️ Permissão de câmera necessária para registrar marcos.');
        return;
      }

      // Abrir câmera
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Prompt,
        saveToGallery: true,
        promptLabelHeader: 'Registrar Marco',
        promptLabelPhoto: 'Tirar Foto',
        promptLabelPicture: 'Escolher da Galeria'
      });

      if (image.base64String) {
        playCameraClick();
        
        // Processar imagem para o diário (1080px)
        const diaryPhotoUrl = await processImageForUpload(`data:image/jpeg;base64,${image.base64String}`, 1080);
        
        // Processar imagem para o mapa (200px - super leve)
        const mapPhotoUrl = await processImageForUpload(`data:image/jpeg;base64,${image.base64String}`, 200);
        
        const today = new Date().toISOString().split('T')[0];
        const entries = profile.diaryEntries || {};
        const currentEntry = entries[today] || {
          date: today,
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

        const achievements = {
          tasks: currentEntry.journeyAchievements?.tasks || [],
          missions: currentEntry.journeyAchievements?.missions || [],
          photos: currentEntry.journeyAchievements?.photos || [],
          games: currentEntry.journeyAchievements?.games || [],
          books: currentEntry.journeyAchievements?.books || [],
          activities: currentEntry.journeyAchievements?.activities || [],
          familyTalks: currentEntry.journeyAchievements?.familyTalks || []
        };
        achievements.photos = [...new Set([...achievements.photos, step.cameraTrigger.title])];

        const updatedEntry: DiaryEntry = {
          ...currentEntry,
          journeyAchievements: achievements,
          activities: {
            ...currentEntry.activities,
            highlight: step.cameraTrigger.title,
            creative: {
              ...currentEntry.activities.creative,
              photo: diaryPhotoUrl
            }
          }
        };

        const relatedPhotoIds = [step.id];
        if (step.cameraTrigger?.id) {
          relatedPhotoIds.push(step.cameraTrigger.id);
        }

        const updatedMilestonePhotos = {
          ...(profile.milestonePhotos || {}),
          [step.id]: mapPhotoUrl
        };
        if (step.cameraTrigger?.id) {
          updatedMilestonePhotos[step.cameraTrigger.id] = mapPhotoUrl;
        }

        onUpdate({
          ...profile,
          completedPhotos: [...new Set([...(profile.completedPhotos || []), ...relatedPhotoIds])],
          milestonePhotos: updatedMilestonePhotos,
          xp: (profile.xp || 0) + 500,
          diaryEntries: {
            ...entries,
            [today]: updatedEntry
          }
        });

        alert("✨ Marco registrado no seu Álbum de Memórias e no Mapa!");
        
        if (onNavigate) {
          onNavigate('album');
          onClose();
        }
      }
    } catch (error: any) {
      if (error.message !== 'User cancelled photos app') {
        console.error("Erro ao registrar marco:", error);
        alert("Não foi possível registrar a foto no momento.");
      }
    }
  };

  const handleInteractionAction = (action: 'complete' | 'diary') => {
    if (!selectedInteraction) return;
    const { type, item } = selectedInteraction;
    
    if (action === 'complete') {
      const listKey = 
        type === 'book' ? 'completedBooks' : 
        type === 'activity' ? 'completedActivities' : 
        type === 'talk' ? 'completedFamilyTalks' :
        type === 'objective' ? 'completedObjectives' : 
        type === 'knowledge' ? 'completedKnowledge' : 'completedTasks';
        
      const currentList = profile[listKey] || [];
      
      if (!currentList.includes(item.id)) {
        const updatedProfile = {
          ...profile,
          [listKey]: [...currentList, item.id],
          xp: (profile.xp || 0) + (type === 'talk' ? 100 : type === 'objective' || type === 'knowledge' ? 30 : type === 'task' ? item.xpReward : 50)
        };

        if (type === 'talk' && interactionResponse) {
          updatedProfile.familyTalkResponses = {
            ...(profile.familyTalkResponses || {}),
            [item.id]: interactionResponse
          };
        }

        onUpdate(updatedProfile);
        alert(`${
          type === 'book' ? 'Livro lido' : 
          type === 'activity' ? 'Atividade praticada' : 
          type === 'talk' ? 'Papo concluído' : 
          type === 'task' ? 'Tarefa concluída' : 'Conteúdo lido'
        }! +${type === 'talk' ? 100 : type === 'objective' || type === 'knowledge' ? 30 : type === 'task' ? item.xpReward : 50} XP`);
      }
    } else if (action === 'diary') {
      const confirmDiary = window.confirm(`Deseja relatar "${item.title}" no seu diário agora?`);
      if (confirmDiary) {
        if (type === 'talk') {
          syncToDiary('talk', item.title, interactionResponse || 'Papo em família realizado.', true);
        } else if (type === 'book') {
          syncToDiary('book', item.title, `Leitura do livro: ${item.title}`, true);
        } else if (type === 'objective') {
          syncToDiary('objective', item.title, `Objetivo da fase: ${item.title}`, true);
        } else if (type === 'knowledge') {
          syncToDiary('knowledge', item.title, item.content, true);
        } else if (type === 'task') {
          syncToDiary('task', item.title, undefined, true);
        } else {
          syncToDiary('activity', item.title, `Prática da atividade: ${item.title}`, true);
        }
      }
    }
    
    setSelectedInteraction(null);
    setInteractionResponse('');
  };

  const isCompleted = (type: InteractionType, id: string) => {
    const listKey = 
      type === 'book' ? 'completedBooks' : 
      type === 'activity' ? 'completedActivities' : 
      type === 'talk' ? 'completedFamilyTalks' :
      type === 'objective' ? 'completedObjectives' : 
      type === 'knowledge' ? 'completedKnowledge' : 'completedTasks';
      
    const list = profile[listKey] || [];
    return list.includes(id);
  };

  const calculateProgress = () => {
    const allTasks = step.modules.flatMap(m => m.tasks);
    let totalItems = allTasks.length;
    let completedItems = allTasks.filter(t => completedTasks.includes(t.id)).length;

    if (step.mission) {
      totalItems += 1;
      if (completedMissions.includes(step.mission.id)) completedItems += 1;
    }

    if (totalItems === 0) return 100;
    return Math.round((completedItems / totalItems) * 100);
  };

  return (
    <div className="fixed inset-0 z-[1000] bg-slate-900/90 backdrop-blur-xl flex items-end sm:items-center justify-center p-0 sm:p-6 animate-fade-in">
      <div className="bg-[#FDFCF0] w-full max-w-md h-[92vh] sm:h-auto sm:max-h-[85vh] rounded-t-[3.5rem] sm:rounded-[4rem] flex flex-col overflow-hidden shadow-2xl animate-slide-up border-b-[12px] border-slate-100">
        
        {/* Header Colorido */}
        <div className={`bg-${step.color}-400 p-10 text-white relative overflow-hidden shrink-0`}>
           <button onClick={onClose} className="absolute top-8 right-8 bg-black/20 w-10 h-10 rounded-full flex items-center justify-center text-xl font-black">✕</button>
           <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
           
           <div className="flex items-center gap-6">
              <span className="text-6xl bg-white/20 p-4 rounded-[2rem] backdrop-blur-md shadow-xl">{step.icon}</span>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70">{step.ageRange}</p>
                  <span className="bg-black/20 px-2 py-0.5 rounded text-[8px] font-black uppercase">Dia {step.dayId}</span>
                </div>
                <h2 className="text-3xl font-black tracking-tighter leading-none mb-2">{step.title}</h2>
                <div className="h-2 w-32 bg-black/10 rounded-full overflow-hidden border border-white/10">
                   <div className="h-full bg-white transition-all duration-1000" style={{ width: `${calculateProgress()}%` }}></div>
                </div>
              </div>
           </div>
        </div>

        {/* Conteúdo Scrollable */}
        <div className="flex-1 overflow-y-auto p-8 space-y-10 no-scrollbar pb-24">
           
           {/* INTERACTIVE MODULES PER PILLAR */}
           {/* Pilar 4: Amamentação */}
           {(step.id === 'step_s4_1' || step.id === 'step_s4_2') && (
             <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-[2.5rem] border-2 border-pink-100 space-y-4">
               <div className="flex items-center gap-2 mb-2">
                 <span className="text-2xl">🤱</span>
                 <div>
                   <h3 className="text-xs font-black uppercase text-pink-700 tracking-wider">Simulador de Pega Animada</h3>
                   <p className="text-[10px] text-pink-500 font-bold">Aprenda a posição ergonomicamente correta em 4 passos</p>
                 </div>
               </div>
               <BreastfeedingAnimationView />
             </div>
           )}

           {/* Pilar 5: Introdução Alimentar e Sabores */}
           {(step.id === 'step_s5_1' || step.id === 'step_s5_2') && (
             <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-[2.5rem] border-2 border-amber-100 space-y-4">
               <div className="flex items-center justify-between mb-2">
                 <div className="flex items-center gap-2">
                   <span className="text-2xl">🥑</span>
                   <div>
                     <h3 className="text-xs font-black uppercase text-amber-800 tracking-wider">Cortes Seguros & Guia BLW</h3>
                     <p className="text-[10px] text-amber-600 font-bold">Simulador de engasgo x reflexo de Gagging</p>
                   </div>
                 </div>
                 {onNavigate && (
                   <button
                     onClick={() => {
                       onClose();
                       onNavigate('feeding');
                     }}
                     className="px-3 py-1.5 bg-amber-500 text-white font-black text-[10px] uppercase rounded-xl shadow hover:bg-amber-600 transition-all"
                   >
                     Aba Sabores ➔
                   </button>
                 )}
               </div>
               <FoodBLWAnimationView food={FOOD_DATABASE[0]} />
             </div>
           )}

           {/* Pilar 6: Segurança & RG Digital */}
           {(step.id === 'step_s6_1' || step.id === 'step_s6_2') && (
             <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-[2.5rem] border-2 border-sky-100 space-y-4">
               <div className="flex items-center gap-2 mb-2">
                 <span className="text-2xl">🪪</span>
                 <div>
                   <h3 className="text-xs font-black uppercase text-sky-800 tracking-wider">Cartão RG Digital do Bebê</h3>
                   <p className="text-[10px] text-sky-600 font-bold">Cartão de emergência com foto, tipo sanguíneo e envio rápido</p>
                 </div>
               </div>
               <BabyRGDigitalCard profile={profile} onUpdateProfile={onUpdate} isPremium={isPremium} />
             </div>
           )}

           {/* Pilar 7: Rede de Apoio & Madrinha Virtual */}
           {(step.id === 'step_s7_1' || step.id === 'step_s7_2') && (
             <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-[2.5rem] border-2 border-purple-100 space-y-4">
               <div className="flex items-center gap-2 mb-2">
                 <span className="text-2xl">💖</span>
                 <div>
                   <h3 className="text-xs font-black uppercase text-purple-800 tracking-wider">Madrinha Virtual & Fórum de Mães</h3>
                   <p className="text-[10px] text-purple-600 font-bold">Rede de acolhimento 24h sem julgamentos</p>
                 </div>
               </div>
               <MadrinhaVirtualModal onClose={() => {}} />
             </div>
           )}

           {/* Pilar 8: Maturidade Parental */}
           {(step.id === 'step_s8_1' || step.id === 'step_s8_2') && (
             <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-[2.5rem] border-2 border-yellow-200 space-y-4">
               <div className="flex items-center gap-2 mb-2">
                 <span className="text-2xl">🎓</span>
                 <div>
                   <h3 className="text-xs font-black uppercase text-amber-900 tracking-wider">Certificado de Maturidade Parental</h3>
                   <p className="text-[10px] text-amber-700 font-bold">Diploma oficial dos 1.000 Dias com Selo de Ouro</p>
                 </div>
               </div>
               <ParentalCertificateModal profile={profile} isPremium={isPremium} onClose={() => {}} />
             </div>
           )}
           
           {/* OBJETIVOS */}
           {step.objectives && step.objectives.length > 0 && (
             <div 
               className={`bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-50 cursor-pointer hover:border-indigo-100 transition-all ${isCompleted('objective', step.id + '_obj') ? 'opacity-60' : ''}`}
               onClick={() => setSelectedInteraction({ type: 'objective', item: { id: step.id + '_obj', title: 'Objetivo: ' + step.title, content: step.objectives![0] } })}
             >
               <div className="flex justify-between items-center mb-4">
                 <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                   Objetivo da Fase
                 </h4>
                 {isCompleted('objective', step.id + '_obj') && <CheckCircle2 className="w-3 h-3 text-emerald-500" />}
               </div>
               <p className="text-sm font-bold text-slate-700 leading-relaxed">
                 {step.objectives[0]}
               </p>
             </div>
           )}

           {/* PILAR DE CONHECIMENTO */}
           {step.knowledgePillar && (
             <div 
               className={`bg-white p-6 rounded-[2.5rem] border-2 border-slate-50 shadow-sm space-y-3 cursor-pointer hover:border-indigo-100 transition-all ${isCompleted('knowledge', step.id + '_know') ? 'opacity-60' : ''}`}
               onClick={() => setSelectedInteraction({ type: 'knowledge', item: { id: step.id + '_know', title: step.knowledgePillar!.title, content: step.knowledgePillar!.content } })}
             >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">📚</span>
                    <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">{step.knowledgePillar.title}</h3>
                  </div>
                  {isCompleted('knowledge', step.id + '_know') && <CheckCircle2 className="w-3 h-3 text-emerald-500" />}
                </div>
                <p className="text-xs font-bold text-slate-500 leading-relaxed">{step.knowledgePillar.content}</p>
             </div>
           )}

           {/* MINI-GAMES */}
           {step.miniGames && step.miniGames.length > 0 && (
             <div className="space-y-4">
               <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-2 flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                 Mini-Games & Simuladores
               </h4>
               <div className="grid grid-cols-1 gap-3">
                 {step.miniGames.map(game => (
                   <button 
                     key={game.id}
                     onClick={() => {
                       if (game.id === 'g1_1') handleVibration();
                       else if (game.id === 'g1_3') handleChute();
                       else if (game.id === 'g2_1') handleSleepWheel();
                       else if (game.id === 'g2_2') handleForceBar();
                       else if (game.id === 'g2_3') handlePalateMap();
                       else if (game.id === 'g2_4') handleStepCounter();
                       else alert(`Iniciando mini-game: ${game.title}`);
                     }}
                     className="flex items-center gap-4 p-4 bg-white rounded-3xl border-2 border-slate-50 hover:border-amber-100 transition-all group text-left"
                   >
                     <span className="text-3xl p-2 bg-amber-50 rounded-2xl group-hover:scale-110 transition-transform">{game.icon}</span>
                     <div>
                       <p className="text-xs font-black text-slate-800 uppercase">{game.title}</p>
                       <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{game.description}</p>
                       {game.id === 'g1_3' && chuteCount > 0 && (
                         <p className="text-[10px] font-black text-amber-600 mt-1">CHUTES: {chuteCount}</p>
                       )}
                       {game.id === 'g2_1' && (
                         <p className="text-[10px] font-black text-amber-600 mt-1">STATUS: {isNapping ? 'DORMINDO 😴' : 'ACORDADO ☀️'}</p>
                       )}
                       {game.id === 'g2_2' && forceBar > 0 && (
                         <div className="mt-1 h-1 w-20 bg-slate-100 rounded-full overflow-hidden">
                           <div className="h-full bg-amber-400 transition-all" style={{ width: `${forceBar}%` }} />
                         </div>
                       )}
                       {game.id === 'g2_3' && palateCount > 0 && (
                         <p className="text-[10px] font-black text-amber-600 mt-1">PALADAR: {palateCount}/10</p>
                       )}
                       {game.id === 'g2_4' && stepCount > 0 && (
                         <p className="text-[10px] font-black text-amber-600 mt-1">PASSOS: {stepCount}</p>
                       )}
                     </div>
                   </button>
                 ))}
               </div>
             </div>
           )}

           {/* MISSÃO DIÁRIA */}
           {step.mission && (
             <div className="space-y-4">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">Missão Interativa</h3>
                <div className={`p-6 rounded-[2.5rem] border-2 transition-all ${completedMissions.includes(step.mission.id) ? 'bg-emerald-50 border-emerald-100' : 'bg-white border-slate-50 shadow-sm'}`}>
                   <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h4 className={`text-sm font-black ${completedMissions.includes(step.mission.id) ? 'text-emerald-600' : 'text-slate-800'}`}>{step.mission.title}</h4>
                        <p className="text-[10px] font-bold text-slate-400 mt-1">{step.mission.description}</p>
                      </div>
                      <span className="text-2xl">⚡</span>
                   </div>
                   {!completedMissions.includes(step.mission.id) ? (
                     <button 
                       onClick={() => completeMission(step.mission!.id, step.mission!.xpReward, step.mission!.title)}
                       className={`w-full py-3 bg-${step.color}-400 text-white font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-all`}
                     >
                       Concluir Missão (+{step.mission.xpReward} XP)
                     </button>
                   ) : (
                     <div className="flex items-center gap-2 text-emerald-500 font-black text-[10px] uppercase">
                        <span>✓ MISSÃO CONCLUÍDA</span>
                     </div>
                   )}
                </div>
             </div>
           )}

           {/* GATILHO DE CÂMERA (MARCO) - CASULO PHOTO FIX */}
           {step.cameraTrigger && (
             <div className="space-y-4">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">Marco da Jornada</h3>
                <div className={`p-6 rounded-[2.5rem] border-2 border-dashed transition-all ${completedPhotos.includes(step.cameraTrigger.id) ? 'bg-indigo-50 border-indigo-200' : 'bg-white border-slate-200 shadow-sm'}`}>
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-2xl">✨</div>
                      <div className="flex-1">
                        <h4 className="text-sm font-black text-slate-800">{step.cameraTrigger.title}</h4>
                        <p className="text-[10px] font-bold text-slate-400">{step.cameraTrigger.description}</p>
                      </div>
                   </div>
                   {!completedPhotos.includes(step.cameraTrigger.id) ? (
                     <button 
                       onClick={handlePhotoTrigger}
                       className="w-full py-4 bg-slate-800 text-white font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 active:scale-95 transition-all"
                     >
                       Concluir Marco no Álbum ✨
                     </button>
                   ) : (
                     <div className="flex items-center gap-2 text-indigo-500 font-black text-[10px] uppercase">
                        <span>✓ MARCO REGISTRADO NO ÁLBUM (+500 XP)</span>
                     </div>
                   )}
                </div>
             </div>
           )}

           {/* EXPERIÊNCIA PREMIUM CASULO */}
           <div className="space-y-6 pt-6 border-t border-slate-100">
              <div className="flex items-center justify-between px-2">
                <div className="flex flex-col">
                  <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
                    Biblioteca em Expansão
                  </h3>
                  <div className="flex flex-col gap-0.5 mt-1">
                    <p className="text-[8px] font-black text-amber-500 uppercase tracking-widest">Experiência Premium Casulo</p>
                  </div>
                </div>
                <div className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">Premium ✨</div>
              </div>

              {!isPremium ? (
                <div className="px-2">
                  <PremiumCard 
                    title="Sugestões Pedagógicas" 
                    description="Libere livros, atividades e temas de conversa exclusivos para esta fase do seu bebê." 
                  />
                </div>
              ) : isLoadingEdu ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4 bg-white rounded-[3rem] border border-slate-50">
                  <div className="relative">
                    <div className="w-12 h-12 border-4 border-amber-100 rounded-full"></div>
                    <div className="absolute top-0 left-0 w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sincronizando Biblioteca...</p>
                </div>
              ) : rotatedContent ? (
                <div className="grid grid-cols-1 gap-4">
                  {/* Biblioteca Casulo */}
                  <div className="bg-white rounded-[2.5rem] p-5 border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4 px-1">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-indigo-50 rounded-lg flex items-center justify-center">
                          <Book className="w-3.5 h-3.5 text-indigo-400" />
                        </div>
                        <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Biblioteca Casulo</h4>
                      </div>
                      <span className="text-[8px] font-black text-slate-300 uppercase">{rotatedContent.books.length} Itens</span>
                    </div>
                    
                    <div className="divide-y divide-slate-50">
                      {rotatedContent.books.map((book) => (
                        <div 
                          key={book.id} 
                          className={`py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors rounded-xl px-2 ${isCompleted('book', book.id) ? 'opacity-60' : ''}`}
                          onClick={() => setSelectedInteraction({ type: 'book', item: book })}
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className={`text-[6px] font-black px-1.5 py-0.5 rounded-md uppercase tracking-widest ${book.type === 'pedagogical' ? 'bg-indigo-50 text-indigo-500' : 'bg-rose-50 text-rose-500'}`}>
                                {book.type === 'pedagogical' ? 'Pedagógico' : 'Literário'}
                              </span>
                              <p className="text-[8px] font-bold text-slate-400 truncate">{book.author}</p>
                              {isCompleted('book', book.id) && <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />}
                            </div>
                            <h5 className="text-[11px] font-black text-slate-800 leading-tight truncate">{book.title}</h5>
                          </div>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFavorite('book', book.id);
                            }}
                            className={`p-2 rounded-lg transition-all ${isFavorite('book', book.id) ? 'text-rose-500 bg-rose-50' : 'text-slate-200 hover:text-slate-400'}`}
                          >
                            <Heart className={`w-3.5 h-3.5 ${isFavorite('book', book.id) ? 'fill-rose-500' : ''}`} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Atividade do Marco */}
                  <div className="bg-white rounded-[2.5rem] p-5 border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4 px-1">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-emerald-50 rounded-lg flex items-center justify-center">
                          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Atividade do Marco</h4>
                      </div>
                      <span className="text-[8px] font-black text-slate-300 uppercase">{rotatedContent.activities.length} Itens</span>
                    </div>

                    <div className="space-y-2">
                      {rotatedContent.activities.map((activity) => (
                        <div 
                          key={activity.id} 
                          className={`bg-slate-50/50 rounded-2xl p-3 border border-slate-100 cursor-pointer hover:border-emerald-200 transition-all ${isCompleted('activity', activity.id) ? 'opacity-60' : ''}`}
                          onClick={() => setSelectedInteraction({ type: 'activity', item: activity })}
                        >
                          <div className="flex justify-between items-start gap-3 mb-1.5">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-0.5">
                                <p className="text-[7px] font-black text-emerald-600 uppercase tracking-widest">
                                  {activity.type === 'motor' ? 'Motor' : 'Cognitivo'}
                                </p>
                                {isCompleted('activity', activity.id) && <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />}
                              </div>
                              <h5 className="text-[11px] font-black text-slate-800 leading-tight">{activity.title}</h5>
                            </div>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleFavorite('activity', activity.id);
                              }}
                              className={`p-1.5 rounded-lg transition-all ${isFavorite('activity', activity.id) ? 'text-rose-500 bg-rose-50' : 'text-slate-200 hover:text-slate-400'}`}
                            >
                              <Heart className={`w-3.5 h-3.5 ${isFavorite('activity', activity.id) ? 'fill-rose-500' : ''}`} />
                            </button>
                          </div>
                          <p className="text-[9px] font-bold text-slate-500 leading-relaxed line-clamp-1 mb-2">{activity.description}</p>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedGuide(activity);
                            }}
                            className="w-full py-1.5 bg-slate-900 text-white text-[8px] font-black uppercase tracking-widest rounded-lg hover:bg-slate-800 transition-colors"
                          >
                            Ver Guia
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Papo em Família */}
                  <div className="bg-white rounded-[2.5rem] p-5 border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4 px-1">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-rose-50 rounded-lg flex items-center justify-center">
                          <MessageCircle className="w-3.5 h-3.5 text-rose-400" />
                        </div>
                        <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Papo em Família</h4>
                      </div>
                      <span className="text-[8px] font-black text-slate-300 uppercase">{rotatedContent.familyTalks.length} Temas</span>
                    </div>

                    <div className="space-y-2">
                      {rotatedContent.familyTalks.map((talk) => (
                        <div 
                          key={talk.id} 
                          className={`bg-rose-50/30 rounded-2xl p-4 border border-rose-100/50 cursor-pointer hover:bg-rose-50/50 transition-all ${isCompleted('talk', talk.id) ? 'border-rose-300' : ''}`}
                          onClick={() => {
                            setSelectedInteraction({ type: 'talk', item: talk });
                            setInteractionResponse(profile.familyTalkResponses?.[talk.id] || '');
                          }}
                        >
                          <div className="flex justify-between items-start mb-1">
                            <h5 className="text-[11px] font-black text-rose-600 leading-tight">{talk.title}</h5>
                            {isCompleted('talk', talk.id) && <CheckCircle2 className="w-3 h-3 text-rose-500" />}
                          </div>
                          <p className="text-[9px] font-bold text-rose-800/70 leading-relaxed line-clamp-2">{talk.description}</p>
                          {isCompleted('talk', talk.id) && profile.familyTalkResponses?.[talk.id] && (
                            <div className="mt-2 p-2 bg-white/50 rounded-lg border border-rose-100">
                              <p className="text-[8px] font-bold text-rose-900/60 italic line-clamp-1">"{profile.familyTalkResponses[talk.id]}"</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>


                </div>
              ) : (
                <div className="bg-white p-10 rounded-[3.5rem] border-2 border-dashed border-slate-100 text-center space-y-4 shadow-inner">
                  <div>
                    <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest">Biblioteca em Expansão</h4>
                  </div>
                </div>
              )}
           </div>

            {/* Módulos Originais (Se houver) */}
            {step.modules.length > 0 && (
              step.modules.map(mod => (
                <div key={mod.id} className="space-y-4">
                   <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">{mod.title}</h3>
                   <div className="bg-white rounded-[2.5rem] border-2 border-slate-50 shadow-sm overflow-hidden">
                      {mod.tasks.map(task => {
                         const isDone = isCompleted('task', task.id);
                         return (
                           <button 
                             key={task.id} 
                             onClick={() => setSelectedInteraction({ type: 'task', item: task })}
                             className={`w-full p-6 flex items-center gap-4 text-left border-b border-slate-50 last:border-0 transition-all active:bg-slate-50 ${isDone ? 'opacity-50' : ''}`}
                           >
                              <div className={`w-8 h-8 rounded-full border-4 flex items-center justify-center transition-all ${isDone ? 'bg-emerald-400 border-emerald-200' : 'border-slate-100 bg-slate-50'}`}>
                                 {isDone && <span className="text-white text-xs font-black">✓</span>}
                              </div>
                              <div className="flex-1">
                                 <p className={`text-xs font-black ${isDone ? 'line-through text-slate-400' : 'text-slate-800'}`}>{task.title}</p>
                                 <p className="text-[9px] font-bold text-emerald-500 uppercase">+{task.xpReward} XP</p>
                              </div>
                           </button>
                         );
                      })}
                   </div>
                </div>
              ))
            )}

           {/* MÚSICA E AMBIENTE */}
           <div className="bg-white p-6 rounded-[2.5rem] border-2 border-slate-50 shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🎵</span>
                <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">Trilha Sonora / Música</h3>
              </div>
              <input 
                type="text"
                placeholder="Qual música marcou este momento?"
                className="w-full p-3 bg-slate-50 rounded-xl border border-slate-100 text-[10px] font-bold text-slate-600 focus:outline-none focus:border-indigo-200"
                onBlur={(e) => {
                  if (e.target.value) {
                    syncToDiary('game', 'Música do Momento', e.target.value);
                  }
                }}
              />
           </div>

           {/* Badges da Fase */}
           <div className="space-y-4">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">Conquistas da Fase</h3>
              <div className="grid grid-cols-2 gap-3">
                 {step.badges.map((b, i) => (
                   <div key={i} className="p-4 bg-white rounded-2xl border border-slate-100 flex items-center gap-3 shadow-sm grayscale opacity-30">
                      <span className="text-xl">🏆</span>
                      <span className="text-[9px] font-black text-slate-800 uppercase leading-tight">{b}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Footer com CTA */}
        <div className="p-6 bg-white border-t border-slate-100 shrink-0">
           <button onClick={onClose} className={`w-full py-5 bg-${step.color}-400 text-white font-black rounded-3xl shadow-xl active:scale-95 transition-all uppercase text-xs tracking-widest`}>
              Continuar Jornada ➔
           </button>
        </div>
      </div>

      {/* Modal de Guia de Atividade */}
      {selectedGuide && (
        <div className="fixed inset-0 z-[1100] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-6 animate-fade-in">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="bg-white w-full max-w-sm rounded-[3rem] overflow-hidden shadow-2xl flex flex-col max-h-[80vh] border-b-[10px] border-slate-100"
          >
            <div className={`bg-emerald-400 p-8 text-white relative`}>
              <button 
                onClick={() => setSelectedGuide(null)}
                className="absolute top-6 right-6 bg-black/20 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black"
              >
                ✕
              </button>
              <div className="flex items-center gap-4">
                <span className="text-4xl bg-white/20 p-3 rounded-2xl backdrop-blur-md">{selectedGuide.icon}</span>
                <div>
                  <p className="text-[8px] font-black uppercase tracking-widest opacity-70">Guia de Atividade</p>
                  <h3 className="text-xl font-black tracking-tight">{selectedGuide.title}</h3>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar">
              {/* Materiais */}
              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Materiais Necessários
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {selectedGuide.materials && selectedGuide.materials.length > 0 ? (
                    selectedGuide.materials.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <span className="text-emerald-500 text-[10px]">●</span>
                        <p className="text-[11px] font-bold text-slate-600">{item}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-[10px] font-bold text-slate-400 italic">Nenhum material específico necessário.</p>
                  )}
                </div>
              </div>

              {/* Como Fazer */}
              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  Como Fazer
                </h4>
                <div className="space-y-3">
                  {selectedGuide.howToDo && selectedGuide.howToDo.length > 0 ? (
                    selectedGuide.howToDo.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <span className="flex-shrink-0 w-6 h-6 bg-indigo-50 text-indigo-500 rounded-full flex items-center justify-center text-[10px] font-black border border-indigo-100">
                          {i + 1}
                        </span>
                        <p className="text-[11px] font-bold text-slate-600 leading-relaxed pt-1">{step}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-[10px] font-bold text-slate-400 italic">Siga as instruções básicas na descrição.</p>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-100 flex gap-3">
              <button 
                onClick={() => setSelectedGuide(null)}
                className="flex-1 py-4 bg-slate-900 text-white font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-all"
              >
                Entendi, vamos lá! 🚀
              </button>
              <button 
                onClick={() => {
                  setSelectedInteraction({ type: 'activity', item: selectedGuide });
                  setSelectedGuide(null);
                }}
                className="flex-1 py-4 bg-emerald-500 text-white font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-all"
              >
                Praticar Agora ✨
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Modal de Interação (Marcar como Lido/Praticado/Relatar) */}
      <AnimatePresence>
        {selectedInteraction && (
          <div className="fixed inset-0 z-[1200] bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-6">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-xs rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col border-b-[8px] border-slate-100"
            >
              <div className={`p-6 text-center space-y-4 ${
                selectedInteraction.type === 'book' ? 'bg-indigo-50' : 
                selectedInteraction.type === 'activity' ? 'bg-emerald-50' : 'bg-rose-50'
              }`}>
                <div className="mx-auto w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl">
                  {selectedInteraction.type === 'book' ? '📖' : 
                   selectedInteraction.type === 'activity' ? '✨' : 
                   selectedInteraction.type === 'talk' ? '💬' : 
                   selectedInteraction.type === 'objective' ? '🎯' : 
                   selectedInteraction.type === 'task' ? '✅' : '📚'}
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-800 leading-tight">{selectedInteraction.item.title}</h4>
                  <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">
                    {selectedInteraction.type === 'book' ? 'Leitura Sugerida' : 
                     selectedInteraction.type === 'activity' ? 'Atividade do Marco' : 
                     selectedInteraction.type === 'talk' ? 'Papo em Família' : 
                     selectedInteraction.type === 'objective' ? 'Objetivo da Fase' : 
                     selectedInteraction.type === 'task' ? 'Tarefa da Jornada' : 'Pilar de Conhecimento'}
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-3">
                {selectedInteraction.type === 'talk' && (
                  <div className="space-y-2 mb-4">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <PenLine className="w-3 h-3" />
                      Sua Resposta / Reflexão
                    </label>
                    <textarea 
                      value={interactionResponse}
                      onChange={(e) => setInteractionResponse(e.target.value)}
                      placeholder="O que vocês conversaram sobre isso?"
                      className="w-full p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] font-bold text-slate-600 focus:outline-none focus:border-rose-200 min-h-[80px] resize-none"
                    />
                  </div>
                )}

                <button 
                  onClick={() => handleInteractionAction('complete')}
                  className={`w-full py-3 rounded-2xl flex items-center justify-center gap-2 font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 ${
                    isCompleted(selectedInteraction.type, selectedInteraction.item.id)
                    ? 'bg-slate-100 text-slate-400 cursor-default'
                    : 'bg-slate-900 text-white shadow-lg'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  {isCompleted(selectedInteraction.type, selectedInteraction.item.id) 
                    ? (selectedInteraction.type === 'book' ? 'Já Lido' : selectedInteraction.type === 'activity' ? 'Já Praticado' : selectedInteraction.type === 'talk' ? 'Já Respondido' : selectedInteraction.type === 'task' ? 'Já Concluído' : 'Já Lido')
                    : (selectedInteraction.type === 'book' ? 'Marcar como Lido' : selectedInteraction.type === 'activity' ? 'Marcar como Praticado' : selectedInteraction.type === 'talk' ? 'Salvar Resposta' : selectedInteraction.type === 'task' ? 'Marcar como Concluído' : 'Marcar como Lido')}
                </button>

                <button 
                  onClick={() => handleInteractionAction('diary')}
                  className="w-full py-3 bg-white border-2 border-slate-100 text-slate-600 rounded-2xl flex items-center justify-center gap-2 font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  Relatar no Diário
                </button>

                <button 
                  onClick={() => {
                    setSelectedInteraction(null);
                    setInteractionResponse('');
                  }}
                  className="w-full py-2 text-slate-400 font-black text-[10px] uppercase tracking-widest"
                >
                  Cancelar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhaseModal;
