import React from 'react';
import { X, ShieldCheck, HeartHandshake, AlertCircle, Lock, Info } from 'lucide-react';

interface PrivacyNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyNoticeModal: React.FC<PrivacyNoticeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/45 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
    >
      <div className="w-full max-w-lg bg-[#FAF8F5] rounded-t-3xl sm:rounded-3xl border border-[#EAE5DC] shadow-2xl overflow-hidden p-6 space-y-4 max-h-[90vh] overflow-y-auto animate-slide-up">
        <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#E8EFE9] text-[#2C4A35] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#466352]" />
            </div>
            <div>
              <h2 id="privacy-title" className="font-display font-bold text-base text-[#242220]">
                Sobre este Protótipo Casulo
              </h2>
              <p className="text-xs text-[#716C65]">Privacidade, segurança e dados fictícios</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#716C65] hover:bg-[#F5F2EA]"
            aria-label="Fechar modal de privacidade"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 text-xs text-[#5F5B56] leading-relaxed">
          <div className="p-3 bg-[#E8EFE9] border border-[#BDD3C2] rounded-2xl flex items-start gap-2.5 text-[#2C4A35]">
            <Lock className="w-4 h-4 shrink-0 mt-0.5 text-[#466352]" />
            <div>
              <strong className="block text-xs text-[#242220]">Ambiente 100% Local & Demonstrativo</strong>
              Nenhum dado pessoal, foto, cadastro médico ou número de telefone é transmitido ou salvo em servidores externos.
            </div>
          </div>

          <div className="p-3 bg-white border border-[#EAE5DC] rounded-2xl space-y-2">
            <p className="font-semibold text-xs text-[#242220]">Compromissos Éticos do Casulo:</p>
            <ul className="space-y-1.5 list-disc list-inside">
              <li><strong>Sem julgamentos:</strong> Cansaço parental e dificuldades de rotina não são falhas, são realidades.</li>
              <li><strong>Apoio de verdade:</strong> O foco inicial é viabilizar que você peça ajuda prática a quem confia.</li>
              <li><strong>Proteção da infância:</strong> Sem feed público aberto, sem exposição das crianças na internet.</li>
              <li><strong>Orientação médica responsável:</strong> Textos e ruído branco não substituem pediatras ou profissionais credenciados.</li>
            </ul>
          </div>

          <div className="p-3 bg-[#FAF0EC] border border-[#E8C5B8] rounded-2xl flex items-start gap-2 text-[#9A462C]">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed">
              “Conteúdo educativo demonstrativo, pendente de revisão profissional. Não substitui orientação individual.”
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-[#466352] text-white text-xs font-semibold hover:bg-[#385142] min-h-[44px]"
        >
          Entendido, voltar ao aplicativo
        </button>
      </div>
    </div>
  );
};
