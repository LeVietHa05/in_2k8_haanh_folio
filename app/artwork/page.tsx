import Image from "next/legacy/image";
import Link from "next/link";

export default function Home() {
  // popup and image
  const imgOnSaleLink = [
    {
      id: 1,
      src: "/artwork/1.png",
      link: "/auction#artwork1",
      title: "lorem 1",
      info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum consequuntur cupiditate aut perspiciatis est debitis rerum quidem aperiam dolor, fugiat officia ea tempore labore nisi nihil iure eum totam officiis!",
    },
    {
      id: 2,
      src: "/artwork/2.png",
      link: "/auction#artwork2",
      title: "lorem 2",
      info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum consequuntur cupiditate aut perspiciatis est debitis rerum quidem aperiam dolor, fugiat officia ea tempore labore nisi nihil iure eum totam officiis!",
    },
    {
      id: 3,
      src: "/artwork/3.png",
      link: "/auction#artwork3",
      title: "lorem 3",
      info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum consequuntur cupiditate aut perspiciatis est debitis rerum quidem aperiam dolor, fugiat officia ea tempore labore nisi nihil iure eum totam officiis!",
    },
    {
      id: 4,
      src: "/artwork/4.png",
      link: "/auction#artwork4",
      title: "lorem 4",
      info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum consequuntur cupiditate aut perspiciatis est debitis rerum quidem aperiam dolor, fugiat officia ea tempore labore nisi nihil iure eum totam officiis!",
    },
    {
      id: 5,
      src: "/artwork/5.png",
      link: "/auction#artwork5",
      title: "lorem 4",
      info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum consequuntur cupiditate aut perspiciatis est debitis rerum quidem aperiam dolor, fugiat officia ea tempore labore nisi nihil iure eum totam officiis!",
    },
    {
      id: 6,
      src: "/artwork/6.png",
      link: "/auction#artwork6",
      title: "lorem 4",
      info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum consequuntur cupiditate aut perspiciatis est debitis rerum quidem aperiam dolor, fugiat officia ea tempore labore nisi nihil iure eum totam officiis!",
    },
  ];

  return (
    <div className="background-container pb-8 text-gray-50 pt-10">
      <div className="max-w-[1440px] mx-auto px-15 ">
        <main className=" backdrop-blur-sm bg-white/30">
          {/* main here */}
          <div className="vogue uppercase text-[#518224] text-center text-[44px] leading-[40px] py-4">
            my artwork
          </div>
          <div className="grid grid-cols-3 gap-6 py-10 border-y-1 border-white/30 *:w-[280px] *:m-auto ">
            {imgOnSaleLink.map((image) => {
              return (
                <Link key={image.id} href={image.link} scroll={false}>
                  <div className="flex justify-between items-center flex-col relative cursor-pointer group *:transition *:duration-300">
                    <Image
                      src={image.src}
                      width={280}
                      height={304}
                      alt="anh san pham"
                      className="group-hover:scale-125 "
                    />
                    <div className="text-[#40651D] font-semibold text-[22px] opacity-0 group-hover:opacity-100 absolute bottom-0 right-0 left-0 text-center backdrop-blur-sm py-2 bg-white/30">
                      Click here for PRICE/AUTION
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
