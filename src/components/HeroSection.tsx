
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
        <h1 className="text-2xl md:text-4xl font-bold font-mono bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent mb-6 animate-pulse drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]">
          CYBERKNIGHTS_WISHES_YOU_A_HAPPY_BELATED_BIRTHDAY
        </h1>
        
        <div className={`transform transition-all duration-1000 delay-300 ${textVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-2xl md:text-3xl text-green-400 mb-4 font-mono font-light">
            &gt; Executing birthday_protocol... ✨
          </p>
          
          <div className="flex justify-center items-center gap-2 text-lg text-green-300 font-mono">
            <span className="animate-bounce text-green-400">🎂</span>
            <span>kali&#64;celestin &#126;</span>
            <span className="animate-bounce text-green-400">🎂</span>
          </div>
        </div>
      </div>
      
      {/* Matrix-style effects */}
      {showCelebration && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-ping text-green-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            >
              {Math.random() > 0.5 ? '01' : '10'}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSection;
