import { Suspense } from 'react';
import { CardGrid } from '@/components/card-grid';
import { getAvailablePersons } from '@/lib/content';

export default async function HomePage() {
  // Lấy danh sách các persons có dữ liệu
  const availablePersons = await getAvailablePersons();

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl" />
          <div className="relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-12">
            <h1 className="scroll-m-20 text-5xl font-bold tracking-tight lg:text-6xl mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Chuyên đề Slot 5
            </h1>
            <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
              Niềm tin của nhân dân - Yếu tố sống còn của Đảng
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* Content Cards Grid */}
      <section>
        <div className="text-center mb-12">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-4">
            Nội dung trình bày
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tìm hiểu quan điểm và phân tích của từng thành viên về niềm tin của nhân dân đối với Đảng
          </p>
        </div>
        
        <Suspense fallback={
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        }>
          <CardGrid availablePersons={availablePersons} />
        </Suspense>
      </section>
    </div>
  );
}