import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full h-[442px] px-20 py-10 flex justify-center items-start gap-10  bg-[#232e3f99] text-[#FCFCFD]">
      <div className="max-w-[360px]">
        <div>
          <div className="text-xl font-semibold pb-8">Copyright Disclaimer</div>
          <div className="text-sm">
            Nguyen Ha Anh welcomes you to the website. By viewing the pages of
            this website, you acknowledge that you have read and accepted these
            disclaimers.
          </div>
        </div>
        <div className="w-[260px] pt-8">
          <div className="flex py-2 gap-2 ">
            <Image
              src={"/icons/home.svg"}
              width={24}
              height={24}
              alt="icon home"></Image>
            <div>289A Khuat Duy Tien, Hanoi</div>
          </div>
          <div className="flex py-2 gap-2 border-b-1 border-t-1 border-white/30">
            <Image
              src={"/icons/_WhatsApp.png"}
              width={24}
              height={24}
              alt="icon home"></Image>
            <div>+848 577 81385</div>
          </div>
          <div className="flex py-2 gap-2">
            <Image
              src={"/icons/_Google.png"}
              width={24}
              height={24}
              alt="icon home"></Image>
            <div className="underline">evelyn.anhnh@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="max-w-[880px] text-sm">
        <div className="text-xl font-semibold pb-8">Copyright</div>
        <div className="pb-8">
          Everything on this site is copyrighted unless otherwise noted.
        </div>
        <div className="leading-[26px] line-clamp-9">
          Copyright Law protects the Artist&apos;s Copyright in their original
          artworks. All viewers should be aware that the Copyright of the
          artworks located on this website remains the exclusive property of the
          Artist. Copyright is administered by Nguyen Ha Anh, the Artists, or
          their agents. Artworks may be viewed only for the purposes of buyer
          browsing, and be downloaded only for such purposes. No reproduction
          may be made of any of the artworks from this website for commercial
          use for any reason without first receiving written permission from the
          Gallery, the Artists, or their agents. Under Copyright Law it is fair
          use to reproduce a single copy for personal or educational purposes,
          provided that no changes are made to the content and provided that a
          copyright notice accrediting the content is attached to the
          reproduction. Beyond that, no further copies of artworks from this
          website may be made or distributed without written authorization.
          Nguyen Ha Anh is the copyright owner for all other aspects of the
          website including text, photographs, and website design unless
          otherwise stated.
        </div>
      </div>
    </footer>
  );
}
