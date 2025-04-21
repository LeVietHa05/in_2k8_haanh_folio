import type { Metadata } from "next";
import { montserrat } from "./ui/fonts";
import "./globals.css";
import { Nav } from "./ui/nav";
import Footer from "./ui/footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "HAANH-FOLIO",
  description: "ha anh nguyen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased background-container bg-[#F7F6E5]`}>
        <div className="fixed top-0 z-50">
          <div className="hidden sm:block text-gray-700 text-3xl sm:text-[44px] px-4 sm:px-8 pt-4 sm:pt-6 vogue backdrop-blur-2xl rounded-br-3xl bg-white/30 border-b-2 border-gray-200 flex justify-between items-center">
            <span>HAANH-folio</span>
          </div>
          <Nav />
        </div>
        <div className="mt-24 sm:mt-[148px] relative">
          <Image
            src="/image/bg.png"
            alt="Background"
            fill
            objectFit="contain"
            priority
            quality={75}
            sizes="100vw"
            className="z-0 hidden sm:block"
          />
          <div className="relative z-10">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
