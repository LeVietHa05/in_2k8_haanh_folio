"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathName = usePathname();
  return (
    <footer
      className={`${
        pathName.includes("contact") ? "hidden" : ""
      } w-full  px-4 py-6 sm:px-20 sm:py-10 mt-10 sm:mt-20 flex flex-col justify-center items-center gap-10  bg-white/30 backdrop-blur-sm text-gray-800 relative z-1`}>
      <div className="flex justify-start items-center gap-2 text-gray-800 text-xl mt-4 w-full">
        <Link
          href={"/copyright"}
          className="underline flex items-center gap-4"
          title="Copyright  ">
          <Image
            src={"/icons/Frame 226.png"}
            alt=""
            width={48}
            height={48}></Image>
          <div>Copyright & Disclaimer</div>
        </Link>
      </div>
      <div className="max-w-[360px]">
        <div>
          <div className="text-xl font-semibold text-center">Nguyen Ha Anh</div>
        </div>
        <div className="w-full pt-8">
          <div className="flex py-2 gap-2 ">
            <Image
              src={"/icons/home.svg"}
              width={24}
              height={24}
              alt="icon home"></Image>
            <div>289A Khuat Duy Tien, Hanoi, Vietnam</div>
          </div>
          <div className="flex py-2 gap-2">
            <Image
              src={"/icons/_WhatsApp.png"}
              width={24}
              height={24}
              alt="icon home"></Image>
            <div>Phone number: +84 857781385</div>
          </div>
          <div className="flex py-2 gap-2">
            <Image
              src={"/icons/_Google.png"}
              width={24}
              height={24}
              alt="icon home"></Image>
            <div>
              <span>Email:</span>
              <span className="underline">evelyn.anhnh@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
