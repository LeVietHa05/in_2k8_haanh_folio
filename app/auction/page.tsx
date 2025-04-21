"use client";
import Image from "next/image";
import { Video } from "../ui/video";
import { useEffect } from "react";

const auctionItems = [
  {
    id: "artwork1",
    videoLink: null,
    title: "Whispers to the Sun",
    des: "A lotus leans gently toward the golden morning sun, surrounded by lush green leaves. This porcelain plate captures the quiet connection between light and life.",
    medium: "Hand-sculpted, glazed ceramic",
    dimentions: null,
    technique: "Hand-painted underglaze",
    year: 2024,
    imgs: [
      "/auction/1-1.png",
      "/auction/1-2.png",
      "/auction/1-3.png",
      "/auction/1-4.png",
    ],
  },
  {
    id: "artwork2",
    videoLink: "/video/2.mp4",
    title: "Crane’s Dance, Lotus’ Scent",
    des: "A tall ceramic vase decorated with a hand-painted lotus blossom and a graceful crane, symbolizing purity and peace. The soft brushstrokes and warm tones create a tranquil, timeless aesthetic.",
    medium: "Hand-sculpted, glazed ceramic",
    dimentions: "Approx. 30 cm height",
    technique: "Hand-painted underglaze",
    year: 2024,
    imgs: [
      "/auction/2-1.png",
      "/auction/2-2.png",
      "/auction/2-3.png",
      "/auction/2-4.png",
    ],
  },
  {
    id: "artwork3",
    videoLink: null,
    title: "Koi’s Whisper",
    des: "A dreamy underwater world where Koi fish drift gracefully beneath a blooming lotus. Vivid blues and oranges bring depth and movement to this peaceful scene.",
    medium: "Hand-sculpted, glazed ceramic",
    dimentions: null,
    technique: "Hand-painted underglaze",
    year: 2024,
    imgs: [
      "/auction/3-1.png",
      "/auction/3-2.png",
      "/auction/3-3.png",
      "/auction/3-4.png",
    ],
  },
  {
    id: "artwork4",
    videoLink: "/video/4.mp4",
    title: "Blossoming Silence",
    des: "This round vase bursts with the serenity of a lotus bud unfolding at dawn. Soft greens and deep blues reflect a moment of stillness before the bloom",
    medium: "Hand-sculpted, glazed ceramic",
    dimentions: null,
    technique: "Hand-painted underglaze",
    year: 2024,
    imgs: [
      "/auction/4-1.png",
      "/auction/4-2.png",
      "/auction/4-3.png",
      "/auction/4-4.png",
    ],
  },
  {
    id: "artwork5",
    videoLink: "/video/5.mp4",
    title: "Echoes of a Quiet Pond",
    des: "Delicate lotus blooms drift gently across this tall ceramic vase, their soft pink petals whispering memories of still waters and fading summer light. A tranquil and timeless tribute to nature's calm",
    medium: "Hand-sculpted, glazed ceramic",
    dimentions: null,
    technique: "Hand-painted underglaze",
    year: 2024,
    imgs: [
      "/auction/5-1.png",
      "/auction/5-2.png",
      "/auction/5-3.png",
      "/auction/5-4.png",
    ],
  },
  {
    id: "artwork6",
    videoLink: "/video/6.mp4",
    title: "Ripples of the Lotus Pond",
    des: "A playful frog swims among floating lily pads and a radiant lotus in bloom. The water’s swirling texture captures a moment of joy in nature’s hidden corners.",
    medium: "Hand-sculpted, glazed ceramic",
    dimentions: null,
    technique: "Hand-painted underglaze",
    year: 2024,
    imgs: [
      "/auction/6-1.png",
      "/auction/6-2.png",
      "/auction/6-3.png",
      "/auction/6-4.png",
    ],
  },
];

export default function Aution() {

  const handleScrollToHash = () => {
    const hash = window.location.hash;
    if (hash) {
      const elementId = hash.replace("#", "");
      const element = document.getElementById(elementId);
      if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  useEffect(() => {
    // Xử lý hash khi trang load lần đầu
    handleScrollToHash();

    
  }, []); // Dependency là router.events để lắng nghe thay đổi route

  return (
    <div className="background-container pb-8 text-gray-700 pt-10 leading-9">
      <div className="max-w-[1440px] mx-auto px-15 ">
        <main className="">
          {auctionItems.map((item, index) => {
            return (
              <div
                id={item.id}
                key={index}
                className="w-[1084px] p-8 mx-auto my-10 flex justify-center flex-col items-center gap-8 backdrop-blur-[10px] bg-white/30 rounded-2xl">
                {/* video and image container */}
                <div className="flex gap-8">
                  {/* video container */}
                  <div>
                    {item.videoLink && <Video _link={item.videoLink} />}
                  </div>
                  {/* images container */}
                  <div
                    className={`grid ${
                      item.videoLink ? "grid-cols-2" : "grid-cols-4"
                    } gap-4`}>
                    {item.imgs.map((img, index) => {
                      return (
                        <div key={index}>
                          <Image
                            src={img}
                            alt={item.title}
                            width={228}
                            height={292}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* text */}
                <div className="flex px-8 gap-10">
                  <div>
                    <h2 className="text-[#518224] vogue text-3xl">
                      {item.title}
                    </h2>
                    <div>{item.des}</div>
                    <ul className="list-disc pl-8 font-medium ">
                      <li>Medium: {item.medium}</li>
                      <li>Dimensions: {item.dimentions}</li>
                      <li>Technique: {item.technique}</li>
                      <li>Year: {item.year}</li>
                    </ul>
                  </div>
                  <div className="shrink-0 ">
                    <Image
                      className="cursor-pointer"
                      src={"/auction/callforprice.png"}
                      alt=""
                      width={260}
                      height={100}></Image>
                  </div>
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
}
