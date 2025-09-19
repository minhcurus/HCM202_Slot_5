import type { Metadata } from "next";
import { Inter, Crimson_Text } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ColorfulBackground } from "@/components/colorful-background";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Chuyên đề Slot 5 - HCM202",
  description: "Website giới thiệu nội dung chuyên đề Slot 5 môn HCM202",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} ${crimsonText.variable} antialiased min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 text-slate-800`}>
        <ColorfulBackground />
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 relative z-10">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}