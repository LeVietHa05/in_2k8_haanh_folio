"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
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
      <div className="max-w-[1440px] w-full mx-auto px-20">
        <main>
          {/* main here */}
          <div className="pt-20">
            <div className="max-w-[900px] mx-auto pt-20 text-gray-200 text-2xl leading-[36px]">
              Most of the proceeds from the sale of pottery art pieces are used
              to fund environmental and charitable projects founded by Nguyễn Hà
              Anh. These philanthropic organizations and projects include
              LOTUSMED VIETNAM (Public Healthcare) and ECO WANDER (Environment).
              <br />
              <br />
              LotusMed Vietnam (Prescreening thyroid cancer for women). <br />
              <Link
                className="underline"
                href={"https://www.facebook.com/lotusmedvietnam"}>
                https://www.facebook.com/lotusmedvietnam
              </Link>
            </div>
            <div className="py-10">
              <Image
                src={"/charity/1.png"}
                width={1280}
                height={384}
                alt="anh bia fb"></Image>
            </div>
            <div className="max-w-[900px] mx-auto pt-20 text-gray-200 text-2xl leading-[36px]">
              Founded in 2021, Eco Wander is a non-profit organization
              established by students in Vietnam with the mission of raising
              public awareness about environmental protection, focusing on
              building projects that contribute to the preservation of the
              environment.
              <br />
              <br />
              <Link
                className="underline"
                href={"https://www.facebook.com/eco.wander24"}>
                https://www.facebook.com/eco.wander24
              </Link>
            </div>
            <div className="py-10 flex gap-10 justify-between shrink">
              <div className="shrink">
                <Image
                  src={"/charity/2.png"}
                  width={620}
                  height={581}
                  alt="eco.wander24 1"></Image>
              </div>
              <div className="shrink">
                <Image
                  src={"/charity/3.png"}
                  width={620}
                  height={581}
                  alt="eco.wander24 1"></Image>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
