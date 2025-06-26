
const FloatingElements = () => {
  const hackSymbols = ['💻', '⚡', '🔥', '💀', '🎯'];
  const codeSymbols = ['{}', '</>', '01', '10', '>>'];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating Hack Symbols */}
      {hackSymbols.map((symbol, index) => (
        <div
          key={index}
          className="absolute text-4xl animate-bounce text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]"
          style={{
            left: `${10 + index * 20}%`,
            top: `${20 + (index % 2) * 10}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${3 + index * 0.5}s`
          }}
        >
          {symbol}
        </div>
      ))}
      
      {/* Floating Code Symbols */}
      {codeSymbols.map((code, index) => (
        <div
          key={index}
          className="absolute text-3xl animate-pulse text-green-300/70 font-mono"
          style={{
            right: `${10 + index * 15}%`,
            bottom: `${20 + index * 15}%`,
            animationDelay: `${index * 1}s`,
            animationDuration: `${2 + index * 0.5}s`
          }}
        >
          {code}
        </div>
      ))}
      
      {/* Floating Matrix Numbers */}
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="absolute text-green-500/30 text-2xl animate-pulse font-mono"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        >
          {Math.random() > 0.5 ? '1' : '0'}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
