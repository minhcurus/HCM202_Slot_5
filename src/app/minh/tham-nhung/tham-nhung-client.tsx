"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export function ThamNhungClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            href="/minh"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
          >
            <ArrowLeft size={20} />
            Quay lại trang Minh
          </Link>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-slate-800 mb-4 font-inter">
            Tham nhũng - Giặc nội xâm
          </h1>
          <p className="text-xl text-slate-600 font-crimson max-w-3xl mx-auto leading-relaxed">
            Tham nhũng là một trong ba giặc nội xâm nguy hiểm nhất đối với sự tồn tại và phát triển của Đảng Cộng sản Việt Nam. 
            Nó không chỉ làm tổn hại uy tín của Đảng mà còn phá hoại niềm tin của nhân dân.
          </p>
        </motion.div>

        {/* Infographic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-blue-200/60">
            <Image
              src="/image/infographic_tham_nhung.jpg"
              alt="Infographic về tham nhũng - giặc nội xâm"
              width={1200}
              height={800}
              className="rounded-xl shadow-lg max-w-full h-auto"
              priority
            />
          </div>
        </motion.div>

        {/* Additional content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-purple-600/10 to-purple-700/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-200/60">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 font-inter">
              Tầm quan trọng của việc chống tham nhũng
            </h2>
            <div className="space-y-4 text-slate-700 font-crimson leading-relaxed">
              <p>
                <strong>Theo tư tưởng Hồ Chí Minh:</strong> "Tham nhũng là giặc trong nhà, nguy hiểm hơn giặc ngoài xâm."
                Điều này nhấn mạnh rằng tham nhũng không chỉ là vấn đề đạo đức cá nhân mà còn là mối đe dọa trực tiếp đến
                sự tồn vong của chế độ.
              </p>
              <p>
                <strong>Hậu quả nghiêm trọng:</strong> Tham nhũng làm suy giảm niềm tin của nhân dân, phá hoại công bằng xã hội,
                cản trở sự phát triển kinh tế và làm tổn hại đến hình ảnh của Đảng và Nhà nước.
              </p>
              <p>
                <strong>Giải pháp căn cơ:</strong> Cần có sự quyết tâm chính trị cao, hoàn thiện thể chế, tăng cường giáo dục
                đạo đức cách mạng, và xây dựng văn hóa trong sạch trong Đảng.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}