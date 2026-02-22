'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  delay: number;
  rotation: number;
  size: number;
  drift: number;
  shape: 'rect' | 'circle';
}

const COLORS = ['#58CC02', '#1CB0F6', '#FF9600', '#CE82FF', '#FF4B4B', '#FFC800'];

export default function Confetti({ show }: { show: boolean }) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (show) {
      const newPieces: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        delay: Math.random() * 0.5,
        rotation: Math.random() * 720 - 360,
        size: Math.random() * 8 + 4,
        drift: (Math.random() - 0.5) * 80,
        shape: Math.random() > 0.5 ? 'rect' : 'circle',
      }));
      setPieces(newPieces);
    } else {
      setPieces([]);
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {pieces.map((piece) => (
            <motion.div
              key={piece.id}
              initial={{
                x: `${piece.x}vw`,
                y: -20,
                rotate: 0,
                opacity: 1,
              }}
              animate={{
                x: `calc(${piece.x}vw + ${piece.drift}px)`,
                y: '110vh',
                rotate: piece.rotation,
                opacity: [1, 1, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 2 + Math.random(),
                delay: piece.delay,
                ease: 'easeIn',
              }}
              style={{
                position: 'absolute',
                width: piece.size,
                height: piece.shape === 'circle' ? piece.size : piece.size * 0.6,
                backgroundColor: piece.color,
                borderRadius: piece.shape === 'circle' ? '50%' : 2,
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
