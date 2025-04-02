"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BestSellingItem from "./BestSellingItem";
import { productList } from "@/const";

export default function SwiperHome({ title }: any) {
    const item = [
        {
            imageUrl: "/assets/liberty.webp",
            title: "Liberty Z Urban Sky",
            price: "59.300.000₫"
        },
        {
            imageUrl: "/assets/vespa1.webp",
            title: "Vespa Sprint Carbon 125 - Black",
            price: "84.600.000₫"
        },
        {
            imageUrl: "/assets/vespa2.webp",
            title: "Vespa Sprint S 150 White",
            price: "97.800.000₫"
        },
        {
            imageUrl: "/assets/vespa1.webp",
            title: "Vespa Sprint ABS 125 Rosso Scarlatto",
            price: "81.000.000₫"
        }
    ]
    return (
        <div className="flex flex-col gap-4">
            <div>{title}</div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }} // Tự động chạy
                // navigation={true}
                // pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {productList?.map((ele, index) => {
                    return <SwiperSlide>
                        <BestSellingItem productInfo={ele} />
                    </SwiperSlide>
                })}
                {/* <SwiperSlide>
                <div className="bg-blue-500 text-white p-8 rounded-lg">Slide 1</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-red-500 text-white p-8 rounded-lg">Slide 2</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-green-500 text-white p-8 rounded-lg">Slide 3</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-purple-500 text-white p-8 rounded-lg">Slide 4</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-yellow-500 text-white p-8 rounded-lg">Slide 5</div>
            </SwiperSlide> */}
            </Swiper>
        </div>
    );
}