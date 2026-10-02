import React, { useState, useMemo } from 'react';
import { Recipe, ChildProfile, FoodItem, FoodCategory } from '../types';
import { RECIPES, FOOD_DATABASE } from '../constants';
import { CHEF_BOOK_RECIPES } from '../recipes_data';
import { usePremium } from '../contexts/PremiumContext';
import PremiumCard from './PremiumCard';

interface MealPlannerFinanceProps {
  profile: ChildProfile;
  onUpdateProfile: (updated: ChildProfile) => void;
  themeColor: string;
}

const MealPlannerFinance: React.FC<MealPlannerFinanceProps> = ({ profile, onUpdateProfile, themeColor }) => {
  const { isPremium } = usePremium();
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [focusFoods, setFocusFoods] = useState<string[]>([]);
  const [isGenerated, setIsGenerated] = useState(false);
  const [activeCategory, setActiveCategory] = useState<FoodCategory>('FRUTAS');

  // Filtra todos os alimentos disponíveis no banco de dados para o foco semanal
  const categoriesList: FoodCategory[] = ['FRUTAS', 'VEGETAIS', 'PROTEINAS'];
  
  const filteredAvailableFoods = useMemo(() => {
    return FOOD_DATABASE.filter(f => f.category === activeCategory);
  }, [activeCategory]);

  // Lógica de Geração de Cardápio baseada nos Alimentos Foco (Melhorada para equilibrar grupos)
  const weeklyMenu = useMemo(() => {
    if (!isGenerated) return [];
    
    const ALL_BOOK_RECIPES = [...RECIPES, ...CHEF_BOOK_RECIPES];

    return ['CAFÉ DA MANHÃ', 'ALMOÇO', 'JANTAR'].map(cat => {
      // Tenta encontrar receitas que contenham os alimentos foco selecionados
      const candidates = ALL_BOOK_RECIPES.filter(r => 
        r.category === cat && 
        (focusFoods.length === 0 || focusFoods.some(f => 
          r.ingredients.some(ri => ri.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .includes(f.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")))
        ))
      );
      
      // Sorteio inteligente entre candidatos ou pega uma receita nutritiva padrão da categoria
      if (candidates.length > 0) {
        return candidates[Math.floor(Math.random() * candidates.length)];
      }
      return ALL_BOOK_RECIPES.find(r => r.category === cat);
    });
  }, [isGenerated, focusFoods]);

  // Cálculo de Lista de Compras e Orçamento (Base Nutricional e Financeira)
  const planData = useMemo(() => {
    if (weeklyMenu.length === 0) return { list: [], total: 0 };

    const multiplier = (adults * 1.0) + (children * 0.5);
    const ingredientsMap: Record<string, number> = {};
    
    weeklyMenu.forEach(recipe => {
      if (!recipe) return;
      recipe.ingredients.forEach(ing => {
        // Extração de quantidades e nomes para consolidação
        const match = ing.match(/(\d+)/);
        const qty = match ? parseInt(match[0]) : 1;
        const name = ing.replace(/(\d+)/, '').trim().toLowerCase();
        ingredientsMap[name] = (ingredientsMap[name] || 0) + (qty * multiplier);
      });
    });

    const list = Object.entries(ingredientsMap).map(([name, qty]) => `${Math.ceil(qty)}x ${name}`);
    // Estimativa Financeira: Multiplicador de R$ 18 por refeição/adulto (ajustado inflação e variedade)
    const total = weeklyMenu.length * 7 * 18 * multiplier / 3; 

    return { list, total };
  }, [weeklyMenu, adults, children]);

  const handleSaveToFinance = () => {
    const newExpense = {
      id: `plan_${Date.now()}`,
      amount: planData.total,
      category: 'ALIMENTAÇÃO',
      date: new Date().toISOString(),
      recurrence: 'none' as const,
      description: `Planejamento IA: ${focusFoods.join(', ') || 'Variado'}`
    };

    const currentExpenses = (profile as any).financialExpenses || [];
    const updatedProfile = {
      ...profile,
      financialExpenses: [newExpense, ...currentExpenses]
    };

    onUpdateProfile(updatedProfile as any);
    alert("Orçamento previsto lançado com sucesso na Planilha de Gastos! 💰");
  };

  const exportToWhatsApp = () => {
    const text = `*PLANEJAMENTO SEMANAL - CASULO*\n\n` +
      `👪 *Família:* ${adults} Adultos, ${children} Criança(s)\n` +
      `🥗 *Foco:* ${focusFoods.length > 0 ? focusFoods.join(', ') : 'Nutrição Variada'}\n\n` +
      `🥘 *Cardápio:* \n${weeklyMenu.map(r => `• ${r?.category}: ${r?.name}`).join('\n')}\n\n` +
      `🛒 *Lista de Compras:* \n${planData.list.slice(0, 15).join('\n')}${planData.list.length > 15 ? '\n... (ver app para lista completa)' : ''}\n\n` +
      `💰 *Orçamento Estimado:* R$ ${planData.total.toFixed(2)}`;
    
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-white p-6 rounded-[2.5rem] border-4 border-slate-100 shadow-xl space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center text-2xl shadow-inner">🗓️</div>
        <div>
          <h3 className="text-xl font-black text-slate-800 tracking-tight">Planejador de Cardápio</h3>
          <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest leading-none">Saúde & Economia</p>
        </div>
      </div>

      {!isGenerated ? (
        <div className="space-y-6 animate-fade-in">
          {/* Seletor de Família */}
          <div className="bg-slate-50 p-5 rounded-[2rem] border-2 border-slate-100 grid grid-cols-2 gap-4">
             <div className="space-y-1">
                <p className="text-[9px] font-black text-slate-400 uppercase text-center">Adultos</p>
                <div className="flex items-center justify-around bg-white rounded-xl py-1 shadow-sm">
                   <button onClick={() => setAdults(Math.max(1, adults-1))} className="w-8 h-8 font-black text-rose-400 text-lg">-</button>
                   <span className="font-black text-slate-800">{adults}</span>
                   <button onClick={() => setAdults(adults+1)} className="w-8 h-8 font-black text-emerald-400 text-lg">+</button>
                </div>
             </div>
             <div className="space-y-1">
                <p className="text-[9px] font-black text-slate-400 uppercase text-center">Crianças</p>
                <div className="flex items-center justify-around bg-white rounded-xl py-1 shadow-sm">
                   <button onClick={() => setChildren(Math.max(0, children-1))} className="w-8 h-8 font-black text-rose-400 text-lg">-</button>
                   <span className="font-black text-slate-800">{children}</span>
                   <button onClick={() => setChildren(children+1)} className="w-8 h-8 font-black text-emerald-400 text-lg">+</button>
                </div>
             </div>
          </div>

          {/* Filtros de Categoria para Foco Semanal */}
          <div className="space-y-3">
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Escolha os Grupos Foco</p>
             <div className="flex gap-1 overflow-x-auto no-scrollbar bg-slate-100 p-1 rounded-2xl">
                {categoriesList.map(cat => (
                   <button 
                    key={cat} 
                    onClick={() => setActiveCategory(cat)}
                    className={`whitespace-nowrap px-4 py-2 rounded-xl text-[9px] font-black transition-all ${activeCategory === cat ? 'bg-white text-rose-500 shadow-sm' : 'text-slate-400'}`}
                   >
                     {cat}
                   </button>
                ))}
             </div>
             
             <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-2 no-scrollbar bg-white p-4 rounded-[2rem] border-2 border-slate-50">
                {filteredAvailableFoods.map(food => (
                  <button 
                    key={food.id}
                    onClick={() => setFocusFoods(prev => prev.includes(food.name) ? prev.filter(f => f !== food.name) : [...prev, food.name])}
                    className={`px-3 py-2 rounded-full text-[9px] font-black border-2 transition-all flex items-center gap-2 ${focusFoods.includes(food.name) ? 'bg-rose-400 border-rose-500 text-white shadow-md' : 'bg-slate-50 border-slate-100 text-slate-400'}`}
                  >
                    <span>{food.icon}</span>
                    {food.name.toUpperCase()}
                  </button>
                ))}
             </div>
          </div>

          {!isPremium ? (
            <PremiumCard 
              title="Planejador Inteligente" 
              description="Libere o planejamento semanal completo com lista de compras automática e previsão de gastos para toda a família!" 
            />
          ) : (
            <button 
              onClick={() => setIsGenerated(true)}
              className="w-full py-5 bg-slate-800 text-white font-black rounded-[2rem] shadow-xl active:scale-95 transition-all border-b-8 border-black/20"
            >
              GERAR PLANEJAMENTO COMPLETO
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-6 animate-slide-up">
          <div className="bg-emerald-50 p-6 rounded-[2.5rem] border-2 border-emerald-100 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-100/50 rounded-full translate-x-1/2 -translate-y-1/2"></div>
             <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-1">Previsão de Gasto Semanal</p>
             <h4 className="text-4xl font-black text-slate-800">R$ {planData.total.toFixed(2)}</h4>
             <p className="text-[9px] text-emerald-500 font-bold mt-2">Cálculo baseado em {adults}A + {children}C</p>
          </div>

          <div className="space-y-3">
             <div className="flex justify-between items-center px-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Cardápio Sugerido</p>
                <button onClick={() => setIsGenerated(false)} className="text-[10px] font-black text-rose-400 underline">Ajustar Alimentos</button>
             </div>
             {weeklyMenu.map((r, i) => r && (
                <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-[1.5rem] border-2 border-slate-50 shadow-sm">
                   <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-inner ${r.category === 'ALMOÇO' ? 'bg-amber-100' : r.category === 'JANTAR' ? 'bg-indigo-100' : 'bg-rose-100'}`}>
                     {r.category === 'ALMOÇO' ? '🌞' : r.category === 'JANTAR' ? '🌙' : '☕'}
                   </div>
                   <div className="flex-1">
                      <p className="text-[8px] font-black text-slate-300 uppercase leading-none mb-1">{r.category}</p>
                      <p className="text-xs font-black text-slate-800 leading-tight">{r.name}</p>
                   </div>
                   <span className="text-[10px]">➔</span>
                </div>
             ))}
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
             <button onClick={handleSaveToFinance} className="py-4 bg-emerald-400 text-white font-black rounded-2xl text-[9px] uppercase shadow-lg active:scale-95 border-b-4 border-emerald-600">
                LANÇAR ORÇAMENTO
             </button>
             <button onClick={exportToWhatsApp} className="py-4 bg-blue-400 text-white font-black rounded-2xl text-[9px] uppercase shadow-lg active:scale-95 border-b-4 border-blue-600">
                LISTA NO WHATSAPP
             </button>
          </div>
          
          <button 
            onClick={() => {
              const listText = planData.list.join('\n');
              navigator.clipboard.writeText(listText);
              alert("Lista copiada com sucesso! Pronta para o Keep.");
            }} 
            className="w-full py-3 bg-slate-100 text-slate-400 font-black rounded-xl text-[8px] uppercase tracking-widest hover:bg-slate-200"
          >
             COPIAR LISTA PARA GOOGLE KEEP
          </button>
        </div>
      )}
    </div>
  );
};

export default MealPlannerFinance;