
interface BirthdayMessageProps {
  candlesBlown: number;
}

const BirthdayMessage = ({ candlesBlown }: BirthdayMessageProps) => {
  const messages = [
    "🎂 Today is all about celebrating YOU! 🎂",
    "✨ Another year of amazing memories ahead! ✨",
    "🌟 You make the world brighter just by being in it! 🌟",
    "🎉 Here's to laughter, love, and incredible adventures! 🎉",
    "💖 Wishing you endless happiness and beautiful moments! 💖"
  ];

  const getCurrentMessage = () => {
    if (candlesBlown === 0) return "Make a wish and start blowing out the candles! 🕯️";
    return messages[Math.min(candlesBlown - 1, messages.length - 1)];
  };

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-200">
        <div className={`transform transition-all duration-700 ${candlesBlown > 0 ? 'scale-100 opacity-100' : 'scale-95 opacity-70'}`}>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 leading-relaxed">
            {getCurrentMessage()}
          </h3>
          
          {candlesBlown >= 3 && (
            <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl transform transition-all duration-1000 animate-fade-in">
              <p className="text-lg text-gray-700 italic">
                "May your birthday be filled with sunshine, smiles, laughter, love, and all the wonderful things you bring to the lives of everyone around you! 🌈"
              </p>
              <div className="flex justify-center mt-4 gap-2 text-2xl">
                <span className="animate-bounce">🥳</span>
                <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>🎈</span>
                <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🎂</span>
                <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>🎁</span>
                <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>✨</span>
              </div>
            </div>
          )}
          
          {candlesBlown === 5 && (
            <div className="mt-6 text-center animate-pulse">
              <div className="text-6xl mb-4">🎊🎉🎊</div>
              <p className="text-xl font-bold text-purple-600">
                HAPPY BIRTHDAY TO YOU! 🎵
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BirthdayMessage;
