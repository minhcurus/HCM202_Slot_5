import { Timeline } from "@/components/ui/timeline";
import { ConceptGrid } from "@/components/ui/concept-cards";
import { PrinciplesList } from "@/components/ui/principles-list";
import { FoundationBlock, HistoricalFlow } from "@/components/ui/foundation-flow";
import { MdContent } from "@/components/md-content";
import ExpandableCardsGrid from "@/components/ui/expandable-cards";
import ConditionCard from "@/components/ui/condition-card-new";
import PracticalConnection from "@/components/ui/practical-connection-fixed";
import AnimatedConclusion from "@/components/ui/animated-conclusion";

interface AdaptiveContentProps {
  person: string;
  content: string;
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
      return <BaoPrinciplesContent content={content} />;
    case "hung":
      return <HungSolutionsContent content={content} />;
    default:
      return <MdContent content={content} />;
  }
}

// Minh: Foundation & Historical Context
function MinhFoundationContent({ content }: { content: string }) {
  const foundationEvents = [
    {
      year: "1930",
      title: "Ra đời Đảng Cộng sản Việt Nam", 
      description: "Kết quả tất yếu của sự kết hợp phong trào công nhân và phong trào yêu nước"
    },
    {
      year: "Hiện tại",
      title: "Thách thức và Cơ hội",
      description: "Đảng đối mặt với nguy cơ 'giặc nội xâm': quan liêu, tham nhũng, xa dân"
    },
    {
      year: "Tương lai", 
      title: "Củng cố niềm tin",
      description: "Học tập tư tưởng Hồ Chí Minh để đảm bảo Đảng mãi trường tồn"
    }
  ];

  const threeDangers = [
    {
      icon: "⚠️",
      title: "Quan liêu",
      content: (
        <div>
          <p className="mb-3">Xa rời thực tế, coi thường ý kiến nhân dân, chỉ đạo từ trên xuống mà không lắng nghe từ cơ sở.</p>
          <p className="text-sm text-yellow-100 font-semibold animate-pulse hover:animate-bounce hover:text-yellow-50 transition-all duration-300 cursor-pointer">
            ✨ Nhấp vào để xem chi tiết
          </p>
        </div>
      ),
      color: "red" as const,
      href: "https://noichinh.vn/hoc-tap-va-lam-theo-tam-guong-dao-duc-hcm/202203/tu-tuong-ho-chi-minh-ve-phong-chong-tham-nhung-lang-phi-quan-lieu-va-chong-chu-nghia-ca-nhan-310750"
    },
    {
      icon: "💰", 
      title: "Tham nhũng",
      content: (
        <div>
          <p className="mb-3">Lợi dụng quyền lực để mưu lợi cá nhân, làm tổn hại uy tín và hình ảnh của Đảng.</p>
          <p className="text-sm text-pink-100 font-semibold animate-pulse hover:animate-bounce hover:text-pink-50 transition-all duration-300 cursor-pointer">
            ✨ Nhấp vào để xem chi tiết
          </p>
        </div>
      ),
      color: "purple" as const,
      href: "/minh/tham-nhung"
    },
    {
      icon: "👥",
      title: "Xa dân", 
      content: "Cán bộ, đảng viên không gắn bó, không đồng hành cùng nhân dân trong đời sống hằng ngày.",
      color: "blue" as const
    }
  ];

  return (
    <div className="space-y-12">
      <FoundationBlock
        title="Niềm tin của nhân dân - Yếu tố sống còn"
        content={
          <p>
            Niềm tin của nhân dân đối với Đảng cầm quyền chính là nền tảng quyết định sự tồn tại và phát triển của Đảng. 
            Nhân dân chính là gốc, là chỗ dựa của Đảng; mất niềm tin của nhân dân đồng nghĩa với việc Đảng mất đi sức mạnh lãnh đạo.
          </p>
        }
        quote="Dễ trăm lần không dân cũng chịu, khó vạn lần dân liệu cũng xong"
        author="Hồ Chí Minh"
      />

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center font-inter">Cảnh báo về "Giặc nội xâm"</h3>
        <ConceptGrid concepts={threeDangers} />
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center font-inter">Lịch sử và Tương lai</h3>
        <HistoricalFlow events={foundationEvents} />
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
          <p className="mb-4">Đảng đề ra cương lĩnh, đường lối, chiến lược phát triển đất nước.</p>
          <p>Từ Cách mạng Tháng Tám 1945, Đổi mới 1986, đến Chiến lược phát triển KT-XH 2021–2030, mỗi bước ngoặt lớn đều gắn liền với sự lãnh đạo sáng suốt của Đảng.</p>
        </div>
      ),
      color: "blue" as const
    },
    {
      icon: "👥",
      title: "Tập hợp, giác ngộ quần chúng",
      content: (
        <div>
          <p className="mb-4">Đảng biến sức mạnh rời rạc của từng cá nhân thành sức mạnh tổng hợp của toàn dân tộc.</p>
          <p>Nhân dân là gốc của cách mạng, là nguồn lực để Đảng thực hiện mục tiêu "dân giàu, nước mạnh, dân chủ, công bằng, văn minh".</p>
        </div>
      ),
      color: "red" as const
    },
    {
      icon: "🌍",
      title: "Đoàn kết quốc tế",
      content: (
        <div>
          <p className="mb-4">Đảng gắn cách mạng Việt Nam với phong trào cách mạng thế giới.</p>
          <p>Thông qua ngoại giao, hội nhập, Việt Nam nâng cao vị thế, trở thành bạn, đối tác tin cậy của cộng đồng quốc tế.</p>
        </div>
      ),
      color: "green" as const
    },
    {
      icon: "🏛️",
      title: "Lãnh đạo Nhà nước và xã hội",
      content: (
        <div>
          <p className="mb-4">Hiến pháp 2013, Điều 4: "Đảng Cộng sản Việt Nam là lực lượng lãnh đạo Nhà nước và xã hội."</p>
          <p>Đảng định hướng toàn bộ đời sống chính trị, kinh tế, văn hóa, xã hội, đảm bảo sự phát triển đúng hướng.</p>
        </div>
      ),
      color: "purple" as const
    }
  ];

  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-9 shadow-xl border border-blue-200">
        <h4 className="text-2xl font-bold text-slate-800 mb-7 font-inter text-center">Giới thiệu chung:</h4>
        <p className="text-slate-700 leading-relaxed font-crimson text-xl">
          Đảng không chỉ là tổ chức chính trị, mà là lực lượng duy nhất có đủ bản lĩnh, trí tuệ và uy tín để lãnh đạo toàn dân tộc. 
          Vai trò lãnh đạo thể hiện trên nhiều lĩnh vực:
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
      content: "Gắn liền với lý tưởng cao cả: giải phóng dân tộc, giải phóng giai cấp, giải phóng con người. Thể hiện qua chuẩn mực: cần - kiệm - liêm - chính - chí công vô tư.",
      color: "blue" as const
    },
    {
      icon: "🌟", 
      title: "Đảng là văn minh",
      content: "Tầm nhìn tiên phong, khoa học, tiến bộ. Thái độ, hành vi gương mẫu: sống giản dị, khiêm tốn, gần dân, hiểu dân.",
      color: "green" as const
    },
    {
      icon: "🏛️",
      title: "Mục tiêu cao cả",
      content: "Hướng đến dân giàu, nước mạnh, dân chủ, công bằng, văn minh. Không mưu cầu lợi ích cá nhân, chỉ phục vụ nhân dân.",
      color: "purple" as const
    }
  ];

  return (
    <div className="space-y-12">
      <FoundationBlock
        title="Đảng là đạo đức, là văn minh"
        content={
          <p>
            Hồ Chí Minh khẳng định: "Đảng ta là đạo đức, là văn minh". Đây vừa là sự tổng kết thực tiễn, 
            vừa là yêu cầu, mục tiêu đối với sự tồn tại và phát triển của Đảng.
          </p>
        }
      />

      <ConceptGrid concepts={coreValues} />

      <div className="bg-gradient-to-r from-slate-100 to-blue-100 rounded-xl p-8">
        <h4 className="text-xl font-bold text-slate-800 mb-4 font-inter">Ý nghĩa thực tiễn</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/80 p-4 rounded-lg border border-green-200">
            <h5 className="font-bold text-green-700 mb-2">✅ Khi giữ vững đạo đức</h5>
            <p className="text-slate-700 font-crimson">Uy tín Đảng được củng cố, niềm tin nhân dân vững chắc</p>
          </div>
          <div className="bg-white/80 p-4 rounded-lg border border-red-200">
            <h5 className="font-bold text-red-700 mb-2">❌ Khi thoái hóa, biến chất</h5>
            <p className="text-slate-700 font-crimson">Tổn hại nghiêm trọng hình ảnh và uy tín Đảng</p>
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
      description: "Đảng phải thường xuyên kiểm điểm, đánh giá và sửa chữa những sai sót trong quá trình hoạt động.",
      examples: [
        "Tổ chức sinh hoạt Đảng định kỳ",
        "Kiểm điểm cá nhân và tập thể",
        "Lắng nghe ý kiến phản biện từ nhân dân"
      ]
    },
    {
      title: "Nguyên tắc tập trung dân chủ", 
      description: "Kết hợp chặt chẽ giữa dân chủ và tập trung, đảm bảo quyền dân chủ và kỷ luật tổ chức.",
      examples: [
        "Thảo luận dân chủ trong ra quyết định", 
        "Tập trung thống nhất trong hành động",
        "Thiểu số phục tùng đa số"
      ]
    },
    {
      title: "Nguyên tắc gắn bó với nhân dân",
      description: "Đảng phải luôn lắng nghe, học hỏi và phục vụ nhân dân, coi nhân dân là gốc.",
      examples: [
        "Thường xuyên tiếp xúc với cơ sở",
        "Giải quyết kiến nghị của nhân dân",
        "Sống gần dân, hiểu dân, học dân"
      ]
    }
  ];

  return <PrinciplesList principles={principles} />;
}

// Hưng: Current Challenges & Solutions
function HungSolutionsContent({ content }: { content: string }) {
  const currentChallenges = [
    {
      icon: "⚡",
      title: "Thách thức hiện nay",
      content: "Toàn cầu hóa, hội nhập quốc tế, biến đổi kinh tế - xã hội tạo ra những thách thức mới cho vai trò lãnh đạo của Đảng.",
      color: "red" as const
    },
    {
      icon: "🛡️",
      title: "Giải pháp củng cố",
      content: "Đẩy mạnh đấu tranh chống tham nhũng, xây dựng Đảng trong sạch, vững mạnh, nâng cao uy tín trong nhân dân.",
      color: "blue" as const  
    },
    {
      icon: "🌱",
      title: "Tương lai phát triển",
      content: "Tiếp tục đổi mới, hiện đại hóa, giữ vững niềm tin nhân dân trong thời kỳ mới.",
      color: "green" as const
    }
  ];

  return (
    <div className="space-y-12">
      <ConceptGrid concepts={currentChallenges} />
      
      <FoundationBlock
        title="Kết luận"
        content={
          <p>
            Niềm tin của nhân dân là nguồn sức mạnh to lớn của Đảng. Để củng cố và phát triển niềm tin này, 
            Đảng cần tiếp tục đổi mới, hoàn thiện bản thân, luôn đặt lợi ích của nhân dân lên trên hết.
          </p>
        }
      />
    </div>
  );
}