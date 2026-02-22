'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type CardVariant = 'default' | 'elevated' | 'colored' | 'gradient';

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  padding?: boolean;
  variant?: CardVariant;
  colorTint?: string;
}

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-white border border-surface-border/60 shadow-card',
  elevated: 'bg-white border border-surface-border/40 shadow-card-hover',
  colored: 'border border-surface-border/40 shadow-card',
  gradient: 'bg-gradient-card border border-surface-border/40 shadow-card',
};

export default function Card({ children, onClick, className = '', padding = true, variant = 'default', colorTint }: CardProps) {
  return (
    <motion.div
      whileTap={onClick ? { scale: 0.98 } : {}}
      onClick={onClick}
      className={`
        rounded-3xl
        ${variantStyles[variant]}
        ${padding ? 'p-5' : ''}
        ${onClick ? 'cursor-pointer active:shadow-none' : ''}
        ${className}
      `}
      style={variant === 'colored' && colorTint ? { backgroundColor: `${colorTint}08` } : undefined}
    >
      {children}
    </motion.div>
  );
}
