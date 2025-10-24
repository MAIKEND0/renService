'use client';

import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: string;
}

export default function SparkleBackground() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const sparkleTypes = ['✨', '⭐', '💫', '🌟', '💎', '✦', '★'];

    const generateSparkles = () => {
      const newSparkles: Sparkle[] = [];
      // Więcej gwiazdek!
      for (let i = 0; i < 40; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 25 + 10,
          duration: Math.random() * 3 + 1.5,
          delay: Math.random() * 5,
          type: sparkleTypes[Math.floor(Math.random() * sparkleTypes.length)],
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-pulse"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            fontSize: `${sparkle.size}px`,
            animationDuration: `${sparkle.duration}s`,
            animationDelay: `${sparkle.delay}s`,
            opacity: Math.random() * 0.5 + 0.3,
            filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))',
          }}
        >
          {sparkle.type}
        </div>
      ))}

      {/* Dodatkowe małe migające punkty światła */}
      {[...Array(60)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 4 + 1}s`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: Math.random() * 0.6 + 0.2,
            boxShadow: '0 0 5px rgba(255, 255, 255, 0.8)',
          }}
        />
      ))}
    </div>
  );
}
