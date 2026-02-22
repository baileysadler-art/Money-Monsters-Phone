'use client';

import { motion } from 'framer-motion';
import { ContentScreen as ContentScreenType } from '@/types';
import Button3D from '@/components/ui/Button3D';
import Mascot from '@/components/mascot/Mascot';

interface ContentScreenProps {
  screen: ContentScreenType;
  onContinue: () => void;
}

export default function ContentScreen({ screen, onContinue }: ContentScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col h-full px-5 py-6"
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <Mascot expression="happy" size={100} className="mb-6" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-extrabold text-text-primary mb-4"
        >
          {screen.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-base text-text-secondary font-semibold leading-relaxed max-w-sm"
        >
          {screen.body}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Button3D fullWidth variant="green" onClick={onContinue}>
          Continue
        </Button3D>
      </motion.div>
    </motion.div>
  );
}
