'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export function SiteFooter() {
  return (
    <footer className="relative bg-gradient-to-t from-slate-100/95 to-blue-50/80 backdrop-blur-sm border-t border-blue-200/60 shadow-lg">
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-700 font-inter">
              HCM202 - Slot 5
            </h3>
            <p className="text-slate-700 text-lg leading-relaxed font-crimson font-medium">
              Nghiên cứu chuyên sâu về tư tưởng Hồ Chí Minh và vai trò lãnh đạo của Đảng Cộng sản Việt Nam
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-700 font-inter">
              Trang thành viên
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              <Link href="/minh" className="text-slate-700 hover:text-blue-600 transition-colors duration-200 text-lg font-crimson font-medium hover:underline">
                Minh
              </Link>
              <Link href="/nhan" className="text-slate-700 hover:text-blue-600 transition-colors duration-200 text-lg font-crimson font-medium hover:underline">
                Nhân
              </Link>
              <Link href="/vinh" className="text-slate-700 hover:text-blue-600 transition-colors duration-200 text-lg font-crimson font-medium hover:underline">
                Vinh
              </Link>
              <Link href="/bao" className="text-slate-700 hover:text-blue-600 transition-colors duration-200 text-lg font-crimson font-medium hover:underline">
                Bảo
              </Link>
              <Link href="/hung" className="text-slate-700 hover:text-blue-600 transition-colors duration-200 text-lg font-crimson font-medium hover:underline">
                Hưng
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-700 font-inter">
              Thông tin học phần
            </h4>
            <div className="space-y-2 text-slate-700 font-crimson font-medium">
              <p className="text-lg">
                Mã học phần: <span className="font-semibold text-slate-800">HCM202</span>
              </p>
              <p className="text-lg">
                Slot: <span className="font-semibold text-slate-800">5</span>
              </p>
              <p className="text-lg">
                Học kỳ: <span className="font-semibold text-slate-800">2024-2025</span>
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 pt-6 border-t border-blue-200/60">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-slate-700 text-lg font-crimson font-medium">
              © 2025 HCM202 Slot 5. Nghiên cứu học thuật về tư tưởng Hồ Chí Minh.
            </p>
            <div className="mt-3 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-warm-600 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
