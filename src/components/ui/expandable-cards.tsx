"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ExpandableCardProps {
  icon: ReactNode;
  title: string;
  content: ReactNode;
  color: "red" | "blue" | "green" | "purple";
  index: number;
}

export function ExpandableCard({ icon, title, content, color, index }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const colorClasses = {
    red: "from-red-600 to-red-700 border-red-400",
    blue: "from-blue-600 to-blue-700 border-blue-400", 
    green: "from-green-600 to-green-700 border-green-400",
    purple: "from-purple-600 to-purple-700 border-purple-400"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="w-full"
    >
      {/* Title Card */}
      <motion.div
        className={`bg-gradient-to-br ${colorClasses[color]} rounded-xl p-7 text-white shadow-xl border-2 backdrop-blur-sm cursor-pointer h-32 flex items-center`}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <div className="text-4xl">{icon}</div>
            <h3 className="text-xl font-bold font-inter leading-tight">{title}</h3>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>
      </motion.div>

      {/* Content Card (Expandable) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-7 mt-4 shadow-lg border border-gray-200">
              <div className="font-crimson leading-relaxed text-lg text-gray-800">
                {content}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface ExpandableCardsGridProps {
  concepts: Array<{
    icon: ReactNode;
    title: string;
    content: ReactNode;
    color: "red" | "blue" | "green" | "purple";
  }>;
}

export default function ExpandableCardsGrid({ concepts }: ExpandableCardsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
      {concepts.map((concept, index) => (
        <ExpandableCard
          key={index}
          {...concept}
          index={index}
        />
      ))}
    </div>
  );
}