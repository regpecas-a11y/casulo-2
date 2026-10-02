
// CASULO ONBOARDING
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { saveUserProfile } from '../services/firebaseService';
import { playOnboardingComplete } from '../sounds';
import CasuloLogo from './CasuloLogo';

interface OnboardingProps {
  userId: string;
  onComplete: (profileData: any) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ userId, onComplete }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState<'boy' | 'girl' | null>(null);
  const [loading, setLoading] = useState(false);

  const slides = [
    {
      // SLIDE 1 — Boas-vindas
      emoji: "🐛",
      title: "Bem-vindo ao Casulo",
      text: "O app que acompanha cada momento da jornada da sua família."
    },
    {
      // SLIDE 2 — Jornada
      emoji: "🗺️",
      title: "Acompanhe cada fase",
      text: "Da gestação aos 8 anos — marcos, conquistas e memórias organizadas por era."
    },
    {
      // SLIDE 3 — Alimentação
      emoji: "🥦",
      title: "534 receitas para sua família",
      text: "BLW, Sabores, Livro de Receitas e Cozinha Inteligente com geladeira."
    },
    {
      // SLIDE 4 — Finanças
      emoji: "💳",
      title: "Cuide do futuro desde agora",
      text: "18 módulos de educação financeira para criar filhos que entendem de dinheiro."
    }
  ];

  const handleNext = () => {
    if (currentSlide < 4) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleSkip = () => {
    setCurrentSlide(4);
  };

  const handleFinish = async () => {
    if (!name || !birthDate || !gender) {
      // Use a simple console warn or handle it in UI
      console.warn("Campos obrigatórios faltando");
      return;
    }

    setLoading(true);
    try {
      const profileData = {
        id: Date.now().toString(), // Using timestamp as ID for local sync
        name,
        birthDate,
        gender,
        onboardingDone: true,
        xp: 0,
        currentStreak: 0,
        longestStreak: 0,
        lastDiaryDate: null,
        completedMissions: [],
        completedPhotos: [],
        completedTasks: [],
        diaryEntries: {},
        agendaEvents: [],
        subscription: {
          status: 'trial',
          startDate: new Date().toISOString()
        },
        alarms: {
          nap: { time: '13:00', enabled: false, notes: [] },
          meals: { time: '12:00', enabled: false, notes: [] },
          meds: { time: '08:00', enabled: false, notes: [] }
        },
        generalNotesList: [],
        shoppingList: [],
        birthReport: '',
        shoppingNotes: '',
        favorites: { books: [], activities: [] }
      };

      // CASULO ONBOARDING - Salva no Firestore dentro de um array de perfis
      await saveUserProfile(userId, { profiles: [profileData] });
      
      // CASULO SOUND - Play onboarding complete
      playOnboardingComplete();

      // CASULO ONBOARDING - Notifica App.tsx para atualizar estado local
      onComplete(profileData);
    } catch (error) {
      console.error("Error saving onboarding:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[3000] bg-[#FDFCF0] flex flex-col items-center justify-start pt-16 p-8 overflow-y-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="w-full max-w-sm flex flex-col items-center text-center space-y-8"
        >
          {currentSlide < 4 ? (
            <>
              {currentSlide === 0 && (
                <div className="flex justify-center mb-2">
                  <CasuloLogo size={120} />
                </div>
              )}
              {currentSlide !== 0 && (
                <div className="text-8xl animate-soft-bounce">{slides[currentSlide].emoji}</div>
              )}
              <div className="space-y-4">
                <h1 className="text-3xl font-black text-slate-800 tracking-tighter leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-sm font-bold text-slate-500 leading-relaxed">
                  {slides[currentSlide].text}
                </p>
              </div>
            </>
          ) : (
            // SLIDE 5 — Perfil da criança
            <div className="w-full space-y-8">
              <div className="text-8xl">👶</div>
              <div className="space-y-2">
                <h1 className="text-3xl font-black text-slate-800 tracking-tighter leading-tight">
                  Vamos começar?
                </h1>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Configure o perfil do seu pequeno
                </p>
              </div>

              <div className="space-y-4 text-left">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Nome do Bebê</label>
                  <input 
                    type="text" 
                    placeholder="Ex: Theo, Maya..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-5 bg-white rounded-2xl border-2 border-slate-100 font-black text-xs focus:border-rose-400 transition-all outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Data de Nascimento</label>
                  <input 
                    type="date" 
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full p-5 bg-white rounded-2xl border-2 border-slate-100 font-black text-xs focus:border-rose-400 transition-all outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Sexo</label>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setGender('boy')}
                      className={`flex-1 py-4 rounded-xl font-black text-[10px] uppercase transition-all ${gender === 'boy' ? 'bg-blue-400 text-white shadow-lg' : 'bg-white text-slate-300 border-2 border-slate-100'}`}
                    >
                      👦 Menino
                    </button>
                    <button 
                      onClick={() => setGender('girl')}
                      className={`flex-1 py-4 rounded-xl font-black text-[10px] uppercase transition-all ${gender === 'girl' ? 'bg-rose-400 text-white shadow-lg' : 'bg-white text-slate-300 border-2 border-slate-100'}`}
                    >
                      👧 Menina
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* FOOTER */}
      <div className="mt-8 w-full max-w-sm flex flex-col items-center space-y-4 pb-12">
        {/* Indicadores: ● ● ● ○ ○ */}
        <div className="flex gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div 
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-6 bg-slate-800' : 'w-1.5 bg-slate-200'}`}
            />
          ))}
        </div>

        <div className="w-full flex flex-col space-y-3">
          {currentSlide < 4 ? (
            <>
              <button 
                onClick={handleNext}
                className="w-full py-3.5 bg-slate-800 text-white font-black rounded-2xl shadow-lg active:scale-95 transition-all uppercase tracking-widest text-[9px] border-b-4 border-black/20"
              >
                Próximo →
              </button>
              <button 
                onClick={handleSkip}
                className="text-[9px] font-black text-slate-300 uppercase tracking-widest hover:text-slate-500 transition-colors"
              >
                Pular
              </button>
            </>
          ) : (
            <button 
              onClick={handleFinish}
              disabled={loading}
              className="w-full py-3.5 bg-rose-400 text-white font-black rounded-2xl shadow-lg active:scale-95 transition-all uppercase tracking-widest text-[9px] border-b-4 border-black/20 disabled:opacity-50"
            >
              {loading ? 'Preparando Casulo...' : 'Começar Jornada 🚀'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
