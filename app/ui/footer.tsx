import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full  px-4 py-6 sm:px-20 sm:py-10 mt-10 sm:mt-20 flex sm:flex-row flex-col justify-center items-start gap-10  bg-white/30 backdrop-blur-sm text-gray-800 relative z-1">
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
        <div className="flex justify-start items-center gap-2 text-gray-800 text-xl mt-4">
          <Image
            src={"/icons/Frame 226.png"}
            alt=""
            width={48}
            height={48}></Image>
          <Link href={"/copyright"} className="underline" title="Copyright">
            Copyright & Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}
