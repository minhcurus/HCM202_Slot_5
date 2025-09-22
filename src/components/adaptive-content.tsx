"use client";

import React, { useState } from "react";
import { Timeline } from "@/components/ui/timeline";
import { ConceptGrid } from "@/components/ui/concept-cards";
import { PrinciplesList } from "@/components/ui/principles-list";
import {
  FoundationBlock,
  HistoricalFlow,
} from "@/components/ui/foundation-flow";
import { MdContent } from "@/components/md-content";
import ExpandableCardsGrid from "@/components/ui/expandable-cards";
import ConditionCard from "@/components/ui/condition-card-new";
import PracticalConnection from "@/components/ui/practical-connection-fixed";
import AnimatedConclusion from "@/components/ui/animated-conclusion";
import BaoPartyPurityContent from "@/components/ui/bao-party-purity";
import Image from "next/image";

interface AdaptiveContentProps {
  person: string;
  content: string;
}

// Custom component for Party Necessity Section
function PartyNecessitySection({ concepts }: { concepts: any[] }) {
  return (
    <div className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 rounded-3xl opacity-60"></div>
      
      <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200">
        {/* Section Introduction */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-full shadow-lg mb-6">
            <span className="text-2xl">🏛️</span>
            <span className="font-bold font-inter">Tính Tất Yếu Lịch Sử</span>
          </div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-inter">
            Sự ra đời và vai trò lãnh đạo của Đảng Cộng sản Việt Nam là kết quả tất yếu của lịch sử
          </p>
        </div>

        {/* Connected Flow Layout */}
        <div className="space-y-8">
          {concepts.map((concept, index) => (
            <div key={concept.id} className="relative">
              {/* Connection Line */}
              {index < concepts.length - 1 && (
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full z-10">
                  <div className="w-1 h-8 bg-gradient-to-b from-slate-300 to-slate-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-slate-400 rounded-full -mt-1 ml-[-4px]"></div>
                </div>
              )}

              <div className={`relative rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group ${
                concept.color === 'blue' 
                  ? 'bg-gradient-to-br from-blue-500/10 to-indigo-500/20 hover:from-blue-500/20 hover:to-indigo-500/30 border-2 border-blue-200/50 hover:border-blue-300' 
                  : concept.color === 'red'
                  ? 'bg-gradient-to-br from-red-500/10 to-orange-500/20 hover:from-red-500/20 hover:to-orange-500/30 border-2 border-red-200/50 hover:border-red-300'
                  : 'bg-gradient-to-br from-green-500/10 to-emerald-500/20 hover:from-green-500/20 hover:to-emerald-500/30 border-2 border-green-200/50 hover:border-green-300'
              }`}>
                
                {/* Visual Flow Indicator */}
                <div className="absolute top-6 left-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                    concept.color === 'blue'
                      ? 'bg-gradient-to-br from-blue-500 to-indigo-600'
                      : concept.color === 'red'
                      ? 'bg-gradient-to-br from-red-500 to-orange-600'
                      : 'bg-gradient-to-br from-green-500 to-emerald-600'
                  }`}>
                    <span className="text-2xl filter brightness-110">{concept.icon}</span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="ml-20 space-y-6">
                  {/* Title */}
                  <h4 className="text-2xl font-bold text-slate-800 font-inter leading-tight group-hover:text-slate-900 transition-colors">
                    {concept.title}
                  </h4>
                  
                  {/* Description */}
                  <div className={`p-6 rounded-xl border-l-4 ${
                    concept.color === 'blue'
                      ? 'bg-blue-50/80 border-blue-400'
                      : concept.color === 'red'
                      ? 'bg-red-50/80 border-red-400'
                      : 'bg-green-50/80 border-green-400'
                  }`}>
                    <p className="text-slate-700 leading-relaxed font-crimson text-lg font-medium">
                      {concept.description}
                    </p>
                  </div>

                  {/* Details Grid */}
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    {concept.details.map((detail: string, idx: number) => (
                      <div key={idx} className={`relative p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                        concept.color === 'blue'
                          ? 'bg-white/70 hover:bg-blue-50 border border-blue-100 hover:border-blue-200'
                          : concept.color === 'red'
                          ? 'bg-white/70 hover:bg-red-50 border border-red-100 hover:border-red-200'
                          : 'bg-white/70 hover:bg-green-50 border border-green-100 hover:border-green-200'
                      }`}>
                        <div className="flex items-start gap-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            concept.color === 'blue'
                              ? 'bg-blue-500'
                              : concept.color === 'red'
                              ? 'bg-red-500'
                              : 'bg-green-500'
                          }`}>
                            <span className="text-white text-xs font-bold">{idx + 1}</span>
                          </div>
                          <p className="text-slate-600 leading-relaxed font-crimson text-sm">
                            {detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-full shadow-lg">
            <span className="text-lg">⭐</span>
            <span className="font-semibold font-inter tracking-wide">Vận mệnh dân tộc gắn liền với sự lãnh đạo của Đảng</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AdaptiveContent({ person, content }: AdaptiveContentProps) {
  // Parse content based on person
  switch (person) {
    case "minh":
      return <MinhFoundationContent content={content} />;
    case "nhan":
      return <NhanTimelineContent content={content} />;
    case "vinh":
      return <VinhConceptContent content={content} />;
    case "bao":
      return <BaoPartyPurityContent />;
    case "hung":
      return <HungSolutionsContent content={content} />;
    default:
      return <MdContent content={content} />;
  }
}

// Hưng: Solutions & Practical Steps  
function HungSolutionsContent({ content }: { content: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  return (
    <div className="container mx-auto px-6 py-16 max-w-7xl space-y-20">
      {/* Hero Section - Professional */}
      <div className="text-center py-20 bg-gradient-to-b from-slate-50 to-gray-100 rounded-2xl shadow-lg border border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-lg text-blue-800 text-sm font-semibold mb-10 border border-blue-200">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Phần 5: Giải pháp thực tiễn
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-8 text-gray-900 leading-tight">
            Nguy cơ hiện nay và giải pháp củng cố niềm tin
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
            Tư tưởng Hồ Chí Minh về những thách thức đối với niềm tin của nhân dân và các giải pháp thực tiễn
          </p>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-blue-600 rounded"></div>
          </div>
        </div>
      </div>

      {/* Stats Section - Professional */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="text-2xl mb-3">⚠️</div>
          <div className="text-xl font-bold text-red-700 mb-2">4</div>
          <div className="text-sm text-gray-600 font-medium">Nguy cơ chính</div>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="text-2xl mb-3">💡</div>
          <div className="text-xl font-bold text-green-700 mb-2">4</div>
          <div className="text-sm text-gray-600 font-medium">Giải pháp</div>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="text-2xl mb-3">🎯</div>
          <div className="text-xl font-bold text-blue-700 mb-2">100%</div>
          <div className="text-sm text-gray-600 font-medium">Quyết tâm</div>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="text-2xl mb-3">🏛️</div>
          <div className="text-xl font-bold text-indigo-700 mb-2">∞</div>
          <div className="text-sm text-gray-600 font-medium">Niềm tin</div>
        </div>
      </div>

      {/* Risk Cards - Professional */}
      <div className="relative mx-4">
        <div className="absolute inset-0 bg-gray-50 rounded-2xl"></div>
        <div className="relative p-8 lg:p-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-6 py-3 bg-red-50 rounded-lg text-red-800 font-semibold mb-6 border border-red-200">
              <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
              Cảnh báo quan trọng
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              🛡️ Các nguy cơ hiện nay
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Nhận diện và đối phó với những thách thức đe dọa niềm tin của nhân dân
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {risks.map((risk, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-lg p-8 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  openIndex === index ? 'ring-2 ring-blue-500 shadow-xl' : ''
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-12 h-12 ${risk.color} rounded-lg flex items-center justify-center text-white text-lg font-bold shadow-sm`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors">
                      {risk.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {risk.summary}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Nhấn để xem chi tiết
                  </span>
                  <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </div>
                
                {openIndex === index && (
                  <div className="mt-6 pt-6 border-t border-gray-200 animate-in slide-in-from-top-2 duration-300">
                    <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                      <h4 className="font-semibold text-blue-900 mb-3 text-sm">📋 Phân tích chi tiết:</h4>
                      <p className="text-gray-700 leading-relaxed italic">
                        {risk.detail}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solutions Section - Professional */}
      <div className="relative mx-4">
        <div className="absolute inset-0 bg-gray-50 rounded-2xl"></div>
        <div className="relative p-8 lg:p-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-6 py-3 bg-green-50 rounded-lg text-green-800 font-semibold mb-6 border border-green-200">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
              Hành động cụ thể
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              💡 Giải pháp thực tiễn
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Những biện pháp cần thiết để củng cố và bảo vệ niềm tin của nhân dân
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "🎯",
                title: "Kiên định chủ nghĩa Mác – Lênin, tư tưởng Hồ Chí Minh",
                color: "from-blue-600 to-blue-700"
              },
              {
                icon: "🏛️",
                title: "Xây dựng Đảng trong sạch, vững mạnh trên mọi mặt",
                color: "from-green-600 to-green-700"
              },
              {
                icon: "⚖️",
                title: "Quyết liệt phòng, chống tham nhũng, tiêu cực",
                color: "from-red-600 to-red-700"
              },
              {
                icon: "👥",
                title: "Gắn bó mật thiết với nhân dân, phát huy dân chủ & công bằng xã hội",
                color: "from-indigo-600 to-indigo-700"
              }
            ].map((solution, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-lg p-8 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center text-xl mb-6 shadow-sm group-hover:shadow-md transition-shadow`}>
                  {solution.icon}
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900 leading-relaxed group-hover:text-blue-700 transition-colors">
                    {solution.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Section - Professional */}
      <div className="relative mx-4">
        <div className="absolute inset-0 bg-gray-50 rounded-2xl"></div>
        <div className="relative text-center p-8 lg:p-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-lg text-blue-800 font-semibold mb-10 border border-blue-200">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Minh chứng lịch sử
            </div>
            
            <div className="relative group mb-8">
              <div className="relative w-full max-w-4xl mx-auto h-[32rem] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/image/hung_1.jpg"
                  alt="Niềm tin của nhân dân"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xl lg:text-2xl font-semibold text-center drop-shadow-md">
                    "Niềm tin của nhân dân là nền tảng để Đảng vững bước"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200 max-w-4xl mx-auto">
              <blockquote className="text-xl lg:text-2xl font-medium text-gray-800 leading-relaxed text-center mb-4">
                "Đảng ta muốn tồn tại và phát triển, phải luôn giữ gìn sự trong sạch về tư tưởng, đạo đức, tác phong"
              </blockquote>
              <cite className="block text-lg font-semibold text-blue-700">
                - Chủ tịch Hồ Chí Minh
              </cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Minh: Foundation & Historical Context
function MinhFoundationContent({ content }: { content: string }) {
  const foundationEvents = [
    {
      year: "1930",
      title: "Ra đời Đảng Cộng sản Việt Nam",
      description:
        "Kết quả tất yếu của sự kết hợp phong trào công nhân và phong trào yêu nước",
    },
    {
      year: "Hiện tại",
      title: "Thách thức và Cơ hội",
      description: "Đảng đối mặt với nguy cơ 'giặc nội xâm': quan liêu, tham nhũng, xa dân"
    }
  ];

  const partyNecessity = [
    {
      id: 1,
      icon: "🏭",
      title: "Kết hợp phong trào công nhân và yêu nước", 
      description: "Đảng Cộng sản Việt Nam ra đời năm 1930 là kết quả tất yếu của sự kết hợp phong trào công nhân và phong trào yêu nước.",
      color: "blue" as const,
      details: [
        "Phong trào công nhân mang tính giai cấp tiên tiến",
        "Phong trào yêu nước thể hiện ý chí dân tộc",
        "Sự kết hợp tạo nên lực lượng cách mạng hoàn chỉnh"
      ]
    },
    {
      id: 2,
      icon: "⚔️",
      title: "Bối cảnh thực dân phong kiến áp bức",
      description: "Trong bối cảnh đất nước bị thực dân phong kiến áp bức, chỉ có Đảng mới đủ bản lĩnh, trí tuệ, đường lối đúng đắn để lãnh đạo dân tộc giành độc lập.",
      color: "red" as const,
      details: [
        "Thực dân Pháp thống trị kinh tế, chính trị",
        "Tàn dư phong kiến đè nén tự do tư tưởng",
        "Cần lực lượng tiên phong với đường lối đúng đắn"
      ]
    },
    {
      id: 3,
      icon: "🌟",
      title: "Vai trò gắn với vận mệnh dân tộc",
      description: "Vai trò lãnh đạo của Đảng gắn với vận mệnh dân tộc: không có Đảng thì không có thắng lợi của cách mạng Việt Nam.",
      color: "green" as const,
      details: [
        "Đảng là trung tâm đoàn kết toàn dân tộc",
        "Lãnh đạo các cuộc đấu tranh giành độc lập",
        "Xây dựng và bảo vệ Tổ quốc Việt Nam"
      ]
    }
  ];

  const threeDangers = [
    {
      icon: "⚠️",
      title: "Quan liêu",
      content: (
        <div>
          <p className="mb-3">
            Xa rời thực tế, coi thường ý kiến nhân dân, chỉ đạo từ trên xuống mà
            không lắng nghe từ cơ sở.
          </p>
          <p className="text-sm text-yellow-100 font-semibold animate-pulse hover:animate-bounce hover:text-yellow-50 transition-all duration-300 cursor-pointer">
            ✨ Nhấp vào để xem chi tiết
          </p>
        </div>
      ),
      color: "red" as const,
      href: "https://noichinh.vn/hoc-tap-va-lam-theo-tam-guong-dao-duc-hcm/202203/tu-tuong-ho-chi-minh-ve-phong-chong-tham-nhung-lang-phi-quan-lieu-va-chong-chu-nghia-ca-nhan-310750",
    },
    {
      icon: "💰",
      title: "Tham nhũng",
      content: (
        <div>
          <p className="mb-3">
            Lợi dụng quyền lực để mưu lợi cá nhân, làm tổn hại uy tín và hình
            ảnh của Đảng.
          </p>
          <p className="text-sm text-pink-100 font-semibold animate-pulse hover:animate-bounce hover:text-pink-50 transition-all duration-300 cursor-pointer">
            ✨ Nhấp vào để xem chi tiết
          </p>
        </div>
      ),
      color: "purple" as const,
      href: "/minh/tham-nhung",
    },
    {
      icon: "👥",
      title: "Xa dân",
      content:
        "Cán bộ, đảng viên không gắn bó, không đồng hành cùng nhân dân trong đời sống hằng ngày.",
      color: "blue" as const,
    },
  ];

  return (
    <div className="space-y-12">
      <FoundationBlock
        title="Niềm tin của nhân dân - Yếu tố sống còn"
        content={
          <div className="space-y-6">
            <p>
              Niềm tin của nhân dân đối với Đảng cầm quyền chính là nền tảng quyết định sự tồn tại và phát triển của Đảng. 
              Nhân dân chính là gốc, là chỗ dựa của Đảng; mất niềm tin của nhân dân đồng nghĩa với việc Đảng mất đi sức mạnh lãnh đạo.
            </p>
            
            {/* Image Section */}
            <div className="flex justify-center my-8">
              <div className="w-full max-w-3xl">
                <Image
                  src="/image/minh_1.jpg"
                  alt="Chủ tịch Hồ Chí Minh với nhân dân - Niềm tin của nhân dân"
                  width={700}
                  height={450}
                  className="w-full h-auto rounded-lg shadow-lg"
                  priority={false}
                />
                
                <div className="mt-4 text-center bg-slate-50 rounded-lg p-3">
                  <p className="text-sm text-slate-600 font-inter italic">
                    Chủ tịch Hồ Chí Minh luôn gắn bó mật thiết với nhân dân - Nguồn gốc của niềm tin và sức mạnh
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
        quote="Dễ trăm lần không dân cũng chịu, khó vạn lần dân liệu cũng xong"
        author="Hồ Chí Minh"
      />

      <div>
        <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center font-inter tracking-wide border-b-2 border-slate-300 pb-3">Cảnh báo về "Giặc nội xâm"</h3>
        <ConceptGrid concepts={threeDangers} />
      </div>

      <div>
        <h3 className="text-3xl font-bold mb-8 text-center font-inter tracking-wide border-b-4 border-slate-400 pb-4 bg-gradient-to-r from-slate-700 to-slate-800 bg-clip-text text-transparent">
          Tính tất yếu và vai trò lãnh đạo của Đảng Cộng sản Việt Nam
        </h3>
        <PartyNecessitySection concepts={partyNecessity} />
        
        {/* Connection Section - Kết nối */}
        <div className="mt-12 bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center font-inter border-b-2 border-slate-300 pb-4">
            🔗 Kết nối
          </h3>

          {/* Image first - Large and prominent */}
          <div className="mb-8 flex justify-center">
            <div className="w-full max-w-4xl">
              <Image
                src="/image/minh_2.jpg"
                alt="Chủ tịch Hồ Chí Minh"
                width={800}
                height={500}
                className="w-full h-auto rounded-lg shadow-lg"
                priority={false}
              />
              
              <div className="mt-4 text-center bg-slate-50 rounded-lg p-4">
                <p className="text-base text-slate-600 font-inter italic font-medium">
                  "Đảng ta muốn tồn tại và phát triển, phải luôn giữ gìn sự trong sạch về tư tưởng, đạo đức, tác phong" 
                  <br />
                  <span className="text-slate-800 font-semibold">- Chủ tịch Hồ Chí Minh</span>
                </p>
              </div>
            </div>
          </div>

          {/* Content below image */}
          <div className="max-w-4xl mx-auto">
            {/* Three separate boxes instead of long paragraphs */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Box 1 - Historical Success */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 text-center">
                <div className="text-blue-600 text-2xl mb-3">📜</div>
                <h4 className="text-lg font-bold text-blue-800 mb-3 font-inter">Lịch sử chứng minh</h4>
                <p className="text-base text-slate-700 font-inter leading-relaxed">
                  Mọi thành công của cách mạng Việt Nam đều khẳng định 
                  <span className="font-semibold text-blue-700"> tính tất yếu của Đảng</span>
                </p>
              </div>

              {/* Box 2 - Warning */}
              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200 text-center">
                <div className="text-orange-600 text-2xl mb-3">⚠️</div>
                <h4 className="text-lg font-bold text-orange-800 mb-3 font-inter">Cảnh báo quan trọng</h4>
                <p className="text-base text-slate-700 font-inter leading-relaxed">
                  Nếu Đảng mất đi sự trong sạch và vững mạnh thì 
                  <span className="font-semibold text-red-600"> niềm tin nhân dân sẽ lung lay</span>
                </p>
              </div>

              {/* Box 3 - Solution */}
              <div className="bg-green-50 rounded-lg p-6 border border-green-200 text-center">
                <div className="text-green-600 text-2xl mb-3">💡</div>
                <h4 className="text-lg font-bold text-green-800 mb-3 font-inter">Con đường đúng đắn</h4>
                <p className="text-base text-slate-700 font-inter leading-relaxed">
                  <span className="font-semibold text-green-700">Học tập tư tưởng Hồ Chí Minh</span> 
                  để xây dựng Đảng vững mạnh và bảo đảm lòng tin của dân
                </p>
              </div>
            </div>

            {/* Conclusion banner */}
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-6 text-center text-white shadow-lg">
              <h4 className="text-xl font-bold mb-3 font-inter">Kết luận quan trọng</h4>
              <p className="text-lg font-inter leading-relaxed">
                Xây dựng Đảng theo tư tưởng Hồ Chí Minh = Củng cố niềm tin + Đảm bảo Đảng trường tồn
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Nhân: Leadership Role Content
function NhanTimelineContent({ content }: { content: string }) {
  const leadershipRoles = [
    {
      icon: "📜",
      title: "Hoạch định đường lối",
      content: (
        <div>
          <p className="mb-4">
            Đảng đề ra cương lĩnh, đường lối, chiến lược phát triển đất nước.
          </p>
          <p>
            Từ Cách mạng Tháng Tám 1945, Đổi mới 1986, đến Chiến lược phát triển
            KT-XH 2021–2030, mỗi bước ngoặt lớn đều gắn liền với sự lãnh đạo
            sáng suốt của Đảng.
          </p>
        </div>
      ),
      color: "blue" as const,
    },
    {
      icon: "👥",
      title: "Tập hợp, giác ngộ quần chúng",
      content: (
        <div>
          <p className="mb-4">
            Đảng biến sức mạnh rời rạc của từng cá nhân thành sức mạnh tổng hợp
            của toàn dân tộc.
          </p>
          <p>
            Nhân dân là gốc của cách mạng, là nguồn lực để Đảng thực hiện mục
            tiêu "dân giàu, nước mạnh, dân chủ, công bằng, văn minh".
          </p>
        </div>
      ),
      color: "red" as const,
    },
    {
      icon: "🌍",
      title: "Đoàn kết quốc tế",
      content: (
        <div>
          <p className="mb-4">
            Đảng gắn cách mạng Việt Nam với phong trào cách mạng thế giới.
          </p>
          <p>
            Thông qua ngoại giao, hội nhập, Việt Nam nâng cao vị thế, trở thành
            bạn, đối tác tin cậy của cộng đồng quốc tế.
          </p>
        </div>
      ),
      color: "green" as const,
    },
    {
      icon: "🏛️",
      title: "Lãnh đạo Nhà nước và xã hội",
      content: (
        <div>
          <p className="mb-4">
            Hiến pháp 2013, Điều 4: "Đảng Cộng sản Việt Nam là lực lượng lãnh
            đạo Nhà nước và xã hội."
          </p>
          <p>
            Đảng định hướng toàn bộ đời sống chính trị, kinh tế, văn hóa, xã
            hội, đảm bảo sự phát triển đúng hướng.
          </p>
        </div>
      ),
      color: "purple" as const,
    },
  ];

  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-9 shadow-xl border border-blue-200">
        <h4 className="text-2xl font-bold text-slate-800 mb-7 font-inter text-center">
          Giới thiệu chung:
        </h4>
        <p className="text-slate-700 leading-relaxed font-crimson text-xl">
          Đảng không chỉ là tổ chức chính trị, mà là lực lượng duy nhất có đủ
          bản lĩnh, trí tuệ và uy tín để lãnh đạo toàn dân tộc. Vai trò lãnh đạo
          thể hiện trên nhiều lĩnh vực:
        </p>
      </div>

      <ExpandableCardsGrid concepts={leadershipRoles} />

      <ConditionCard />

      <PracticalConnection />

      <AnimatedConclusion />
    </div>
  );
}

// Vinh: Core Values & Concepts
function VinhConceptContent({ content }: { content: string }) {
  const coreValues = [
    {
      icon: "🎯",
      title: "Đảng là đạo đức",
      content:
        "Gắn liền với lý tưởng cao cả: giải phóng dân tộc, giải phóng giai cấp, giải phóng con người. Thể hiện qua chuẩn mực: cần - kiệm - liêm - chính - chí công vô tư.",
      color: "blue" as const,
    },
    {
      icon: "🌟",
      title: "Đảng là văn minh",
      content:
        "Tầm nhìn tiên phong, khoa học, tiến bộ. Thái độ, hành vi gương mẫu: sống giản dị, khiêm tốn, gần dân, hiểu dân.",
      color: "green" as const,
    },
    {
      icon: "🏛️",
      title: "Mục tiêu cao cả",
      content:
        "Hướng đến dân giàu, nước mạnh, dân chủ, công bằng, văn minh. Không mưu cầu lợi ích cá nhân, chỉ phục vụ nhân dân.",
      color: "purple" as const,
    },
  ];

  return (
    <div className="space-y-12">
      <FoundationBlock
        title="Đảng là đạo đức, là văn minh"
        content={
          <div className="flex flex-col items-center">
            <img
              src="/image/vinh.jpg"
              className="w-full max-w-2x1 rounded-lg mb-4"
            />
            <p className="text-center">
              <strong>Hồ Chí Minh khẳng định: </strong>"Đảng ta là đạo đức, là
              văn minh". Đây vừa là sự tổng kết thực tiễn, vừa là yêu cầu, mục
              tiêu đối với sự tồn tại và phát triển của Đảng.
            </p>
          </div>
        }
      />

      <ConceptGrid concepts={coreValues} />

      <div className="bg-gradient-to-r from-slate-100 to-blue-100 rounded-xl p-8">
         <h3 className="text-xl font-bold text-slate-800 mb-4 font-inter">
          Ý nghĩa thực tiễn
        </h3>
        <img
          src="/image/vinh_2.jpg" // Đường dẫn ảnh, thay bằng ảnh của bạn
          className="w-full max-w-2x1 rounded-lg mb-4"
        />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/80 p-4 rounded-lg border border-green-200">
            <h5 className="font-bold text-green-700 mb-2">
              ✅ Khi giữ vững đạo đức
            </h5>
            <p className="text-slate-700 font-crimson">
              Uy tín Đảng được củng cố, niềm tin nhân dân vững chắc
            </p>
          </div>
          <div className="bg-white/80 p-4 rounded-lg border border-red-200">
            <h5 className="font-bold text-red-700 mb-2">
              ❌ Khi thoái hóa, biến chất
            </h5>
            <p className="text-slate-700 font-crimson">
              Tổn hại nghiêm trọng hình ảnh và uy tín Đảng
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Bảo: Principles & Guidelines
function BaoPrinciplesContent({ content }: { content: string }) {
  const principles = [
    {
      title: "Nguyên tắc tự phê bình và phê bình",
      description:
        "Đảng phải thường xuyên kiểm điểm, đánh giá và sửa chữa những sai sót trong quá trình hoạt động.",
      examples: [
        "Tổ chức sinh hoạt Đảng định kỳ",
        "Kiểm điểm cá nhân và tập thể",
        "Lắng nghe ý kiến phản biện từ nhân dân",
      ],
    },
    {
      title: "Nguyên tắc tập trung dân chủ",
      description:
        "Kết hợp chặt chẽ giữa dân chủ và tập trung, đảm bảo quyền dân chủ và kỷ luật tổ chức.",
      examples: [
        "Thảo luận dân chủ trong ra quyết định",
        "Tập trung thống nhất trong hành động",
        "Thiểu số phục tùng đa số",
      ],
    },
    {
      title: "Nguyên tắc gắn bó với nhân dân",
      description:
        "Đảng phải luôn lắng nghe, học hỏi và phục vụ nhân dân, coi nhân dân là gốc.",
      examples: [
        "Thường xuyên tiếp xúc với cơ sở",
        "Giải quyết kiến nghị của nhân dân",
        "Sống gần dân, hiểu dân, học dân",
      ],
    },
  ];

  return <PrinciplesList principles={principles} />;
}


