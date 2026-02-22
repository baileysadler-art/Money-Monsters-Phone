'use client';

import { useEffect } from 'react';
import { useUserStore } from '@/stores/useUserStore';
import { useHydration } from '@/lib/useHydration';
import MascotGreeting from './MascotGreeting';
import StreakCounter from './StreakCounter';
import ProgressSummary from './ProgressSummary';
import ContinueLearning from './ContinueLearning';
import DailyChallenge from './DailyChallenge';
import { motion } from 'framer-motion';

export default function HomeScreen() {
  const hydrated = useHydration();
  const updateStreak = useUserStore((s) => s.updateStreak);
  const regenerateHearts = useUserStore((s) => s.regenerateHearts);

  useEffect(() => {
    if (hydrated) {
      updateStreak();
      regenerateHearts();
    }
  }, [hydrated, updateStreak, regenerateHearts]);

  if (!hydrated) {
    return (
      <div className="flex items-center justify-center h-full">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="text-4xl"
        >
          👾
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-8 pb-6 space-y-6 bg-gradient-warm min-h-full">
      {/* Header */}
      <div className="px-5 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-text-primary">
          <span className="text-brand-green">Money</span>
          {' '}
          <span className="text-brand-purple">Monsters</span>
        </h1>
        <StreakCounter />
      </div>

      {/* Mascot greeting */}
      <MascotGreeting />

      {/* Progress summary */}
      <ProgressSummary />

      {/* Continue learning card */}
      <ContinueLearning />

      {/* Daily challenge */}
      <DailyChallenge />

      {/* Bottom padding for tab bar */}
      <div className="h-4" />
    </div>
  );
}
