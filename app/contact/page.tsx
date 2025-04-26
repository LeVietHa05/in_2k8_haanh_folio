import Image from "next/image";

export default function Contact() {
  return (
    <div className="max-w-[1060px] bg-white/30 backdrop-blur-sm p-4 sm:px-20 sm:py-10 mx-auto flex gap-10 leading-loose font-['Montserrat'] text-base text-slate-700">
      <div className="self-stretch inline-flex flex-col items-start gap-4">
        <div className="self-stretch text-xl font-medium leading-9">
          All questions and support requests, please leave your information
          here, we will review and respond soon
        </div>
        <input
          className="relative block w-full p-3 rounded-lg placeholder:text-gray-700 border border-zinc-950/10 bg-gray-50"
          placeholder="Name"
          name="name"></input>
        <input
          className="relative block w-full p-3 rounded-lg placeholder:text-gray-700 border border-zinc-950/10 bg-gray-50"
          placeholder="Email"
          name="mail"></input>
        <input
          className="relative block w-full p-3 rounded-lg placeholder:text-gray-700 border border-zinc-950/10 bg-gray-50"
          placeholder="Phone"
          name="phone"></input>
        <input
          className="relative block w-full p-3 rounded-lg placeholder:text-gray-700 border border-zinc-950/10 bg-gray-50"
          placeholder="Address"
          name="address"></input>
        <input
          className="relative block w-full p-3 rounded-lg placeholder:text-gray-700 border border-zinc-950/10 bg-gray-50"
          placeholder="Title"
          name="title"></input>
        <textarea
          className="relative block w-full p-3 rounded-lg placeholder:text-gray-700 border border-zinc-950/10 bg-gray-50"
          placeholder="Content"
          name="content"></textarea>
        <div className="w-96 inline-flex items-center gap-4">
          <div className="flex-1 px-4 py-2 flex justify-center items-center gap-2 cursor-not-allowed">
            <div className="text-slate-600 text-xl font-semibold ">Redo</div>
          </div>
          <div className="flex-1 px-4 py-2 bg-lime-700 rounded-[44px] flex justify-center items-center gap-2 cursor-not-allowed">
            <div className="text-gray-50 text-xl font-semibold ">Send</div>
          </div>
        </div>
      </div>
      <div className="rounded-lg pb-3 hidden sm:block">
        <div className="w-80 inline-flex justify-center items-center gap-2">
          <div className="flex-1 text-lime-700 text-2xl font-semibold leading-9">
            Contact
          </div>
        </div>
        <div className="w-80 flex flex-col items-start gap-2">
          <div className="self-stretch text-slate-800 text-2xl font-semibold leading-9">
            Nguyen Ha Anh
          </div>
          <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-neutral-300"></div>
          <div className="self-stretch py-2 inline-flex items-center gap-2">
            <Image
              src={"/icons/home.svg"}
              width={24}
              height={24}
              alt="icon home"></Image>
            <div className="text-slate-800 font-medium ">
              289A Khuat Duy Tien, Hanoi, Vietnam
            </div>
          </div>
          <div className="self-stretch py-2 inline-flex items-center gap-2">
            <Image
              src={"/icons/_WhatsApp.png"}
              width={24}
              height={24}
              alt="icon home"></Image>
            <div className="text-slate-800 font-medium ">
              Phone number: +84 857781385
            </div>
          </div>
          <div className="self-stretch py-2 inline-flex items-center gap-2">
            <Image
              src={"/icons/_Google.png"}
              width={24}
              height={24}
              alt="icon home"></Image>
            <div className="justify-start">
              <span className="text-slate-800 font-medium ">Email: </span>
              <span className="text-slate-800 font-medium underline ">
                evelyn.anhnh@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
