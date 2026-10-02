
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Search, Filter, ChevronRight, Utensils, Clock, Info, Star, Calendar, CheckCircle2 } from 'lucide-react';
import { playBiteSound, playPositiveChime } from '../sounds';
import { Recipe, ChildProfile, DiaryEntry } from '../types';
import { usePremium } from '../contexts/PremiumContext';
import PremiumCard from './PremiumCard';

interface RecipeBookProps {
  recipes: Recipe[];
  profile: ChildProfile;
  onUpdateProfile: (profile: ChildProfile) => void;
  onNavigate?: (tab: 'journey' | 'feeding' | 'kitchen' | 'book' | 'diary' | 'album' | 'finances', section?: string) => void;
}

const RecipeBook: React.FC<RecipeBookProps> = ({ recipes, profile, onUpdateProfile, onNavigate }) => {
  const { isPremium } = usePremium();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('TODAS');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [visibleCount, setVisibleCount] = useState(20);

  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  
  const handlePlanMeal = (recipeId: string) => {
    const currentMealPlan = profile.mealPlan || {};
    const dayPlan = currentMealPlan[today] || [];
    
    if (dayPlan.includes(recipeId)) return;

    const updatedProfile = {
      ...profile,
      mealPlan: {
        ...currentMealPlan,
        [today]: [...dayPlan, recipeId]
      }
    };
    onUpdateProfile(updatedProfile);
    alert('📅 Receita adicionada ao seu cronograma de hoje!');
  };

  const handleMarkAsCooked = (recipeId: string) => {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;

    const diaryEntries = profile.diaryEntries ? { ...profile.diaryEntries } : {};
    const entry = diaryEntries[today] || {
      date: today,
      sleep: { bedtime: '', wakeTime: '', quality: 5, nightWakes: [], naps: [], notes: '' },
      feeding: [],
      hygiene: { changes: [], bathTime: '', bathTemp: '', massage: false, oralHygiene: { morning: false, night: false, tongue: false }, notes: '' },
      health: { temp: { value: '', time: '', location: '' }, meds: [], vaccines: [], symptoms: [], notes: '' },
      school: { attended: false, entry: '', exit: '', activities: '', homework: { subject: '', done: 'no', time: 0, difficulty: '' }, behavior: { mood: '', social: '', attention: '', teacherNote: '' }, media: [] },
      activities: { physical: { type: '', duration: 0, location: '', liked: true }, creative: { type: '', duration: 0, photo: null }, reading: { titles: [], duration: 0, liked: true }, screen: { tv: 0, mobile: 0, goal: 60 }, highlight: '' },
      mood: { general: 'Normal', bestMoment: { time: '', description: '' }, difficultMoment: { time: '', description: '', solution: '' }, tantrums: 0, communication: { words: [], phrases: [], music: '', question: '' } },
      shopping: { supermarket: [], pharmacy: [], clothing: [], stationery: [], reminders: [], futureCommitments: [] },
      parentNotes: { text: '', photos: [], tags: [], reflection: '', dayRating: 5, gratitude: '' },
      finance: { transactions: [], milestones: [] },
      kitchen: { cookedRecipes: [], mealPlan: [] }
    };

    if (!entry.kitchen) {
      entry.kitchen = { cookedRecipes: [], mealPlan: [] };
    }

    if (!entry.journeyAchievements) {
      entry.journeyAchievements = { tasks: [], missions: [], photos: [], games: [], books: [], activities: [], familyTalks: [] };
    }

    if (entry.kitchen.cookedRecipes.includes(recipeId)) return;

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    entry.kitchen.cookedRecipes.push(recipeId);
    
    // Add to Livro de Receitas in Diary
    if (!entry.journeyAchievements.recipes) {
      entry.journeyAchievements.recipes = [];
    }
    entry.journeyAchievements.recipes = [
      ...(entry.journeyAchievements.recipes || []),
      { title: recipe.name, timestamp }
    ];

    diaryEntries[today] = entry;

    onUpdateProfile({ ...profile, diaryEntries });
    playBiteSound(); // CASULO SOUND - Bite sound for cooked recipe
    
    const confirmNavigate = window.confirm('🍳 Receita registrada! Deseja relatar a experiência no Diário agora?');
    if (confirmNavigate && onNavigate) {
      onNavigate('diary', 'Livro de Receitas');
      setSelectedRecipe(null);
    }
  };

  const categories = ['TODAS', 'CAFÉ DA MANHÃ', 'ALMOÇO', 'CAFÉ DA TARDE', 'JANTAR', 'SOBREMESA'];

  const filteredRecipes = recipes.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'TODAS' || r.category === selectedCategory;
    const matchesPremium = isPremium || !r.isPremium;
    return matchesSearch && matchesCategory && matchesPremium;
  });

  const displayLimit = isPremium ? visibleCount : 5;
  const visibleRecipes = filteredRecipes.slice(0, displayLimit);

  return (
    <div className="space-y-6 pb-20">
      <div className="bg-emerald-600 p-8 rounded-[3rem] text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-6 text-6xl opacity-10 rotate-12">📚</div>
        <h2 className="text-2xl font-black mb-2">Livro de Receitas</h2>
        <p className="text-sm opacity-90 font-medium">500 receitas exclusivas do Chef Casulo para o crescimento saudável do seu pequeno.</p>
      </div>

      {/* Search and Filter */}
      <div className="space-y-4 px-2">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Buscar receita..." 
            className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-slate-100 shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none font-bold text-slate-700"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setVisibleCount(20); // Reset visible count on search
            }}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(20); // Reset visible count on category change
              }}
              className={`whitespace-nowrap px-6 py-3 rounded-full text-[10px] font-black transition-all border-2 ${selectedCategory === cat ? 'bg-emerald-50 border-emerald-500 text-emerald-600 shadow-sm' : 'bg-white border-slate-100 text-slate-400'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Recipe List */}
      <div className="grid grid-cols-1 gap-4 px-2">
        {visibleRecipes.map(recipe => (
          <motion.div 
            key={recipe.id}
            layoutId={recipe.id}
            onClick={() => setSelectedRecipe(recipe)}
            className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4 cursor-pointer hover:border-emerald-200 transition-colors"
          >
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-2xl">
              {recipe.category === 'CAFÉ DA MANHÃ' ? '🥣' : 
               recipe.category === 'ALMOÇO' ? '🍽️' : 
               recipe.category === 'CAFÉ DA TARDE' ? '🥪' : 
               recipe.category === 'JANTAR' ? '🍲' : '🍎'}
            </div>
            <div className="flex-1">
              <h3 className="font-black text-slate-800 text-sm leading-tight">{recipe.name}</h3>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full uppercase">{recipe.age}</span>
                <span className="text-[9px] font-black text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {recipe.prepTime}
                </span>
              </div>
            </div>
            <ChevronRight className="text-slate-300 w-5 h-5" />
          </motion.div>
        ))}

        {!isPremium && filteredRecipes.length > 5 && (
          <div className="mt-8">
            <PremiumCard 
              title="Biblioteca Completa" 
              description="Libere o acesso a mais de 500 receitas exclusivas do Chef Casulo, com filtros inteligentes e modo de preparo detalhado!" 
            />
          </div>
        )}

        {isPremium && visibleCount < filteredRecipes.length && (
          <button 
            onClick={() => setVisibleCount(prev => prev + 20)}
            className="w-full py-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-[10px] font-black text-slate-400 uppercase tracking-widest hover:bg-slate-100 transition-all mt-4"
          >
            Carregar mais receitas...
          </button>
        )}
      </div>

      {/* Recipe Detail Modal */}
      <AnimatePresence>
        {selectedRecipe && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4"
            onClick={() => setSelectedRecipe(null)}
          >
            <motion.div 
              layoutId={selectedRecipe.id}
              className="bg-[#FDFCF0] w-full max-w-md max-h-[90vh] overflow-y-auto rounded-[3rem] p-8 shadow-2xl space-y-8"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest">{selectedRecipe.category}</span>
                  <h2 className="text-3xl font-black text-slate-900 leading-tight">{selectedRecipe.name}</h2>
                </div>
                <button onClick={() => setSelectedRecipe(null)} className="p-2 bg-slate-100 rounded-full text-slate-400">✕</button>
              </div>

              <div className="flex gap-4">
                <div className="flex-1 bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                  <Clock className="w-5 h-5 text-emerald-500 mb-2" />
                  <span className="text-[9px] font-black text-slate-400 uppercase">Preparo</span>
                  <span className="text-sm font-black text-slate-800">{selectedRecipe.prepTime}</span>
                </div>
                <div className="flex-1 bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                  <Utensils className="w-5 h-5 text-emerald-500 mb-2" />
                  <span className="text-[9px] font-black text-slate-400 uppercase">Idade</span>
                  <span className="text-sm font-black text-slate-800">{selectedRecipe.age}</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-black text-slate-800 flex items-center gap-2">
                  <Book className="w-5 h-5 text-emerald-500" /> Ingredientes
                </h4>
                <ul className="space-y-2">
                  {selectedRecipe.ingredientsDetailed.map((ing, idx) => (
                    <li key={idx} className="flex justify-between items-center p-3 bg-white rounded-2xl border border-slate-50 shadow-sm">
                      <span className="text-sm font-bold text-slate-700">{ing.name}</span>
                      <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">{ing.householdMeasure}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-black text-slate-800 flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-emerald-500" /> Modo de Preparo
                </h4>
                <div className="space-y-4">
                  {Object.entries(selectedRecipe.instructionsDetailed).map(([key, steps]) => (
                    <div key={key} className="space-y-2">
                      <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{key}</h5>
                      <div className="space-y-3">
                        {(steps as string[]).map((step, idx) => (
                          <div key={idx} className="flex gap-4">
                            <span className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-[10px] font-black shrink-0">{idx + 1}</span>
                            <p className="text-sm font-medium text-slate-600 leading-relaxed">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 p-6 rounded-[2rem] text-white space-y-4">
                <h4 className="text-sm font-black uppercase tracking-widest opacity-60 flex items-center gap-2">
                  <Info className="w-4 h-4" /> Valor Nutricional
                </h4>
                <div className="grid grid-cols-4 gap-2">
                  <div className="text-center">
                    <div className="text-lg font-black">{selectedRecipe.nutrition.calories}</div>
                    <div className="text-[8px] font-black opacity-50 uppercase">Kcal</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-black">{selectedRecipe.nutrition.protein}g</div>
                    <div className="text-[8px] font-black opacity-50 uppercase">Prot</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-black">{selectedRecipe.nutrition.carbs}g</div>
                    <div className="text-[8px] font-black opacity-50 uppercase">Carb</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-black">{selectedRecipe.nutrition.fats}g</div>
                    <div className="text-[8px] font-black opacity-50 uppercase">Gord</div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-[2rem] border border-emerald-100">
                <h4 className="text-sm font-black text-emerald-800 flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4" /> Dica do Chef
                </h4>
                <p className="text-sm font-medium text-emerald-700 leading-relaxed">
                  {selectedRecipe.storageInfo} {selectedRecipe.freezingTips}
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <button 
                  onClick={() => handlePlanMeal(selectedRecipe.id)}
                  className="flex-1 bg-white border-2 border-emerald-500 text-emerald-600 py-4 rounded-2xl font-black text-xs flex items-center justify-center gap-2 active:scale-95 transition-all"
                >
                  <Calendar className="w-4 h-4" /> PLANEJAR HOJE
                </button>
                <button 
                  onClick={() => handleMarkAsCooked(selectedRecipe.id)}
                  className="flex-1 bg-emerald-500 text-white py-4 rounded-2xl font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-200 active:scale-95 transition-all"
                >
                  <CheckCircle2 className="w-4 h-4" /> JÁ FIZ! (DIÁRIO)
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RecipeBook;
