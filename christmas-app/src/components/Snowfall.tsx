export default function Snowfall() {
  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: `${Math.random() * 3 + 4}s`,
    delay: `${Math.random() * 5}s`,
    size: `${Math.random() * 10 + 10}px`,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute text-white opacity-40 animate-fall"
          style={{
            left: flake.left,
            animationDuration: flake.duration,
            animationDelay: flake.delay,
            fontSize: flake.size,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
}