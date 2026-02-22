'use client';

import { motion } from 'framer-motion';

interface StreakFlameProps {
  streak: number;
  size?: 'sm' | 'md' | 'lg';
}

export default function StreakFlame({ streak, size = 'md' }: StreakFlameProps) {
  const sizes = {
    sm: { flame: 'text-2xl', text: 'text-sm' },
    md: { flame: 'text-4xl', text: 'text-lg' },
    lg: { flame: 'text-6xl', text: 'text-2xl' },
  };

  return (
    <div className="flex items-center gap-1">
      <motion.div
        className={sizes[size].flame}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -3, 3, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        🔥
      </motion.div>
      <span className={`${sizes[size].text} font-bold text-brand-orange`}>
        {streak}
      </span>
    </div>
  );
}
