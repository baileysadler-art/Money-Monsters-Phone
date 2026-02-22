'use client';

import { useRouter } from 'next/navigation';
import { useProgressStore } from '@/stores/useProgressStore';
import { TRACKS } from '@/lib/constants';
import Button3D from '@/components/ui/Button3D';
import Card from '@/components/ui/Card';
import ProgressBar from '@/components/ui/ProgressBar';
import { motion } from 'framer-motion';

export default function ContinueLearning() {
  const router = useRouter();
  const getTrackProgress = useProgressStore((s) => s.getTrackProgress);

  // Find the first track that's not complete, or the first track
  const nextTrack = TRACKS.find((track) => {
    const progress = getTrackProgress(track.id);
    return progress.completed < progress.total;
  }) || TRACKS[0];

  const progress = getTrackProgress(nextTrack.id);
  const progressPercent = progress.total > 0
    ? (progress.completed / progress.total) * 100
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="px-5"
    >
      <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wide mb-2">
        Continue Learning
      </h3>
      <Card variant="elevated">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
            style={{ backgroundColor: `${nextTrack.color}15` }}
          >
            {nextTrack.icon}
          </div>
          <div className="flex-1">
            <p className="font-bold text-text-primary">{nextTrack.name}</p>
            <p className="text-xs text-text-secondary">
              {progress.completed}/{progress.total} lessons
            </p>
          </div>
        </div>

        <ProgressBar
          progress={progressPercent}
          color={nextTrack.color}
          className="mb-4"
        />

        <Button3D
          fullWidth
          variant="green"
          onClick={() => router.push(`/learn/${nextTrack.id}`)}
        >
          {progress.completed === 0 ? 'Start' : 'Continue'}
        </Button3D>
      </Card>
    </motion.div>
  );
}
