'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type ButtonVariant = 'green' | 'blue' | 'orange' | 'purple' | 'red' | 'gray' | 'yellow';

const COLORS: Record<ButtonVariant, { bg: string; border: string; text: string }> = {
  green: { bg: 'bg-brand-green', border: 'border-brand-green-dark', text: 'text-white' },
  blue: { bg: 'bg-brand-blue', border: 'border-brand-blue-dark', text: 'text-white' },
  orange: { bg: 'bg-brand-orange', border: 'border-brand-orange-dark', text: 'text-white' },
  purple: { bg: 'bg-brand-purple', border: 'border-brand-purple-dark', text: 'text-white' },
  red: { bg: 'bg-brand-red', border: 'border-brand-red-dark', text: 'text-white' },
  gray: { bg: 'bg-gray-200', border: 'border-gray-300', text: 'text-text-primary' },
  yellow: { bg: 'bg-brand-yellow', border: 'border-brand-yellow-dark', text: 'text-text-primary' },
};

interface Button3DProps {
  children: ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button3D({
  children,
  variant = 'green',
  onClick,
  disabled = false,
  fullWidth = false,
  size = 'md',
  className = '',
}: Button3DProps) {
  const colors = COLORS[variant];
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-5 text-lg',
  };

  return (
    <motion.button
      whileTap={disabled ? {} : { y: 3 }}
      transition={{ duration: 0.1 }}
      onClick={disabled ? undefined : onClick}
      className={`
        ${colors.bg} ${colors.text} ${colors.border}
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        font-bold rounded-2xl border-b-4 border-t-2 border-t-white/20
        transition-all duration-100 tracking-wide
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'active:border-b-[1px] active:translate-y-[3px] cursor-pointer'}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
