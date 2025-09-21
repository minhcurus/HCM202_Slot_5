"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, TrendingUp, AlertTriangle, Lightbulb, CheckCircle, XCircle, Target } from "lucide-react";
import Image from "next/image";

interface PracticalCardProps {
  type: "success" | "warning" | "solution";
  title: string;
  image: string;
  content: React.ReactNode;
  icon: React.ReactNode;
  index: number;
}

function PracticalCard({ type, title, image, content, icon, index }: PracticalCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    console.log('Card clicked, current state:', isFlipped);
    setIsFlipped(!isFlipped);
    console.log('Card flipped to:', !isFlipped);
  };

  const typeStyles = {
    success: {
      gradient: "from-emerald-50 to-green-50",
      border: "border-emerald-200",
      accent: "text-emerald-600",
      accentBg: "bg-emerald-100",
      hover: "hover:border-emerald-300"
    },
    warning: {
      gradient: "from-orange-50 to-red-50", 
      border: "border-orange-200",
      accent: "text-orange-600",
      accentBg: "bg-orange-100",
      hover: "hover:border-orange-300"
    },
    solution: {
      gradient: "from-blue-50 to-indigo-50",
      border: "border-blue-200", 
      accent: "text-blue-600",
      accentBg: "bg-blue-100",
      hover: "hover:border-blue-300"
    }
  };

  const styles = typeStyles[type];

  return (
    <div
      className="w-full h-auto min-h-96"
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative w-full h-auto min-h-96 cursor-pointer transition-transform duration-700"
        onClick={handleClick}
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front Face - Image */}
        <div 
          className={`absolute inset-0 w-full h-96 rounded-2xl overflow-hidden shadow-xl border-2 ${styles.border}`}
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)'
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
            {/* Overlay với title */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
              <div className="p-6 w-full">
                <div className="flex items-center gap-4 mb-2">
                  <div className={`${styles.accent} p-2 rounded-lg bg-white/90 shadow-sm`}>
                    {icon}
                  </div>
                  <h3 className="text-white text-2xl font-bold font-inter drop-shadow-lg">
                    {title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Face - Content */}
        <div 
          className={`absolute inset-0 w-full h-auto min-h-96 rounded-2xl overflow-hidden shadow-xl border-2 ${styles.border} bg-gradient-to-br ${styles.gradient}`}
          style={{ 
            backfaceVisibility: 'hidden', 
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="p-8 h-full min-h-96 flex flex-col justify-center">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`${styles.accent} p-3 rounded-xl ${styles.accentBg} shadow-sm`}>
                {icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 font-inter">{title}</h3>
            </div>

            {/* Content */}
            <div className="text-slate-600 leading-relaxed">
              <div className="prose prose-lg max-w-none w-full">
                {content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PracticalConnection() {
  const cards = [
    {
      type: "success" as const,
      title: "Thành tựu đổi mới",
      image: "/image/nhan_2.jpg",
      icon: <TrendingUp className="w-8 h-8" />,
      content: (
        <div className="text-slate-700 font-crimson">
          <p className="text-xl font-semibold mb-4 text-emerald-700">
            Hơn 35 năm đổi mới, Việt Nam đã đạt nhiều thành tựu to lớn:
          </p>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <span>Kinh tế tăng trưởng liên tục, đời sống nhân dân cải thiện rõ rệt.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <span>Tỉ lệ hộ nghèo giảm mạnh, trở thành một trong những điểm sáng về xoá đói giảm nghèo.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <span>Chính trị ổn định, quốc phòng – an ninh vững chắc.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <span>Việt Nam tham gia nhiều hiệp định quốc tế, trở thành thành viên năng động của ASEAN và Liên Hợp Quốc.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      type: "warning" as const,
      title: "Hạn chế, thách thức",
      image: "/image/nhan_3.jpg",
      icon: <AlertTriangle className="w-8 h-8" />,
      content: (
        <div className="text-slate-700 font-crimson">
          <p className="text-xl font-semibold mb-4 text-orange-700">
            Bên cạnh thành tựu, vẫn còn những tồn tại:
          </p>
          <ul className="space-y-3 text-lg mb-6">
            <li className="flex items-start gap-3">
              <XCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <span>Quan liêu, tham nhũng, lãng phí làm suy giảm niềm tin.</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <span>Một bộ phận cán bộ, đảng viên suy thoái tư tưởng, đạo đức.</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <span>Khoảng cách giàu nghèo, bất công xã hội gây tâm lý bất mãn.</span>
            </li>
          </ul>
          <p className="text-lg font-medium text-orange-800 bg-orange-50 p-4 rounded-xl border border-orange-200">
            Đây là những vấn đề cần khắc phục để Đảng tiếp tục lãnh đạo thành công.
          </p>
        </div>
      )
    },
    {
      type: "solution" as const,
      title: "Giải pháp củng cố niềm tin",
      image: "/image/nhan_4.jpg",
      icon: <Lightbulb className="w-8 h-8" />,
      content: (
        <div className="text-slate-700 font-crimson">
          <p className="text-xl font-semibold mb-4 text-blue-700">
            Đảng đã ban hành nhiều chủ trương, đặc biệt là Nghị quyết TƯ 4 (khóa XI, XII, XIII) về xây dựng, chỉnh đốn Đảng.
          </p>
          <p className="text-lg font-medium mb-4 text-blue-600">Một số giải pháp then chốt:</p>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start gap-3">
              <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <span>Nâng cao đạo đức, trách nhiệm, gương mẫu của cán bộ, đảng viên.</span>
            </li>
            <li className="flex items-start gap-3">
              <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <span>Công khai, minh bạch trong mọi hoạt động.</span>
            </li>
            <li className="flex items-start gap-3">
              <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <span>Tăng cường dân chủ, phát huy quyền làm chủ của nhân dân.</span>
            </li>
            <li className="flex items-start gap-3">
              <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <span>Dựa vào nhân dân để xây dựng Đảng – nhân dân là "gốc", là "người giám sát quyền lực".</span>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto mt-16">
      {/* Section Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-slate-800 mb-4 font-inter">
          Liên hệ thực tiễn
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-orange-500 to-blue-500 mx-auto rounded-full"></div>
      </motion.div>

      {/* Cards Grid - Vertical Stack */}
      <div className="space-y-8">
        {cards.map((card, index) => (
          <PracticalCard
            key={index}
            {...card}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}