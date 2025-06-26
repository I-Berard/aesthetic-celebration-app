
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface InteractiveCandlesProps {
  candlesBlown: number;
  setCandlesBlown: (count: number) => void;
}

const InteractiveCandles = ({ candlesBlown, setCandlesBlown }: InteractiveCandlesProps) => {
  const totalCandles = 5;
  const [clickedCandles, setClickedCandles] = useState<Set<number>>(new Set());

  const handleCandleClick = (index: number) => {
    if (!clickedCandles.has(index)) {
      const newClickedCandles = new Set(clickedCandles);
      newClickedCandles.add(index);
      setClickedCandles(newClickedCandles);
      setCandlesBlown(candlesBlown + 1);
    }
  };

  return (
    <div className="text-center py-12">
      <h2 className="text-3xl font-bold text-green-400 mb-8 font-mono">
        &gt; EXECUTE candle_blowout.sh 🕯️
      </h2>
      
      <div className="flex justify-center items-end gap-4 mb-8">
        {[...Array(totalCandles)].map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            className="p-0 h-auto hover:bg-green-400/10 border border-green-400/20 rounded-lg"
            onClick={() => handleCandleClick(index)}
          >
            <div className="text-6xl transform hover:scale-110 transition-all duration-300 cursor-pointer p-4">
              {clickedCandles.has(index) ? (
                <div className="relative">
                  <span className="text-gray-600">🕯️</span>
                  <div className="absolute inset-0 text-green-400 animate-pulse">💀</div>
                </div>
              ) : (
                <div className="relative">
                  <span>🕯️</span>
                  <div className={`text-2xl transform transition-all duration-500 ${clickedCandles.has(index) ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
                    <span className="text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]">🔥</span>
                  </div>
                </div>
              )}
            </div>
          </Button>
        ))}
      </div>
      
      <div className="text-lg text-green-300 font-mono bg-black/50 border border-green-400/30 rounded-lg p-4 max-w-2xl mx-auto">
        {candlesBlown === 0 && (
          <div>
            <span className="text-green-400">&gt;</span> Click on candles to execute termination_sequence()
          </div>
        )}
        {candlesBlown > 0 && candlesBlown < totalCandles && (
          <div>
            <span className="text-green-400">&gt;</span> {candlesBlown}/{totalCandles} processes terminated. Continue execution... 🎉
          </div>
        )}
        {candlesBlown === totalCandles && (
          <div>
            <span className="text-green-400">&gt;</span> All processes terminated successfully! Wish.exe executed ✨
          </div>
        )}
      </div>
      
      {candlesBlown > 0 && (
        <div className="mt-4 text-4xl animate-bounce">
          <span className="text-green-400">{'⚡'.repeat(Math.min(candlesBlown, 3))}</span>
        </div>
      )}
    </div>
  );
};

export default InteractiveCandles;
