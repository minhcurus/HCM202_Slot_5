"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ConceptCardProps {
  icon: ReactNode;
  title: string;
  content: ReactNode;
  color: "red" | "blue" | "green" | "purple";
}

export function ConceptCard({ icon, title, content, color }: ConceptCardProps) {
  const colorClasses = {
    red: "from-red-600 to-red-700 border-red-400",
    blue: "from-blue-600 to-blue-700 border-blue-400", 
    green: "from-green-600 to-green-700 border-green-400",
    purple: "from-purple-600 to-purple-700 border-purple-400"
  };

  return (
    <motion.div
      className={`bg-gradient-to-br ${colorClasses[color]} rounded-xl p-6 text-white shadow-xl border-2 backdrop-blur-sm`}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="text-3xl">{icon}</div>
        <h3 className="text-xl font-bold font-inter">{title}</h3>
      </div>
      <div className="font-crimson leading-relaxed">
        {content}
      </div>
    </motion.div>
  );
}

interface ConceptGridProps {
  concepts: Array<{
    icon: ReactNode;
    title: string;
    content: ReactNode;
    color: "red" | "blue" | "green" | "purple";
  }>;
}

export function ConceptGrid({ concepts }: ConceptGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {concepts.map((concept, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <ConceptCard {...concept} />
        </motion.div>
      ))}
    </div>
  );
}