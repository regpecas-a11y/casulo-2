
import React from 'react';
import { JourneyStep, PhaseStatus } from '../types';

interface JourneyNodeProps {
  step: JourneyStep;
  index: number;
  onClick: (step: JourneyStep) => void;
  childPhoto?: string | null;
  gender?: 'boy' | 'girl' | null;
}

const JourneyNode: React.FC<JourneyNodeProps> = ({ step, index, onClick, childPhoto, gender = 'boy' }) => {
  const isLocked = step.status === PhaseStatus.LOCKED;
  const isCurrent = step.status === PhaseStatus.CURRENT;
  const isCompleted = step.status === PhaseStatus.COMPLETED;
  
  return (
    <div className="relative flex flex-col items-center mb-40 transition-all z-10 group">
      {/* Node Circle */}
      <button
        onClick={() => !isLocked && onClick(step)}
        className={`
          w-24 h-24 rounded-[2.5rem] flex items-center justify-center text-4xl
          transition-all duration-500 relative border-b-[10px]
          ${isLocked 
            ? 'bg-slate-50 border-slate-100 text-slate-200 grayscale' 
            : `bg-white border-slate-100 text-slate-800 shadow-xl active:translate-y-2 active:border-b-0`}
          ${isCurrent ? 'ring-8 ring-slate-100 ring-offset-4' : ''}
        `}
      >
        {isCompleted && (
          <div className="absolute -top-2 -right-2 bg-emerald-400 w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs text-white shadow-lg z-20">✓</div>
        )}
        
        {isCurrent && (
          <div className="absolute -top-16 animate-soft-bounce flex flex-col items-center">
            <div className="w-12 h-12 rounded-[1.2rem] overflow-hidden border-4 border-white shadow-2xl bg-white">
               {childPhoto ? <img src={childPhoto} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-slate-100 flex items-center justify-center text-xl">👶</div>}
            </div>
            <div className="w-2 h-4 bg-white/60 rounded-full mt-1"></div>
          </div>
        )}

        <span className={isLocked ? 'opacity-20' : 'opacity-100'}>{step.icon}</span>
      </button>
      
      {/* Label area */}
      <div className="mt-8 text-center px-4">
        <h4 className={`text-xs font-black uppercase tracking-widest mb-1 ${isLocked ? 'text-slate-300' : 'text-slate-800'}`}>
          {step.title}
        </h4>
        <p className={`text-[9px] font-black uppercase tracking-tighter px-3 py-1 rounded-full inline-block ${isLocked ? 'bg-slate-50 text-slate-200' : 'bg-slate-100 text-slate-400'}`}>
          {step.ageRange}
        </p>
      </div>
    </div>
  );
};

export default JourneyNode;
