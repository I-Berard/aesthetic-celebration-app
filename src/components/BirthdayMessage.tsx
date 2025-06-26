
interface BirthdayMessageProps {
  candlesBlown: number;
}

const BirthdayMessage = ({ candlesBlown }: BirthdayMessageProps) => {
  const messages = [
    "🎂 System.birthday.celebrate(YOU) initiated successfully! 🎂",
    "✨ Loading next_year.exe... Memories buffered! ✨",
    "🌟 Your presence illuminates the matrix! Network enhanced! 🌟",
    "🎉 Executing laughter.dll && love.exe && adventures.bat! 🎉",
    "💖 Happiness overflow detected! Beautiful_moments.exe running! 💖"
  ];

  const getCurrentMessage = () => {
    if (candlesBlown === 0) return "> Initialize candle_termination_sequence() 🕯️";
    return messages[Math.min(candlesBlown - 1, messages.length - 1)];
  };

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="bg-black/70 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-green-400/30 shadow-green-500/20">
        <div className={`transform transition-all duration-700 ${candlesBlown > 0 ? 'scale-100 opacity-100' : 'scale-95 opacity-70'}`}>
          <h3 className="text-2xl md:text-3xl font-semibold text-green-400 mb-6 leading-relaxed font-mono">
            {getCurrentMessage()}
          </h3>
          
          {candlesBlown >= 3 && (
            <div className="mt-6 p-6 bg-gradient-to-r from-green-900/20 to-green-800/20 rounded-lg border border-green-400/20 transform transition-all duration-1000 animate-fade-in">
              <p className="text-lg text-green-300 italic font-mono">
                "// May your birthday compile without errors, execute flawlessly, and generate infinite joy in the lives of all connected users! 🌈"
              </p>
              <div className="flex justify-center mt-4 gap-2 text-2xl">
                <span className="animate-bounce text-green-400">💻</span>
                <span className="animate-bounce text-green-400" style={{ animationDelay: '0.1s' }}>⚡</span>
                <span className="animate-bounce text-green-400" style={{ animationDelay: '0.2s' }}>🎂</span>
                <span className="animate-bounce text-green-400" style={{ animationDelay: '0.3s' }}>🔥</span>
                <span className="animate-bounce text-green-400" style={{ animationDelay: '0.4s' }}>✨</span>
              </div>
            </div>
          )}
          
          {candlesBlown === 5 && (
            <div className="mt-6 text-center animate-pulse">
              <div className="text-6xl mb-4 text-green-400">⚡🎊⚡</div>
              <p className="text-xl font-bold text-green-400 font-mono">
                HAPPY_BIRTHDAY.exe EXECUTED SUCCESSFULLY! 🎵
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BirthdayMessage;
