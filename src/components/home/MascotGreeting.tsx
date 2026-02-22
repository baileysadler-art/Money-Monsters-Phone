'use client';

import { useMemo } from 'react';
import Mascot, { MascotExpression } from '@/components/mascot/Mascot';
import SpeechBubble from '@/components/mascot/SpeechBubble';
import { MASCOT_GREETINGS } from '@/lib/constants';
import { useUserStore } from '@/stores/useUserStore';
import { motion } from 'framer-motion';

function getTimeOfDay(): 'morning' | 'afternoon' | 'evening' {
  const hour = new Date().getHours();
  if (hour < 12) return 'morning';
  if (hour < 18) return 'afternoon';
  return 'evening';
}

function getExpression(timeOfDay: string, streak: number): MascotExpression {
  if (timeOfDay === 'evening') return streak > 0 ? 'happy' : 'sleeping';
  if (streak >= 7) return 'excited';
  if (streak > 0) return 'happy';
  return 'thinking';
}

export default function MascotGreeting() {
  const streak = useUserStore((s) => s.streak);

  const timeOfDay = useMemo(() => getTimeOfDay(), []);
  const greetings = MASCOT_GREETINGS[timeOfDay];
  const greeting = useMemo(
    () => greetings[Math.floor(Math.random() * greetings.length)],
    [greetings]
  );
  const expression = getExpression(timeOfDay, streak);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-end gap-2 px-5"
    >
      <Mascot expression={expression} size={90} />
      <div className="flex-1 mb-2">
        <SpeechBubble message={greeting} />
      </div>
    </motion.div>
  );
}
