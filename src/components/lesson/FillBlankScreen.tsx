'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { DifficultyVariant } from '@/types';
import Button3D from '@/components/ui/Button3D';

interface FillBlankScreenProps {
  variant: DifficultyVariant;
  onCorrect: () => void;
  onWrong: () => void;
}

export default function FillBlankScreen({ variant, onCorrect, onWrong }: FillBlankScreenProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  const selectedOption = variant.options?.find(o => o.id === selectedId);
  const displayAnswer = selectedOption?.text || '';
  const isCorrect = selectedId === variant.correctAnswer;

  const handleCheck = () => {
    if (!selectedId) return;
    setChecked(true);
  };

  const handleContinue = () => {
    if (isCorrect) onCorrect();
    else onWrong();
  };

  // Split question at ___
  const parts = variant.question.split('___');

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col h-full px-5 py-6"
    >
      <div className="flex-1">
        <h2 className="text-lg font-bold text-text-primary mb-2">
          Fill in the blank
        </h2>

        <div className="mt-8 mb-8">
          <p className="text-xl font-semibold text-text-primary leading-relaxed">
            {parts[0]}
            <span className={`
              inline-block min-w-[100px] border-b-4 mx-1 px-3 py-1 text-center font-bold
              ${checked && isCorrect ? 'border-brand-green text-brand-green' : ''}
              ${checked && !isCorrect ? 'border-brand-red text-brand-red' : ''}
              ${!checked ? 'border-brand-blue text-brand-blue' : ''}
            `}>
              {displayAnswer || '___'}
            </span>
            {parts[1]}
          </p>
        </div>

        {/* Word bank options */}
        {variant.options ? (
          <div className="flex flex-wrap gap-2.5 justify-center">
            {variant.options.map((option) => {
              const isSelected = selectedId === option.id;
              const isAnswer = option.id === variant.correctAnswer;
              const showCorrect = checked && isAnswer;
              const showWrong = checked && isSelected && !isAnswer;

              return (
                <motion.button
                  key={option.id}
                  whileTap={!checked ? { scale: 0.95 } : {}}
                  onClick={() => !checked && setSelectedId(option.id)}
                  className={`
                    px-6 py-3.5 rounded-xl border-2 border-b-4 font-bold text-base
                    transition-colors
                    ${showCorrect ? 'border-brand-green bg-brand-green/10 text-brand-green' : ''}
                    ${showWrong ? 'border-brand-red bg-brand-red/10 text-brand-red animate-shake' : ''}
                    ${isSelected && !checked ? 'border-brand-blue bg-brand-blue/10 text-brand-blue' : ''}
                    ${!isSelected && !showCorrect && !showWrong ? 'border-surface-border bg-white text-text-primary' : ''}
                  `}
                >
                  {option.text}
                </motion.button>
              );
            })}
          </div>
        ) : (
          <input
            type="text"
            value={displayAnswer}
            onChange={(e) => !checked && setSelectedId(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !checked && handleCheck()}
            placeholder="Type your answer..."
            disabled={checked}
            className={`
              w-full p-4 rounded-2xl border-2 border-b-4 font-bold text-lg text-center
              focus:outline-none transition-colors
              ${checked && isCorrect ? 'border-brand-green bg-brand-green/10' : ''}
              ${checked && !isCorrect ? 'border-brand-red bg-brand-red/10' : ''}
              ${!checked ? 'border-surface-border focus:border-brand-blue bg-white' : ''}
            `}
            autoFocus
          />
        )}

        {checked && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 p-4 rounded-2xl ${isCorrect ? 'bg-brand-green/10' : 'bg-brand-red/10'}`}
          >
            <p className={`text-sm font-bold ${isCorrect ? 'text-brand-green' : 'text-brand-red'}`}>
              {isCorrect ? 'Perfect!' : variant.explanation}
            </p>
          </motion.div>
        )}
      </div>

      {!checked ? (
        <Button3D
          fullWidth
          variant={selectedId ? 'green' : 'gray'}
          disabled={!selectedId}
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
