
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
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Blow Out The Candles! 🕯️
      </h2>
      
      <div className="flex justify-center items-end gap-4 mb-8">
        {[...Array(totalCandles)].map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            className="p-0 h-auto hover:bg-transparent"
            onClick={() => handleCandleClick(index)}
          >
            <div className="text-6xl transform hover:scale-110 transition-transform duration-300 cursor-pointer">
              {clickedCandles.has(index) ? '🕯️' : '🕯️'}
              <div className={`text-2xl transform transition-all duration-500 ${clickedCandles.has(index) ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
                🔥
              </div>
            </div>
          </Button>
        ))}
      </div>
      
      <div className="text-lg text-gray-600">
        {candlesBlown === 0 && "Click on the candles to blow them out!"}
        {candlesBlown > 0 && candlesBlown < totalCandles && `${candlesBlown} out of ${totalCandles} candles blown! Keep going! 🎉`}
        {candlesBlown === totalCandles && "All candles blown! Your wish has been made! ✨"}
      </div>
      
      {candlesBlown > 0 && (
        <div className="mt-4 text-4xl animate-bounce">
          {'🎊'.repeat(Math.min(candlesBlown, 3))}
        </div>
      )}
    </div>
  );
};

export default InteractiveCandles;
