'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SpeechBubbleProps {
  message: string;
  typewriter?: boolean;
  className?: string;
}

export default function SpeechBubble({ message, typewriter = true, className = '' }: SpeechBubbleProps) {
  const [displayText, setDisplayText] = useState(typewriter ? '' : message);

  useEffect(() => {
    if (!typewriter) {
      setDisplayText(message);
      return;
    }

    setDisplayText('');
    let index = 0;
    const interval = setInterval(() => {
      if (index < message.length) {
        setDisplayText(message.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [message, typewriter]);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`relative bg-white rounded-2xl px-4 py-3 shadow-card border border-surface-border/60 ${className}`}
    >
      <p className="text-sm font-semibold text-text-primary leading-relaxed">
        {displayText}
        {typewriter && displayText.length < message.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block w-0.5 h-4 bg-text-primary ml-0.5 -mb-0.5"
          />
        )}
      </p>
      {/* Speech bubble tail */}
      <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white border-b border-r border-surface-border/60 transform rotate-45" />
    </motion.div>
  );
}
