"use client";
import Image from "next/image";
import { Video } from "../ui/video";
import { useEffect, useState } from "react";

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
    video_thumb: null,
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
    video_thumb: "/video/2-thumb.png",
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
    video_thumb: null,
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
    video_thumb: "/video/4-thumb.png",
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
    video_thumb: "/video/5-thumb.png",
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
    video_thumb: "/video/6-thumb.png",
  },
];

interface MediaItem {
  id: string | null;
  videoLink: string | null;
  title: string | null;
  des: string | null;
  medium: string | null;
  dimentions: string | null;
  technique: string | null;
  year: number | null;
  imgs: string[];
  video_thumb: string | null;
}

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

  //overlay handler
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openOverlay = (item: MediaItem, imageIndex: number) => {
    setSelectedMedia(item);
    setSelectedImageIndex(imageIndex);
  };

  const closeOverlay = () => {
    setSelectedMedia(null);
    setSelectedImageIndex(0);
  };

  const changeImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (!selectedMedia) return;
      if (e.key === "Escape") {
        closeOverlay();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedMedia, selectedImageIndex]);

  return (
    <div className="background-container pb-8 text-gray-700 mx:pt-10 leading-9">
      <div className="max-w-[1440px] mx-auto sm:px-15 px-4">
        <main className="">
          {auctionItems.map((item, index) => {
            return (
              <div
                id={item.id}
                key={index}
                className="sm:w-[1084px] sm:p-8 mx-auto my-10 flex justify-center flex-col items-center gap-8 backdrop-blur-[10px] bg-white/30 rounded-2xl">
                {/* video and image container */}
                <div className="flex gap-8 flex-col sm:flex-row">
                  {/* video container */}
                  <div
                    className="flex justify-center rounded-2xl"
                    onClick={() => openOverlay(item, 5)}>
                    {item.videoLink && <Video _link={item.videoLink} />}
                  </div>
                  {/* images container */}
                  <div
                    className={`grid ${
                      item.videoLink
                        ? "grid-cols-2"
                        : "sm:grid-cols-4 grid-cols-2"
                    } gap-4`}>
                    {item.imgs.map((img, i) => {
                      return (
                        <div key={i} onClick={() => openOverlay(item, i)}>
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
                <div className="flex sm:px-8 px-4 sm:gap-10 gap-4 flex-col sm:flex-row">
                  <div>
                    <h2 className="text-[#518224] vogue sm:text-3xl text-2xl">
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

      {/* overlay */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative bg-white/60 rounded-lg max-w-4xl w-full p-4">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 p-3 z-100"
              onClick={closeOverlay}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Main Content Overlay*/}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Media Display Overlay*/}
              <div className="flex-1">
                {selectedImageIndex == 5 ? (
                  <video
                    src={selectedMedia.videoLink ? selectedMedia.videoLink : ""}
                    controls
                    className="w-full max-h-[60vh] object-contain"
                    muted
                  />
                ) : (
                  <Image
                    src={selectedMedia.imgs[selectedImageIndex]}
                    alt={`${selectedMedia.title} - ${selectedImageIndex + 1}`}
                    className="w-full max-h-[60vh] object-contain"
                    width={912}
                    height={1168}
                  />
                )}
                {/* Thumbnail List */}
                <div className="flex overflow-x-auto space-x-2 p-2 mt-2">
                  {selectedMedia.imgs.map((img, index) => (
                    <div
                      key={`${selectedMedia.id}-${index}`}
                      className={`cursor-pointer w-20 h-20 flex-shrink-0 rounded-md overflow-hidden ${
                        index === selectedImageIndex
                          ? "ring-2 ring-blue-500"
                          : ""
                      }`}
                      onClick={() => changeImage(index)}>
                      <Image
                        src={img}
                        alt={`${selectedMedia.title} - ${index + 1}`}
                        className="w-full h-full object-cover"
                        width={228}
                        height={292}
                      />
                    </div>
                  ))}
                  {selectedMedia.videoLink && (
                    <div
                      className={`cursor-pointer w-20 h-20 flex-shrink-0 rounded-md overflow-hidden ${
                        5 === selectedImageIndex ? "ring-2 ring-blue-500" : ""
                      }`}
                      onClick={() => changeImage(5)}>
                      {selectedMedia.video_thumb && (
                        <Image
                          src={selectedMedia.video_thumb}
                          alt={`video`}
                          className="w-full h-full object-cover"
                          width={228}
                          height={292}
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
