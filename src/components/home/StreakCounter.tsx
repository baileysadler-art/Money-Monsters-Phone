'use client';

import { useUserStore } from '@/stores/useUserStore';
import StreakFlame from '@/components/ui/StreakFlame';
import { motion } from 'framer-motion';

export default function StreakCounter() {
  const streak = useUserStore((s) => s.streak);
  const streakFreezes = useUserStore((s) => s.streakFreezes);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-3"
    >
      <div className="flex items-center gap-2 bg-brand-orange/10 px-3 py-1.5 rounded-full">
        <StreakFlame streak={streak} size="md" />
        <p className="text-sm font-bold text-text-secondary">
          {streak === 0 ? 'Start your streak!' : `${streak} day streak`}
        </p>
      </div>
      {streakFreezes > 0 && (
        <div className="flex items-center gap-1 bg-brand-blue/10 px-3 py-1.5 rounded-full">
          <span className="text-sm">🧊</span>
          <span className="text-xs font-bold text-brand-blue">{streakFreezes}</span>
        </div>
      )}
    </motion.div>
  );
}
