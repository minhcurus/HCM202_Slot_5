"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function SiteHeader() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.25, 0, 1] }}
      className="sticky top-0 z-50 w-full border-b border-blue-200/60 backdrop-blur-xl bg-slate-50/90 shadow-lg"
    >
      <div className="container mx-auto px-4 h-16 flex items-center">
        <div className="mr-4 flex">
          <Link 
            href="/" 
            className="mr-6 flex items-center space-x-2 text-slate-800 font-bold text-xl hover:scale-105 transition-transform heading-text hover:text-blue-700"
          >
            Chương 4: Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước của nhân dân, do nhân dân, vì nhân dân
          </Link>
        </div>
      </div>
    </motion.header>
  );
}