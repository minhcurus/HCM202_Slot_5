"use client";

import { AnimatedCard } from "@/components/animated-card";
import { motion } from "framer-motion";
import { ShieldAlert, Lightbulb, Users } from "lucide-react";
import Image from "next/image";
export default function HungPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl space-y-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <AnimatedCard gradient="purple" className="text-center py-16">
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 
                         text-gray-900 dark:text-amber-50 drop-shadow-md">
            Nguy cơ hiện nay và Giải pháp củng cố niềm tin
          </h1>
          <p className="text-2xl font-medium text-gray-800 dark:text-amber-100 
                        leading-relaxed max-w-3xl mx-auto drop-shadow">
            Kết luận: Giữ vững vai trò lãnh đạo của Đảng trong bối cảnh mới – 
            niềm tin của nhân dân là yếu tố sống còn.
          </p>
        </AnimatedCard>
      </motion.div>

      {/* Nguy cơ hiện nay */}
      <AnimatedCard gradient="blue" className="p-8">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-8 flex items-center gap-3 
                       text-gray-900 dark:text-amber-50 drop-shadow-md">
          <ShieldAlert className="w-8 h-8 text-red-500" /> Nguy cơ hiện nay
        </h2>
        <div className="grid gap-6 md:grid-cols-2 text-xl font-medium leading-relaxed">
          <div className="p-4 rounded-xl bg-white/10 shadow-md hover:bg-white/20 transition 
                          text-gray-900 dark:text-amber-50 drop-shadow">
            ✦ Suy thoái tư tưởng chính trị, đạo đức, lối sống của một bộ phận cán bộ.
          </div>
          <div className="p-4 rounded-xl bg-white/10 shadow-md hover:bg-white/20 transition 
                          text-gray-900 dark:text-amber-50 drop-shadow">
            ✦ Âm mưu “diễn biến hòa bình” của các thế lực thù địch.
          </div>
          <div className="p-4 rounded-xl bg-white/10 shadow-md hover:bg-white/20 transition 
                          text-gray-900 dark:text-amber-50 drop-shadow">
            ✦ Khoảng cách giàu nghèo, tham nhũng, lãng phí làm giảm niềm tin.
          </div>
          <div className="p-4 rounded-xl bg-white/10 shadow-md hover:bg-white/20 transition 
                          text-gray-900 dark:text-amber-50 drop-shadow">
            ✦ Ảnh hưởng tiêu cực từ toàn cầu hoá và kinh tế thị trường.
          </div>
        </div>
      </AnimatedCard>

      {/* Giải pháp */}
      <AnimatedCard gradient="gold" className="p-8">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-8 flex items-center gap-3 
                       text-gray-900 dark:text-amber-50 drop-shadow-md">
          <Lightbulb className="w-8 h-8 text-yellow-500" /> Giải pháp củng cố niềm tin
        </h2>
        <div className="grid gap-6 md:grid-cols-2 text-xl font-medium leading-relaxed">
          <div className="p-4 rounded-xl bg-white/10 shadow-md hover:bg-white/20 transition 
                          text-gray-900 dark:text-amber-50 drop-shadow">
            ✔ Kiên định chủ nghĩa Mác – Lênin, tư tưởng Hồ Chí Minh.
          </div>
          <div className="p-4 rounded-xl bg-white/10 shadow-md hover:bg-white/20 transition 
                          text-gray-900 dark:text-amber-50 drop-shadow">
            ✔ Xây dựng Đảng trong sạch, vững mạnh trên mọi mặt.
          </div>
          <div className="p-4 rounded-xl bg-white/10 shadow-md hover:bg-white/20 transition 
                          text-gray-900 dark:text-amber-50 drop-shadow">
            ✔ Quyết liệt phòng, chống tham nhũng, tiêu cực.
          </div>
          <div className="p-4 rounded-xl bg-white/10 shadow-md hover:bg-white/20 transition 
                          text-gray-900 dark:text-amber-50 drop-shadow">
            ✔ Gắn bó mật thiết với nhân dân, phát huy dân chủ & công bằng xã hội.
          </div>
        </div>
      </AnimatedCard>

      {/* Hình ảnh minh hoạ */}
      <AnimatedCard gradient="blue" className="text-center p-8 space-y-6">
        <div className="relative w-full max-w-3xl mx-auto h-[24rem]">
            <Image
            src="/image/hung_1.jpg"
            alt="Niềm tin của nhân dân"
            fill
            className="rounded-2xl shadow-lg object-cover"
            priority
            />
        </div>
        <p className="text-xl font-medium text-gray-900 dark:text-amber-50 leading-relaxed drop-shadow">
            Niềm tin của nhân dân là nền tảng để Đảng vững bước.
        </p>
        </AnimatedCard>
    </div>
  );
}
