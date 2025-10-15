import Image from "next/image";
import Link from "next/link";
import Gallery, { Image as GalleryImage } from "../components/Gallery";
export default function Home() {
  // popup and image
  const imgOnSaleLink = [
    {
      id: 1,
      src: "/artwork/1.png",
      link: "/auction#artwork1",
      title: "Whispers to the Sun (2024)",
      des: "A lotus leans gently toward the golden morning sun, surrounded by lush green leaves. This porcelain plate captures the quiet connection between light and life.",
      medium: "Hand-sculpted, glazed ceramic",
      dimentions: "22cm x 22cm",
    },
    {
      id: 2,
      src: "/artwork/2.png",
      link: "/auction#artwork2",
      title: "Crane’s Dance, Lotus’ Scent (2024)",
      des: "A tall ceramic vase decorated with a hand-painted lotus blossom and a graceful crane, symbolizing purity and peace. The soft brushstrokes and warm tones create a tranquil, timeless aesthetic.",
      medium: "Hand-sculpted, glazed ceramic",
      dimentions: "27cm x 12cm",
    },
    {
      id: 3,
      src: "/artwork/3-new.png",
      link: "/auction#artwork3",
      title: "Koi’s Whisper (2024)",
      des: "A dreamy underwater world where Koi fish drift gracefully beneath a blooming lotus. Vivid blues and oranges bring depth and movement to this peaceful scene.",
      medium: "Hand-sculpted, glazed ceramic",
      dimentions: "15cm x 15cm",
      technique: "Hand-painted underglaze",
    },
    {
      id: 4,
      src: "/artwork/4.png",
      link: "/auction#artwork4",
      title: "Blossoming Silence (2024)",
      des: "This round vase bursts with the serenity of a lotus bud unfolding at dawn. Soft greens and deep blues reflect a moment of stillness before the bloom",
      medium: "Hand-sculpted, glazed ceramic",
      dimentions: "11cm x 9cm",
      technique: "Hand-painted underglaze",
    },
    {
      id: 5,
      src: "/artwork/5.png",
      link: "/auction#artwork5",
      title: "Echoes of a Quiet Pond (2024)",
      des: "Delicate lotus blooms drift gently across this tall ceramic vase, their soft pink petals whispering memories of still waters and fading summer light. A tranquil and timeless tribute to nature's calm",
      medium: "Hand-sculpted, glazed ceramic",
      dimentions: "26cm x 10cm",
    },
    {
      id: 6,
      src: "/artwork/6.png",
      link: "/auction#artwork6",
      title: "Ripples of the Lotus Pond (2024)",
      des: "A playful frog swims among floating lily pads and a radiant lotus in bloom. The water’s swirling texture captures a moment of joy in nature’s hidden corners.",
      medium: "Hand-sculpted, glazed ceramic",
      dimentions: "17cm x 17cm",
    },
  ];

  const imgs: GalleryImage[] = [
    {
      link: "/artwork/1.jpg",
      width: "",
      height: "",
      title: "'Golden Harvest' (2022)",
      description: "",
      material: "Acrylic",
      size: "40cm x 60cm",
    },
    {
      link: "/artwork/2.jpg",
      width: "",
      height: "",
      title: "'Blossoms' (2022)",
      description: "",
      material: "Acrylic",
      size: "40cm x 60cm",
    },
    {
      link: "/artwork/3.jpg",
      width: "",
      height: "",
      title: "'Twilight Whispers' (2021)",
      description: "",
      material: "Acrylic",
      size: "40cm x 60cm",
    },
    {
      link: "/artwork/4.jpg",
      width: "",
      height: "",
      title: "'Dusk and Dawn' (2021)",
      description: "",
      material: "Acrylic",
      size: "40cm x 60cm",
    },
    {
      link: "/artwork/5.jpg",
      width: "",
      height: "",
      title: "'Daisy' (2021)",
      description: "",
      material: "Acrylic",
      size: "40cm x 60cm",
    },
    {
      link: "/artwork/6.jpg",
      width: "",
      height: "",
      title: "'Lotus' (2021)",
      description: "",
      material: "Acrylic",
      size: "40cm x 60cm",
    },
    {
      link: "/artwork/7.jpg",
      width: "",
      height: "",
      title: "'Lotus Bloom' (2020)",
      description: "",
      material: "Watercolor",
      size: "30cm x 40cm",
    },
    {
      link: "/artwork/8.jpg",
      width: "",
      height: "",
      title: "'Into the Woods' (2020)",
      description: "",
      material: "Watercolor",
      size: "21cm x 30cm",
    },
    {
      link: "/artwork/9.jpg",
      width: "",
      height: "",
      title: "'The Road Home' (2020)",
      description: "",
      material: "Watercolor",
      size: "21cm x 30cm",
    },
    {
      link: "/artwork/10.jpg",
      width: "",
      height: "",
      title: "'Golden Sunset' (2021)",
      description: "",
      material: "Acrylic",
      size: "40cm x 60cm",
    },
    {
      link: "/artwork/11.jpg",
      width: "",
      height: "",
      title: "'Dad and I' (2020)",
      description: "",
      material: "Acrylic",
      size: "40cm x 60cm",
    },
    {
      link: "/artwork/12.jpg",
      width: "",
      height: "",
      title: "'Winter Breeze' (2019)",
      description: "",
      material: "Watercolor",
      size: "21cm x 30cm",
    },
  ]

  return (
    <div className="background-container pb-8 text-gray-50">
      <Image
        src="/image/bg-mobile.png"
        alt="Background"
        fill
        priority
        quality={75}
        sizes="100vw"
        className="z-0 block sm:hidden"
      />
      <div className="max-w-[1440px] mx-auto sm:px-15 px-3">
        <main className=" backdrop-blur-sm bg-white/30">
          {/* main here */}
          <div className="vogue uppercase text-[#518224] text-center text-[44px] leading-[40px] py-4">
            Ha Anh’s Pottery Paintings
          </div>
          <div className="w-full sm:w-2/3 mx-auto text-center px-4 text-[#518224]">
            My love for Vietnam’s traditional cultural values ​​and the lotus blossom - Vietnam’s symbolic flower - has led me to the art of painting on pottery. Growing up near a renowned ceramic village, surrounded by blooming lotuses each summer, I developed a deep connection to both, and wish to leave a legacy that honors this poetic combination.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-10 border-y-1 border-white/30 *:w-[360px] *:m-auto ">
            {imgOnSaleLink.map((image) => {
              return (
                <div key={image.id} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <Image
                    src={image.src}
                    width={280}
                    height={304}
                    alt="anh san pham"
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-semibold text-[#518224] mb-2">{image.title}</h3>
                  {/* <p className="text-sm text-gray-700 mb-2">{image.des}</p> */}
                  <div className="text-xs text-gray-600 mb-4">
                    <p><strong>Medium:</strong> {image.medium}</p>
                    <p><strong>Dimensions:</strong> {image.dimentions}</p>
                  </div>
                  <Link href={image.link} scroll={false}>
                    <button className="w-full bg-[#518224] text-white py-2 px-4 rounded-md hover:bg-[#40651D] transition-colors cursor-pointer">
                      View Price/Auction
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </main>
        <Gallery img={imgs} />
      </div>
    </div>
  );
}
