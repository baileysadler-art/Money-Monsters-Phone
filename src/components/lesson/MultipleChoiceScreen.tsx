'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { DifficultyVariant } from '@/types';
import Button3D from '@/components/ui/Button3D';

interface MultipleChoiceScreenProps {
  variant: DifficultyVariant;
  onCorrect: () => void;
  onWrong: () => void;
}

export default function MultipleChoiceScreen({ variant, onCorrect, onWrong }: MultipleChoiceScreenProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const isCorrect = selected === variant.correctAnswer;

  const handleCheck = () => {
    if (!selected) return;
    setChecked(true);
  };

  const handleContinue = () => {
    if (isCorrect) {
      onCorrect();
    } else {
      onWrong();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col h-full px-5 py-6"
    >
      <div className="flex-1">
        <h2 className="text-xl font-bold text-text-primary mb-6">
          {variant.question}
        </h2>

        <div className="space-y-3">
          {variant.options?.map((option, i) => {
            const isSelected = selected === option.id;
            const isAnswer = option.id === variant.correctAnswer;
            const showCorrect = checked && isAnswer;
            const showWrong = checked && isSelected && !isAnswer;

            return (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileTap={!checked ? { scale: 0.98 } : {}}
                onClick={() => !checked && setSelected(option.id)}
                className={`
                  w-full text-left p-4 rounded-2xl border-2 border-b-4 font-bold min-h-[52px]
                  transition-colors
                  ${showCorrect ? 'border-brand-green bg-brand-green/10 text-brand-green' : ''}
                  ${showWrong ? 'border-brand-red bg-brand-red/10 text-brand-red animate-shake' : ''}
                  ${isSelected && !checked ? 'border-brand-blue bg-brand-blue/10 text-brand-blue' : ''}
                  ${!isSelected && !showCorrect && !showWrong ? 'border-surface-border bg-white text-text-primary' : ''}
                `}
              >
                <div className="flex items-center gap-3">
                  <div className={`
                    w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold
                    ${showCorrect ? 'border-brand-green bg-brand-green text-white' : ''}
                    ${showWrong ? 'border-brand-red bg-brand-red text-white' : ''}
                    ${isSelected && !checked ? 'border-brand-blue bg-brand-blue text-white' : ''}
                    ${!isSelected && !showCorrect && !showWrong ? 'border-gray-300 text-gray-400' : ''}
                  `}>
                    {String.fromCharCode(65 + i)}
                  </div>
                  <span>{option.text}</span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {checked && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 p-4 rounded-2xl ${isCorrect ? 'bg-brand-green/10' : 'bg-brand-red/10'}`}
          >
            <p className={`text-sm font-bold ${isCorrect ? 'text-brand-green' : 'text-brand-red'}`}>
              {isCorrect ? 'Great job!' : variant.explanation}
            </p>
          </motion.div>
        )}
      </div>

      {!checked ? (
        <Button3D
          fullWidth
          variant={selected ? 'green' : 'gray'}
          disabled={!selected}
          onClick={handleCheck}
        >
          Check
        </Button3D>
      ) : (
        <Button3D
          fullWidth
          variant={isCorrect ? 'green' : 'red'}
          onClick={handleContinue}
        >
          Continue
        </Button3D>
      )}
    </motion.div>
  );
}
