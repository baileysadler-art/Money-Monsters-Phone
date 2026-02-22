'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useUserStore } from '@/stores/useUserStore';
import { useHydration } from '@/lib/useHydration';
import { MOCK_LEADERBOARD } from '@/data/leaderboard';
import { LeaderboardEntry } from '@/types';
import Card from '@/components/ui/Card';

function Podium({ entries }: { entries: LeaderboardEntry[] }) {
  const podiumOrder = [entries[1], entries[0], entries[2]]; // 2nd, 1st, 3rd
  const heights = [100, 140, 80];
  const medals = ['🥈', '🥇', '🥉'];

  return (
    <div className="flex items-end justify-center gap-3 mb-6 mt-4">
      {podiumOrder.map((entry, i) => (
        <motion.div
          key={entry?.rank || i}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: heights[i], opacity: 1 }}
          transition={{ delay: 0.2 + i * 0.15, type: 'spring', stiffness: 200 }}
          className="flex flex-col items-center"
        >
          <div className="text-4xl mb-1">{entry?.avatar}</div>
          <p className="text-sm font-bold text-text-primary mb-1 max-w-[80px] truncate">
            {entry?.name}
          </p>
          <p className="text-xs font-bold text-text-secondary mb-2">
            {entry?.xp} XP
          </p>
          <div
            className={`w-22 rounded-t-xl flex items-start justify-center pt-2
              ${i === 1 ? 'bg-brand-yellow/30' : i === 0 ? 'bg-gray-200' : 'bg-brand-orange/20'}
            `}
            style={{ height: heights[i] - 60, width: 88 }}
          >
            <span className="text-2xl">{medals[i]}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function LeaderboardScreen() {
  const hydrated = useHydration();
  const profile = useUserStore((s) => s.profile);
  const xp = useUserStore((s) => s.xp);

  const leaderboard = useMemo(() => {
    const entries: LeaderboardEntry[] = [...MOCK_LEADERBOARD];

    // Insert user into the correct position
    const userEntry: LeaderboardEntry = {
      rank: 0,
      name: profile.name,
      avatar: profile.avatar,
      xp,
      isUser: true,
    };

    // Find user's rank
    let inserted = false;
    for (let i = 0; i < entries.length; i++) {
      if (xp >= entries[i].xp) {
        entries.splice(i, 0, userEntry);
        inserted = true;
        break;
      }
    }
    if (!inserted) entries.push(userEntry);

    // Re-assign ranks
    return entries.map((e, i) => ({ ...e, rank: i + 1 }));
  }, [profile, xp]);

  if (!hydrated) return null;

  const top3 = leaderboard.slice(0, 3);

  return (
    <div className="py-6 px-5 space-y-4">
      <div>
        <h1 className="text-2xl font-extrabold text-text-primary mb-1">Leaderboard</h1>
        <p className="text-sm text-text-secondary font-semibold">Weekly Rankings</p>
      </div>

      <Podium entries={top3} />

      <div className="space-y-2">
        {leaderboard.slice(3).map((entry, index) => (
          <motion.div
            key={`${entry.name}-${entry.rank}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className={entry.isUser ? 'border-brand-blue bg-brand-blue/5' : ''}>
              <div className="flex items-center gap-3">
                <span className="w-8 text-center font-bold text-text-secondary">
                  {entry.rank}
                </span>
                <span className="text-2xl">{entry.avatar}</span>
                <div className="flex-1">
                  <p className={`font-bold ${entry.isUser ? 'text-brand-blue' : 'text-text-primary'}`}>
                    {entry.name} {entry.isUser && '(You)'}
                  </p>
                </div>
                <span className="font-bold text-brand-orange text-sm">
                  {entry.xp} XP
                </span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="h-4" />
    </div>
  );
}
