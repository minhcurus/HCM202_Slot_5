"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Heart, TrendingUp } from "lucide-react";

interface ConclusionItem {
  id: number;
  text: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
}

const conclusions: ConclusionItem[] = [
  {
    id: 1,
    text: "Đảng là nhân tố quyết định thắng lợi cách mạng Việt Nam.",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "text-emerald-600",
    gradient: "from-emerald-500 to-green-600"
  },
  {
    id: 2,
    text: "Niềm tin nhân dân = Chìa khóa thành công.",
    icon: <Heart className="w-8 h-8" />,
    color: "text-rose-600", 
    gradient: "from-rose-500 to-pink-600"
  },
  {
    id: 3,
    text: "Nhân dân tin → Đảng mạnh.\nNhân dân xa → Đảng yếu.",
    icon: <CheckCircle className="w-8 h-8" />,
    color: "text-blue-600",
    gradient: "from-blue-500 to-indigo-600"
  }
];

export default function AnimatedConclusion() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const currentText = conclusions[currentIndex].text;
    let charIndex = 0;
    setIsTransitioning(false);

    const typeWriter = () => {
      if (charIndex < currentText.length) {
        setDisplayText(currentText.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeWriter, 80); // Tốc độ gõ chữ
      } else {
        setIsTyping(false);
      }
    };

    // Reset text và bắt đầu typing
    setDisplayText("");
    setIsTyping(true);
    setTimeout(typeWriter, 100); // Delay nhỏ để smooth transition
  }, [currentIndex]);

  const handleCardClick = () => {
    // Ngăn spam click khi đang typing hoặc transitioning
    if (isTyping || isTransitioning) return;
    
    setIsTransitioning(true);
    const nextIndex = (currentIndex + 1) % conclusions.length; // Vòng lặp
    
    // Delay nhỏ để smooth transition
    setTimeout(() => {
      setCurrentIndex(nextIndex);
    }, 200);
  };

  return (
    <div className="w-full py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4 font-inter">
            Kết luận
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Single Card Display */}
        <div className="flex justify-center">
          <motion.div
            className={`bg-white rounded-3xl shadow-2xl p-12 border border-slate-200/50 transition-all duration-300 max-w-2xl w-full ${
              isTyping || isTransitioning ? 'cursor-not-allowed opacity-90' : 'cursor-pointer hover:shadow-3xl'
            }`}
            onClick={handleCardClick}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              filter: isTransitioning ? 'blur(2px)' : 'blur(0px)'
            }}
            whileHover={!isTyping && !isTransitioning ? { scale: 1.02 } : {}}
            whileTap={!isTyping && !isTransitioning ? { scale: 0.98 } : {}}
            transition={{ duration: 0.3 }}
          >
            {/* Card Number */}
            <div className={`absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r ${conclusions[currentIndex].gradient} text-white font-bold text-xl flex items-center justify-center shadow-lg`}>
              {conclusions[currentIndex].id}
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-3 mb-8">
              {conclusions.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    index === currentIndex ? `bg-gradient-to-r ${conclusions[currentIndex].gradient} shadow-lg scale-125` : 'bg-slate-200'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: index === currentIndex ? 1.25 : 1 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>

            {/* Icon */}
            <motion.div
              className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${conclusions[currentIndex].gradient} text-white mb-8 shadow-lg mx-auto`}
              key={`icon-${currentIndex}`}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              {conclusions[currentIndex].icon}
            </motion.div>

            {/* Text Content */}
            <div className="text-center min-h-[120px] flex items-center justify-center">
              <p className={`text-2xl font-semibold ${conclusions[currentIndex].color} leading-relaxed font-inter whitespace-pre-line`}>
                {displayText}
                {isTyping && (
                  <motion.span
                    className="inline-block w-1 h-8 bg-current ml-1"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                )}
              </p>
            </div>

            {/* Click Hint */}
            <motion.div
              className="text-center mt-8 pt-4 border-t border-slate-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: (isTyping || isTransitioning) ? 0 : 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm text-slate-500 font-medium">
                {isTransitioning ? 'Đang chuyển...' : 'Nhấp để xem kết luận tiếp theo'}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}