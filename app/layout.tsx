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
        <div>
          <div className="fixed top-0 z-2">
            <div className="text-gray-700 text-[44px] px-8 pt-6 vogue backdrop-blur-2xl rounded-br-3xl bg-white/30 border-b-2 border-b border-gray-200">
              HAANH-folio
            </div>
            <Nav />
          </div>
        </div>
        <div className="mt-[148px]">
          <Image
            src={"/image/bg.png"}
            alt="Background"
            layout="fill"
            objectFit="contain"
            priority
            quality={75}
            sizes="100vw"
          />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
