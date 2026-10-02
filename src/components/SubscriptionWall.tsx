
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePremium } from '../contexts/PremiumContext';

interface SubscriptionWallProps {
  featureName: string;
}

const SubscriptionWall: React.FC<SubscriptionWallProps> = ({ featureName }) => {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual'>('annual');
  const { handlePurchase, restorePurchases, isLoading } = usePremium();
  const [error, setError] = useState<string | null>(null);

  const onUpgrade = async (plan: 'monthly' | 'annual') => {
    setError(null);
    try {
      await handlePurchase(plan);
    } catch (e: any) {
      setError("Houve um erro ao processar a compra. Tente novamente.");
    }
  };

  const onRestore = async () => {
    setError(null);
    try {
      await restorePurchases();
    } catch (e: any) {
      setError("Não encontramos assinaturas anteriores.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-[3rem] text-center shadow-2xl border-4 border-emerald-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-400"></div>
      
      <div className="mb-6">
        <span className="text-6xl mb-4 block">🌸</span>
        <h3 className="text-2xl font-black text-slate-800 mb-2 uppercase tracking-tight">Passe Maternidade Leve</h3>
        <p className="text-slate-500 text-sm font-medium leading-relaxed">
          O recurso <span className="text-emerald-600 font-black">{featureName}</span> faz parte do Passe Maternidade Leve.
        </p>
      </div>

      <div className="space-y-4 mb-8">
        {/* Plano Anual Democrático */}
        <button 
          onClick={() => setSelectedPlan('annual')}
          className={`w-full p-5 rounded-3xl border-2 transition-all relative text-left ${selectedPlan === 'annual' ? 'border-emerald-500 bg-emerald-50' : 'border-slate-100 bg-white'}`}
        >
          <div className="absolute -top-3 right-6 bg-amber-400 text-amber-900 text-[9px] font-black px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
            Melhor Valor
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs font-black text-slate-400 uppercase mb-1">Plano Anual Democrático</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-slate-800">R$ 3,32</span>
                <span className="text-slate-500 font-bold text-xs">/ mês</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black text-emerald-600 uppercase">Economize 17%</p>
              <p className="text-[9px] font-bold text-slate-400">R$ 39,90 / ano</p>
            </div>
          </div>
        </button>

        {/* Plano Mensal Passe Maternidade Leve */}
        <button 
          onClick={() => setSelectedPlan('monthly')}
          className={`w-full p-5 rounded-3xl border-2 transition-all text-left ${selectedPlan === 'monthly' ? 'border-emerald-500 bg-emerald-50' : 'border-slate-100 bg-white'}`}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs font-black text-slate-400 uppercase mb-1">Passe Maternidade Leve (Mensal)</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-slate-800">R$ 3,99</span>
                <span className="text-slate-500 font-bold text-xs">/ mês</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black text-slate-400 uppercase">Sem Fidelidade</p>
              <p className="text-[9px] font-bold text-slate-400">Cancele quando quiser</p>
            </div>
          </div>
        </button>
      </div>

      <button 
        onClick={() => onUpgrade(selectedPlan)}
        disabled={isLoading}
        className={`w-full py-5 bg-emerald-500 text-white font-black rounded-3xl shadow-[0_8px_0_0_#059669] active:translate-y-1 active:shadow-none transition-all text-sm uppercase tracking-widest ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isLoading ? 'Processando...' : 'Liberar Acesso Premium ➔'}
      </button>

      <button 
        onClick={onRestore}
        disabled={isLoading}
        className="w-full mt-4 py-3 text-slate-400 font-black text-[10px] uppercase tracking-widest hover:text-slate-600 transition-colors disabled:opacity-50"
      >
        Restaurar Assinatura
      </button>

      {error && (
        <p className="mt-4 text-rose-500 text-[10px] font-bold animate-shake">{error}</p>
      )}
      
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="text-center">
          <p className="text-[10px] font-black text-slate-800 uppercase mb-1">Seguro</p>
          <p className="text-[8px] text-slate-400 font-bold">Google Play Billing</p>
        </div>
        <div className="text-center">
          <p className="text-[10px] font-black text-slate-800 uppercase mb-1">Suporte</p>
          <p className="text-[8px] text-slate-400 font-bold">24/7 via WhatsApp</p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionWall;
