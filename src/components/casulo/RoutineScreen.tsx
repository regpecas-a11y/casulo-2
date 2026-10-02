import React, { useState, useEffect } from 'react';
import {
  Utensils,
  Clock,
  ShoppingCart,
  Plus,
  Trash2,
  Check,
  Volume2,
  VolumeX,
  Play,
  Pause,
  AlertCircle,
  Sparkles,
  CloudRain,
  Wind,
  Waves,
  Heart,
  Timer,
} from 'lucide-react';
import { GroceryItem } from '../../types/casulo';
import { QUICK_RECIPE_DATA } from '../../data/mockCasuloData';

interface RoutineScreenProps {
  groceryItems: GroceryItem[];
  onToggleGroceryItem: (id: string) => void;
  onAddGroceryItem: (name: string, category?: string) => void;
  onRemoveGroceryItem: (id: string) => void;
  onAddRecipeIngredientsToGroceries: (ingredients: string[]) => void;
  isPlayingSound: boolean;
  onTogglePlaySound: (preset: 'chuva' | 'rosa' | 'brisa' | 'mar') => void;
}

export const RoutineScreen: React.FC<RoutineScreenProps> = ({
  groceryItems,
  onToggleGroceryItem,
  onAddGroceryItem,
  onRemoveGroceryItem,
  onAddRecipeIngredientsToGroceries,
  isPlayingSound,
  onTogglePlaySound,
}) => {
  const [newGroceryText, setNewGroceryText] = useState('');
  const [soundPreset, setSoundPreset] = useState<'rosa' | 'chuva' | 'brisa' | 'mar'>('rosa');
  const [timerMinutes, setTimerMinutes] = useState<15 | 30 | 60>(30);
  const [remainingSeconds, setRemainingSeconds] = useState(30 * 60);
  const [showAddedRecipeFeedback, setShowAddedRecipeFeedback] = useState(false);

  // Countdown timer simulation when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlayingSound) {
      interval = setInterval(() => {
        setRemainingSeconds((prev) => {
          if (prev <= 1) {
            onTogglePlaySound(soundPreset);
            return timerMinutes * 60;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlayingSound, soundPreset, timerMinutes, onTogglePlaySound]);

  const handleTimerChange = (minutes: 15 | 30 | 60) => {
    setTimerMinutes(minutes);
    setRemainingSeconds(minutes * 60);
  };

  const handleAddGrocery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGroceryText.trim()) return;
    onAddGroceryItem(newGroceryText.trim());
    setNewGroceryText('');
  };

  const handleAddRecipeIngredients = () => {
    onAddRecipeIngredientsToGroceries(QUICK_RECIPE_DATA.ingredients);
    setShowAddedRecipeFeedback(true);
    setTimeout(() => setShowAddedRecipeFeedback(false), 3000);
  };

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 pb-24">
      {/* 1. Warm Header */}
      <section className="bg-white rounded-3xl p-5 border border-[#EAE5DC] shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#466352] bg-[#E8EFE9] px-2.5 py-0.5 rounded-md inline-block mb-1.5">
              Rotina com Leveza
            </span>
            <h1 className="font-display font-bold text-2xl text-[#242220] tracking-tight">
              Apoio Prático do Dia
            </h1>
            <p className="text-xs text-[#716C65] mt-1 leading-relaxed max-w-md">
              Refeição rápida, compras simplificadas e som ambiente para momentos de tranquilidade.
            </p>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-[#FAF0EC] text-[#9A462C] flex items-center justify-center shrink-0">
            <Utensils className="w-5 h-5 text-[#C8684A]" />
          </div>
        </div>
      </section>

      {/* 2. Quick 20-min Single Pot Meal Suggestion */}
      <section className="bg-white rounded-3xl p-5 border border-[#EAE5DC] shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EAE5DC] pb-3">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-[#9A462C] bg-[#FAF0EC] px-2.5 py-0.5 rounded-full">
                {QUICK_RECIPE_DATA.tag}
              </span>
              <span className="text-xs text-[#716C65] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#C8684A]" />
                {QUICK_RECIPE_DATA.prepTime}
              </span>
              <span className="text-xs text-[#716C65]">· {QUICK_RECIPE_DATA.servings}</span>
            </div>
            <h2 className="font-display font-bold text-lg text-[#242220] mt-1.5">
              {QUICK_RECIPE_DATA.title}
            </h2>
            <p className="text-xs text-[#716C65] mt-0.5">
              {QUICK_RECIPE_DATA.subtitle}
            </p>
          </div>

          <button
            onClick={handleAddRecipeIngredients}
            className="px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] hover:border-[#466352] text-xs font-semibold text-[#2C4A35] hover:bg-[#E8EFE9] transition-colors flex items-center gap-1.5 shrink-0 self-start sm:self-auto min-h-[44px]"
          >
            <ShoppingCart className="w-4 h-4 text-[#466352]" />
            <span>Adicionar ingredientes à lista</span>
          </button>
        </div>

        {showAddedRecipeFeedback && (
          <div className="p-3 bg-[#E8EFE9] text-[#2C4A35] rounded-2xl text-xs font-medium flex items-center gap-2 animate-fade-in">
            <Check className="w-4 h-4 text-[#466352] stroke-[3]" />
            <span>Ingredientes da receita foram adicionados à sua lista de compras!</span>
          </div>
        )}

        {/* Recipe Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] space-y-2">
            <p className="font-semibold text-xs text-[#242220] uppercase tracking-wide">
              Ingredientes simples
            </p>
            <ul className="space-y-1.5 text-[#5F5B56]">
              {QUICK_RECIPE_DATA.ingredients.map((ing, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[#466352] font-bold">•</span>
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] space-y-2">
            <p className="font-semibold text-xs text-[#242220] uppercase tracking-wide">
              Como fazer (passo a passo leve)
            </p>
            <ol className="space-y-1.5 text-[#5F5B56]">
              {QUICK_RECIPE_DATA.steps.map((st, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <strong className="text-[#C8684A] font-bold shrink-0">{idx + 1}.</strong>
                  <span>{st}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Anti-guilt reminder on meal prep */}
        <div className="p-3 bg-[#FAF8F5] rounded-2xl border border-[#EAE5DC] text-[11px] text-[#5F5B56] leading-relaxed flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-[#466352] shrink-0 mt-0.5" />
          <span>{QUICK_RECIPE_DATA.antiGuiltNote}</span>
        </div>
      </section>

      {/* 3. Interactive Grocery List */}
      <section className="bg-white rounded-3xl p-5 border border-[#EAE5DC] shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-3">
          <div>
            <h2 className="font-display font-semibold text-base text-[#242220]">
              Lista de Compras da Semana
            </h2>
            <p className="text-xs text-[#716C65]">
              Marque o que já comprou ou adicione itens necessários.
            </p>
          </div>
          <span className="text-xs font-semibold text-[#5F5B56] bg-[#FAF8F5] border border-[#EAE5DC] px-2.5 py-1 rounded-lg">
            {groceryItems.filter((i) => i.checked).length} de {groceryItems.length} comprados
          </span>
        </div>

        {/* Add item input */}
        <form onSubmit={handleAddGrocery} className="flex gap-2">
          <input
            type="text"
            value={newGroceryText}
            onChange={(e) => setNewGroceryText(e.target.value)}
            placeholder="Ex: Frutas para lanche da tarde..."
            className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] text-xs text-[#242220] placeholder-[#A09A92] focus:outline-none focus:ring-2 focus:ring-[#466352] min-h-[44px]"
          />
          <button
            type="submit"
            className="px-4 py-2.5 rounded-xl bg-[#466352] hover:bg-[#385142] text-white text-xs font-semibold flex items-center gap-1 shrink-0 min-h-[44px]"
            aria-label="Adicionar item à lista de compras"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Adicionar</span>
          </button>
        </form>

        {/* Items List */}
        <div className="space-y-2">
          {groceryItems.map((item) => (
            <div
              key={item.id}
              className={`p-3 rounded-2xl border transition-all flex items-center justify-between gap-3 min-h-[50px] ${
                item.checked
                  ? 'bg-[#F5F2EA]/60 border-[#DCD5C4]'
                  : 'bg-[#FAF8F5] border-[#EAE5DC]'
              }`}
            >
              <button
                type="button"
                onClick={() => onToggleGroceryItem(item.id)}
                className="flex items-center gap-3 min-w-0 flex-1 text-left"
              >
                <div
                  className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                    item.checked
                      ? 'bg-[#466352] border-[#466352] text-white'
                      : 'border-[#CCC5B8] bg-white'
                  }`}
                >
                  {item.checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <div className="min-w-0">
                  <p
                    className={`text-xs font-medium truncate ${
                      item.checked
                        ? 'line-through text-[#716C65]'
                        : 'text-[#242220]'
                    }`}
                  >
                    {item.name}
                  </p>
                  <p className="text-[10px] text-[#716C65]">{item.category}</p>
                </div>
              </button>

              <button
                onClick={() => onRemoveGroceryItem(item.id)}
                className="p-2 text-[#A09A92] hover:text-[#C8684A] rounded-lg focus:outline-none min-h-[38px] min-w-[38px] flex items-center justify-center"
                aria-label={`Remover item ${item.name}`}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Visual White Noise & Calming Sound Player */}
      <section className="bg-white rounded-3xl p-5 border border-[#EAE5DC] shadow-sm space-y-4">
        <div className="flex items-start justify-between gap-3 border-b border-[#EAE5DC] pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#55477E] bg-[#F2EFF9] px-2.5 py-0.5 rounded-full">
                Ambiente Relaxante
              </span>
              {isPlayingSound && (
                <span className="text-[11px] font-semibold text-[#2C4A35] flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#466352] animate-ping" />
                  Reproduzindo ({formatTimer(remainingSeconds)})
                </span>
              )}
            </div>
            <h2 className="font-display font-bold text-lg text-[#242220] mt-1.5">
              Player de Ruído Calmante
            </h2>
            <p className="text-xs text-[#716C65] mt-0.5">
              Frequências suaves para desacelerar o ambiente da casa ou relaxar antes do descanso.
            </p>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-[#F2EFF9] text-[#55477E] flex items-center justify-center shrink-0">
            <Volume2 className="w-5 h-5 text-[#756AA3]" />
          </div>
        </div>

        {/* Ambient Sound Mode Presets */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { id: 'rosa' as const, label: 'Ruído Rosa', desc: 'Acolhedor & estável', icon: Heart },
            { id: 'chuva' as const, label: 'Chuva Suave', desc: 'Gotas na folhagem', icon: CloudRain },
            { id: 'brisa' as const, label: 'Brisa de Janela', desc: 'Vento tranquilo', icon: Wind },
            { id: 'mar' as const, label: 'Mar Calmo', desc: 'Ondas lentas', icon: Waves },
          ].map((preset) => {
            const isSelected = soundPreset === preset.id;
            const Icon = preset.icon;

            return (
              <button
                key={preset.id}
                onClick={() => {
                  setSoundPreset(preset.id);
                  if (isPlayingSound) {
                    onTogglePlaySound(preset.id);
                  }
                }}
                className={`p-3 rounded-2xl border text-left transition-all min-h-[64px] flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#E8EFE9] border-[#466352] ring-1 ring-[#466352]'
                    : 'bg-[#FAF8F5] border-[#EAE5DC] hover:border-[#DCD5C4]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#466352]' : 'text-[#716C65]'}`} />
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#466352] stroke-[3]" />}
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#242220]">{preset.label}</p>
                  <p className="text-[10px] text-[#716C65]">{preset.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Player Controls & Animated Frequency Visualizer */}
        <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Animated sound bars */}
          <div className="flex items-center gap-3">
            <div className="flex items-end gap-1 h-8 px-2 bg-white rounded-lg border border-[#EAE5DC]">
              {[40, 70, 50, 85, 60, 45, 75, 90, 65, 50].map((h, i) => (
                <div
                  key={i}
                  className={`w-1 rounded-full bg-[#466352] transition-all duration-300 ${
                    isPlayingSound ? 'opacity-90' : 'opacity-25'
                  }`}
                  style={{
                    height: isPlayingSound ? `${(h * (i % 2 === 0 ? 0.9 : 1.1))}%` : '20%',
                    animation: isPlayingSound ? `soft-bounce 1.${i + 2}s ease-in-out infinite` : 'none'
                  }}
                />
              ))}
            </div>

            <div>
              <p className="text-xs font-semibold text-[#242220]">
                {isPlayingSound ? 'Tocando em volume suave' : 'Player pausado'}
              </p>
              <p className="text-[11px] text-[#716C65]">
                {isPlayingSound ? `Desliga automaticamente em ${formatTimer(remainingSeconds)}` : 'Toque em reproduzir para iniciar'}
              </p>
            </div>
          </div>

          {/* Main Play / Pause Button */}
          <button
            onClick={() => onTogglePlaySound(soundPreset)}
            className={`h-12 px-6 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98] min-h-[48px] ${
              isPlayingSound
                ? 'bg-[#C8684A] text-white hover:bg-[#B5593C]'
                : 'bg-[#466352] text-white hover:bg-[#385142]'
            }`}
            aria-label={isPlayingSound ? 'Pausar som calmante' : 'Reproduzir som calmante'}
          >
            {isPlayingSound ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                <span>Pausar som</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>Reproduzir</span>
              </>
            )}
          </button>
        </div>

        {/* Timer Selector */}
        <div className="flex items-center justify-between gap-2 pt-1">
          <span className="text-xs font-medium text-[#5F5B56] flex items-center gap-1">
            <Timer className="w-3.5 h-3.5 text-[#716C65]" />
            Temporizador:
          </span>
          <div className="flex gap-1.5">
            {[15, 30, 60].map((mins) => (
              <button
                key={mins}
                onClick={() => handleTimerChange(mins as 15 | 30 | 60)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors min-h-[38px] ${
                  timerMinutes === mins
                    ? 'bg-[#466352] text-white shadow-xs'
                    : 'bg-[#FAF8F5] text-[#5F5B56] border border-[#EAE5DC] hover:bg-[#F5F2EA]'
                }`}
              >
                {mins} min
              </button>
            ))}
          </div>
        </div>

        {/* Mandatory Regulatory & Safe Sleep Disclaimer */}
        <div className="p-3 bg-[#FAF0EC] border border-[#E8C5B8] rounded-2xl flex items-start gap-2.5 text-[#9A462C]">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <p className="text-xs leading-relaxed">
            <strong>Nota de cuidado e uso seguro:</strong> Recurso demonstrativo. Use com cuidado e consulte profissionais para orientações sobre sono seguro. O Casulo não recomenda volumes específicos nem substitui aconselhamento pediátrico.
          </p>
        </div>
      </section>
    </div>
  );
};
