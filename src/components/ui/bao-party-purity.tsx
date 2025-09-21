"use client";

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Quote, Heart, Shield, Scale, Users, Eye, Target, Link, Globe, CheckCircle, AlertTriangle, FileX, TrendingDown, Ban, DollarSign, UserX, Building } from "lucide-react";

export default function BaoPartyPurityContent() {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [activePrinciple, setActivePrinciple] = useState<number | null>(null);

  console.log("Current activePrinciple:", activePrinciple); // Debug log

  const handlePrincipleClick = useCallback((principleId: number) => {
    console.log("Clicked principle:", principleId, "Current active:", activePrinciple); // Debug log
    setActivePrinciple(prev => {
      const newValue = prev === principleId ? null : principleId;
      console.log("Setting activePrinciple to:", newValue);
      return newValue;
    });
  }, [activePrinciple]);

  const sections = [
    {
      id: 1,
      title: "Đảng cầm quyền lãnh đạo đất nước, phục vụ nhân dân",
      icon: <Shield className="w-6 h-6" />,
      content: "Đảng Cộng sản Việt Nam đảm nhận vai trò lãnh đạo tối cao trong hệ thống chính trị, định hướng phát triển đất nước theo con đường xã hội chủ nghĩa. Mọi chủ trương, đường lối đều xuất phát từ lợi ích của nhân dân, vì hạnh phúc và thịnh vượng của nhân dân.",
      color: "border-blue-300 bg-blue-50"
    },
    {
      id: 2,
      title: "Sự trong sạch, vững mạnh của Đảng quyết định sự tồn vong của chế độ và niềm tin của nhân dân",
      icon: <Scale className="w-6 h-6" />,
      content: "Tính trong sạch của Đảng là nền tảng để duy trì niềm tin của nhân dân. Khi Đảng trong sạch, vững mạnh thì chế độ xã hội chủ nghĩa được củng cố. Ngược lại, nếu Đảng suy thoái, tham nhũng thì sẽ làm lung lay niềm tin và đe dọa sự tồn tại của chế độ.",
      color: "border-emerald-300 bg-emerald-50"
    }
  ];

  const principles = [
    {
      id: 1,
      title: "Tập trung dân chủ",
      subtitle: "Thống nhất ý chí & hành động",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      details: {
        danchuan: "Để phát huy trí tuệ, sáng tạo của mọi đảng viên.",
        taptrung: "Để thống nhất ý chí, hành động, tạo sức mạnh.",
        mucdich: "Giúp Đảng đưa ra quyết sách đúng đắn, hợp lòng dân, tránh độc đoán, quan liêu."
      }
    },
    {
      id: 2,
      title: "Tự phê bình và phê bình",
      subtitle: '"Thuốc đắng" để chữa bệnh',
      icon: <Eye className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      details: {
        quyluatr: "Là quy luật phát triển của Đảng, như \"rửa mặt mỗi ngày\".",
        taicdong: "Giúp đảng viên sửa chữa khuyết điểm, ngăn ngừa suy thoái.",
        yeucau: "Phải chân thành, thẳng thắn, xây dựng."
      }
    },
    {
      id: 3,
      title: "Kỷ luật nghiêm minh, tự giác",
      subtitle: "Sức mạnh của tổ chức",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      details: {
        binhding: "Mọi đảng viên bình đẳng trước kỷ luật.",
        nganchan: "Ngăn chặn \"lợi ích nhóm\", bè phái, tùy tiện – những mầm mống gây mất lòng tin."
      }
    },
    {
      id: 4,
      title: "Đoàn kết thống nhất trong Đảng",
      subtitle: "Cội nguồn sức mạnh",
      icon: <Heart className="w-6 h-6" />,
      color: "from-red-500 to-orange-500",
      details: {
        truyenthing: "Là truyền thống quý báu, là sinh mệnh của Đảng.",
        tamquan: "Mất đoàn kết là mất tất cả. Đoàn kết tạo ra sức mạnh để lãnh đạo nhân dân."
      }
    },
    {
      id: 5,
      title: "Liên hệ mật thiết với nhân dân",
      subtitle: '"Cây có gốc, nước có nguồn"',
      icon: <Link className="w-6 h-6" />,
      color: "from-amber-500 to-yellow-500",
      details: {
        gondran: "Đảng từ nhân dân mà ra, vì nhân dân mà phục vụ.",
        yeucau2: "Cán bộ phải lắng nghe dân, học hỏi dân, tôn trọng dân.",
        nguyco: "Xa rời nhân dân là tự cô lập, làm suy yếu Đảng từ gốc rễ."
      }
    },
    {
      id: 6,
      title: "Đoàn kết quốc tế",
      subtitle: "Sức mạnh thời đại",
      icon: <Globe className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500",
      details: {
        ganket: "Gắn kết lợi ích dân tộc với phong trào cách mạng thế giới.",
        ketqua: "Tạo thêm sức mạnh, uy tín và vị thế cho Đảng và dân tộc Việt Nam."
      }
    }
  ];

  const realWorldCases = [
    {
      id: 1,
      title: "Mất dân chủ, kỷ luật lỏng lẻo",
      description: "Dẫn đến tham nhũng, 'lợi ích nhóm' chi phối chính sách, làm suy yếu uy tín của Đảng và Nhà nước.",
      examples: "Các vụ án lớn như Việt Á, AIC, Vạn Thịnh Phát... cho thấy hậu quả nghiêm trọng khi kỷ luật không được thực thi nghiêm.",
      icon: <Ban className="w-6 h-6" />,
      severity: 5
    },
    {
      id: 2, 
      title: "Né tránh tự phê bình",
      description: "Dẫn đến suy thoái tư tưởng, đạo đức của một bộ phận cán bộ không được ngăn chặn kịp thời.",
      examples: "Thiếu tự phê bình và phê bình dẫn đến tệ nạn 'tự phong', 'tự cao', không nhận khuyết điểm để sửa chữa.",
      icon: <UserX className="w-6 h-6" />,
      severity: 4
    },
    {
      id: 3,
      title: "Bệnh quan liêu, xa rời nhân dân", 
      description: "Cán bộ hách dịch, vô cảm gây bức xúc, làm xói mòn niềm tin của người dân vào sự công tâm của bộ máy công quyền.",
      examples: "Thái độ 'ngồi trên đầu dân', giải quyết công việc chậm trễ, gây khó khăn cho người dân trong các thủ tục hành chính.",
      icon: <Building className="w-6 h-6" />,
      severity: 4
    },
    {
      id: 4,
      title: "Mất đoàn kết nội bộ",
      description: "Dẫn đến đấu đá, bè phái, làm suy yếu sức chiến đấu của tổ chức Đảng.",
      examples: "Xung đột lợi ích, tranh giành quyền lực trong nội bộ gây chia rẽ, làm giảm hiệu quả lãnh đạo, chỉ đạo.",
      icon: <DollarSign className="w-6 h-6" />,
      severity: 5
    }
  ];

  const solutions = [
    {
      id: 1,
      title: "Tăng cường kiểm tra, giám sát",
      description: "Xử lý nghiêm sai phạm, không có vùng cấm trong đấu tranh chống tham nhũng.",
      icon: <Eye className="w-8 h-8" />,
      color: "bg-blue-500",
      actions: [
        "Kiểm tra định kỳ và đột xuất",
        "Xử lý kịp thời các vi phạm",
        "Công khai minh bạch quy trình"
      ]
    },
    {
      id: 2,
      title: "Phát huy vai trò của nhân dân",
      description: "Nhân dân là người giám sát cao nhất, góp phần quan trọng trong việc bảo vệ sự trong sạch của Đảng.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-emerald-500", 
      actions: [
        "Tạo kênh phản ánh dân ý",
        "Lắng nghe ý kiến nhân dân",
        "Giải quyết kiến nghị kịp thời"
      ]
    },
    {
      id: 3,
      title: "Tự giác tu dưỡng, nêu gương",
      description: "Mỗi cán bộ, đảng viên phải là tấm gương sáng trong lối sống và công việc.",
      icon: <Heart className="w-8 h-8" />,
      color: "bg-rose-500",
      actions: [
        "Tu dưỡng đạo đức liên tục",
        "Nêu gương trong mọi việc",
        "Phê bình và tự phê bình"
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-16">
      {/* Main Title */}
      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-full shadow-lg">
          <Heart className="w-6 h-6" />
          <span className="font-semibold">Chủ đề chính</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight px-4">
          NIỀM TIN CỦA NHÂN DÂN – YẾU TỐ SỐNG CÒN CỦA ĐẢNG
        </h1>
        
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full"></div>

        {/* Main Image */}
        <motion.div
          className="mt-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/image/bao_1.jpg"
              alt="Niềm tin của nhân dân - Yếu tố sống còn của Đảng"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Interactive Accordion Sections */}
      <div className="space-y-6">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${section.color} ${
              activeSection === section.id ? 'shadow-lg scale-[1.02]' : 'shadow-md hover:shadow-lg'
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Section Header */}
            <motion.div
              className="p-6 cursor-pointer flex items-center justify-between"
              onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  {section.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-relaxed">
                  {section.title}
                </h3>
              </div>
              
              <motion.div
                animate={{ rotate: activeSection === section.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-4"
              >
                <ChevronDown className="w-6 h-6 text-slate-600" />
              </motion.div>
            </motion.div>

            {/* Expandable Content */}
            <motion.div
              initial={false}
              animate={{
                height: activeSection === section.id ? 'auto' : 0,
                opacity: activeSection === section.id ? 1 : 0
              }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-slate-400">
                  <p className="text-slate-700 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Quote Section */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 rounded-3xl transform rotate-1"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 rounded-3xl transform -rotate-1"></div>
        
        {/* Content */}
        <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-orange-200">
          {/* Quote Icon */}
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full shadow-lg">
              <Quote className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Quote Content */}
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Lời dạy của Chủ tịch Hồ Chí Minh
            </h3>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-6xl text-orange-200 font-serif">"</div>
              <div className="absolute -bottom-8 -right-4 text-6xl text-orange-200 font-serif rotate-180">"</div>
              
              <blockquote className="text-xl md:text-2xl font-medium text-slate-700 leading-relaxed italic px-8">
                Một dân tộc, một đảng và mỗi con người, ngày hôm qua là vĩ đại... nếu lòng dạ không trong sáng nữa, nếu sa vào chủ nghĩa cá nhân.
              </blockquote>
            </div>
            
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1 max-w-24"></div>
              <cite className="text-lg font-bold text-orange-600 px-4">
                Hồ Chí Minh
              </cite>
              <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1 max-w-24"></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Brick Foundation Section */}
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-lg">
            <Target className="w-6 h-6" />
            <span className="font-semibold">Nền tảng vững chắc</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
            NHỮNG "VIÊN GẠCH" XÂY DỰNG NỀN TẢNG NIỀM TIN
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Các nguyên tắc Hồ Chí Minh đề ra - Những viên gạch xây dựng nền tảng niềm tin vững chắc
          </p>

          {/* Section Image */}
          <motion.div
            className="mt-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/image/bao_2.jpg"
                alt="Những viên gạch xây dựng nền tảng niềm tin"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Principle Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-700 mb-6">Chọn một nguyên tắc:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.id}
                  className={`cursor-pointer rounded-xl p-4 transition-all duration-300 ${
                    activePrinciple === principle.id 
                      ? `bg-gradient-to-br ${principle.color} text-white shadow-xl scale-105` 
                      : 'bg-white hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
                  onClick={() => handlePrincipleClick(principle.id)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${
                      activePrinciple === principle.id 
                        ? 'bg-white/20' 
                        : 'bg-gray-100'
                    }`}>
                      {principle.icon}
                    </div>
                    <div className="text-sm font-bold opacity-60">0{principle.id}</div>
                  </div>
                  
                  <h4 className="font-bold text-sm leading-tight mb-1">
                    {principle.title}
                  </h4>
                  <p className={`text-xs ${
                    activePrinciple === principle.id 
                      ? 'text-white/90' 
                      : 'text-gray-600'
                  }`}>
                    {principle.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Detail Panel */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 min-h-[400px]">
            {activePrinciple ? (
              <motion.div
                key={activePrinciple}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Detail Header */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${principles.find(p => p.id === activePrinciple)?.color}`}>
                      {principles.find(p => p.id === activePrinciple)?.icon && 
                        React.cloneElement(principles.find(p => p.id === activePrinciple)!.icon, 
                        { className: "w-6 h-6 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">
                        {principles.find(p => p.id === activePrinciple)?.title}
                      </h3>
                      <p className="text-slate-600">
                        {principles.find(p => p.id === activePrinciple)?.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Detail Content */}
                <div className="space-y-4">
                  {Object.entries(principles.find(p => p.id === activePrinciple)?.details || {}).map(([key, value], idx) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-4 p-4 bg-gray-50 rounded-xl"
                    >
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${principles.find(p => p.id === activePrinciple)?.color} mt-1.5 flex-shrink-0`}></div>
                      <p className="text-slate-700 leading-relaxed">
                        {value}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <div className="flex items-center justify-center h-full text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-700 mb-2">
                      Khám phá các nguyên tắc
                    </h3>
                    <p className="text-slate-500">
                      Chọn một nguyên tắc bên trái để xem chi tiết
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Foundation Visual */}
        <motion.div
          className="text-center py-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="flex justify-center items-end gap-2 mb-6">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                className={`w-12 h-16 rounded-t-lg shadow-lg cursor-pointer transition-all duration-300 ${
                  activePrinciple === principle.id 
                    ? `bg-gradient-to-t ${principle.color} scale-110` 
                    : 'bg-gradient-to-t from-slate-400 to-slate-500 hover:scale-105'
                }`}
                initial={{ height: 0 }}
                animate={{ height: 64 }}
                transition={{ delay: 1.6 + (index * 0.1), duration: 0.5 }}
                onClick={() => handlePrincipleClick(principle.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </div>
          <p className="text-slate-600 font-medium">
            6 viên gạch nền tảng xây dựng niềm tin của nhân dân
          </p>
        </motion.div>
      </motion.div>

      {/* Real-World Consequences Section */}
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-500 text-white rounded-full shadow-lg">
            <AlertTriangle className="w-6 h-6" />
            <span className="font-semibold">Bài học thực tiễn</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
            KHI NGUYÊN TẮC BỊ BUÔNG LỎNG
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Những hậu quả nghiêm trọng khi không tuân thủ các nguyên tắc của Đảng
          </p>

          {/* Section Image */}
          <motion.div
            className="mt-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/image/bao_3.jpg"
                alt="Khi nguyên tắc bị buông lỏng"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Simple List Layout */}
        <div className="max-w-4xl mx-auto space-y-6">
          {realWorldCases.map((case_item, index) => (
            <motion.div
              key={case_item.id}
              className="bg-white rounded-xl border border-red-100 p-6 shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 2.0 + (index * 0.1) }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 text-red-500">
                      {case_item.icon}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {case_item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {case_item.description}
                  </p>
                </div>
                
                <div className="text-right text-sm text-red-500 font-mono">
                  0{case_item.id}
                </div>
              </div>

              {/* Example */}
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-200">
                <div className="flex items-start gap-2">
                  <Quote className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-red-700 text-sm italic leading-relaxed">
                    {case_item.examples}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple Conclusion */}
        <motion.div
          className="bg-slate-800 text-white rounded-2xl p-8 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2.6 }}
        >
          <div className="space-y-4">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold">Bài Học Quan Trọng</h3>
            
            <p className="text-slate-200 leading-relaxed max-w-2xl mx-auto">
              Niềm tin của nhân dân là yếu tố sống còn của Đảng. Để duy trì niềm tin này, 
              Đảng phải luôn trong sạch, vững mạnh, thực sự phục vụ nhân dân.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Solutions Section */}
      <motion.div
        className="space-y-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.8 }}
      >
        {/* Section Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full shadow-xl">
            <Heart className="w-7 h-7" />
            <span className="font-bold text-lg">Kết luận & Giải pháp</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            GIỮ LẤY NIỀM TIN
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>

          {/* Section Image */}
          <motion.div
            className="mt-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/image/bao_4.jpg"
                alt="Giữ lấy niềm tin"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Main Message */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 3.0 }}
        >
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-8 border border-emerald-100 shadow-lg">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Thông Điệp Chính</h3>
              
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p className="text-lg font-medium">
                  Các nguyên tắc xây dựng Đảng của Hồ Chí Minh không phải là lý thuyết suông 
                  mà là <span className="font-bold text-emerald-600">"kim chỉ nam"</span> để Đảng 
                  giữ vững vai trò lãnh đạo và niềm tin của nhân dân.
                </p>
                
                <div className="flex items-center justify-center gap-4 py-2">
                  <div className="h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent flex-1"></div>
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  <div className="h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent flex-1"></div>
                </div>
                
                <p className="text-lg font-medium text-amber-700 bg-amber-50 rounded-xl p-4 border-l-4 border-amber-400">
                  Khi các nguyên tắc bị buông lỏng, nguy cơ mất lòng tin là hiện hữu.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Solutions Grid */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">
            Giải Pháp Cụ Thể
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.2 + (index * 0.2) }}
              >
                {/* Solution Card */}
                <div className="relative h-full bg-white rounded-2xl p-6 shadow-lg border border-slate-100 group-hover:shadow-xl transition-all duration-300">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-6">
                    <div className={`w-8 h-8 ${solution.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {solution.id}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="text-center mb-6 mt-4">
                    <div className={`w-16 h-16 ${solution.color} bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <div className={`w-8 h-8 text-opacity-80 ${solution.color.replace('bg-', 'text-')}`}>
                        {solution.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h4 className="text-xl font-bold text-slate-800 leading-tight">
                      {solution.title}
                    </h4>
                    
                    <p className="text-slate-600 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    {/* Action Points */}
                    <div className="space-y-2 pt-4">
                      {solution.actions.map((action, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                          <div className={`w-2 h-2 ${solution.color} rounded-full mt-2 flex-shrink-0`}></div>
                          <span>{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final Call to Action */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.0 }}
        >
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 text-white text-center shadow-2xl relative overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10"></div>
            
            <div className="relative space-y-6">
              <div className="flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold mb-6">
                Cam Kết Hành Động
              </h3>
              
              <p className="text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto mb-8">
                "Mỗi cán bộ, đảng viên phải tự giác tu dưỡng, nêu gương. 
                Niềm tin của nhân dân là trách nhiệm thiêng liêng của toàn Đảng."
              </p>
              
              <div className="flex justify-center items-center gap-6">
                <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-white/30 flex-1 max-w-32"></div>
                <Quote className="w-6 h-6 text-white/60" />
                <div className="h-px bg-gradient-to-r from-white/30 via-white/30 to-transparent flex-1 max-w-32"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}