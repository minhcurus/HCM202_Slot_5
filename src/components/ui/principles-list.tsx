"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PrincipleItemProps {
  title: string;
  description: ReactNode;
  examples: string[];
}

export function PrincipleItem({ title, description, examples }: PrincipleItemProps) {
  return (
    <motion.div
      className="bg-slate-50/95 backdrop-blur-sm rounded-xl p-7 shadow-lg border-l-4 border-blue-500"
      whileHover={{ x: 8, scale: 1.02 }}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h4 className="text-xl font-bold text-slate-800 mb-4 font-inter">{title}</h4>
      <div className="text-slate-700 mb-5 font-crimson leading-relaxed text-lg">
        {description}
      </div>
      {examples.length > 0 && (
        <div className="space-y-2">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
              <span className="text-slate-600 font-crimson text-base">{example}</span>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

interface PrinciplesListProps {
  principles: Array<{
    title: string;
    description: ReactNode;
    examples?: string[];
  }>;
}

export function PrinciplesList({ principles }: PrinciplesListProps) {
  return (
    <div className="space-y-6 py-8">
      {principles.map((principle, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <PrincipleItem
            title={principle.title}
            description={principle.description}
            examples={principle.examples || []}
          />
        </motion.div>
      ))}
    </div>
  );
}