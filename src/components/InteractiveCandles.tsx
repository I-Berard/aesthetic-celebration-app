
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff } from 'lucide-react';

interface InteractiveCandlesProps {
  candlesBlown: number;
  setCandlesBlown: (count: number) => void;
}

const InteractiveCandles = ({ candlesBlown, setCandlesBlown }: InteractiveCandlesProps) => {
  const totalCandles = 5;
  const [clickedCandles, setClickedCandles] = useState<Set<number>>(new Set());
  const [isListening, setIsListening] = useState(false);
  const [micPermission, setMicPermission] = useState<boolean | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const microphoneRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const handleCandleClick = (index: number) => {
    if (!clickedCandles.has(index)) {
      const newClickedCandles = new Set(clickedCandles);
      newClickedCandles.add(index);
      setClickedCandles(newClickedCandles);
      setCandlesBlown(candlesBlown + 1);
    }
  };

  const startListening = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      setMicPermission(true);
      
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      analyserRef.current = audioContextRef.current.createAnalyser();
      microphoneRef.current = audioContextRef.current.createMediaStreamSource(stream);
      
      microphoneRef.current.connect(analyserRef.current);
      analyserRef.current.fftSize = 256;
      
      setIsListening(true);
      detectBlowing();
    } catch (error) {
      console.error('Microphone access denied:', error);
      setMicPermission(false);
    }
  };

  const stopListening = () => {
    setIsListening(false);
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }
  };

  const detectBlowing = () => {
    if (!analyserRef.current || !isListening) return;

    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const checkAudio = () => {
      if (!isListening || !analyserRef.current) return;

      analyserRef.current.getByteFrequencyData(dataArray);
      
      // Calculate average volume
      const average = dataArray.reduce((a, b) => a + b) / bufferLength;
      
      // If volume is above threshold (indicating blowing), blow out a candle
      if (average > 30 && clickedCandles.size < totalCandles) {
        const remainingCandles = [...Array(totalCandles)].map((_, i) => i).filter(i => !clickedCandles.has(i));
        if (remainingCandles.length > 0) {
          const randomCandle = remainingCandles[Math.floor(Math.random() * remainingCandles.length)];
          handleCandleClick(randomCandle);
        }
      }

      if (isListening) {
        requestAnimationFrame(checkAudio);
      }
    };

    checkAudio();
  };

  useEffect(() => {
    return () => {
      stopListening();
    };
  }, []);

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
      
      <div className="mb-6">
        <Button
          onClick={isListening ? stopListening : startListening}
          className={`${isListening 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-blue-500 hover:bg-blue-600'
          } text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300`}
        >
          {isListening ? <MicOff className="mr-2 h-5 w-5" /> : <Mic className="mr-2 h-5 w-5" />}
          {isListening ? 'Stop Listening' : 'Use Microphone to Blow'}
        </Button>
        
        {micPermission === false && (
          <p className="text-red-500 text-sm mt-2">
            Microphone access denied. Please click on candles manually or enable microphone permission.
          </p>
        )}
        
        {isListening && (
          <p className="text-green-600 text-sm mt-2 animate-pulse">
            🎤 Listening... Blow into your microphone!
          </p>
        )}
      </div>
      
      <div className="text-lg text-gray-700">
        {candlesBlown === 0 && "Click on the candles or use your microphone to blow them out!"}
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
