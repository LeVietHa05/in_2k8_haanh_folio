import Image from "next/image";
import CustomBTN from "./ui/CustomBTN";
import { montserrat, monteCarlo } from "./ui/fonts";

export default function Home() {
  return (
    <div className="background-container pb-8 text-gray-50">
      <div className="max-w-[1440px] mx-auto sm:px-15">
        <main>
          <Image
            src="/image/bg-mobile.png"
            alt="Background"
            fill
            priority
            quality={75}
            sizes="100vw"
            className="z-0 block sm:hidden"
          />
          <div
            className={`flex flex-col sm:flex-row justify-between items-center sm:pt-[100px]`}>
            <div>
              <Image
                src={"/home-1-new.png"}
                width={645}
                height={615}
                alt="abc"></Image>
            </div>
            <div
              className={`text-gray-700 text-xl sm:text-2xl flex flex-col gap-5 ${montserrat.className} bg-white/30 backdrop-blur-sm rounded-xl p-8`}>
              <div className="font-semibold">Welcome to Ha Anh’s Portfolio</div>
              <div className={`vogue text-[44px] sm:text-[66px] `}>
                ha anh Nguyen
              </div>
              <div className="flex items-center justify-center gap-4">
                <CustomBTN
                  text={"What's more"}
                  _href="/aboutme"
                  customClass="hover:bg-white/60 hover:text-purple-600"
                />
                {/* <CustomBTN
                  text={"My Resume"}
                  customClass="hover:bg-white/60 hover:text-purple-600"
                /> */}
              </div>
              <div
                className={`text-[#47761D] text-[34px] sm:text-[56px] ${monteCarlo.className}`}>
                The Art of Painting on Pottery
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
