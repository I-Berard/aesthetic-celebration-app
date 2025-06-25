
const FloatingElements = () => {
  const balloons = ['🎈', '🎈', '🎈', '🎈', '🎈'];
  const gifts = ['🎁', '🎁', '🎁'];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating Balloons */}
      {balloons.map((balloon, index) => (
        <div
          key={index}
          className="absolute text-4xl animate-bounce"
          style={{
            left: `${10 + index * 20}%`,
            top: `${20 + (index % 2) * 10}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${3 + index * 0.5}s`
          }}
        >
          {balloon}
        </div>
      ))}
      
      {/* Floating Gifts */}
      {gifts.map((gift, index) => (
        <div
          key={index}
          className="absolute text-3xl animate-pulse"
          style={{
            right: `${10 + index * 15}%`,
            bottom: `${20 + index * 15}%`,
            animationDelay: `${index * 1}s`,
            animationDuration: `${2 + index * 0.5}s`
          }}
        >
          {gift}
        </div>
      ))}
      
      {/* Floating Hearts */}
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="absolute text-pink-400 text-2xl animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        >
          💖
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
