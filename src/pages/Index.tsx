
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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-purple-50 to-yellow-100">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200/30 via-purple-200/30 to-yellow-200/30" />
      
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
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => setShowCelebration(!showCelebration)}
            >
              <Gift className="mr-2 h-5 w-5" />
              {showCelebration ? 'Pause Magic' : 'Start Celebration'}
            </Button>
            
            <Button 
              variant="outline"
              className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => {
                setCandlesBlown(0);
                setShowCelebration(true);
              }}
            >
              <Heart className="mr-2 h-5 w-5" />
              Reset Wishes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
