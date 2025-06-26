
import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import FloatingElements from '../components/FloatingElements';
import BirthdayMessage from '../components/BirthdayMessage';
import InteractiveCandles from '../components/InteractiveCandles';
import ConfettiEffect from '../components/ConfettiEffect';
import { Button } from '@/components/ui/button';
import { Heart, Gift } from 'lucide-react';

const Index = () => {
  const [showCelebration, setShowCelebration] = useState(false);
  const [candlesBlown, setCandlesBlown] = useState(0);

  useEffect(() => {
    // Auto-start the celebration after a brief delay
    const timer = setTimeout(() => {
      setShowCelebration(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-green-900/20" />
      
      {/* Matrix-style background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ff00' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Confetti Effect */}
      {showCelebration && <ConfettiEffect />}
      
      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection showCelebration={showCelebration} />
        
        <div className="container mx-auto px-4 py-8 space-y-12">
          <InteractiveCandles 
            candlesBlown={candlesBlown} 
            setCandlesBlown={setCandlesBlown} 
          />
          
          <BirthdayMessage candlesBlown={candlesBlown} />
          
          {/* Action Buttons */}
          <div className="flex justify-center gap-4 pt-8">
            <Button 
              className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-black font-mono px-8 py-3 rounded border border-green-400 shadow-lg shadow-green-500/25 hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300"
              onClick={() => setShowCelebration(!showCelebration)}
            >
              <Gift className="mr-2 h-5 w-5" />
              {showCelebration ? 'PAUSE_MATRIX' : 'INIT_CELEBRATION'}
            </Button>
            
            <Button 
              variant="outline"
              className="border-2 border-green-400 text-green-400 bg-black/50 hover:bg-green-400/10 font-mono px-8 py-3 rounded shadow-lg shadow-green-500/25 hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300"
              onClick={() => {
                setCandlesBlown(0);
                setShowCelebration(true);
              }}
            >
              <Heart className="mr-2 h-5 w-5" />
              RESET_SYSTEM
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
