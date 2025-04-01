import NewsList from "@/components/NewsList";
import Partner from "@/components/Partner";
import Slider from "@/components/slider";
import Banner from "@/components/SwiperFade";
import FadeSwiper from "@/components/SwiperFade";
import { itemCategory, itemProduct } from "@/const";
import Image from "next/image";

export default function Home() {

  return (
    <div className="bg-[#f8f8f8] w-full h-full">
      <Banner />
      <Slider
        title={"Danh mục nổi bật"}
        componentString={"Category"}
        slidesPerView={5}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        breakpoints={{
          1440: {
            slidesPerView: 5
          },
          1024: {
            slidesPerView: 4
          },
          768: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          300: { slidesPerView: 1 },
        }}
        items={itemCategory}
      />
      <Slider
        title={"XE VESPA"}
        componentString={"Product"}
        slidesPerView={4}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        breakpoints={{
          1440: {
            slidesPerView: 4
          },
          1024: {
            slidesPerView: 4
          },
          768: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          300: { slidesPerView: 2 },
        }}
        items={itemProduct}
        moreSection={{
          imageUrl: "/assets/product/section_product_images1.webp"
        }}
      />
      <Slider
        title={"XE PIAGGIO"}
        componentString={"Product"}
        slidesPerView={4}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        breakpoints={{
          1440: {
            slidesPerView: 4
          },
          1024: {
            slidesPerView: 4
          },
          768: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          300: { slidesPerView: 2 },
        }}
        items={itemProduct}
        moreSection={{
          imageUrl: "/assets/product/section_product_images1.webp"
        }}
      />
      <Slider
        title={"Phụ kiện Vespa - Piaggio"}
        componentString={"Product"}
        slidesPerView={4}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        breakpoints={{
          1440: {
            slidesPerView: 4
          },
          1024: {
            slidesPerView: 4
          },
          768: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          300: { slidesPerView: 2 },
        }}
        items={itemProduct}
        moreSection={{
          imageUrl: "/assets/product/section_product_images1.webp"
        }}
      />
      <Slider
        title={"Phụ tùng Vespa - Piaggio"}
        componentString={"Product"}
        slidesPerView={4}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        breakpoints={{
          1440: {
            slidesPerView: 4
          },
          1024: {
            slidesPerView: 4
          },
          768: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          300: { slidesPerView: 2 },
        }}
        items={itemProduct}
        moreSection={{
          imageUrl: "/assets/product/section_product_images1.webp"
        }}
      />

      {/* Tin tức */}
      <NewsList />
      {/* Đối tác */}
      <Partner />
      {/* <Hero />
      <BestSelling /> */}
    </div>
  );
}
