'use client';

import { useUserStore } from '@/stores/useUserStore';
import { useProgressStore } from '@/stores/useProgressStore';
import { LEVELS } from '@/lib/constants';
import ProgressBar from '@/components/ui/ProgressBar';
import Card from '@/components/ui/Card';
import { motion } from 'framer-motion';

export default function ProgressSummary() {
  const xp = useUserStore((s) => s.xp);
  const level = useUserStore((s) => s.level);
  const totalCompleted = useProgressStore((s) => s.getTotalCompletedLessons());

  const currentLevel = LEVELS.find(l => l.level === level)!;
  const nextLevel = LEVELS.find(l => l.level === level + 1);
  const xpForNext = nextLevel ? nextLevel.xpRequired : currentLevel.xpRequired;
  const xpProgress = nextLevel
    ? ((xp - currentLevel.xpRequired) / (xpForNext - currentLevel.xpRequired)) * 100
    : 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="px-5"
    >
      <Card variant="gradient">
        {/* Gradient accent bar */}
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-brand-yellow to-brand-green mb-4" />

        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-xs font-bold text-text-secondary uppercase tracking-wide">Level {level}</p>
            <p className="text-base font-bold text-text-primary">{currentLevel.name}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-brand-orange">⚡ {xp}</p>
            <p className="text-xs font-semibold text-text-secondary">TOTAL XP</p>
          </div>
        </div>

        <ProgressBar progress={xpProgress} />

        <div className="flex justify-between mt-2 text-xs font-semibold text-text-secondary">
          <span>{xp} XP</span>
          <span>{nextLevel ? `${xpForNext} XP` : 'MAX'}</span>
        </div>

        <div className="mt-3 pt-3 border-t border-surface-border/50 flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="text-lg">📚</span>
            <span className="text-sm font-bold">{totalCompleted} lessons done</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
