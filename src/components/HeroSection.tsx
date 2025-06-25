
import { useState, useEffect } from 'react';

interface HeroSectionProps {
  showCelebration: boolean;
}

const HeroSection = ({ showCelebration }: HeroSectionProps) => {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative text-center py-16 px-4">
      <div className={`transform transition-all duration-1000 ${textVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-yellow-500 bg-clip-text text-transparent mb-6 animate-pulse">
          Happy Birthday!
        </h1>
        
        <div className={`transform transition-all duration-1000 delay-300 ${textVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light">
            To Someone Very Special ✨
          </p>
          
          <div className="flex justify-center items-center gap-2 text-lg text-gray-600">
            <span className="animate-bounce">🎂</span>
            <span>Make a wish and blow the candles!</span>
            <span className="animate-bounce">🎂</span>
          </div>
        </div>
      </div>
      
      {/* Sparkle effects */}
      {showCelebration && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            >
              ✨
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSection;
