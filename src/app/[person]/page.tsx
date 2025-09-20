import Link from "next/link";
import { notFound } from "next/navigation";
import { getPersonContent, getAvailablePersons } from "@/lib/content";
import { AnimatedCard } from "@/components/animated-card";
import { AdaptiveContent } from "@/components/adaptive-content";

interface PersonPageProps {
  params: Promise<{
    person: string;
  }>;
}

export async function generateStaticParams() {
  const availablePersons = await getAvailablePersons();
  return availablePersons.map((person) => ({
    person: person,
  }));
}

const PERSON_INFO = {
  minh: { name: "Minh", title: "Phần 1 - Mở đầu: Đặt vấn đề và tính tất yếu của Đảng", gradient: "purple" as const },
  nhan: { name: "Nhân", title: "Phần 2 - Vai trò lãnh đạo của Đảng và yêu cầu đặt ra", gradient: "orange" as const },
  vinh: { name: "Vinh", title: "Phần 3 - Đảng là đạo đức, là văn minh", gradient: "green" as const },
  bao: { name: "Bảo", title: "Phần 4 - Nguyên tắc giữ Đảng trong sạch, vững mạnh", gradient: "blue" as const },
  hung: { name: "Hưng", title: "Phần 5 - Nguy cơ hiện nay và giải pháp củng cố niềm tin", gradient: "pink" as const }
};

export default async function PersonPage({ params }: PersonPageProps) {
  const { person } = await params;
  const availablePersons = await getAvailablePersons();
  
  if (!availablePersons.includes(person)) {
    notFound();
  }

  const content = await getPersonContent(person);
  const personInfo = PERSON_INFO[person as keyof typeof PERSON_INFO];

  if (!personInfo) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <AnimatedCard gradient={personInfo.gradient} className="mb-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gradient-bronze mb-4">
            {personInfo.name}
          </h1>
          <h2 className="text-xl text-gray-600 mb-4">
            {personInfo.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full" />
        </div>
      </AnimatedCard>

      {/* Content */}
      <AnimatedCard gradient={personInfo.gradient} delay={0.2} className="prose-container">
        <article className="max-w-none">
          <AdaptiveContent person={person} content={content} />
        </article>
      </AnimatedCard>

      {/* Navigation */}
      <div className="mt-12 flex justify-between items-center">
        <div className="flex-1">
          {getPreviousPerson(person) && (
            <Link
              href={`/${getPreviousPerson(person)}`}
              className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors font-inter text-lg font-medium"
            >
              ← {PERSON_INFO[getPreviousPerson(person) as keyof typeof PERSON_INFO]?.name}
            </Link>
          )}
        </div>
        
        <Link
          href="/"
          className="text-gray-700 hover:text-gray-900 transition-colors font-inter text-lg px-6 font-medium"
        >
          Trang chủ
        </Link>
        
        <div className="flex-1 text-right">
          {getNextPerson(person) && (
            <Link
              href={`/${getNextPerson(person)}`}
              className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors font-inter text-lg font-medium"
            >
              {PERSON_INFO[getNextPerson(person) as keyof typeof PERSON_INFO]?.name} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function getPreviousPerson(currentPerson: string): string | null {
  const order = ["minh", "nhan", "vinh", "bao", "hung"];
  const currentIndex = order.indexOf(currentPerson);
  return currentIndex > 0 ? order[currentIndex - 1] : null;
}

function getNextPerson(currentPerson: string): string | null {
  const order = ["minh", "nhan", "vinh", "bao", "hung"];
  const currentIndex = order.indexOf(currentPerson);
  return currentIndex < order.length - 1 ? order[currentIndex + 1] : null;
}