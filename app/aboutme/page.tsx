import Image from "next/image";
import { montserrat, monteCarlo } from "../ui/fonts";

export default function Home() {
  return (
    <div className="background-container pb-8 text-justify bg-[#F7F6E5] font-medium">
      <div className="max-w-[1440px] mx-auto sm:px-15 ">
        <main>
          <div
            className={`flex flex-col gap-10 sm:flex-row justify-between items-center mb-5 sm:mb-20 sm:pt-[100px] relative`}>
            <Image
              src={"/aboutme/bg.png"}
              alt="Background"
              fill
              objectFit="contain"
              priority
              quality={75}
              sizes="50%"
              objectPosition="left"
              className="z-0 hidden sm:block"
            />
            <Image
              src="/image/bg-mobile.png"
              alt="Background"
              fill
              priority
              quality={75}
              sizes="100vw"
              className="z-0 block sm:hidden"
            />
            <div className="relative z-1">
              <Image
                src={"/home-1-new.png"}
                width={645}
                height={615}
                alt="abc"></Image>
            </div>
            <div
              className={`text-slate-700 text-xl sm:text-2xl flex flex-col gap-7 ${montserrat.className} bg-white/30 backdrop-blur-sm rounded-xl p-8`}>
              <div className="font-medium">Welcome to Ha Anh’s Portfolio</div>
              <div className={`vogue text-[44px] sm:text-[66px] `}>
                ha anh Nguyen
              </div>
              <div
                className={`text-[#47761D] text-[34px] sm:text-[56px] ${monteCarlo.className}`}>
                The Art of Painting on Pottery
              </div>
              <Image
                src={"/smoothinnercorner.svg"}
                width={58}
                height={73}
                alt="icon"
                className="absolute top-0 right-30 hidden sm:block"
              />
              <Image
                src={"/smoothinnercorner.svg"}
                width={45}
                height={57}
                className="absolute top-10 left-0 hidden sm:block"
                alt="icon"
              />
            </div>
          </div>

          {/* main here */}
          <div className="sm:pt-15 sm:px-0 px-4 relative  text-xl">
            <Image
              src={"/aboutme/bg.png"}
              alt="Background"
              width={700}
              height={700}
              priority
              style={{
                width: "70%",
                position: "absolute",
              }}
            />
            <div className="max-w-[900px] mx-auto pt-5 sm:pt-8 text-slate-700 relative z-1 flex flex-col-reverse sm:flex-row items-center justify gap-10">
              <div className="max-w-[500px]  relative z-1">
                <div className="vogue sm:text-[44px] sm:leading-[40px] text-[28px] leading-[28px] text-gray-800 relative">
                  The Art of Painting on Pottery: A Tribute to Vietnam’s
                  Heritage
                </div>
                <div className="pt-4 text-slate-700 font-medium sm:leading-9">
                  My love for Vietnam’s traditional cultural values and the
                  lotus flower - Vietnam’s symbolic bloom - has led me to the
                  art of painting on pottery. Growing up near a renowned ceramic
                  village, surrounded by blooming lotuses each summer, I
                  developed a deep connection to both. 
                </div>
              </div>
              <picture className="shrink-0">
                <source srcSet="/aboutme/P1.png" media="(min-width: 640px)" />
                <Image
                  src={"/aboutme/P1-mobile.png"}
                  width={506}
                  height={675}
                  alt="anh 1"
                  className="w-80 sm:w-96 h-96"></Image>
              </picture>
            </div>
            <Image
              src={"/aboutme/bg.png"}
              alt="Background"
              width={700}
              height={700}
              priority
              style={{
                width: "70%",
                position: "absolute",
                top: "40%",
                left: "10%",
              }}
            />
            <div className="max-w-[900px] mx-auto pt-5 sm:pt-8 text-slate-700 relative z-1">
              <div className="flex flex-col-reverse sm:flex-row items-center justify gap-10 sm:leading-9 ">
                <div>
                  Pottery is a time-honored craft, embodying history,
                  creativity, and cultural identity. Ceramic sculpting and
                  decoration bring this art to life, transforming raw clay into
                  vibrant masterpieces through skilled craftsmanship and
                  passion. Beyond functional use, Vietnamese ceramics carry
                  profound historical significance, reflecting traditions and
                  daily life across generations.
                </div>
                <picture className="shrink-0">
                  <source srcSet="/aboutme/P2.png" media="(min-width: 640px)" />
                  <Image
                    src={"/aboutme/P2-mobile.png"}
                    width={506}
                    height={675}
                    alt="anh 2"
                    className="w-80 sm:w-96 h-96"></Image>
                </picture>
              </div>
            </div>
            <Image
              src={"/aboutme/bg.png"}
              alt="Background"
              width={700}
              height={700}
              priority
              style={{
                width: "70%",
                position: "absolute",
                bottom: "0%",
              }}
            />
            <div className="max-w-[900px] mx-auto pt-5 sm:pt-8 text-slate-700 relative z-1">
              <div className="flex flex-col-reverse sm:flex-row items-center justify gap-10 sm:leading-9">
                <div>
                  As tradition meets modernity, ceramic artistry continues to
                  inspire contemporary design, blending ancient techniques with
                  innovative expression. The lotus, symbolizing purity,
                  resilience, and the Vietnamese spirit, plays a central role in
                  my work. With deep philosophical meaning spanning past,
                  present, and future, it represents love, devotion, and
                  self-perfection. Beyond that, the lotus carries deep
                  philosophical meanings in both space and time—encompassing the
                  past, present, and future—reflecting the cycle of
                  reincarnation and human self-perfection. The lotus root and
                  tuber represent the past, the seed pod symbolizes the present,
                  and the seeds embody the future.
                </div>
                <div className="shrink-0">
                  <Image
                    src={"/aboutme/P3.png"}
                    width={506}
                    height={675}
                    alt="anh 3"
                    className="w-80 sm:w-96 h-[546px]"></Image>
                </div>
              </div>

              <div className=" mx-auto pt-10 sm:leading-9">
                <div className="flex flex-col-reverse sm:flex-row items-center justify gap-10 ">
                  <div>
                    My ceramic artworks featuring the lotus flower are a story
                    born from this love for my homeland and its traditional
                    cultural values <br />
                    <br />
                    Vietnam’s rich cultural heritage is vividly reflected in
                    ceramic artistry, a source of pride not only for the people
                    but also for the entire nation. The passage of time has
                    witnessed the preservation and evolution of this art through
                    generations. Ceramic products are not merely everyday
                    household items; they also hold profound historical
                    significance, reflecting customs and the unique way of life
                    of Vietnamese people across different eras.
                  </div>
                  <div className="shrink-0">
                    <Image
                      src={"/aboutme/P4.png"}
                      width={506}
                      height={675}
                      alt="anh 4"
                      className="w-80 sm:w-96 h-[460px]"></Image>
                  </div>
                </div>
                <div className=" pt-5 sm:pt-8 flex flex-col-reverse sm:flex-row items-center justify gap-10 ">
                  <div>
                    As tradition and modernity intertwine in today’s
                    contemporary world, ceramic craftsmanship and painting have
                    transcended national cultural boundaries, becoming a diverse
                    source of inspiration in interior design and artistic
                    decoration. Modern pottery possess a beauty that is both
                    sophisticated and contemporary, blending thousands of years
                    of traditional techniques with innovative artistic
                    expressions. These creations are not only aesthetically
                    valuable but also deeply convey the spirit of connection
                    between the past and the present, looking toward a creative
                    future.
                  </div>
                  <div className="shrink-0">
                    <Image
                      src={"/aboutme/P5.png"}
                      width={506}
                      height={675}
                      alt="anh 5"
                      className="w-80 sm:w-96 h-[460px]"></Image>
                  </div>
                </div>
                <br />
                For generations, the lotus has been regarded as a familiar yet
                noble flower. In Vietnamese consciousness, it symbolizes purity
                and brightness, considered the national flower of Vietnam and
                representing the spirit and identity of the Vietnamese soul. The
                lotus is closely associated with beauty, homeland sentiments,
                and the essence of the Vietnamese people—especially the purity,
                virtue, and elegance of Vietnamese women. It also symbolizes
                love, devotion, and unwavering fidelity.
                <br />
                <br />
                Beyond that, the lotus carries deep philosophical meanings in
                both space and time—encompassing the past, present, and
                future—reflecting the cycle of reincarnation and human
                self-perfection. The lotus root and tuber represent the past,
                the seed pod symbolizes the present, and the seeds embody the
                future.
                <br />
                <br />
                My ceramic artworks featuring the lotus flower are a story born
                from this love for my homeland and its traditional cultural
                values.
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
