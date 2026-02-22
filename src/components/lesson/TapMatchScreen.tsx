'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { DifficultyVariant } from '@/types';
import Button3D from '@/components/ui/Button3D';

interface TapMatchScreenProps {
  variant: DifficultyVariant;
  onCorrect: () => void;
  onWrong: () => void;
}

export default function TapMatchScreen({ variant, onCorrect, onWrong }: TapMatchScreenProps) {
  const pairs = useMemo(() => variant.matchPairs || [], [variant.matchPairs]);

  const shuffledRight = useMemo(() => {
    return [...pairs].sort(() => Math.random() - 0.5);
  }, [pairs]);

  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [selectedRight, setSelectedRight] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [wrongPair, setWrongPair] = useState<{ left: number; right: number } | null>(null);
  const [mistakes, setMistakes] = useState(0);

  const allMatched = matched.size === pairs.length;

  const handleLeftTap = (index: number) => {
    if (matched.has(index)) return;
    setSelectedLeft(index);
    setWrongPair(null);

    if (selectedRight !== null) {
      checkMatch(index, selectedRight);
    }
  };

  const handleRightTap = (index: number) => {
    const rightText = shuffledRight[index].right;
    const originalIndex = pairs.findIndex(p => p.right === rightText);
    if (matched.has(originalIndex)) return;

    setSelectedRight(index);
    setWrongPair(null);

    if (selectedLeft !== null) {
      checkMatch(selectedLeft, index);
    }
  };

  const checkMatch = (leftIdx: number, rightIdx: number) => {
    const leftPair = pairs[leftIdx];
    const rightItem = shuffledRight[rightIdx];

    if (leftPair.right === rightItem.right) {
      setMatched(prev => new Set(prev).add(leftIdx));
      setSelectedLeft(null);
      setSelectedRight(null);
    } else {
      setWrongPair({ left: leftIdx, right: rightIdx });
      setMistakes(m => m + 1);
      setTimeout(() => {
        setSelectedLeft(null);
        setSelectedRight(null);
        setWrongPair(null);
      }, 800);
    }
  };

  const handleContinue = () => {
    if (mistakes === 0) onCorrect();
    else onWrong();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col h-full px-5 py-6"
    >
      <div className="flex-1">
        <h2 className="text-xl font-bold text-text-primary mb-2">
          Tap to match!
        </h2>
        <p className="text-sm text-text-secondary font-semibold mb-6">
          Match the items on the left with the right
        </p>

        <div className="flex gap-3">
          {/* Left column */}
          <div className="flex-1 space-y-2.5">
            {pairs.map((pair, i) => {
              const isMatched = matched.has(i);
              const isSelected = selectedLeft === i;
              const isWrong = wrongPair?.left === i;

              return (
                <motion.button
                  key={`left-${i}`}
                  whileTap={!isMatched ? { scale: 0.95 } : {}}
                  onClick={() => !isMatched && handleLeftTap(i)}
                  className={`
                    w-full p-3.5 rounded-xl border-2 text-base font-bold text-center min-h-[48px]
                    transition-colors
                    ${isMatched ? 'border-brand-green bg-brand-green/10 text-brand-green' : ''}
                    ${isWrong ? 'border-brand-red bg-brand-red/10 text-brand-red animate-shake' : ''}
                    ${isSelected && !isWrong ? 'border-brand-blue bg-brand-blue/10 text-brand-blue' : ''}
                    ${!isMatched && !isSelected && !isWrong ? 'border-surface-border bg-white text-text-primary' : ''}
                  `}
                >
                  {pair.left}
                </motion.button>
              );
            })}
          </div>

          {/* Right column */}
          <div className="flex-1 space-y-2.5">
            {shuffledRight.map((item, i) => {
              const originalIdx = pairs.findIndex(p => p.right === item.right);
              const isMatched = matched.has(originalIdx);
              const isSelected = selectedRight === i;
              const isWrong = wrongPair?.right === i;

              return (
                <motion.button
                  key={`right-${i}`}
                  whileTap={!isMatched ? { scale: 0.95 } : {}}
                  onClick={() => !isMatched && handleRightTap(i)}
                  className={`
                    w-full p-3.5 rounded-xl border-2 text-base font-bold text-center min-h-[48px]
                    transition-colors
                    ${isMatched ? 'border-brand-green bg-brand-green/10 text-brand-green' : ''}
                    ${isWrong ? 'border-brand-red bg-brand-red/10 text-brand-red animate-shake' : ''}
                    ${isSelected && !isWrong ? 'border-brand-blue bg-brand-blue/10 text-brand-blue' : ''}
                    ${!isMatched && !isSelected && !isWrong ? 'border-surface-border bg-white text-text-primary' : ''}
                  `}
                >
                  {item.right}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {allMatched && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className={`mb-4 p-4 rounded-2xl ${mistakes === 0 ? 'bg-brand-green/10' : 'bg-brand-orange/10'}`}>
            <p className={`text-sm font-bold ${mistakes === 0 ? 'text-brand-green' : 'text-brand-orange'}`}>
              {mistakes === 0 ? 'Perfect matching!' : `Matched with ${mistakes} mistake${mistakes > 1 ? 's' : ''}!`}
            </p>
          </div>
          <Button3D
            fullWidth
            variant={mistakes === 0 ? 'green' : 'orange'}
            onClick={handleContinue}
          >
            Continue
          </Button3D>
        </motion.div>
      )}
    </motion.div>
  );
}
