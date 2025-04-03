"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

export default function Home() {
  // background change
  const backgrounds = ["/bg-1.png", "/bg-2.png", "/bg-3.png"];

  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Chuyển đổi mỗi 5 giây

    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, [backgrounds.length]);

  // popup and image
  const imgOnSaleLink = [
    {
      id: 1,
      src: "/artwork/1.png",
      title: "lorem 1",
      info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum consequuntur cupiditate aut perspiciatis est debitis rerum quidem aperiam dolor, fugiat officia ea tempore labore nisi nihil iure eum totam officiis!",
    },
    {
      id: 2,
      src: "/artwork/2.png",
      title: "lorem 2",
      info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum consequuntur cupiditate aut perspiciatis est debitis rerum quidem aperiam dolor, fugiat officia ea tempore labore nisi nihil iure eum totam officiis!",
    },
    {
      id: 3,
      src: "/artwork/3.png",
      title: "lorem 3",
      info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum consequuntur cupiditate aut perspiciatis est debitis rerum quidem aperiam dolor, fugiat officia ea tempore labore nisi nihil iure eum totam officiis!",
    },
    {
      id: 4,
      src: "/artwork/4.png",
      title: "lorem 4",
      info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum consequuntur cupiditate aut perspiciatis est debitis rerum quidem aperiam dolor, fugiat officia ea tempore labore nisi nihil iure eum totam officiis!",
    },
  ];

  interface IMAGEINFO {
    id: number;
    src: string;
    title: string;
    info: string;
  }
  const [selectedImage, setSelectedImage] = useState<IMAGEINFO | null>(null);

  const openPopup = (image: IMAGEINFO) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div
      className="background-container pb-8 text-gray-50 min-h-[100vh]"
      style={{
        backgroundImage: `url(${backgrounds[currentBackground]})`,
        transition: "background-image 1s ease-in-out", // Hiệu ứng chuyển đổi mượt mà
      }}>
      <div className="max-w-[1440px] mx-auto px-15">
        <main className="pt-[200px]">
          {/* main here */}
          <div className="vogue uppercase text-center text-[44px] leading-[40px] py-4">
            my artwork
          </div>
          <div className="flex gap-10 justify-between py-10 border-y-1 border-white/30">
            {imgOnSaleLink.map((image) => {
              return (
                <div key={image.id} className="relative cursor-pointer">
                  <Image
                    src={image.src}
                    width={280}
                    height={304}
                    alt="anh san pham"
                    onClick={() => {
                      openPopup(image);
                    }}
                    className="hover:scale-110"
                  />
                </div>
              );
            })}
          </div>

          {selectedImage && (
            <div
              className="fixed top-0 left-0 right-0 bottom-0 bg-white/50 flex justify-center items-center z-1"
              style={{
                animation: "fadeIn 1s ease-in-out",
              }}>
              <div
                className="w-[1080px]  relative rounded-2xl bg-linear-45 from-[#101828] to-[#475467] "
                style={{ animation: " slideIn 1s ease-in-out" }}>
                <button
                  className="transition-all hover:scale-110 hover:rotate-90 p-4 absolute right-0 top-0"
                  onClick={closePopup}>
                  <Image
                    src={"/icons/Close.svg"}
                    width={24}
                    height={24}
                    alt="close"></Image>
                </button>

                <div className="flex gap-10">
                  <Image
                    src={selectedImage.src}
                    width={280}
                    height={304}
                    alt="Popup Image"
                    className=""
                  />
                  <div className="flex flex-col justify-center">
                    <div className="vogue text-[28px]">
                      {selectedImage.title}
                    </div>
                    <p className="text-base leading-8">{selectedImage.info}</p>
                    <div className="flex gap-10 items-center pt-5">
                      <div className="flex flex-col bg-linear-45 from-[#42307D] to-[#7F56D9] px-2 py-4 rounded-[12px] h-fit">
                        <div className="text-2xl leading-9 font-semibold">
                          Call for price
                        </div>
                        <div className="flex gap-2">
                          <Image
                            src={"/icons/_WhatsApp.png"}
                            width={24}
                            height={24}
                            alt="whatsapp"></Image>
                          <div>+848 577 81385</div>
                        </div>
                      </div>
                      <Image
                        src={"/icons/onSale.png"}
                        width={116}
                        height={133}
                        alt="onsale"></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
