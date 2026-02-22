'use client';

import { motion } from 'framer-motion';
import { useUserStore } from '@/stores/useUserStore';
import { Difficulty } from '@/types';

const DIFFICULTIES: { id: Difficulty; label: string; emoji: string; color: string }[] = [
  { id: 'easy', label: 'Easy', emoji: '🌱', color: 'bg-brand-green' },
  { id: 'medium', label: 'Medium', emoji: '🌿', color: 'bg-brand-orange' },
  { id: 'hard', label: 'Hard', emoji: '🌳', color: 'bg-brand-red' },
];

export default function DifficultySelector() {
  const difficulty = useUserStore((s) => s.difficulty);
  const setDifficulty = useUserStore((s) => s.setDifficulty);

  return (
    <div className="flex items-center gap-1.5 bg-gray-100 p-1.5 rounded-2xl">
      {DIFFICULTIES.map((d) => {
        const isActive = difficulty === d.id;
        return (
          <button
            key={d.id}
            onClick={() => setDifficulty(d.id)}
            className="relative flex-1 py-2.5 px-3 rounded-xl text-center"
          >
            {isActive && (
              <motion.div
                layoutId="difficulty-bg"
                className={`absolute inset-0 ${d.color} rounded-xl`}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className={`relative text-sm font-bold ${isActive ? 'text-white' : 'text-text-secondary'}`}>
              {d.emoji} {d.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
