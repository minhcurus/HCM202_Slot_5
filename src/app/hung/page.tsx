"use client";

import { useState } from "react"; 
import { AnimatedCard } from "@/components/animated-card";
import { motion } from "framer-motion";
import { ShieldAlert, Lightbulb, Users } from "lucide-react";
import Image from "next/image";
const risks = [
  {
    title: "Suy thoái tư tưởng, đạo đức, lối sống",
    summary: "Một bộ phận cán bộ suy thoái tư tưởng chính trị, đạo đức, lối sống.",
    detail:
      "Đây là nguy cơ trực tiếp làm giảm uy tín của Đảng. Nếu không được chấn chỉnh kịp thời sẽ dẫn đến mất lòng tin của nhân dân, ảnh hưởng đến sự tồn vong của chế độ.",
    color: "bg-red-500",
  },
  {
    title: "Diễn biến hoà bình",
    summary: "Âm mưu chống phá từ các thế lực thù địch, lợi dụng dân chủ để chia rẽ.",
    detail:
      "Các thế lực thù địch luôn tìm cách xuyên tạc, chia rẽ Đảng và Nhân dân. Phải kiên quyết đấu tranh, tăng cường bảo vệ nền tảng tư tưởng của Đảng.",
    color: "bg-orange-500",
  },
  {
    title: "Khoảng cách giàu nghèo",
    summary: "Tham nhũng, lãng phí và bất công xã hội làm giảm niềm tin của nhân dân.",
    detail:
      "Khoảng cách giàu nghèo gia tăng tạo ra mâu thuẫn xã hội. Đảng cần đẩy mạnh chính sách an sinh, chống tham nhũng, bảo đảm công bằng xã hội.",
    color: "bg-blue-600",
  },
  {
    title: "Ảnh hưởng toàn cầu hoá",
    summary: "Mặt trái của kinh tế thị trường và hội nhập quốc tế ảnh hưởng tiêu cực.",
    detail:
      "Toàn cầu hoá mang lại cơ hội nhưng cũng kèm theo nguy cơ bị lệ thuộc, đánh mất bản sắc. Đảng phải chủ động hội nhập, nhưng giữ vững độc lập tự chủ.",
    color: "bg-green-600",
  },
];
export default function HungPage() {
     const [openIndex, setOpenIndex] = useState<number | null>(null);
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

      <div className="grid md:grid-cols-2 gap-8">
        {risks.map((risk, idx) => (
          <div
            key={idx}
            className={`${risk.color} rounded-2xl shadow-lg p-6 text-white transition hover:shadow-xl cursor-pointer`}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            {/* Tiêu đề */}
            <div className="flex items-center gap-3 mb-2">
              <ShieldAlert className="w-6 h-6" />
              <h3 className="text-lg font-semibold">{risk.title}</h3>
            </div>

            {/* Nội dung tóm tắt */}
            <p className="text-base leading-relaxed">{risk.summary}</p>

            {/* Giải thích chi tiết */}
            {openIndex === idx && (
              <div className="mt-4 bg-white/20 rounded-lg p-4 text-sm leading-relaxed">
                {risk.detail}
              </div>
            )}
          </div>
        ))}
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
