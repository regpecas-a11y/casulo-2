
import React, { useState } from 'react';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  isUserPremium: boolean;
  onUpgrade: () => void;
  initialExpanded?: boolean;
  onMarkAsCooked?: (recipeId: string) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, isUserPremium, onUpgrade, initialExpanded = false, onMarkAsCooked }) => {
  const [showDetails, setShowDetails] = useState(initialExpanded);
  const [servings, setServings] = useState(1);
  const showPremium = recipe.isPremium && !isUserPremium;

  const handleToggle = (e: React.MouseEvent) => {
    if (showPremium) {
      e.stopPropagation();
      onUpgrade();
    } else {
      setShowDetails(!showDetails);
    }
  };

  return (
    <div 
      className={`bg-white rounded-2xl overflow-hidden mb-6 transition-all duration-300 border border-slate-100 ${showDetails ? 'shadow-lg' : 'shadow-sm hover:shadow-md'}`}
    >
      {/* Cabeçalho do Card */}
      <div 
        className="p-6 cursor-pointer flex gap-4 items-center"
        onClick={handleToggle}
      >
        <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center text-3xl shadow-inner shrink-0">
          {recipe.category === 'CAFÉ DA MANHÃ' ? '☕' : recipe.category === 'ALMOÇO' ? '🌞' : recipe.category === 'CAFÉ DA TARDE' ? '🥪' : recipe.category === 'JANTAR' ? '🌙' : '🍰'}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-0.5">{recipe.category}</p>
          <h3 className="text-base font-black text-slate-800 leading-tight truncate">{recipe.name}</h3>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">⏱️ {recipe.prepTime}</span>
            <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">👶 {recipe.age}</span>
          </div>
        </div>
        {showPremium && (
          <div className="bg-amber-100 p-1.5 rounded-lg text-amber-600">💎</div>
        )}
      </div>

      {/* Detalhes Expandidos (Estilo Premium) */}
      {!showPremium && showDetails && (
        <div className="px-6 pb-8 border-t border-slate-50 animate-fade-in space-y-8">
          
          {/* Seletor de Pessoas (Cálculo Inteligente) */}
          <div className="mt-6 bg-slate-50 p-4 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Calculando para:</p>
              <p className="text-sm font-black text-slate-800">{servings} {servings === 1 ? 'Pessoa' : 'Pessoas'}</p>
            </div>
            <div className="flex bg-white rounded-xl border border-slate-100 p-1">
              <button 
                onClick={() => setServings(Math.max(1, servings - 1))}
                className="w-8 h-8 flex items-center justify-center font-black text-slate-400 hover:text-emerald-500"
              >-</button>
              <span className="w-8 h-8 flex items-center justify-center font-black text-slate-800">{servings}</span>
              <button 
                onClick={() => setServings(servings + 1)}
                className="w-8 h-8 flex items-center justify-center font-black text-slate-400 hover:text-emerald-500"
              >+</button>
            </div>
          </div>

          {/* Ingredientes Detalhados */}
          <section>
            <h4 className="text-[11px] font-black text-slate-800 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              Ingredientes & Medidas
            </h4>
            <div className="space-y-3">
              {recipe.ingredientsDetailed.map((ing, idx) => (
                <div key={idx} className="flex justify-between items-baseline gap-4 py-2 border-b border-slate-50 last:border-0">
                  <div className="flex-1">
                    <p className="text-xs font-black text-slate-700">{ing.name}</p>
                    <p className="text-[10px] text-slate-400 font-medium italic">({ing.householdMeasure})</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black text-emerald-600">{(ing.baseAmount * servings).toLocaleString()} {ing.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Modo de Preparo Profissional */}
          <section className="space-y-6">
            <h4 className="text-[11px] font-black text-slate-800 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              Modo de Preparo
            </h4>
            
            {/* Etapa 1: Preparação */}
            <div className="relative pl-6 border-l-2 border-emerald-100">
              <div className="absolute -left-1.5 top-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>
              <h5 className="text-[10px] font-black text-emerald-500 uppercase mb-2">1. Preparação</h5>
              <ul className="space-y-2">
                {recipe.instructionsDetailed.preparacao.map((step, i) => (
                  <li key={i} className="text-xs text-slate-600 leading-relaxed font-medium">{step}</li>
                ))}
              </ul>
            </div>

            {/* Etapa 2: Cozimento */}
            <div className="relative pl-6 border-l-2 border-emerald-100">
              <div className="absolute -left-1.5 top-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>
              <h5 className="text-[10px] font-black text-emerald-500 uppercase mb-2">2. Cozimento</h5>
              <ul className="space-y-2">
                {recipe.instructionsDetailed.cozimento.map((step, i) => (
                  <li key={i} className="text-xs text-slate-600 leading-relaxed font-medium">{step}</li>
                ))}
              </ul>
            </div>

            {/* Etapa 3: Finalização */}
            <div className="relative pl-6 border-l-2 border-emerald-100">
              <div className="absolute -left-1.5 top-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>
              <h5 className="text-[10px] font-black text-emerald-500 uppercase mb-2">3. Finalização</h5>
              <ul className="space-y-2">
                {recipe.instructionsDetailed.finalizacao.map((step, i) => (
                  <li key={i} className="text-xs text-slate-600 leading-relaxed font-medium">{step}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Dicas de Conservação */}
          <section className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100/50">
            <h4 className="text-[10px] font-black text-emerald-700 uppercase mb-2 flex items-center gap-2">❄️ Conservação</h4>
            <p className="text-[10px] text-emerald-600 font-bold leading-relaxed">{recipe.storageInfo}. {recipe.freezingTips}</p>
          </section>

          {onMarkAsCooked && (
            <button 
              onClick={(e) => { e.stopPropagation(); onMarkAsCooked(recipe.id); }}
              className="w-full py-5 bg-emerald-500 text-white font-black rounded-2xl shadow-lg shadow-emerald-100 flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              🍳 REGISTRAR NO DIÁRIO DE HOJE
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
