import Image from "next/image";
import Link from "next/link";
export default function Home() {
  const imgs = [
    {
      src: "/charity/4.png",
      w: 442,
      h: 697,
    },
    {
      src: "/charity/5.png",
      w: 442,
      h: 697,
    },
    {
      src: "/charity/6.png",
      w: 442,
      h: 358,
    },
    {
      src: "/charity/7.png",
      w: 442,
      h: 358,
    },
  ];
  return (
    <div className="background-container pb-8 text-slate-700 text-justify font-medium text-base sm:text-2xl leading-loose sm:leading-9">
      <div className="sm:max-w-[1440px] w-full mx-auto sm:px-20 px-3">
        <main>
          {/* main here */}
          <div className="sm:pt-20   leading-[30px] sm:leading-[36px]">
            <div className="bg-white/30 backdrop-blur-sm sm:p-10 flex flex-col items-center rounded-lg">
              <div className="sm:max-w-[900px] w-full mx-auto ">
                Most of the proceeds from the sale of pottery art pieces are
                used to fund environmental and charitable projects founded by
                Nguyễn Hà Anh. These philanthropic organizations and projects
                include LOTUSMED VIETNAM (Public Healthcare) and ECO WANDER
                (Environment).
                <br />
                <br />
                LotusMed Vietnam (Prescreening thyroid cancer for women). <br />
                <Link
                  className="underline text-[#518224] w-full"
                  href={"https://www.facebook.com/lotusmedvietnam"}>
                  https://www.facebook .com/lotusmedvietnam
                </Link>
              </div>
              <div className="py-10">
                <Image
                  src={"/charity/1.png"}
                  width={928}
                  height={278}
                  alt="anh bia fb"></Image>
              </div>
            </div>

            <div className="bg-white/30 backdrop-blur-sm mt-10 sm:p-10 flex flex-col items-center rounded-lg">
              <div className="sm:max-w-[900px] w-full mx-auto sm:pt-20 pt-4">
                Founded in 2021, Eco Wander is a non-profit organization
                established by students in Vietnam with the mission of raising
                public awareness about environmental protection, focusing on
                building projects that contribute to the preservation of the
                environment.
                <br />
                <br />
                <Link
                  className="underline text-[#518224]"
                  href={"https://www.facebook.com/eco.wander24"}>
                  https://www.facebook .com/eco.wander24
                </Link>
              </div>
              <div className="py-10 flex flex-col sm:flex-row gap-3 sm:gap-10 justify-between shrink">
                <div className="shrink">
                  <Image
                    src={"/charity/2.png"}
                    width={442}
                    height={413}
                    alt="eco.wander24 1"></Image>
                </div>
                <div className="shrink">
                  <Image
                    src={"/charity/3.png"}
                    width={442}
                    height={413}
                    alt="eco.wander24 1"></Image>
                </div>
              </div>
            </div>

            <div className="bg-white/30 backdrop-blur-sm mt-10 sm:p-10 flex flex-col items-center rounded-lg">
              <div className="sm:max-w-[900px] w-full mx-auto sm:pt-20 pt-4">
                <div className=" font-bold font-['Montserrat'] leading-9">
                  Key Activities:
                </div>
                <div className="font-['Montserrat'] leading-9 pt-4">
                  The project involves planting up to ~8,000 seedlings of acacia
                  trees per 2 hectares of barren land provided by our corporate
                  sponsors, supporting seedling supplies, and creating job
                  opportunities for the local community in planting, nurturing,
                  and harvesting forest products.
                </div>
              </div>
              <div className="sm:max-w-[900px] w-full mx-auto sm:pt-20 pt-4">
                <div className="  font-bold font-['Montserrat']">
                  Groundbreaking ceremony:
                </div>
                <div className="font-['Montserrat']  pt-4">
                  On June 4, 2025, Eco Wander successfully held the
                  groundbreaking ceremony in Ban Chang village, Hoa Muc Commune,
                  Cho Moi District, Bac Kan Province.
                </div>
              </div>

              <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-1 pt-10">
                {imgs.map((img, i) => {
                  return (
                    <Image
                      src={img.src}
                      width={img.w}
                      height={img.h}
                      alt=""
                      key={i}></Image>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
