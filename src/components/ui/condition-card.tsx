"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Quote, Heart, Users, Lightbulb, Shield } from "lucide-react";
import Image from "next/image";

export default function ConditionCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  const details = [
    {
      icon: <Heart className="w-6 h-6" />,
      text: "Niềm tin chính trị của nhân dân là cội nguồn sức mạnh của Đảng.",
      color: "text-red-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "Niềm tin không chỉ là sự ủng hộ, mà là sự đồng hành: nhân dân chấp nhận hy sinh, đóng góp, bảo vệ chế độ.",
      color: "text-blue-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Nếu mất niềm tin → mất sức mạnh → nguy cơ suy yếu.",
      color: "text-orange-600"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      text: "Để giữ niềm tin, Đảng phải \"nói đi đôi với làm\", gắn bó mật thiết với nhân dân.",
      color: "text-green-600"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Section Title */}
      <motion.h2
        className="text-3xl font-bold text-center text-slate-800 mb-8 font-inter"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Điều kiện để vai trò phát huy
      </motion.h2>

      {/* Main Card */}
      <motion.div
        className="bg-gradient-to-br from-amber-50 via-white to-orange-50 rounded-3xl overflow-hidden shadow-2xl border border-amber-200"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header with Image and Title */}
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-orange-600/10"></div>
          
          <div className="relative p-8 flex flex-col lg:flex-row items-center gap-8">
            {/* Image Section */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-amber-300 shadow-lg bg-white">
                <Image
                  src="/image/nhan_1.jpg"
                  alt="Niềm tin của nhân dân"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Content Section */}
            <div className="flex-1 text-center lg:text-left">
              <motion.h3
                className="text-3xl font-bold text-slate-800 mb-6 font-inter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Niềm tin của nhân dân – nền tảng lãnh đạo
              </motion.h3>

              {/* Quote Section */}
              <motion.div
                className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-amber-200 shadow-md"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Quote className="w-8 h-8 text-amber-600 mb-4 mx-auto lg:mx-0" />
                <blockquote className="text-lg text-slate-700 font-crimson italic leading-relaxed mb-4">
                  "Trong bầu trời không gì quý bằng nhân dân. Trong thế giới không gì mạnh bằng lực lượng đoàn kết của nhân dân."
                </blockquote>
                <cite className="text-amber-700 font-inter font-semibold">— Hồ Chí Minh</cite>
              </motion.div>
            </div>
          </div>

          {/* Expand Button */}
          <motion.div
            className="absolute bottom-4 right-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </button>
          </motion.div>
        </div>

        {/* Expandable Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden border-t border-amber-200"
            >
              <div className="p-8 bg-gradient-to-r from-amber-50 to-orange-50">
                <h4 className="text-xl font-bold text-slate-800 mb-6 font-inter text-center">
                  Chi tiết phân tích
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {details.map((detail, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-md border border-amber-100"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`${detail.color} flex-shrink-0 mt-1`}>
                          {detail.icon}
                        </div>
                        <p className="text-slate-700 font-crimson leading-relaxed">
                          {detail.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}