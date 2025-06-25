
import { useEffect, useState } from 'react';

const ConfettiEffect = () => {
  const [confetti, setConfetti] = useState<Array<{ id: number; emoji: string; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const confettiEmojis = ['🎊', '🎉', '✨', '🌟', '💫', '🎈', '🎁', '💖'];
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      emoji: confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)],
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2
    }));
    
    setConfetti(newConfetti);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute text-2xl animate-bounce"
          style={{
            left: `${piece.left}%`,
            top: '-10%',
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            animationIterationCount: 'infinite',
            transform: `translateY(${window.innerHeight + 100}px)`,
            transition: `transform ${piece.duration}s linear ${piece.delay}s`
          }}
        >
          {piece.emoji}
        </div>
      ))}
    </div>
  );
};

export default ConfettiEffect;
