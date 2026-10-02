
import React, { useState, useMemo } from 'react';
import { playBiteSound } from '../sounds';
import { Recipe, ChildProfile, FoodCategory } from '../types';
import { FOOD_DATABASE, RECIPES } from '../constants';
import { CHEF_BOOK_RECIPES } from '../recipes_data';
import RecipeCard from './RecipeCard';
import { usePremium } from '../contexts/PremiumContext';
import PremiumCard from './PremiumCard';

interface RecipeEngineProps {
  profile: ChildProfile;
  childYears: number;
  onUpdateProfile: (profile: ChildProfile) => void;
}

const ALL_BOOK_RECIPES = [...RECIPES, ...CHEF_BOOK_RECIPES];

const CATEGORY_FILTERS: Recipe['category'][] = [
  'CAFÉ DA MANHÃ', 'ALMOÇO', 'CAFÉ DA TARDE', 'JANTAR', 'SOBREMESA'
];

const RecipeEngine: React.FC<RecipeEngineProps> = ({ profile, childYears, onUpdateProfile }) => {
  const { isPremium } = usePremium();
  const [mode, setMode] = useState<'AUTO' | 'FRIDGE' | 'PLAN'>('PLAN');
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [fridgeCategory, setFridgeCategory] = useState<FoodCategory>('FRUTAS');

  const today = new Date().toISOString().split('T')[0];

  const handleMarkAsCooked = (recipeId: string) => {
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

    if (entry.kitchen.cookedRecipes.includes(recipeId)) return;

    entry.kitchen.cookedRecipes.push(recipeId);
    diaryEntries[today] = entry;

    onUpdateProfile({ ...profile, diaryEntries });
    playBiteSound(); // CASULO SOUND - Bite sound for cooked recipe
    alert('🍳 Delícia! Receita registrada no diário de hoje.');
  };

  const plannedRecipes = useMemo(() => {
    const planIds = profile.mealPlan?.[today] || [];
    return planIds.map(id => ALL_BOOK_RECIPES.find(r => r.id === id)).filter(Boolean) as Recipe[];
  }, [profile.mealPlan, today]);

  // MODO A: Sugestão do Dia (Rotativo usando receitas do Livro)
  const dailySuggestion = useMemo(() => {
    // Usamos o dia do ano para garantir que cada dia seja diferente
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    return CATEGORY_FILTERS.map(cat => {
      const filtered = ALL_BOOK_RECIPES.filter(r => r.category === cat);
      if (filtered.length === 0) return null;
      return filtered[dayOfYear % filtered.length];
    }).filter(r => r !== null) as Recipe[];
  }, []);

  // MODO C: Geladeira Inteligente (Usando receitas do Livro)
  const fridgeMatches = useMemo(() => {
    if (selectedIngredients.length === 0) return [];
    return ALL_BOOK_RECIPES
      .filter(recipe => isPremium || !recipe.isPremium) // Usuários gratuitos acessam apenas receitas ‘Básicas’
      .map(recipe => {
        const matchCount = selectedIngredients.filter(ing => 
          recipe.ingredientsDetailed.some(recipeIng => 
            recipeIng.name.toLowerCase().includes(ing.toLowerCase())
          )
        ).length;
        return { recipe, matchCount };
      })
      .filter(item => item.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount)
      .slice(0, 20);
  }, [selectedIngredients, isPremium]);

  const toggleIngredient = (ing: string) => {
    setSelectedIngredients(prev => 
      prev.includes(ing) ? prev.filter(i => i !== ing) : [...prev, ing]
    );
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Seletor de Modo Minimalista */}
      <div className="bg-white p-1 rounded-2xl shadow-sm border border-slate-100 flex gap-1">
        <button 
          onClick={() => setMode('PLAN')}
          className={`flex-1 py-3 rounded-xl text-[10px] font-black transition-all ${mode === 'PLAN' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400'}`}
        >
          MEU PLANO 🗓️
        </button>
        <button 
          onClick={() => setMode('AUTO')}
          className={`flex-1 py-3 rounded-xl text-[10px] font-black transition-all ${mode === 'AUTO' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400'}`}
        >
          DIA A DIA 📅
        </button>
        <button 
          onClick={() => setMode('FRIDGE')}
          className={`flex-1 py-3 rounded-xl text-[10px] font-black transition-all ${mode === 'FRIDGE' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400'}`}
        >
          GELADEIRA 🥦
        </button>
      </div>

      {mode === 'PLAN' && (
        <div className="space-y-6">
          <div className="px-2">
            <h3 className="text-xl font-black text-slate-800">Meu Cronograma</h3>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Receitas que você planejou para hoje</p>
          </div>
          <div className="space-y-4">
            {plannedRecipes.length > 0 ? (
              plannedRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} isUserPremium={isPremium} onUpgrade={() => {}} onMarkAsCooked={handleMarkAsCooked} />
              ))
            ) : (
              <div className="text-center py-20 bg-emerald-50 rounded-[3rem] border-2 border-dashed border-emerald-200">
                <span className="text-4xl block mb-4">📚</span>
                <p className="text-xs font-black text-emerald-600 uppercase mb-2">Seu plano está vazio</p>
                <p className="text-[10px] font-medium text-emerald-400 px-10">Vá ao Livro de Receitas e adicione suas favoritas ao cronograma!</p>
              </div>
            )}
          </div>
        </div>
      )}

      {mode === 'AUTO' && (
        <div className="space-y-6">
          <div className="px-2">
            <h3 className="text-xl font-black text-slate-800">Cardápio de Hoje</h3>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Receitas selecionadas do seu Livro Casulo</p>
          </div>
          <div className="space-y-4">
            {dailySuggestion.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} isUserPremium={isPremium} onUpgrade={() => {}} onMarkAsCooked={handleMarkAsCooked} />
            ))}
          </div>
        </div>
      )}

      {mode === 'FRIDGE' && (
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-6">
             <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                {(['FRUTAS', 'VEGETAIS', 'PROTEINAS'] as FoodCategory[]).map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setFridgeCategory(cat)}
                    className={`px-4 py-2 rounded-full text-[9px] font-black border transition-all whitespace-nowrap ${fridgeCategory === cat ? 'bg-slate-900 border-slate-900 text-white shadow-sm' : 'bg-white border-slate-100 text-slate-400'}`}
                  >
                    {cat}
                  </button>
                ))}
             </div>

             <h3 className="text-lg font-black text-slate-800 leading-tight">Gere receitas do Livro com o que você tem em casa</h3>

             <div className="flex flex-wrap gap-2 max-h-64 overflow-y-auto no-scrollbar p-1">
                {FOOD_DATABASE.filter(f => f.category === fridgeCategory).map(food => (
                  <button 
                    key={food.id}
                    onClick={() => toggleIngredient(food.name)}
                    className={`px-4 py-2 rounded-full text-[10px] font-black border transition-all flex items-center gap-2 ${selectedIngredients.includes(food.name) ? 'bg-emerald-600 border-emerald-600 text-white' : 'bg-slate-50 border-slate-100 text-slate-500'}`}
                  >
                    <span>{food.icon}</span>
                    {food.name.toUpperCase()}
                  </button>
                ))}
             </div>
          </div>

          {!isPremium && (
            <div className="px-2">
              <PremiumCard 
                title="Catálogo Completo" 
                description="Libere o acesso a todas as combinações e receitas avançadas do Casulo Premium!" 
              />
            </div>
          )}

          <div className="space-y-4">
            {fridgeMatches.length > 0 ? (
              fridgeMatches.map(({ recipe }) => (
                <RecipeCard key={recipe.id} recipe={recipe} isUserPremium={isPremium} onUpgrade={() => {}} onMarkAsCooked={handleMarkAsCooked} />
              ))
            ) : (
              <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                <p className="text-sm font-black text-slate-300 uppercase">Selecione ingredientes acima</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeEngine;
