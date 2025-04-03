"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import CustomBTN from "./ui/CustomBTN";
import { montserrat } from "./ui/fonts";

export default function Home() {
  const backgrounds = ["/bg-1.png", "/bg-2.png", "/bg-3.png"];

  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Chuyển đổi mỗi 5 giây

    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, [backgrounds.length]);

  return (
    <div
      className="background-container pb-8 text-gray-50"
      style={{
        backgroundImage: `url(${backgrounds[currentBackground]})`,
        transition: "background-image 1s ease-in-out", // Hiệu ứng chuyển đổi mượt mà
      }}>
      <div className="max-w-[1440px] mx-auto px-15">
        <main>
          <div className={`flex justify-between items-center pt-[100px]`}>
            <div>
              <Image
                src={"/home-1.png"}
                width={645}
                height={615}
                alt="abc"></Image>
            </div>
            <div
              className={`text-gray-50 text-2xl flex flex-col ${montserrat.className}`}>
              <div>Wellcome to haanh Portfolio</div>
              <div className={`vogue text-[66px] `}>ha anh Nguyen</div>
              <div className="flex gap-4">
                <CustomBTN
                  text={"What's more"}
                  _href="/aboutme"
                  customClass="hover:bg-white/60 hover:text-purple-600"
                />
                <CustomBTN
                  text={"My Resume"}
                  customClass="hover:bg-white/60 hover:text-purple-600"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
