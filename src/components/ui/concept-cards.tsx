"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

interface ConceptCardProps {
  icon: ReactNode;
  title: string;
  content: ReactNode;
  color: "red" | "blue" | "green" | "purple";
  href?: string;
}

export function ConceptCard({ icon, title, content, color, href }: ConceptCardProps) {
  const colorClasses = {
    red: "from-red-600 to-red-700 border-red-400",
    blue: "from-blue-600 to-blue-700 border-blue-400", 
    green: "from-green-600 to-green-700 border-green-400",
    purple: "from-purple-600 to-purple-700 border-purple-400"
  };

  const cardContent = (
    <motion.div
      className={`bg-gradient-to-br ${colorClasses[color]} rounded-xl p-7 text-white shadow-xl border-2 backdrop-blur-sm h-full flex flex-col ${href ? 'cursor-pointer hover:shadow-2xl' : ''}`}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="text-4xl">{icon}</div>
        <h3 className="text-2xl font-bold font-inter">{title}</h3>
      </div>
      <div className="font-crimson leading-relaxed text-lg flex-1">
        {content}
      </div>
    </motion.div>
  );

  if (href) {
    // Check if href is external (starts with http or https)
    const isExternal = href.startsWith('http://') || href.startsWith('https://');
    
    if (isExternal) {
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          {cardContent}
        </a>
      );
    } else {
      return <Link href={href}>{cardContent}</Link>;
    }
  }

  return cardContent;
}

interface ConceptGridProps {
  concepts: Array<{
    icon: ReactNode;
    title: string;
    content: ReactNode;
    color: "red" | "blue" | "green" | "purple";
    href?: string;
  }>;
}

export function ConceptGrid({ concepts }: ConceptGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {concepts.map((concept, index) => (
        <motion.div
          key={index}
          className="h-full"
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