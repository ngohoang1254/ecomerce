import BestSelling from "@/components/BestSelling";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Banner from "@/components/SwiperFade";
import FadeSwiper from "@/components/SwiperFade";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white w-full h-full">
      <Header />
      <Banner />
      {/* <Hero />
      <BestSelling /> */}
    </div>
  );
}
