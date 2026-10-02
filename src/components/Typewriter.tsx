import React, { useState, useEffect } from 'react';
import { playTypewriterKey } from '../sounds';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  playSound?: boolean;
  onComplete?: () => void;
}

export const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  speed = 30, 
  delay = 0, 
  className = "",
  playSound = false,
  onComplete
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;

    const startTyping = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        if (playSound) {
          playTypewriterKey();
        }
        currentIndex++;
        timeoutId = setTimeout(startTyping, speed);
      } else {
        setIsComplete(true);
        if (onComplete) onComplete();
      }
    };

    const initialDelay = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(timeoutId);
    };
  }, [text, speed, delay, onComplete, playSound]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && <span className="animate-pulse border-r-2 border-current ml-0.5" />}
    </span>
  );
};
