import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Sparkles, 
  Share2, 
  CheckCircle2, 
  Download, 
  Star, 
  ShieldCheck,
  Calendar,
  UserCheck
} from 'lucide-react';
import { playMilestoneComplete, playPositiveChime, playSoftClick } from '../sounds';
import { ChildProfile } from '../types';

interface ParentalCertificateModalProps {
  profile: ChildProfile;
  isPremium?: boolean;
}

export const ParentalCertificateModal: React.FC<ParentalCertificateModalProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);

  // Calcula progresso da maturidade parental baseado nas tarefas concluídas do perfil
  const totalMissions = 15;
  const completedCount = (profile.completedMissions?.length || 0) + (profile.completedTasks?.length || 0);
  const progressPercent = Math.min(100, Math.max(35, Math.round((completedCount / totalMissions) * 100)));

  const handleShareCertificate = () => {
    const txt = `🎓 *CERTIFICADO DE MATURIDADE PARENTAL (CASULO)* 🎓\n\nCertificamos com orgulho que os pais de *${profile.name}* concluíram o Curso de Maturidade Parental e Desenvolvimento Infantil no Casulo com ${progressPercent}% de aproveitamento!\n\n✨ Selo de Excelência em Cuidados Materno-Infantis.`;
    navigator.clipboard.writeText(txt).then(() => {
      setCopied(true);
      playMilestoneComplete();
      setTimeout(() => setCopied(false), 3000);
    }).catch(() => {
      alert(txt);
    });
  };

  return (
    <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-100 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center px-1">
        <div>
          <h4 className="text-lg font-black text-slate-800 flex items-center gap-2">
            <Award className="text-amber-500" size={22} /> Certificado de Maturidade Parental
          </h4>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">
            Diploma oficial de conclusão dos 8 Pilares do Desenvolvimento Infantil
          </p>
        </div>
        <button
          onClick={handleShareCertificate}
          className="px-4 py-2 bg-amber-500 text-white font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-lg flex items-center gap-2 active:scale-95 transition-all hover:bg-amber-600"
        >
          {copied ? <CheckCircle2 size={14} /> : <Share2 size={14} />}
          {copied ? "Copiado para Enviar!" : "Compartilhar Conquista"}
        </button>
      </div>

      {/* DIPLOMA VISUAL DE LUXO */}
      <div className="relative bg-gradient-to-br from-amber-50 via-yellow-100/50 to-amber-100 p-8 rounded-[3rem] border-4 border-amber-300 shadow-xl space-y-6 text-center overflow-hidden">
        {/* ELEMENTOS DECORATIVOS DA BORDA DOURADA */}
        <div className="absolute top-4 left-4 text-amber-400 text-xl font-serif">⚜</div>
        <div className="absolute top-4 right-4 text-amber-400 text-xl font-serif">⚜</div>
        <div className="absolute bottom-4 left-4 text-amber-400 text-xl font-serif">⚜</div>
        <div className="absolute bottom-4 right-4 text-amber-400 text-xl font-serif">⚜</div>

        <div className="space-y-2">
          <span className="text-[10px] font-black text-amber-800 uppercase tracking-[0.3em] bg-amber-200/60 px-4 py-1.5 rounded-full border border-amber-300">
            DIPLOMA OFICIAL CASULO
          </span>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight font-serif pt-2">
            Certificado de Maturidade Parental
          </h3>
          <p className="text-xs font-medium text-amber-900 max-w-md mx-auto">
            Certificamos solenemente que a família e responsáveis por
          </p>
        </div>

        <div className="py-2">
          <span className="text-3xl font-black text-slate-900 border-b-2 border-amber-400 pb-1 inline-block px-6">
            {profile.name}
          </span>
        </div>

        <p className="text-xs font-medium text-amber-900 max-w-md mx-auto leading-relaxed">
          concluíram com êxito todas as etapas de aprendizado sobre <strong className="text-slate-900">Gestação, Amamentação, Parto Humanizado, Introdução Alimentar e Segurança da Criança</strong>, atingindo um índice de maturidade de <strong className="text-amber-700">{progressPercent}%</strong>.
        </p>

        {/* SELO OFICIAL E ASSINATURA */}
        <div className="flex justify-around items-center pt-4 border-t border-amber-300/60">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 text-amber-950 font-black flex items-center justify-center text-2xl shadow-lg border-2 border-white">
              ⭐
            </div>
            <span className="text-[9px] font-black text-amber-900 uppercase tracking-widest block mt-2">SELO OURO DE EXCELÊNCIA</span>
          </div>

          <div className="text-center space-y-1">
            <span className="text-xs font-serif italic text-slate-800 font-bold border-b border-slate-400 px-4 pb-0.5 block">
              Comitê de Saúde Casulo
            </span>
            <span className="text-[9px] font-black text-amber-900 uppercase tracking-widest block">CONSELHO MULTIDISCIPLINAR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentalCertificateModal;
