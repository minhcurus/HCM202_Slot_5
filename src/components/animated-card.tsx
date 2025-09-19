"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  gradient?: 'purple' | 'blue' | 'pink' | 'green' | 'orange';
}

export function AnimatedCard({ 
  children, 
  className = '', 
  delay = 0,
  gradient = 'purple'
}: AnimatedCardProps) {
  const gradientClasses = {
    purple: 'bg-gradient-to-br from-slate-50/95 to-blue-50/90 border-indigo-300/60 shadow-xl',
    blue: 'bg-gradient-to-br from-blue-50/95 to-indigo-100/90 border-blue-300/60 shadow-xl',
    pink: 'bg-gradient-to-br from-indigo-50/95 to-slate-100/90 border-slate-300/60 shadow-xl',
    green: 'bg-gradient-to-br from-slate-100/95 to-blue-50/90 border-blue-400/60 shadow-xl',
    orange: 'bg-gradient-to-br from-blue-100/95 to-slate-50/90 border-indigo-400/60 shadow-xl'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        ease: [0.25, 0.25, 0, 1]
      }}
      whileHover={{
        y: -6,
        scale: 1.01,
        transition: { duration: 0.3 }
      }}
      className={`
        rounded-2xl backdrop-blur-sm p-6 border animate-soft-glow
        ${gradientClasses[gradient]}
        ${className}
      `}
      style={{
        boxShadow: `0 8px 35px rgba(59, 130, 246, 0.15)`
      }}
    >
      {children}
    </motion.div>
  );
}