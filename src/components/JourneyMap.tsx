
import React from 'react';
import { JourneyStep, PhaseStatus, ChildProfile, Era } from '../types';
import { JOURNEY_STEPS, ERAS } from '../constants';

interface JourneyMapProps {
  profile: ChildProfile;
  childYears: number;
  onSelectStep: (step: JourneyStep) => void;
  themeColor: string;
}

const JourneyMap: React.FC<JourneyMapProps> = ({ profile, childYears, onSelectStep, themeColor }) => {
  
  const getStatus = (step: JourneyStep): PhaseStatus => {
    if (childYears >= step.minYears + 1) return PhaseStatus.COMPLETED;
    if (childYears >= step.minYears) return PhaseStatus.CURRENT;
    return PhaseStatus.LOCKED;
  };

  const totalXP = profile.xp || 0;
  const level = Math.floor(totalXP / 1000) + 1;
  const xpInLevel = totalXP % 1000;
  const xpProgress = (xpInLevel / 1000) * 100;

  return (
    <div className="relative w-full py-10 flex flex-col items-center overflow-hidden">
      {/* XP BAR FIXED TOP */}
      <div className="sticky top-4 z-[110] w-full max-w-xs px-4 mb-10">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/50">
          <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Nível {level}</span>
            <span className="text-xs font-black text-slate-800">{totalXP} XP</span>
          </div>
          <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <div 
              className={`h-full bg-gradient-to-r from-${themeColor}-400 to-${themeColor}-600 transition-all duration-1000`}
              style={{ width: `${xpProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Background Decorativo: Caminho Sinuoso (SVG) */}
      <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10" viewBox="0 0 400 5000">
         <path 
            d="M 200 0 Q 350 250 200 500 T 200 1000 T 200 1500 T 200 2000 T 200 2500 T 200 3000 T 200 3500 T 200 4000 T 200 4500" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="12" 
            strokeDasharray="20 20"
            className={`text-${themeColor}-400`}
         />
      </svg>

      {ERAS.map((era) => {
        const eraSteps = JOURNEY_STEPS.filter(step => {
           if (era.steps && era.steps.length > 0) {
             return era.steps.some(s => typeof s === 'string' ? s === step.id : s.id === step.id);
           }
           return (step as any).eraId === era.id;
        });

        if (eraSteps.length === 0) return null;

        return (
          <div key={era.id} className="w-full flex flex-col items-center mb-20">
            {/* ERA HEADER */}
            <div className={`bg-${era.color}-500 text-white px-6 py-3 rounded-2xl shadow-lg mb-16 transform -rotate-1 border-b-4 border-${era.color}-700`}>
              <h2 className="text-sm font-black uppercase tracking-tighter">{era.title}</h2>
            </div>

            <div className="flex flex-col items-center gap-32 w-full">
              {eraSteps.map((step, idx) => {
                const status = getStatus(step);
                const isOdd = idx % 2 !== 0;
                
                return (
                  <div 
                    key={step.id} 
                    className={`flex items-center w-full max-w-sm px-6 gap-6 relative animate-fade-in ${isOdd ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    {/* Ilha / Node */}
                    <div className="relative group cursor-pointer" onClick={() => status !== PhaseStatus.LOCKED && onSelectStep(step)}>
                       <div className={`
                         w-28 h-28 rounded-[2.5rem] flex items-center justify-center text-4xl
                         transition-all duration-500 relative border-b-[12px] shadow-2xl
                         ${status === PhaseStatus.LOCKED 
                            ? 'bg-slate-50 border-slate-200 text-slate-300 grayscale scale-90' 
                            : `bg-white border-b-${step.color}-600 text-slate-800 active:translate-y-2 active:border-b-0`}
                         ${status === PhaseStatus.CURRENT ? `ring-8 ring-${step.color}-100 ring-offset-4 animate-pulse` : ''}
                       `}>
                          {status === PhaseStatus.COMPLETED && (
                            <div className="absolute -top-3 -right-3 bg-emerald-400 w-10 h-10 rounded-full border-4 border-white flex items-center justify-center text-white shadow-xl z-20">✓</div>
                          )}

                          {status === PhaseStatus.CURRENT && (
                            <div className="absolute -top-20 left-1/2 -translate-x-1/2 animate-soft-bounce">
                               <div className={`w-14 h-14 rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-white flex items-center justify-center`}>
                                 {profile.milestonePhotos?.[step.id] ? (
                                   <img src={profile.milestonePhotos[step.id]} className="w-full h-full object-cover" />
                                 ) : profile.photo ? (
                                   <img src={profile.photo} className="w-full h-full object-cover" />
                                 ) : (
                                   <span className="text-2xl">
                                     {step.id === 's1_1' ? '🍊' : 
                                      step.id === 's1_2' ? '🍆' : 
                                      step.id === 's1_3' ? '🥥' : '👶'}
                                   </span>
                                 )}
                               </div>
                               <div className="w-2 h-4 bg-white/40 rounded-full mx-auto mt-1 shadow-sm"></div>
                            </div>
                          )}

                          {status === PhaseStatus.COMPLETED && profile.milestonePhotos?.[step.id] && (
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                               <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-white shadow-lg bg-white">
                                 <img src={profile.milestonePhotos[step.id]} className="w-full h-full object-cover" />
                               </div>
                            </div>
                          )}

                          <span className={status === PhaseStatus.LOCKED ? 'opacity-30' : 'opacity-100'}>{step.icon}</span>
                       </div>
                    </div>

                    {/* Texto de Apoio */}
                    <div 
                      className={`flex-1 ${isOdd ? 'text-right' : 'text-left'} cursor-pointer active:scale-95 transition-transform`}
                      onClick={() => status !== PhaseStatus.LOCKED && onSelectStep(step)}
                    >
                       <p className={`text-[10px] font-black uppercase tracking-[0.2em] mb-1 ${status === PhaseStatus.LOCKED ? 'text-slate-300' : `text-${step.color}-500`}`}>
                          {step.ageRange}
                       </p>
                       <h3 className={`text-lg font-black leading-tight tracking-tighter ${status === PhaseStatus.LOCKED ? 'text-slate-300' : 'text-slate-800'}`}>
                          {step.title}
                       </h3>
                       {status !== PhaseStatus.LOCKED && (
                         <div className="mt-2 flex gap-1 items-center overflow-hidden">
                            {step.badges.slice(0, 2).map((b, i) => (
                              <span key={i} className="text-[8px] font-black px-2 py-0.5 bg-white border border-slate-100 text-slate-400 rounded-full whitespace-nowrap">✨ {b}</span>
                            ))}
                         </div>
                       )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JourneyMap;
