"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FoundationBlockProps {
  title: string;
  content: ReactNode;
  quote?: string;
  author?: string;
}

export function FoundationBlock({ title, content, quote, author }: FoundationBlockProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-xl border border-blue-200"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold text-slate-800 mb-6 font-inter text-center">{title}</h3>
      
      <div className="text-slate-700 leading-relaxed font-crimson mb-6 text-lg">
        {content}
      </div>

      {quote && (
        <motion.blockquote
          className="bg-white/60 p-6 rounded-xl border-l-4 border-blue-500 italic"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-slate-800 font-crimson text-lg mb-2">"{quote}"</p>
          {author && (
            <cite className="text-slate-600 font-inter text-sm">— {author}</cite>
          )}
        </motion.blockquote>
      )}
    </motion.div>
  );
}

interface HistoricalFlowProps {
  events: Array<{
    year: string;
    title: string;
    description: ReactNode;
  }>;
}

export function HistoricalFlow({ events }: HistoricalFlowProps) {
  return (
    <div className="py-8">
      <div className="relative">
        {/* Central timeline */}
        <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-blue-500 via-indigo-400 to-blue-500" />
        
        {events.map((event, index) => (
          <motion.div
            key={index}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10" />
            
            {/* Content card */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
              <motion.div
                className="bg-slate-50/95 backdrop-blur-sm rounded-xl p-6 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-blue-600 font-bold text-sm mb-2 font-inter">{event.year}</div>
                <h4 className="text-lg font-bold text-slate-800 mb-3 font-inter">{event.title}</h4>
                <div className="text-slate-700 font-crimson leading-relaxed">{event.description}</div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}