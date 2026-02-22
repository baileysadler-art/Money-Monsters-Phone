'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number; // 0-100
  color?: string;
  height?: number;
  showLabel?: boolean;
  className?: string;
}

export default function ProgressBar({
  progress,
  color = '#58CC02',
  height = 14,
  showLabel = false,
  className = '',
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, progress));

  return (
    <div className={`relative ${className}`}>
      <div
        className="w-full rounded-full bg-gray-100 overflow-hidden"
        style={{ height }}
      >
        <motion.div
          className="h-full rounded-full relative overflow-hidden"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${clamped}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Glossy gel highlight */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" style={{ height: '50%' }} />
        </motion.div>
      </div>
      {showLabel && (
        <span className="absolute right-0 -top-5 text-xs font-bold text-text-secondary">
          {Math.round(clamped)}%
        </span>
      )}
    </div>
  );
}
