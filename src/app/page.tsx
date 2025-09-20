import { Suspense } from "react";
import { CardGrid } from "@/components/card-grid";
import { getAvailablePersons } from "@/lib/content";
import { AnimatedCard } from "@/components/animated-card";

export default async function HomePage() {
  const availablePersons = await getAvailablePersons();

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Hero Section */}
      <AnimatedCard gradient="purple" className="text-center mb-16">
        <h1 className="text-6xl font-bold tracking-tight lg:text-7xl mb-8 text-gradient-bronze heading-text">
          Niềm tin của nhân dân đối với Đảng
        </h1>
        <p className="text-2xl text-amber-100 mb-6 leading-relaxed content-text max-w-4xl mx-auto">
          Tư tưởng Hồ Chí Minh về yếu tố sống còn của Đảng Cộng sản Việt Nam
        </p>
        <div className="w-32 h-2 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
      </AnimatedCard>

      {/* Content Cards Grid */}
      <AnimatedCard gradient="blue" delay={0.2} className="text-center mb-12">
        <h2 className="text-4xl font-semibold tracking-tight mb-6 text-gradient-gold heading-text">
          Nội dung trình bày
        </h2>
        <p className="text-xl text-amber-100 max-w-3xl mx-auto content-text leading-relaxed">
          Đảng cầm quyền có thể mất lòng tin của nhân dân – làm sao để tránh nguy cơ này?
        </p>

        {/* Podcast Audio Player */}
        <div className="mt-6 max-w-md mx-auto">
          <audio controls className="w-full">
            <source src="/music/podcast.mp3" type="audio/mpeg" />
            <p>
              Trình duyệt của bạn không hỗ trợ phát audio. Tải xuống{" "}
              <a href="/music/podcast.mp3" className="text-amber-300 underline">
                tại đây
              </a>.
            </p>
          </audio>
        </div>

    
      </AnimatedCard>

      <Suspense
        fallback={
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
          </div>
        }
      >
        <CardGrid availablePersons={availablePersons} />
        <br />
        <br />
      </Suspense>

           <AnimatedCard gradient="purple" className="text-center mb-16">
        {/* Video Player */}
        <div className="mt-6 max-w-2xl mx-auto">
          <video controls className="w-full h-300px rounded-lg shadow-lg">
            <source src="/presentation.mp4" type="video/mp4" />
            <p>
              Trình duyệt của bạn không hỗ trợ phát video. Tải xuống{" "}
              <a href="/presentation.mp4" className="text-amber-300 underline">
                tại đây
              </a>.
            </p>
          </video>
        </div>
      </AnimatedCard>
    </div>
  );
}