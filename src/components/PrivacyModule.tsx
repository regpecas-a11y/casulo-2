import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Download, Trash2, FileText, CheckCircle, AlertTriangle } from 'lucide-react';
import { exportUserData, deleteUserData } from '../services/firebaseService';
import { auth } from '../lib/firebase';

interface PrivacyModuleProps {
  userId: string;
  onClose: () => void;
  themeColor: string;
}

const PrivacyModule: React.FC<PrivacyModuleProps> = ({ userId, onClose, themeColor }) => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy' | 'management'>('terms');
  const [isExporting, setIsExporting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [consentGiven, setConsentGiven] = useState(true); // Assume true if they are in the app, but could be a state

  const handleExport = async () => {
    setIsExporting(true);
    try {
      const data = await exportUserData(userId);
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `casulo_dados_${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Export failed:", error);
      alert("Falha ao exportar dados.");
    } finally {
      setIsExporting(false);
    }
  };

  const handleDelete = async () => {
    if (confirm("⚠️ TEM CERTEZA? Esta ação é IRREVERSÍVEL e todos os seus dados (fotos, registros, finanças) serão excluídos permanentemente para cumprir com o seu direito de esquecimento (LGPD).")) {
      setIsDeleting(true);
      try {
        await deleteUserData(userId);
        alert("Dados excluídos com sucesso. Você será desconectado.");
        await auth.signOut();
      } catch (error) {
        console.error("Delete failed:", error);
        alert("Falha ao excluir dados.");
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[2000] bg-slate-900/80 backdrop-blur-xl flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white w-full max-w-lg rounded-[3rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className={`bg-${themeColor}-400 p-8 text-white relative`}>
          <button onClick={onClose} className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors">
            <Trash2 className="w-6 h-6 rotate-45" />
          </button>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-black tracking-tight">Privacidade & Termos</h2>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Conformidade LGPD/GDPR</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-100 p-2 gap-1 bg-slate-50">
          {[
            { id: 'terms', label: 'Termos', icon: FileText },
            { id: 'privacy', label: 'Privacidade', icon: Shield },
            { id: 'management', label: 'Meus Dados', icon: Download }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 py-3 rounded-2xl flex items-center justify-center gap-2 text-[10px] font-black uppercase transition-all ${
                activeTab === tab.id 
                  ? `bg-white shadow-sm text-${themeColor}-600` 
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <tab.icon className="w-3 h-3" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6 no-scrollbar">
          <AnimatePresence mode="wait">
            {activeTab === 'terms' && (
              <motion.div 
                key="terms"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="prose prose-slate prose-sm max-w-none"
              >
                <h3 className="text-lg font-black text-slate-800">1. Aceitação dos Termos</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ao utilizar o Casulo, você concorda com estes termos. O aplicativo é uma ferramenta de apoio e não substitui aconselhamento médico profissional.
                </p>
                <h3 className="text-lg font-black text-slate-800 mt-6">2. Isenção de Responsabilidade</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  As sugestões de receitas, guias alimentares e ferramentas financeiras são informativas. O Casulo não se responsabiliza por decisões tomadas com base nestas informações. Consulte sempre um pediatra.
                </p>
                <h3 className="text-lg font-black text-slate-800 mt-6">3. Armazenamento de Longo Prazo</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Seus dados são armazenados de forma segura por até 8 anos para permitir o acompanhamento histórico do crescimento do seu filho, a menos que você solicite a exclusão.
                </p>
              </motion.div>
            )}

            {activeTab === 'privacy' && (
              <motion.div 
                key="privacy"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-6"
              >
                <div className="bg-emerald-50 p-6 rounded-[2rem] border border-emerald-100 flex gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <h4 className="text-sm font-black text-emerald-800">Consentimento Explícito</h4>
                    <p className="text-[10px] font-bold text-emerald-600 mt-1">
                      Você autoriza o processamento de dados de menores de idade para fins de acompanhamento de saúde e desenvolvimento.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-black text-slate-800">Proteção de Dados</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Utilizamos criptografia de ponta a ponta para campos sensíveis de saúde e finanças. Seus dados são privados e acessíveis apenas por você através de sua conta autenticada.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-[10px] font-bold text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                      Criptografia AES-256 para dados sensíveis.
                    </li>
                    <li className="flex items-center gap-2 text-[10px] font-bold text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                      Armazenamento em infraestrutura Google Cloud (Firebase).
                    </li>
                    <li className="flex items-center gap-2 text-[10px] font-bold text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                      Conformidade total com a LGPD (Lei Geral de Proteção de Dados).
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {activeTab === 'management' && (
              <motion.div 
                key="management"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-8"
              >
                <div className="bg-slate-50 p-8 rounded-[3rem] border-2 border-slate-100 text-center space-y-4">
                  <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center mx-auto border border-slate-100">
                    <Download className={`w-8 h-8 text-${themeColor}-500`} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-800">Portabilidade de Dados</h4>
                    <p className="text-[10px] font-bold text-slate-500 mt-1">
                      Baixe todos os seus registros em formato JSON para levar para onde quiser.
                    </p>
                  </div>
                  <button 
                    onClick={handleExport}
                    disabled={isExporting}
                    className={`w-full py-4 bg-${themeColor}-400 text-white font-black rounded-2xl shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50`}
                  >
                    {isExporting ? 'EXPORTANDO...' : 'BAIXAR MEUS DADOS'}
                    <Download className="w-4 h-4" />
                  </button>
                </div>

                <div className="bg-rose-50 p-8 rounded-[3rem] border-2 border-rose-100 text-center space-y-4">
                  <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center mx-auto border border-rose-100">
                    <AlertTriangle className="w-8 h-8 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-rose-800">Direito ao Esquecimento</h4>
                    <p className="text-[10px] font-bold text-rose-500 mt-1">
                      Exclua permanentemente sua conta e todos os dados associados.
                    </p>
                  </div>
                  <button 
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className="w-full py-4 bg-rose-500 text-white font-black rounded-2xl shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isDeleting ? 'EXCLUINDO...' : 'EXCLUIR TUDO'}
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[8px] font-black uppercase text-slate-400 tracking-widest">Sessão Segura</span>
          </div>
          <button 
            onClick={onClose}
            className={`px-8 py-3 bg-slate-800 text-white text-[10px] font-black rounded-full shadow-xl active:scale-95 transition-all`}
          >
            ENTENDI
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyModule;
