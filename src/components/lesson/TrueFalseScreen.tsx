'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { DifficultyVariant } from '@/types';
import Button3D from '@/components/ui/Button3D';
import { Check, X } from 'lucide-react';

interface TrueFalseScreenProps {
  variant: DifficultyVariant;
  onCorrect: () => void;
  onWrong: () => void;
}

export default function TrueFalseScreen({ variant, onCorrect, onWrong }: TrueFalseScreenProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const isCorrect = selected === variant.correctAnswer;

  const handleCheck = () => {
    if (!selected) return;
    setChecked(true);
  };

  const handleContinue = () => {
    if (isCorrect) onCorrect();
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
        <h2 className="text-xl font-bold text-text-primary mb-8">
          {variant.question}
        </h2>

        <div className="flex gap-4">
          {[
            { id: 'true', label: 'True', icon: Check, selectedClass: 'border-brand-green bg-brand-green/10 text-brand-green' },
            { id: 'false', label: 'False', icon: X, selectedClass: 'border-brand-red bg-brand-red/10 text-brand-red' },
          ].map(({ id, label, icon: Icon, selectedClass }) => {
            const isSelected = selected === id;
            const isAnswer = id === variant.correctAnswer;
            const showCorrect = checked && isAnswer;
            const showWrong = checked && isSelected && !isAnswer;

            return (
              <motion.button
                key={id}
                whileTap={!checked ? { scale: 0.95 } : {}}
                onClick={() => !checked && setSelected(id)}
                className={`
                  flex-1 py-10 rounded-3xl border-2 border-b-4 flex flex-col items-center gap-3 font-bold text-lg
                  transition-colors
                  ${showCorrect ? 'border-brand-green bg-brand-green/10 text-brand-green' : ''}
                  ${showWrong ? 'border-brand-red bg-brand-red/10 text-brand-red animate-shake' : ''}
                  ${isSelected && !checked ? selectedClass : ''}
                  ${!isSelected && !showCorrect && !showWrong ? 'border-surface-border bg-white text-text-primary' : ''}
                `}
              >
                <Icon size={36} />
                <span>{label}</span>
              </motion.button>
            );
          })}
        </div>

        {checked && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-6 p-4 rounded-2xl ${isCorrect ? 'bg-brand-green/10' : 'bg-brand-red/10'}`}
          >
            <p className={`text-sm font-bold ${isCorrect ? 'text-brand-green' : 'text-brand-red'}`}>
              {isCorrect ? 'That\'s right!' : variant.explanation}
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
