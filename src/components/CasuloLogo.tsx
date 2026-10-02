
import React from 'react';

interface CasuloLogoProps {
  className?: string;
  size?: number;
}

const CasuloLogo: React.FC<CasuloLogoProps> = ({ className = "", size = 40 }) => {
  const [error, setError] = React.useState(false);

  // Use a static version to bust cache without causing re-renders
  const logoUrl = "/logo.png?v=7";

  if (error) {
    return (
      <div 
        style={{ width: size, height: size }} 
        className={`${className} flex items-center justify-center bg-emerald-50 rounded-full`}
      >
        {/* If logo fails, we show a simple colored circle instead of the emoji which might be "strange" */}
        <div className="w-1/2 h-1/2 bg-emerald-200 rounded-full animate-pulse" />
      </div>
    );
  }

  return (
    <img 
      src={logoUrl} 
      alt="Casulo Logo" 
      width={size} 
      height={size} 
      className={`${className} object-contain`}
      onError={() => {
        console.error("Logo failed to load");
        setError(true);
      }}
    />
  );
};

export default CasuloLogo;
