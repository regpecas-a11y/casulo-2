import React, { useState } from 'react';

interface CasuloLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const CasuloLogo: React.FC<CasuloLogoProps> = ({
  className = '',
  size = 38,
  showText = false,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <div
        style={{ width: size, height: size }}
        className="relative shrink-0 rounded-xl overflow-hidden shadow-xs flex items-center justify-center bg-white border border-[#EAE5DC]"
      >
        {!hasError ? (
          <img
            src="/logo.png"
            alt="Logotipo Casulo"
            width={size}
            height={size}
            className="w-full h-full object-contain p-0.5"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="w-full h-full bg-[#E8EFE9] text-[#2C4A35] flex items-center justify-center">
            <svg
              className="w-3/5 h-3/5 text-[#466352]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10c0 4.5-2.8 8.4-6.8 9.6" />
              <path d="M12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>
          </div>
        )}
      </div>

      {showText && (
        <span className="font-display font-bold text-lg tracking-tight text-[#242220]">
          Casulo
        </span>
      )}
    </div>
  );
};

export default CasuloLogo;
