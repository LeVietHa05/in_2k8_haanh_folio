import Image from "next/image";
import CustomBTN from "./ui/CustomBTN";
import { montserrat} from "./ui/fonts";

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
              className={`text-gray-700 text-xl sm:text-2xl flex flex-col gap-5 ${montserrat.className} bg-white/30 backdrop-blur-sm rounded-xl p-4 sm:p-8`}>
              <div className=" text-2xl font-semibold font-['Montserrat'] leading-9">
                Welcome to Ha Anh’s Portfolio
              </div>
              <div
                className={`vogue text-5xl sm:text-6xl font-normal leading-12`}>
                ha anh Nguyen
              </div>
              <div className="flex items-center justify-start gap-4">
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
                className={`text-lime-700 text-2xl sm:text-4xl font-normal font-['Vogue'] leading-relaxed sm:leading-loose`}>
                The Art of Painting on Pottery
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
