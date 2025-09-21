"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, TrendingUp, AlertTriangle, Lightbulb, CheckCircle, XCircle, Target, X, ZoomIn } from "lucide-react";
import Image from "next/image";

interface PracticalCardProps {
  type: "success" | "warning" | "solution";
  title: string;
  image: string;
  content: React.ReactNode;
  icon: React.ReactNode;
  index: number;
}

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
}

function ImageModal({ isOpen, onClose, image, title }: ImageModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          {/* Modal */}
          <motion.div
            className="relative max-w-4xl max-h-[90vh] w-full"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X size={32} />
            </button>
            
            {/* Image */}
            <div className="relative w-full h-[80vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain bg-white"
              />
            </div>
            
            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
              <h3 className="text-white text-2xl font-bold font-inter">{title}</h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PracticalCard({ type, title, image, content, icon, index }: PracticalCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

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
    <>
      <motion.div
        className={`bg-gradient-to-br ${styles.gradient} rounded-2xl overflow-hidden shadow-lg border ${styles.border} ${styles.hover} transition-all duration-300 w-full`}
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        whileHover={{ scale: 1.01 }}
        style={{ 
          boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
        }}
      >
        {/* Content Layout - Horizontal */}
        <div className="flex flex-col lg:flex-row items-stretch h-full">
          {/* Image Section */}
          <div className="lg:w-2/5 w-full relative group cursor-pointer" onClick={() => setShowImageModal(true)}>
            <div className="relative w-full h-80 lg:h-full bg-gradient-to-br from-gray-100 to-gray-200">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <ZoomIn className="w-12 h-12 text-white drop-shadow-lg" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-3/5 w-full p-8 flex flex-col justify-between">
            {/* Header */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={`${styles.accent} p-3 rounded-xl ${styles.accentBg} shadow-sm`}>
                  {icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 font-inter">{title}</h3>
              </div>

              {/* Content Preview */}
              <div className={`text-slate-600 leading-relaxed ${isExpanded ? '' : 'line-clamp-3 overflow-hidden'}`}>
                <div className="prose prose-lg max-w-none">
                  {content}
                </div>
              </div>
            </div>

            {/* Expand Toggle */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200/50">
              <span className="text-sm text-slate-500 font-medium">
                {isExpanded ? 'Thu gọn nội dung' : 'Xem thêm nội dung'}
              </span>
              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`${styles.accent} p-2 rounded-full ${styles.accentBg} hover:bg-opacity-80 transition-all duration-200`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden border-t border-white/30"
            >
              <div className="p-8 bg-white/40 backdrop-blur-sm">
                <div className="prose prose-lg max-w-none">
                  {content}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

  return (
    <>
      <motion.div
      className={`bg-gradient-to-br ${styles.gradient} rounded-3xl overflow-hidden shadow-xl border-2 ${styles.border} w-full`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Content Layout - Horizontal */}
      <div className="flex flex-col lg:flex-row items-stretch">
        {/* Image Section */}
        <div className="lg:w-2/5 w-full">
          <motion.div
            className="relative w-full h-80 lg:h-full bg-white"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="lg:w-3/5 w-full p-6 flex flex-col justify-between">
          {/* Header */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className={`${styles.accent} p-3 rounded-xl bg-white/80 shadow-md`}>
                {icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 font-inter">{title}</h3>
            </div>
          </div>

          {/* Expand Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-full ${styles.button} text-white py-4 rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 font-inter font-semibold text-lg mt-6`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Xem chi tiết</span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden border-t-2 border-white/50"
          >
            <div className="p-6 bg-white/60 backdrop-blur-sm">
              <div className="prose prose-lg max-w-none">
                {content}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
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