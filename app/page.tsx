import Image from "next/legacy/image";
import CustomBTN from "./ui/CustomBTN";
import { montserrat } from "./ui/fonts";

export default function Home() {
  return (
    <div className="background-container pb-8 text-gray-50">
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
              className={`text-gray-700 text-2xl flex flex-col gap-7 ${montserrat.className} bg-white/30 backdrop-blur-sm rounded-xl p-8`}>
              <div className="font-semibold">Welcome to Ha Anh’s Portfolio</div>
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
