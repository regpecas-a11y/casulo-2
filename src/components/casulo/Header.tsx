import React from 'react';
import { Sparkles, Smartphone, Monitor, Volume2, VolumeX, ShieldCheck } from 'lucide-react';
import { CasuloLogo } from '../CasuloLogo';

interface HeaderProps {
  isMobileFrame: boolean;
  onToggleFrame: () => void;
  isPlayingSound: boolean;
  onToggleSound: () => void;
  onOpenPrivacyNotice: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isMobileFrame,
  onToggleFrame,
  isPlayingSound,
  onToggleSound,
  onOpenPrivacyNotice,
}) => {
  return (
    <header className="w-full bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE5DC] px-4 py-3 sticky top-0 z-30 transition-all">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
        {/* Brand Zone: Clean single-line wordmark with official logo */}
        <div className="flex items-center gap-2.5">
          <CasuloLogo size={36} />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-lg tracking-tight text-[#242220]">
                Casulo
              </span>
              <span className="text-[11px] font-medium tracking-wide text-[#756AA3] bg-[#F2EFF9] px-2 py-0.5 rounded-md">
                Demonstrativo
              </span>
            </div>
            <p className="text-[11px] text-[#716C65] font-normal leading-none hidden sm:block">
              Rede de apoio & cuidado para quem cuida
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Sound Quick Indicator (if playing) */}
          {isPlayingSound && (
            <button
              onClick={onToggleSound}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#E8EFE9] text-[#2C4A35] text-xs font-medium hover:bg-[#D9E6DC] transition-colors min-h-[38px]"
              title="Som calmante ativo. Toque para pausar."
              aria-label="Som calmante ativo. Toque para pausar."
            >
              <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#466352]" />
              <span className="hidden xs:inline">Som ativo</span>
            </button>
          )}

          {/* Privacy & Safe Demo Modal Trigger */}
          <button
            onClick={onOpenPrivacyNotice}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-[#EAE5DC] text-[#5F5B56] text-xs font-medium hover:text-[#242220] hover:bg-[#F5F2EA] transition-colors min-h-[38px]"
            title="Informações de segurança e dados demonstrativos"
            aria-label="Ver informações do protótipo e segurança"
          >
            <ShieldCheck className="w-4 h-4 text-[#466352]" />
            <span className="hidden sm:inline">Protótipo Seguro</span>
          </button>

          {/* Viewport Frame Switcher (Only visible on wide screens) */}
          <button
            onClick={onToggleFrame}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#EAE5DC] text-[#5F5B56] text-xs font-medium hover:text-[#242220] hover:bg-[#F5F2EA] transition-colors min-h-[38px]"
            title={isMobileFrame ? 'Expandir para tela cheia' : 'Enquadrar em formato celular (390px)'}
            aria-label={isMobileFrame ? 'Mudar para visualização expandida' : 'Mudar para formato celular'}
          >
            {isMobileFrame ? (
              <>
                <Monitor className="w-3.5 h-3.5 text-[#5F5B56]" />
                <span>Modo Amplo</span>
              </>
            ) : (
              <>
                <Smartphone className="w-3.5 h-3.5 text-[#466352]" />
                <span>Formato Celular</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
