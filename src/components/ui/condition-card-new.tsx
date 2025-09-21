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
    <div className="w-full max-w-6xl mx-auto">
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
        className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl overflow-hidden shadow-2xl border border-amber-200"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header Section */}
        <div className="p-8">
          <motion.h3
            className="text-3xl font-bold text-slate-800 mb-8 font-inter text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Niềm tin của nhân dân – nền tảng lãnh đạo
          </motion.h3>

          {/* Content Layout */}
          <div className="space-y-8">
            {/* Image Section - Full Width */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-amber-300 bg-white">
                <Image
                  src="/image/nhan_1.jpg"
                  alt="Niềm tin của nhân dân"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>

            {/* Quote Section - Full Width */}
            <motion.div
              className="w-full max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 shadow-lg">
                <Quote className="w-12 h-12 text-amber-600 mb-6 mx-auto" />
                <blockquote className="text-2xl text-slate-700 font-crimson italic leading-relaxed mb-6 text-center">
                  "Trong bầu trời không gì quý bằng nhân dân. Trong thế giới không gì mạnh bằng lực lượng đoàn kết của nhân dân."
                </blockquote>
                <cite className="block text-center text-amber-700 font-inter font-semibold text-xl">
                  — Hồ Chí Minh
                </cite>
              </div>
            </motion.div>
          </div>

          {/* Expand Button */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full shadow-lg transition-all duration-300 flex items-center gap-3 font-inter font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Xem chi tiết phân tích</span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.button>
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
                <h4 className="text-2xl font-bold text-slate-800 mb-8 font-inter text-center">
                  Chi tiết phân tích
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {details.map((detail, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`${detail.color} flex-shrink-0 mt-1 p-2 rounded-lg bg-gray-50`}>
                          {detail.icon}
                        </div>
                        <p className="text-slate-700 font-crimson leading-relaxed text-lg">
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