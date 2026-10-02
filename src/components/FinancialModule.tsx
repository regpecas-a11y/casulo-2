
import React, { useState, useMemo, useEffect } from 'react';
import { ChildProfile, Transaction, FinanceCategory, TransactionType, FinanceGoal, FinanceLimit, FinanceStats, FinanceEducationProgress } from '../types';
import { FINANCE_MODULES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

interface FinancialModuleProps {
  profile: ChildProfile;
  onUpdateProfile: (updated: ChildProfile) => void;
  themeColor: string;
}

const FinancialModule: React.FC<FinancialModuleProps> = ({ profile, onUpdateProfile, themeColor }) => {
  const [activeSubTab, setActiveSubTab] = useState<'dashboard' | 'history' | 'goals' | 'education'>('dashboard');
  
  // Estados para Transação
  const [isAddingTransaction, setIsAddingTransaction] = useState(false);
  const [transType, setTransType] = useState<TransactionType>('EXPENSE');
  const [transValue, setTransValue] = useState('');
  const [transDesc, setTransDesc] = useState('');
  const [transCat, setTransCat] = useState<FinanceCategory>('Outros');

  // Estados para Metas
  const [isAddingGoal, setIsAddingGoal] = useState(false);
  const [goalTitle, setGoalTitle] = useState('');
  const [goalTarget, setGoalTarget] = useState('');
  const [goalIcon, setGoalIcon] = useState('🎯');

  // Estados para Aporte (Guardar Valor em Meta)
  const [isContributing, setIsContributing] = useState<string | null>(null);
  const [contributeValue, setContributeValue] = useState('');

  // Estados de Educação
  const [selectedGuide, setSelectedGuide] = useState<{title: string, content: string} | null>(null);
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  // Lógica de Rotação Mensal (Troca a cada mês)
  const monthlyIndex = useMemo(() => {
    const now = new Date();
    return now.getFullYear() * 12 + now.getMonth();
  }, []);

  // Lógica de Rotação Semanal (Troca a cada 7 dias para os estudos internos)
  const weeklyIndex = useMemo(() => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const diff = now.getTime() - start.getTime();
    const oneWeek = 1000 * 60 * 60 * 24 * 7;
    return Math.floor(diff / oneWeek);
  }, []);

  // Cálculo de Idade em Meses
  const ageInMonths = useMemo(() => {
    if (!profile.birthDate) return 0;
    const birth = new Date(profile.birthDate);
    const now = new Date();
    return (now.getFullYear() - birth.getFullYear()) * 12 + (now.getMonth() - birth.getMonth());
  }, [profile.birthDate]);

  // Cálculo de Idade em Anos (para interatividade)
  const ageInYears = useMemo(() => ageInMonths / 12, [ageInMonths]);

  // Lógica de Rotação de Dicas (Segurança Financeira Prioritária)
  const securityTips = useMemo(() => [
    { title: 'Reserva de Emergência', content: 'Sua reserva deve cobrir de 6 a 12 meses dos gastos fixos da família agora com o bebê.', icon: '🛡️' },
    { title: 'Seguro de Vida', content: 'Proteja o futuro educacional do seu filho. Um seguro de vida é um ato de amor e planejamento.', icon: '💎' },
    { title: 'Investimento Mensal', content: 'Pequenos aportes mensais de R$ 50 desde o nascimento podem se tornar uma faculdade no futuro.', icon: '📈' },
    { title: 'Custo do Enxoval', content: 'Evite compras por impulso. Foque no essencial e use a regra dos 3 dias antes de comprar algo caro.', icon: '👶' },
    { title: 'Planejamento Escolar', content: 'Comece a pesquisar custos de berçários 6 meses antes de precisar. Os preços variam até 40%.', icon: '🎒' }
  ], []);

  useEffect(() => {
    if (activeSubTab === 'education') {
      const interval = setInterval(() => {
        setCurrentTipIndex(prev => (prev + 1) % securityTips.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [activeSubTab, securityTips.length]);

  // Filtragem de Módulos Rotativos por Período (6 módulos por mês)
  const relevantModules = useMemo(() => {
    // 1. Filtra módulos pela idade da criança
    const ageAppropriateMods = FINANCE_MODULES.filter(m => {
      const min = (m as any).minAge ?? -1;
      const max = (m as any).maxAge ?? 18;
      const age = ageInMonths / 12;
      return age >= min && age <= max;
    });

    // 2. Seleciona 6 módulos usando o monthlyIndex para rotatividade
    // Se houver menos de 6, mostra todos. Se houver mais, rotaciona.
    let selectedMods = [];
    if (ageAppropriateMods.length <= 6) {
      selectedMods = [...ageAppropriateMods];
    } else {
      const startIndex = monthlyIndex % ageAppropriateMods.length;
      for (let i = 0; i < 6; i++) {
        selectedMods.push(ageAppropriateMods[(startIndex + i) % ageAppropriateMods.length]);
      }
    }

    // 3. Rotatividade Semanal dos estudos dentro de cada módulo
    return selectedMods.map(mod => {
      const studies = [...mod.studies];
      const rotationOffset = weeklyIndex % studies.length;
      const rotatedStudies = [
        ...studies.slice(rotationOffset),
        ...studies.slice(0, rotationOffset)
      ];
      return { ...mod, studies: rotatedStudies };
    });
  }, [ageInMonths, monthlyIndex, weeklyIndex]);

  // Garantindo que finance exista com tipos corretos
  const finance = profile.finance || {
    transactions: [] as Transaction[],
    limits: [{ category: 'TOTAL', value: 2000 }] as FinanceLimit[],
    goals: [] as FinanceGoal[],
    stats: { xp: 0, level: 1, badges: [], streak: 1, lastActiveDate: new Date().toISOString() } as FinanceStats,
    eduProgress: [] as FinanceEducationProgress[]
  };

  const categories: FinanceCategory[] = ['Alimentação', 'Transporte', 'Lazer', 'Moradia', 'Saúde', 'Educação', 'Outros'];
  const catColors: Record<FinanceCategory, string> = {
    'Alimentação': '#fbbf24', 'Transporte': '#60a5fa', 'Lazer': '#f472b6', 
    'Moradia': '#a78bfa', 'Saúde': '#f87171', 'Educação': '#34d399', 'Outros': '#94a3b8'
  };

  const currentBalance = useMemo(() => {
    return (finance.transactions || []).reduce((acc: number, t: Transaction): number => t.type === 'INCOME' ? acc + t.amount : acc - t.amount, 0);
  }, [finance.transactions]);

  // Estatísticas e Histórico (Extrato)
  const stats = useMemo(() => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    
    const lastMonthDate = new Date(currentYear, currentMonth - 1, 1);
    const lastMonth = lastMonthDate.getMonth();
    const lastYear = lastMonthDate.getFullYear();

    const currentMonthT = (finance.transactions || []).filter(t => {
      const d = new Date(t.date);
      return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
    });

    const lastMonthT = (finance.transactions || []).filter(t => {
      const d = new Date(t.date);
      return d.getMonth() === lastMonth && d.getFullYear() === lastYear;
    });

    const expensesByCat: Record<string, number> = {};
    let currentTotalExp: number = 0;
    currentMonthT.forEach(t => {
      if (t.type === 'EXPENSE') {
        expensesByCat[t.category] = (expensesByCat[t.category] || 0) + t.amount;
        currentTotalExp += t.amount;
      }
    });

    const lastTotalExp: number = lastMonthT.filter(t => t.type === 'EXPENSE').reduce((acc: number, t: Transaction): number => acc + t.amount, 0);
    const diff = lastTotalExp > 0 ? ((currentTotalExp - lastTotalExp) / lastTotalExp) * 100 : 0;

    return { 
      incomes: currentMonthT.filter(t => t.type === 'INCOME').reduce((acc: number, t: Transaction): number => acc + t.amount, 0),
      expenses: currentTotalExp,
      lastExpenses: lastTotalExp,
      diff,
      expensesByCat
    };
  }, [finance.transactions]);

  const levelProgress = useMemo(() => (finance.stats.xp % 500) / 5, [finance.stats.xp]);

  // Gráfico de Pizza SVG
  const PieChart = () => {
    const entries = Object.entries(stats.expensesByCat);
    if (entries.length === 0) return (
      <div className="h-48 flex flex-col items-center justify-center bg-slate-50/50 rounded-[2rem] border-2 border-dashed border-slate-100 p-8">
        <span className="text-4xl mb-2 opacity-20">📈</span>
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest text-center">Inicie seus registros para ver análises</p>
      </div>
    );
    
    let cumulativePercent = 0;
    return (
      <div className="flex flex-col items-center animate-fade-in">
        <div className="relative w-48 h-48">
          <svg viewBox="0 0 32 32" className="w-full h-full transform -rotate-90">
            {entries.map(([cat, val], i) => {
              const percent = ((val as number) / (stats.expenses as number)) * 100;
              const strokeDash = `${percent} ${100 - percent}`;
              const offset = 100 - cumulativePercent;
              cumulativePercent += percent;
              return (
                <circle
                  key={cat} r="16" cx="16" cy="16" fill="transparent"
                  stroke={catColors[cat as FinanceCategory] || '#eee'}
                  strokeWidth="12" strokeDasharray={strokeDash} strokeDashoffset={offset}
                  className="transition-all duration-1000 ease-out"
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="bg-white w-20 h-20 rounded-full shadow-lg flex flex-col items-center justify-center border-4 border-slate-50">
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">Total</p>
                <p className="text-xs font-black text-slate-800">R$ {stats.expenses.toLocaleString()}</p>
             </div>
          </div>
        </div>
      </div>
    );
  };

  // Helper para Sincronizar com o Diário
  const syncToDiary = (updatedProfile: ChildProfile, type: 'TRANS' | 'GOAL', data: any) => {
    const today = new Date().toISOString().split('T')[0];
    const entries = { ...(updatedProfile.diaryEntries || {}) };
    
    // Skeleton do Diário se não existir
    const entry = entries[today] || {
      date: today,
      sleep: { bedtime: '', wakeTime: '', quality: 0, nightWakes: [], naps: [], notes: '' },
      feeding: [],
      hygiene: { changes: [], bathTime: '', bathTemp: 'Morna ✓', massage: false, oralHygiene: { morning: false, night: false, tongue: false }, notes: '' },
      health: { temp: { value: '', time: '', location: 'Axila' }, meds: [], vaccines: [], symptoms: [], notes: '' },
      school: { attended: false, entry: '', exit: '', activities: '', homework: { subject: '', done: 'no', time: 0, difficulty: 'Média' }, behavior: { mood: 'Normal', social: 'Bem', attention: 'Normal', teacherNote: '' }, media: [] },
      activities: { physical: { type: '', duration: 0, location: '', liked: true }, creative: { type: '', duration: 0, photo: null }, reading: { titles: [], duration: 0, liked: true }, screen: { tv: 0, mobile: 0, goal: 60 }, highlight: '' },
      mood: { general: 'Normal', bestMoment: { time: '', description: '' }, difficultMoment: { time: '', description: '', solution: '' }, tantrums: 0, communication: { words: [], phrases: [], music: '', question: '' } },
      shopping: { supermarket: [], pharmacy: [], clothing: [], stationery: [], reminders: [], futureCommitments: [] },
      parentNotes: { text: '', photos: [], tags: [], reflection: '', dayRating: 5, gratitude: '' }
    };

    const financeBox = entry.finance || { transactions: [], milestones: [] };
    
    if (type === 'TRANS') {
      financeBox.transactions = [data, ...financeBox.transactions];
    } else if (type === 'GOAL') {
      financeBox.milestones = [data, ...financeBox.milestones];
    }

    entries[today] = { ...entry, finance: financeBox };
    return { ...updatedProfile, diaryEntries: entries };
  };

  // Handlers
  const handleAddTransaction = () => {
    const val = parseFloat(transValue);
    if (isNaN(val) || val <= 0) return;
    const newTrans: Transaction = { id: Date.now().toString(), type: transType, category: transCat, amount: val, description: transDesc || transCat, date: new Date().toISOString() };
    const newXp = (finance.stats.xp || 0) + (transType === 'EXPENSE' ? 10 : 20);
    
    const updatedProfile = { 
      ...profile, 
      finance: { 
        ...finance, 
        transactions: [newTrans, ...(finance.transactions || [])], 
        stats: { ...finance.stats, xp: newXp } 
      } 
    };

    onUpdateProfile(syncToDiary(updatedProfile, 'TRANS', newTrans));
    setIsAddingTransaction(false);
    setTransValue(''); setTransDesc('');
  };

  const handleAddGoal = () => {
    const target = parseFloat(goalTarget);
    if (!goalTitle.trim() || isNaN(target) || target <= 0) return;
    
    // Ao adicionar meta, o título vai imediatamente para a caixa de despesa (histórico) com valor zero
    const autoExpense: Transaction = {
      id: `auto_meta_${Date.now()}`,
      type: 'EXPENSE',
      category: 'Outros',
      amount: 0,
      description: `META INICIADA: ${goalTitle}`,
      date: new Date().toISOString()
    };

    const newGoal: FinanceGoal = { 
      id: Date.now().toString(), 
      title: goalTitle, 
      targetValue: target, 
      currentValue: 0, 
      deadline: '', 
      icon: goalIcon 
    };

    const updatedProfile = { 
      ...profile, 
      finance: { 
        ...finance, 
        goals: [...(finance.goals || []), newGoal],
        transactions: [autoExpense, ...(finance.transactions || [])],
        stats: { ...finance.stats, xp: (finance.stats.xp || 0) + 50 } 
      } 
    };

    const synced = syncToDiary(updatedProfile, 'GOAL', `Nova Meta: ${goalTitle} (${goalIcon})`);
    onUpdateProfile(syncToDiary(synced, 'TRANS', autoExpense));
    
    setIsAddingGoal(false);
    setGoalTitle(''); setGoalTarget('');
  };

  const handleContribute = () => {
    const val = parseFloat(contributeValue);
    if (!isContributing || isNaN(val) || val <= 0) return;

    // Localiza a meta alvo para pegar o título
    const targetGoal = finance.goals.find(g => g.id === isContributing);
    if (!targetGoal) return;

    // Alimenta o progresso do valor alvo
    const updatedGoals = (finance.goals || []).map(g => {
      if (g.id === isContributing) {
        return { ...g, currentValue: g.currentValue + val };
      }
      return g;
    });

    // Registra o valor guardado na caixa de despesa
    const newTrans: Transaction = {
      id: `aporte_${Date.now()}`,
      type: 'EXPENSE',
      category: 'Outros',
      amount: val,
      description: `GUARDADO PARA: ${targetGoal.title}`,
      date: new Date().toISOString()
    };

    const updatedProfile = {
      ...profile,
      finance: {
        ...finance,
        goals: updatedGoals,
        transactions: [newTrans, ...(finance.transactions || [])],
        stats: { ...finance.stats, xp: (finance.stats.xp || 0) + 30 }
      }
    };

    onUpdateProfile(syncToDiary(updatedProfile, 'TRANS', newTrans));

    setIsContributing(null);
    setContributeValue('');
  };

  return (
    <div className="animate-fade-in space-y-6 pb-24 px-4 pt-4">
      {/* HEADER PREMIUM */}
      <div className="bg-white rounded-[3rem] p-8 shadow-sm border border-slate-100 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Saldo Casulo</p>
            <h2 className={`text-4xl font-black ${currentBalance >= 0 ? 'text-slate-800' : 'text-rose-500'} tracking-tighter`}>
              R$ {currentBalance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </h2>
          </div>
          <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl shadow-inner border border-white">
             📊
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-end justify-between gap-4 h-24 px-2">
            <div className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-emerald-400/20 rounded-t-xl transition-all duration-1000 origin-bottom border-x border-t border-emerald-400/10" style={{ height: `${Math.min(100, (stats.incomes / (stats.incomes + stats.expenses || 1)) * 100)}%` }}></div>
              <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Entradas</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-rose-400/20 rounded-t-xl transition-all duration-1000 origin-bottom border-x border-t border-rose-400/10" style={{ height: `${Math.min(100, (stats.expenses / (stats.incomes + stats.expenses || 1)) * 100)}%` }}></div>
              <span className="text-[8px] font-black text-rose-500 uppercase tracking-widest">Saídas</span>
            </div>
          </div>
          <div className="h-2 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
             <div className="h-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]" style={{ width: `${levelProgress}%` }}></div>
          </div>
        </div>
      </div>

      {/* TABS iOS STYLE */}
      <div className="flex bg-white/80 backdrop-blur-md p-1.5 rounded-[2.5rem] gap-1 shadow-sm border border-slate-200/50 sticky top-4 z-[50]">
        {[
          { id: 'dashboard', label: 'Hoje', icon: '⚡' },
          { id: 'history', label: 'Extrato', icon: '📈' },
          { id: 'goals', label: 'Metas', icon: '🎯' },
          { id: 'education', label: 'Guias', icon: '📖' }
        ].map(tab => (
          <button key={tab.id} onClick={() => setActiveSubTab(tab.id as any)} className={`flex-1 flex flex-col items-center justify-center py-3 rounded-[1.8rem] transition-all duration-300 ${activeSubTab === tab.id ? `bg-slate-900 text-white shadow-xl scale-[1.02]` : 'text-slate-400 hover:text-slate-600'}`}>
            <span className="text-xl mb-0.5">{tab.icon}</span>
            <span className="text-[8px] font-black uppercase tracking-tighter">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* DASHBOARD */}
      {activeSubTab === 'dashboard' && (
        <div className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-2 gap-4">
            <button onClick={() => { setTransType('INCOME'); setIsAddingTransaction(true); }} className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-center gap-3 active:scale-95 transition-all">
              <span className="text-5xl drop-shadow-sm">💵</span>
              <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Receber</span>
            </button>
            <button onClick={() => { setTransType('EXPENSE'); setIsAddingTransaction(true); }} className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-center gap-3 active:scale-95 transition-all">
              <span className="text-5xl drop-shadow-sm">💸</span>
              <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Pagar</span>
            </button>
          </div>
          
        </div>
      )}

      {/* HISTÓRICO / EXTRATO */}
      {activeSubTab === 'history' && (
        <div className="space-y-8 animate-fade-in">
          <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
             <div className="flex justify-between items-center">
                <div>
                   <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">Análise Mensal</h3>
                   <p className="text-[10px] text-slate-400 font-bold">Mês Atual vs Anterior</p>
                </div>
                <div className={`flex items-center gap-1 px-4 py-2 rounded-full text-[10px] font-black ${stats.diff > 0 ? 'bg-rose-50 text-rose-500' : 'bg-emerald-50 text-emerald-500'}`}>
                   {stats.diff > 0 ? '📈' : '📉'} {Math.abs(Math.round(stats.diff))}%
                </div>
             </div>
             <PieChart />
          </div>

          <div className="space-y-4">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-4">Movimentações</h3>
            {(finance.transactions || []).length === 0 ? (
              <div className="text-center py-20 bg-white rounded-[2.5rem] border-2 border-dashed border-slate-100 opacity-30 font-black text-[10px] uppercase">Sem lançamentos</div>
            ) : (
              (finance.transactions || []).map(t => (
                <div key={t.id} className="bg-white p-5 rounded-[2rem] border border-slate-100 flex items-center gap-4 shadow-sm hover:translate-x-1 transition-transform">
                   <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-inner ${t.type === 'INCOME' ? 'bg-emerald-50' : 'bg-rose-50'}`}>
                      {t.type === 'INCOME' ? '💰' : '💸'}
                   </div>
                   <div className="flex-1 min-w-0">
                      <p className="text-xs font-black text-slate-800 leading-none mb-1 truncate">{t.description}</p>
                      <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest truncate">{t.category} • {new Date(t.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}</p>
                   </div>
                   <div className="text-right">
                      <p className={`text-sm font-black ${t.type === 'INCOME' ? 'text-emerald-500' : 'text-slate-800'}`}>
                         {t.type === 'INCOME' ? '+' : '-'} R$ {t.amount.toLocaleString()}
                      </p>
                   </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* METAS */}
      {activeSubTab === 'goals' && (
        <div className="space-y-6 animate-fade-in">
          <button onClick={() => setIsAddingGoal(true)} className="w-full py-12 bg-white border-4 border-dashed border-slate-100 rounded-[3rem] text-slate-300 text-[10px] font-black uppercase tracking-[0.3em] flex flex-col items-center gap-3 hover:bg-slate-50 transition-all active:scale-[0.98]">
            <span className="text-4xl">🎯</span>
            <span>CRIAR NOVO OBJETIVO</span>
          </button>
          
          {(finance.goals || []).map(goal => {
            const progress = (goal.currentValue / goal.targetValue) * 100;
            return (
              <div key={goal.id} className="bg-white p-6 rounded-[3rem] shadow-sm border border-slate-100 flex items-center gap-6 group hover:shadow-md transition-shadow">
                <div className="relative w-24 h-24 shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-50" />
                    <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={213.6} strokeDashoffset={213.6 - (213.6 * Math.min(100, progress)) / 100} className="text-blue-500 transition-all duration-1000" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-3xl drop-shadow-sm">{goal.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">{goal.title}</h3>
                  <div className="mt-1 flex items-baseline gap-1">
                     <span className="text-lg font-black text-slate-800">R$ {goal.currentValue}</span>
                     <span className="text-[9px] font-bold text-slate-400 uppercase">de R$ {goal.targetValue}</span>
                  </div>
                  <div className="mt-3 flex gap-2">
                     <span className={`text-[8px] font-black px-2 py-1 rounded-full uppercase ${progress >= 100 ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-50 text-blue-500'}`}>
                        {Math.round(progress)}% Completo
                     </span>
                     <button 
                        onClick={() => setIsContributing(goal.id)}
                        className="text-[8px] font-black bg-slate-900 text-white px-3 py-1 rounded-full uppercase ml-auto active:scale-90 transition-transform"
                     >
                        Guardar Valor
                     </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* GUIAS EDUCACIONAIS (Dinâmicos e Rotativos) */}
      {activeSubTab === 'education' && (
        <div className="space-y-6 animate-fade-in pb-12">
          {/* CARD ROTATIVO DE DESTAQUE (SEGURANÇA FINANCEIRA) */}
          <div className="relative h-48 bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl border-b-8 border-slate-800">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,#4f46e5,transparent)]"></div>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentTipIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center"
              >
                <span className="text-4xl mb-3 drop-shadow-md">{securityTips[currentTipIndex].icon}</span>
                <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-2">Destaque de Segurança</h4>
                <h3 className="text-lg font-black text-white leading-tight mb-2">{securityTips[currentTipIndex].title}</h3>
                <p className="text-[10px] font-medium text-slate-400 max-w-[80%] leading-relaxed">
                  {securityTips[currentTipIndex].content}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Indicadores do Carrossel */}
            <div className="absolute bottom-6 left-0 w-full flex justify-center gap-1.5">
              {securityTips.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1 rounded-full transition-all duration-500 ${idx === currentTipIndex ? 'w-6 bg-indigo-500' : 'w-1.5 bg-slate-700'}`}
                />
              ))}
            </div>
          </div>

          <div className="px-2">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
              Guias para sua fase: {ageInMonths < 0 ? 'Gestação' : ageInMonths <= 24 ? 'Primeiros Passos' : 'Crescimento'}
            </h3>
          </div>

          {relevantModules.map(mod => (
            <div key={mod.id} className={`bg-white rounded-[3rem] p-8 shadow-sm border ${mod.id === 'mod6' ? 'border-indigo-100 bg-indigo-50/30' : 'border-slate-100'} space-y-6 transition-all`}>
              <div className="flex items-center gap-5">
                <span className={`text-5xl p-5 rounded-3xl border shadow-inner ${(mod as any).isInteractive && ageInYears >= 4 ? 'bg-amber-100 border-amber-200 animate-bounce-subtle' : mod.id === 'mod6' ? 'bg-indigo-100 border-indigo-200' : 'bg-slate-50 border-white'}`}>
                  {mod.icon}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[11px] font-black text-slate-800 uppercase tracking-widest leading-tight">{mod.title}</h3>
                    {(mod as any).isInteractive && ageInYears >= 4 && (
                      <span className="bg-amber-500 text-white text-[7px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">Interativo</span>
                    )}
                    {mod.id === 'mod6' && (
                      <span className="bg-indigo-600 text-white text-[7px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">Prioridade</span>
                    )}
                  </div>
                  <p className="text-[9px] font-bold text-slate-400 mt-1 uppercase">Educação Financeira Casulo</p>
                </div>
              </div>

              {(mod as any).isInteractive && ageInYears >= 4 && (
                <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
                  <p className="text-[10px] font-black text-amber-700 uppercase mb-2 tracking-widest">Desafio Interativo</p>
                  <div className="flex gap-2">
                    <button className="flex-1 py-3 bg-white rounded-xl text-[9px] font-black text-amber-600 border border-amber-200 active:scale-95 transition-all">JOGAR QUIZ 🎮</button>
                    <button className="flex-1 py-3 bg-white rounded-xl text-[9px] font-black text-amber-600 border border-amber-200 active:scale-95 transition-all">SIMULAR POUPANÇA 💰</button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 gap-4">
                {mod.studies.map(s => (
                  <button 
                    key={s.id} 
                    onClick={() => setSelectedGuide({title: s.title, content: s.content || s.description})}
                    className="flex items-center justify-between p-6 bg-white rounded-[2rem] text-left border border-slate-50 hover:bg-slate-50 group transition-all active:scale-[0.98] shadow-sm"
                  >
                    <div className="pr-4">
                      <p className="text-xs font-black text-slate-800 mb-1">{s.title}</p>
                      <p className="text-[9px] font-medium text-slate-500 line-clamp-1 italic">{s.description}</p>
                    </div>
                    <span className="text-slate-300 group-hover:text-slate-900 group-hover:translate-x-1 transition-all text-xl">➔</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL DE GUIA */}
      {selectedGuide && (
        <div className="fixed inset-0 z-[2000] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-6 animate-fade-in">
          <div className="bg-white w-full max-w-sm rounded-[3.5rem] p-10 shadow-2xl animate-slide-up relative overflow-hidden border-b-[12px] border-slate-100">
             <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
             <button onClick={() => setSelectedGuide(null)} className="absolute top-8 right-8 text-slate-300 hover:text-slate-900 text-3xl font-black transition-colors">✕</button>
             <div className="mb-8 mt-6 flex flex-col items-center text-center">
                <span className="text-6xl mb-4">📘</span>
                <h3 className="text-2xl font-black text-slate-800 tracking-tighter leading-tight">{selectedGuide.title}</h3>
             </div>
             <div className="space-y-6 max-h-[40vh] overflow-y-auto no-scrollbar pr-2">
                <p className="text-sm font-bold text-slate-600 leading-relaxed italic border-l-4 border-indigo-400 pl-6 py-2 bg-slate-50/50 rounded-r-2xl">
                   {selectedGuide.content}
                </p>
             </div>
             <button onClick={() => setSelectedGuide(null)} className="w-full mt-10 py-6 bg-slate-900 text-white font-black rounded-3xl shadow-xl active:scale-95 transition-all border-b-8 border-black/20 uppercase text-[10px] tracking-widest">
                ENTENDIDO ➔
             </button>
          </div>
        </div>
      )}

      {/* MODAL ADICIONAR TRANSAÇÃO */}
      {isAddingTransaction && (
        <div className="fixed inset-0 z-[1100] bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in">
          <div className="bg-white w-full max-w-sm rounded-[3.5rem] p-10 shadow-2xl space-y-8 animate-slide-up border-b-[10px] border-slate-100">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-black text-slate-800 uppercase tracking-widest">Novo Lançamento</h3>
              <button onClick={() => setIsAddingTransaction(false)} className="text-slate-300 hover:text-slate-900 text-3xl font-black">✕</button>
            </div>
            
            <div className="flex bg-slate-100 p-1.5 rounded-[2rem] gap-1 shadow-inner border border-slate-200">
              <button onClick={() => setTransType('INCOME')} className={`flex-1 py-5 rounded-[1.8rem] text-[10px] font-black transition-all ${transType === 'INCOME' ? 'bg-emerald-500 text-white shadow-lg' : 'text-slate-400'}`}>RECEITA</button>
              <button onClick={() => setTransType('EXPENSE')} className={`flex-1 py-5 rounded-[1.8rem] text-[10px] font-black transition-all ${transType === 'EXPENSE' ? 'bg-rose-500 text-white shadow-lg' : 'text-slate-400'}`}>DESPESA</button>
            </div>

            <div className="relative group">
              <span className="absolute left-8 top-1/2 -translate-y-1/2 text-2xl font-black text-slate-300 group-focus-within:text-slate-900 transition-colors">R$</span>
              <input type="number" placeholder="0,00" value={transValue} onChange={e => setTransValue(e.target.value)} className="w-full p-10 pl-16 bg-slate-50 rounded-[2.5rem] border-2 border-slate-100 font-black text-5xl text-center focus:border-slate-300 focus:outline-none transition-all" />
            </div>

            <div className="space-y-4">
              <input placeholder="Descrição (Ex: Fraldas, Mesada...)" value={transDesc} onChange={e => setTransDesc(e.target.value)} className="w-full p-6 bg-slate-50 rounded-2xl border-2 border-slate-100 font-bold text-xs focus:border-slate-300 focus:outline-none" />
              <select value={transCat} onChange={e => setTransCat(e.target.value as any)} className="w-full p-6 bg-slate-50 rounded-2xl border-2 border-slate-100 font-black text-xs uppercase tracking-widest focus:border-slate-300 focus:outline-none appearance-none">
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <button onClick={handleAddTransaction} className={`w-full py-7 rounded-[2.5rem] font-black text-xs text-white shadow-2xl transition-all border-b-8 active:border-b-0 active:translate-y-2 ${transType === 'INCOME' ? 'bg-emerald-500 border-emerald-700' : 'bg-rose-500 border-rose-700'} uppercase tracking-widest`}>
               EFETUAR REGISTRO ➔
            </button>
          </div>
        </div>
      )}
      
      {/* MODAL ADICIONAR META (REFINADO) */}
      {isAddingGoal && (
        <div className="fixed inset-0 z-[1100] bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in">
          <div className="bg-white w-full max-w-sm rounded-[3.5rem] p-10 shadow-2xl space-y-8 animate-slide-up border-b-[10px] border-slate-100">
            <div className="flex justify-between items-center">
               <h3 className="text-xl font-black text-slate-800 uppercase tracking-widest">Nova Meta 🎯</h3>
               <button onClick={() => setIsAddingGoal(false)} className="text-slate-300 text-3xl font-black">✕</button>
            </div>
            
            <div className="space-y-4">
               <input placeholder="Título da Meta (Ex: Faculdade)" value={goalTitle} onChange={e => setGoalTitle(e.target.value)} className="w-full p-6 bg-slate-50 rounded-2xl border-2 border-slate-100 font-black text-xs" />
               <input type="number" placeholder="Valor Alvo (R$)" value={goalTarget} onChange={e => setGoalTarget(e.target.value)} className="w-full p-6 bg-slate-50 rounded-2xl border-2 border-slate-100 font-black text-xs" />
            </div>

            <div className="grid grid-cols-5 gap-3">
               {['🎯', '🎁', '🎓', '🏥', '🏖️'].map(i => (
                 <button key={i} onClick={() => setGoalIcon(i)} className={`w-14 h-14 rounded-2xl text-2xl flex items-center justify-center transition-all ${goalIcon === i ? 'bg-slate-900 text-white shadow-xl scale-110' : 'bg-slate-50 border border-slate-100 hover:bg-slate-100'}`}>{i}</button>
               ))}
            </div>

            <button onClick={handleAddGoal} className="w-full py-7 bg-slate-900 text-white font-black rounded-[2.5rem] shadow-2xl active:scale-95 transition-all border-b-8 border-black/30 uppercase text-[10px] tracking-widest">
               ESTABELECER OBJETIVO ➔
            </button>
          </div>
        </div>
      )}

      {/* MODAL APORTE EM META (GUARDAR VALOR) */}
      {isContributing && (
        <div className="fixed inset-0 z-[1100] bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in">
          <div className="bg-white w-full max-w-sm rounded-[3.5rem] p-10 shadow-2xl space-y-8 animate-slide-up border-b-[10px] border-slate-100">
            <div className="flex justify-between items-center">
               <h3 className="text-xl font-black text-slate-800 uppercase tracking-widest text-center w-full">Quanto você guardou hoje? 💰</h3>
               <button onClick={() => setIsContributing(null)} className="text-slate-300 text-3xl font-black">✕</button>
            </div>
            
            <div className="relative group">
              <span className="absolute left-8 top-1/2 -translate-y-1/2 text-2xl font-black text-slate-300 transition-colors">R$</span>
              <input type="number" placeholder="0,00" value={contributeValue} onChange={e => setContributeValue(e.target.value)} className="w-full p-10 pl-16 bg-slate-50 rounded-[2.5rem] border-2 border-slate-100 font-black text-5xl text-center focus:border-slate-300 focus:outline-none transition-all" />
            </div>

            <button onClick={handleContribute} className="w-full py-7 bg-emerald-500 text-white font-black rounded-[2.5rem] shadow-2xl active:scale-95 transition-all border-b-8 border-emerald-700 uppercase text-[10px] tracking-widest">
               ADICIONAR AO PROGRESSO ➔
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialModule;
