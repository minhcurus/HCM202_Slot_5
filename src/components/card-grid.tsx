"use client";

import { motion } from "framer-motion";
import { AnimatedCard } from "./animated-card";

const PERSON_INFO = {
  minh: { name: "Minh", color: "purple" as const },
  nhan: { name: "Nhân", color: "orange" as const },
  vinh: { name: "Vinh", color: "green" as const },
  bao: { name: "Bảo", color: "blue" as const },
  hung: { name: "Hưng", color: "pink" as const }
};

interface CardGridProps {
  availablePersons: string[];
}

export function CardGrid({ availablePersons }: CardGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {availablePersons.map((person, index) => {
        const info = PERSON_INFO[person as keyof typeof PERSON_INFO];
        if (!info) return null;

        return (
          <AnimatedCard
            key={person}
            gradient={info.color}
            delay={0.1 * index}
            className="group cursor-pointer hover:scale-105 transition-transform"
          >
            <motion.a
              href={`/${person}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block p-4 text-center"
            >
              <h3 className="text-3xl font-bold text-slate-800 mb-3 heading-text">
                {info.name}
              </h3>
              <p className="text-slate-600 text-lg content-text font-medium">
                Xem nội dung của {info.name}
              </p>
            </motion.a>
          </AnimatedCard>
        );
      })}
    </div>
  );
}