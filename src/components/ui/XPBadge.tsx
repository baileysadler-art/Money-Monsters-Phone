'use client';

import { motion } from 'framer-motion';

interface XPBadgeProps {
  amount: number;
  animate?: boolean;
}

export default function XPBadge({ amount, animate = true }: XPBadgeProps) {
  return (
    <motion.div
      initial={animate ? { scale: 0, rotate: -180 } : {}}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="inline-flex items-center gap-1 bg-brand-yellow/20 text-brand-orange px-3 py-1 rounded-full font-bold text-sm"
    >
      <span>⚡</span>
      <span>+{amount} XP</span>
    </motion.div>
  );
}
