import type { Metadata } from "next";
import { montserrat } from "./ui/fonts";
import "./globals.css";
import { Nav } from "./ui/nav";
import Footer from "./ui/footer";



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
        className={`${montserrat.className} antialiased background-container`}>
        {children}
        <div className="fixed top-0">
          <div className="text-[#FCFCFD] text-[44px] px-8 pt-6 vogue">
            HAANH-folio
          </div>
          <Nav />
        </div>

        <Footer />
      </body>
    </html>
  );
}
