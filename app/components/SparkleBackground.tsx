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

interface Star {
  id: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function SparkleBackground() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [stars, setStars] = useState<Star[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const sparkleTypes = ['✨', '⭐', '💫', '🌟', '💎', '✦', '★'];

    const generateSparkles = () => {
      const newSparkles: Sparkle[] = [];
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

    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 60; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          duration: Math.random() * 4 + 1,
          delay: Math.random() * 3,
          opacity: Math.random() * 0.6 + 0.2,
        });
      }
      setStars(newStars);
    };

    generateSparkles();
    generateStars();
  }, []);

  if (!mounted) {
    return null;
  }

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
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            opacity: star.opacity,
            boxShadow: '0 0 5px rgba(255, 255, 255, 0.8)',
          }}
        />
      ))}
    </div>
  );
}
