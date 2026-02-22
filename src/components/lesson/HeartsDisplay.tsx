'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface HeartsDisplayProps {
  hearts: number;
  maxHearts?: number;
}

export default function HeartsDisplay({ hearts, maxHearts = 5 }: HeartsDisplayProps) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: maxHearts }).map((_, i) => {
        const isActive = i < hearts;
        return (
          <motion.div
            key={i}
            animate={!isActive ? { scale: [1, 0.8, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            <Heart
              size={18}
              className={isActive ? 'text-brand-red fill-brand-red' : 'text-gray-300 fill-gray-300'}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
