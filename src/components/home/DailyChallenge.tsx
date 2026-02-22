'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUserStore } from '@/stores/useUserStore';
import { getDailyChallenge } from '@/data/daily-challenges';
import Card from '@/components/ui/Card';
import Button3D from '@/components/ui/Button3D';
import XPBadge from '@/components/ui/XPBadge';
import Confetti from '@/components/ui/Confetti';
import { XP_DAILY_CHALLENGE } from '@/lib/constants';

export default function DailyChallenge() {
  const difficulty = useUserStore((s) => s.difficulty);
  const dailyChallengeCompleted = useUserStore((s) => s.dailyChallengeCompleted);
  const completeDailyChallenge = useUserStore((s) => s.completeDailyChallenge);
  const addXP = useUserStore((s) => s.addXP);

  const today = new Date().toISOString().split('T')[0];
  const isCompleted = dailyChallengeCompleted === today;

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const challenge = getDailyChallenge();
  const variant = challenge.variants[difficulty];

  const handleAnswer = (answerId: string) => {
    if (showResult || isCompleted) return;
    setSelectedAnswer(answerId);
  };

  const handleCheck = () => {
    if (!selectedAnswer) return;
    setShowResult(true);

    if (selectedAnswer === variant.correctAnswer) {
      setShowConfetti(true);
      addXP(XP_DAILY_CHALLENGE);
      completeDailyChallenge();
      setTimeout(() => setShowConfetti(false), 2500);
    }
  };

  if (isCompleted && !showResult) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="px-5"
      >
        <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wide mb-2">
          Daily Challenge
        </h3>
        <Card className="text-center">
          <div className="text-4xl mb-2">✅</div>
          <p className="font-bold text-brand-green">Completed!</p>
          <p className="text-xs text-text-secondary">Come back tomorrow for a new challenge</p>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="px-5"
    >
      <Confetti show={showConfetti} />

      <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wide mb-2">
        Daily Challenge
      </h3>
      <Card variant="colored" colorTint="#FFC800">
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg">🎯</span>
          <div className="bg-brand-yellow/20 px-3 py-1 rounded-full">
            <span className="text-xs font-bold text-brand-orange">+{XP_DAILY_CHALLENGE} XP</span>
          </div>
        </div>

        <p className="font-semibold text-text-primary mb-4">{variant.question}</p>

        {variant.options && (
          <div className="space-y-2.5 mb-4">
            {variant.options.map((option) => {
              const isSelected = selectedAnswer === option.id;
              const isCorrect = showResult && option.id === variant.correctAnswer;
              const isWrong = showResult && isSelected && option.id !== variant.correctAnswer;

              return (
                <motion.button
                  key={option.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(option.id)}
                  className={`w-full text-left p-3.5 rounded-xl border-2 font-bold text-sm transition-colors min-h-[48px]
                    ${isCorrect ? 'border-brand-green bg-brand-green/10 text-brand-green' : ''}
                    ${isWrong ? 'border-brand-red bg-brand-red/10 text-brand-red' : ''}
                    ${isSelected && !showResult ? 'border-brand-blue bg-brand-blue/10 text-brand-blue' : ''}
                    ${!isSelected && !isCorrect && !isWrong ? 'border-surface-border text-text-primary' : ''}
                  `}
                >
                  {option.text}
                </motion.button>
              );
            })}
          </div>
        )}

        {!variant.options && (
          <div className="mb-4">
            <input
              type="text"
              placeholder="Type your answer..."
              className="w-full p-3.5 rounded-xl border-2 border-surface-border font-bold text-sm focus:outline-none focus:border-brand-blue"
              value={selectedAnswer || ''}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              disabled={showResult}
            />
          </div>
        )}

        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-4"
            >
              {selectedAnswer === variant.correctAnswer ? (
                <div className="flex items-center gap-2">
                  <span className="text-brand-green font-bold">Correct!</span>
                  <XPBadge amount={XP_DAILY_CHALLENGE} />
                </div>
              ) : (
                <p className="text-sm text-brand-red font-bold">{variant.explanation}</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {!showResult && (
          <Button3D
            fullWidth
            variant={selectedAnswer ? 'green' : 'gray'}
            disabled={!selectedAnswer}
            onClick={handleCheck}
          >
            Check
          </Button3D>
        )}
      </Card>
    </motion.div>
  );
}
