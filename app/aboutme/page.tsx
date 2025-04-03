"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import CustomBTN from "../ui/CustomBTN";
import { montserrat } from "../ui/fonts";

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

          {/* main here */}
          <div className="pt-15">
            <div className="flex items-center justify-between">
              <div className="max-w-[660px]">
                <div className="vogue text-[44px] leading [40px]">
                  The Art of Painting on Pottery: A Tribute to Vietnam’s
                  Heritage
                </div>
                <ul className="list-disc pl-4 text-gray-200 text-2xl font-semibold leading-[38px]">
                  <li>
                    My love for Vietnam’s traditional cultural values and the
                    lotus flower - Vietnam’s symbolic bloom - has led me to the
                    art of painting on pottery. Growing up near a renowned
                    ceramic village, surrounded by blooming lotuses each summer,
                    I developed a deep connection to both. 
                  </li>
                </ul>
              </div>
              <div className="">
                <Image
                  src={"/aboutme/P2.png"}
                  width={506}
                  height={675}
                  alt="anh 1"></Image>
              </div>
            </div>

            <div className="flex items-center justify-between pt-20">
              <div className="">
                <Image
                  src={"/aboutme/P4.png"}
                  width={506}
                  height={670}
                  alt="anh 2"></Image>
              </div>
              <div className="max-w-[660px]">
                <ul className="list-disc pl-4 text-gray-200 text-2xl font-semibold leading-[38px]">
                  <li>
                    Pottery is a time-honored craft, embodying history,
                    creativity, and cultural identity. Ceramic sculpting and
                    decoration bring this art to life, transforming raw clay
                    into vibrant masterpieces through skilled craftsmanship and
                    passion. Beyond functional use, Vietnamese ceramics carry
                    profound historical significance, reflecting traditions and
                    daily life across generations. 
                  </li>
                </ul>
              </div>
            </div>

            <div className="max-w-[900px] mx-auto pt-20 text-gray-200 text-xl leading-[36px]">
              As tradition meets modernity, ceramic artistry continues to
              inspire contemporary design, blending ancient techniques with
              innovative expression. The lotus, symbolizing purity, resilience,
              and the Vietnamese spirit, plays a central role in my work. With
              deep philosophical meaning spanning past, present, and future, it
              represents love, devotion, and self-perfection. Beyond that, the
              lotus carries deep philosophical meanings in both space and
              time—encompassing the past, present, and future—reflecting the
              cycle of reincarnation and human self-perfection. The lotus root
              and tuber represent the past, the seed pod symbolizes the present,
              and the seeds embody the future. My ceramic artworks featuring the
              lotus flower are a story born from this love for my homeland and
              its traditional cultural values
            </div>

            <div className="flex items-center justify pt-5 gap-10">
              <div>
                <Image
                  src={"/aboutme/vid-placeholder1.png"}
                  width={620}
                  height={766}
                  alt="anh 3"></Image>
              </div>
              <div>
                <Image
                  src={"/aboutme/png.png"}
                  width={620}
                  height={766}
                  alt="anh 4"></Image>
              </div>
            </div>

            <div className="max-w-[900px] mx-auto pt-20 text-gray-200 text-xl leading-[36px]">
              Vietnam’s rich cultural heritage is vividly reflected in ceramic
              artistry, a source of pride not only for the people but also for
              the entire nation. The passage of time has witnessed the
              preservation and evolution of this art through generations.
              Ceramic products are not merely everyday household items; they
              also hold profound historical significance, reflecting customs and
              the unique way of life of Vietnamese people across different eras.
              <br />
              <br />
              As tradition and modernity intertwine in today’s contemporary
              world, ceramic craftsmanship and painting have transcended
              national cultural boundaries, becoming a diverse source of
              inspiration in interior design and artistic decoration. Modern
              pottery possess a beauty that is both sophisticated and
              contemporary, blending thousands of years of traditional
              techniques with innovative artistic expressions. These creations
              are not only aesthetically valuable but also deeply convey the
              spirit of connection between the past and the present, looking
              toward a creative future.
              <br />
              <br />
              For generations, the lotus has been regarded as a familiar yet
              noble flower. In Vietnamese consciousness, it symbolizes purity
              and brightness, considered the national flower of Vietnam and
              representing the spirit and identity of the Vietnamese soul. The
              lotus is closely associated with beauty, homeland sentiments, and
              the essence of the Vietnamese people—especially the purity,
              virtue, and elegance of Vietnamese women. It also symbolizes love,
              devotion, and unwavering fidelity.
              <br />
              <br />
              Beyond that, the lotus carries deep philosophical meanings in both
              space and time—encompassing the past, present, and
              future—reflecting the cycle of reincarnation and human
              self-perfection. The lotus root and tuber represent the past, the
              seed pod symbolizes the present, and the seeds embody the future.
              <br />
              <br />
              My ceramic artworks featuring the lotus flower are a story born
              from this love for my homeland and its traditional cultural
              values.
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
