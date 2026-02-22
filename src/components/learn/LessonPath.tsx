'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Lock, Check, Star } from 'lucide-react';
import { TRACKS } from '@/lib/constants';
import { useProgressStore } from '@/stores/useProgressStore';
import { useHydration } from '@/lib/useHydration';
import { getLessonsForTrack } from '@/data';
import { TrackId } from '@/types';
import DifficultySelector from './DifficultySelector';

interface LessonPathProps {
  trackId: string;
}

export default function LessonPath({ trackId }: LessonPathProps) {
  const router = useRouter();
  const hydrated = useHydration();
  const getLessonStatus = useProgressStore((s) => s.getLessonStatus);

  const track = TRACKS.find(t => t.id === trackId);
  const lessons = getLessonsForTrack(trackId as TrackId);

  if (!hydrated || !track) return null;

  // Zigzag x positions (percentage from left)
  const getXPosition = (index: number) => {
    const positions = [50, 30, 50, 70, 50, 30, 50, 70];
    return positions[index % positions.length];
  };

  return (
    <div className="py-4 min-h-full" style={{ backgroundColor: `${track.color}08` }}>
      {/* Header */}
      <div className="px-5 flex items-center gap-3 mb-4">
        <button
          onClick={() => router.push('/learn')}
          className="w-10 h-10 rounded-full bg-white border border-surface-border/60 shadow-card flex items-center justify-center"
        >
          <ArrowLeft size={20} className="text-text-primary" />
        </button>
        <div className="flex-1">
          <h1 className="text-lg font-bold text-text-primary">{track.icon} {track.name}</h1>
        </div>
      </div>

      <div className="px-5 mb-6">
        <DifficultySelector />
      </div>

      {/* Lesson path */}
      <div className="relative px-4" style={{ minHeight: lessons.length * 140 }}>
        {/* SVG connection lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ minHeight: lessons.length * 140 }}
        >
          {lessons.slice(0, -1).map((_, i) => {
            const x1 = (getXPosition(i) / 100) * 350;
            const y1 = i * 140 + 48;
            const x2 = (getXPosition(i + 1) / 100) * 350;
            const y2 = (i + 1) * 140 + 48;
            const midY = (y1 + y2) / 2;

            return (
              <path
                key={i}
                d={`M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`}
                stroke={track.color}
                strokeWidth="4"
                strokeDasharray="8 4"
                fill="none"
                opacity="0.3"
              />
            );
          })}
        </svg>

        {/* Lesson nodes */}
        {lessons.map((lesson, index) => {
          const status = getLessonStatus(lesson.id, trackId as TrackId, index);
          const xPos = getXPosition(index);

          return (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="absolute"
              style={{
                left: `${xPos}%`,
                top: index * 140,
                transform: 'translateX(-50%)',
              }}
            >
              <button
                onClick={() => {
                  if (status !== 'locked') {
                    router.push(`/lesson/${lesson.id}`);
                  }
                }}
                disabled={status === 'locked'}
                className="flex flex-col items-center gap-2"
              >
                {/* Node circle */}
                <motion.div
                  whileTap={status !== 'locked' ? { scale: 0.9 } : {}}
                  className={`
                    w-20 h-20 rounded-full flex items-center justify-center
                    border-4 shadow-lg
                    ${status === 'completed'
                      ? 'border-brand-yellow'
                      : status === 'unlocked'
                        ? 'border-white animate-pulse-glow'
                        : 'border-gray-300'
                    }
                  `}
                  style={{
                    backgroundColor: status === 'locked' ? '#E5E5E5' : track.color,
                  }}
                >
                  {status === 'completed' ? (
                    <Star size={28} className="text-brand-yellow fill-brand-yellow" />
                  ) : status === 'unlocked' ? (
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  ) : (
                    <Lock size={24} className="text-gray-400" />
                  )}
                </motion.div>

                {/* Lesson title */}
                <div className="text-center max-w-[130px]">
                  <p className={`text-sm font-bold leading-tight ${
                    status === 'locked' ? 'text-gray-400' : 'text-text-primary'
                  }`}>
                    {lesson.title}
                  </p>
                  {status === 'completed' && (
                    <div className="flex items-center justify-center gap-0.5 mt-0.5">
                      <Check size={14} className="text-brand-green" />
                      <span className="text-xs font-bold text-brand-green">Done</span>
                    </div>
                  )}
                </div>
              </button>
            </motion.div>
          );
        })}
      </div>

      <div className="h-20" />
    </div>
  );
}
