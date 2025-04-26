import Image from "next/image";
import Link from "next/link";

export default function News() {
  return (
    <div className="max-w-[1280px] mx-auto text-slate-700 text-xl sm:text-3xl font-semibold font-['Montserrat'] underline ">
      <div className="sm:max-w-[1060px] p-4 sm:px-20 sm:py-10 bg-white/30 rounded-3xl backdrop-blur-md mx-auto sm:mb-10 mb-6">
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="sm:pb-10 pb-4">
            <Link
              href={
                "https://vietnam.vnanet.vn/english/tin-tuc/the-essence-of-chu-dau-pottery-229428.html"
              }>
              The essence of Chu Dau pottery
            </Link>
          </div>
        </div>
        <Image src={"/news/1.png"} alt="" width={900} height={438}></Image>
      </div>
      <div className="sm:max-w-[1060px] p-4 sm:px-20 sm:py-10 bg-white/30 rounded-3xl backdrop-blur-md mx-auto sm:mb-10 mb-6">
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="sm:pb-10 pb-4">
            <Link
              href={
                "https://vietnam.vnanet.vn/english/tin-tuc/the-essence-of-chu-dau-pottery-229428.html"
              }>
              Bat Trang GAIA: A Ceramic Revolution
            </Link>
          </div>
        </div>
        <Image src={"/news/2.png"} alt="" width={900} height={438}></Image>
      </div>
      <div className="sm:max-w-[1060px] p-4 sm:px-20 sm:py-10 bg-white/30 rounded-3xl backdrop-blur-md mx-auto sm:mb-10 mb-6">
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="sm:pb-10 pb-4">
            <Link
              href={
                "https://vietnam.vnanet.vn/english/tin-tuc/the-essence-of-chu-dau-pottery-229428.html"
              }>
              Vietnamese artist masters ceramic painting
            </Link>
          </div>
        </div>
        <Image src={"/news/3.png"} alt="" width={900} height={438}></Image>
      </div>
    </div>
  );
}
