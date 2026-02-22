'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useUserStore } from '@/stores/useUserStore';
import { useProgressStore } from '@/stores/useProgressStore';
import { useHydration } from '@/lib/useHydration';
import { ACHIEVEMENTS } from '@/data/achievements';
import Card from '@/components/ui/Card';
import ProgressBar from '@/components/ui/ProgressBar';

export default function AwardsScreen() {
  const hydrated = useHydration();
  const xp = useUserStore((s) => s.xp);
  const streak = useUserStore((s) => s.streak);
  const level = useUserStore((s) => s.level);
  const dailyChallengeCompleted = useUserStore((s) => s.dailyChallengeCompleted);
  const achievements = useUserStore((s) => s.achievements);
  const unlockAchievement = useUserStore((s) => s.unlockAchievement);
  const lessonProgress = useProgressStore((s) => s.lessonProgress);

  // Build a snapshot of UserState for achievement requirement checks
  const userStateRef = useRef(useUserStore.getState());
  useEffect(() => {
    userStateRef.current = useUserStore.getState();
  });

  // Auto-unlock newly earned achievements via useEffect (not during render)
  useEffect(() => {
    if (!hydrated) return;

    const currentState = useUserStore.getState();
    ACHIEVEMENTS.forEach((achievement) => {
      const isUnlocked = achievement.requirement(currentState, lessonProgress);
      const wasAlreadyUnlocked = currentState.achievements.includes(achievement.id);
      if (isUnlocked && !wasAlreadyUnlocked) {
        unlockAchievement(achievement.id);
      }
    });
  }, [hydrated, xp, streak, level, dailyChallengeCompleted, lessonProgress, unlockAchievement]);

  if (!hydrated) return null;

  const progressPercent = (achievements.length / ACHIEVEMENTS.length) * 100;

  return (
    <div className="py-6 px-5 space-y-5">
      <div>
        <h1 className="text-2xl font-extrabold text-text-primary mb-1">Awards</h1>
        <p className="text-sm text-text-secondary font-semibold">
          {achievements.length}/{ACHIEVEMENTS.length} unlocked
        </p>
        <ProgressBar progress={progressPercent} className="mt-2" height={8} color="#FFC800" />
      </div>

      {achievements.length === 0 && (
        <Card variant="gradient" className="text-center">
          <div className="text-4xl mb-2">🏅</div>
          <p className="font-bold text-text-primary">No awards yet!</p>
          <p className="text-xs text-text-secondary mt-1">Complete lessons and challenges to earn awards</p>
        </Card>
      )}

      <div className="grid grid-cols-3 gap-3">
        {ACHIEVEMENTS.map((achievement, index) => {
          const isUnlocked = achievements.includes(achievement.id);

          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className={`text-center ${!isUnlocked ? 'opacity-40' : ''}`}>
                <div className={`text-3xl mb-2 ${isUnlocked ? '' : 'grayscale'}`}>
                  {isUnlocked ? achievement.icon : '🔒'}
                </div>
                <p className="text-xs font-bold text-text-primary leading-tight">
                  {achievement.name}
                </p>
                <p className="text-[10px] font-semibold text-text-secondary mt-1 leading-tight">
                  {achievement.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="h-4" />
    </div>
  );
}
