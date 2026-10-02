import React from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';
import { usePremium } from '../contexts/PremiumContext';

interface PremiumCardProps {
  title: string;
  description: string;
  onUpgrade?: () => void;
}

const PremiumCard: React.FC<PremiumCardProps> = ({ title, description, onUpgrade }) => {
  const { handlePurchase, isLoading } = usePremium();

  const handleUpgradeClick = () => {
    if (onUpgrade) {
      onUpgrade();
    } else {
      handlePurchase('annual');
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[3rem] text-center shadow-2xl border-4 border-amber-400/30 relative overflow-hidden group">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl group-hover:bg-amber-400/20 transition-all"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-400/10 rounded-full blur-2xl"></div>
      
      <div className="relative z-10">
        <div className="w-16 h-16 bg-amber-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-amber-400/30">
          <Sparkles className="w-8 h-8 text-amber-400 fill-amber-400 animate-pulse" />
        </div>
        
        <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight">{title}</h3>
        <p className="text-slate-400 text-xs font-medium leading-relaxed mb-8 px-4">
          {description}
        </p>
        
        <button 
          onClick={handleUpgradeClick}
          disabled={isLoading}
          className="w-full py-5 bg-amber-400 text-slate-900 font-black rounded-2xl shadow-[0_8px_0_0_#D97706] active:translate-y-1 active:shadow-none transition-all text-xs uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isLoading ? 'PROCESSANDO...' : (
            <>
              LIBERAR ACESSO PREMIUM <ChevronRight className="w-4 h-4" />
            </>
          )}
        </button>
        
        <p className="mt-6 text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">
          7 dias grátis • cancele quando quiser
        </p>
      </div>
    </div>
  );
};

export default PremiumCard;
