"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TimelineStepProps {
  number: string;
  title: string;
  content: ReactNode;
  isLast?: boolean;
}

export function TimelineStep({ number, title, content, isLast = false }: TimelineStepProps) {
  return (
    <motion.div 
      className="relative flex gap-6 pb-8"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500 to-indigo-400" />
      )}
      
      {/* Number circle */}
      <motion.div 
        className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-white font-bold text-xl font-inter">{number}</span>
      </motion.div>
      
      {/* Content */}
      <div className="flex-1 bg-slate-50/90 backdrop-blur-sm rounded-xl p-6 shadow-md border border-blue-200/50">
        <h3 className="text-xl font-bold text-slate-800 mb-4 font-inter">{title}</h3>
        <div className="text-slate-700 leading-relaxed font-crimson">
          {content}
        </div>
      </div>
    </motion.div>
  );
}

interface TimelineProps {
  steps: Array<{
    number: string;
    title: string;
    content: ReactNode;
  }>;
}

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-0"
      >
        {steps.map((step, index) => (
          <TimelineStep
            key={index}
            number={step.number}
            title={step.title}
            content={step.content}
            isLast={index === steps.length - 1}
          />
        ))}
      </motion.div>
    </div>
  );
}