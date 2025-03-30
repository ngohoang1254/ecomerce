"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ISwiper } from "@/type";
import Image from "next/image";

export default function SwiperHome({ component: Component, slidesPerView, autoplay, breakpoints, items, moreSection }: ISwiper) {
    return (
        <div className="w-full flex gap-4">
            {moreSection &&
                <div className="w-auto h-auto">
                    <Image
                        src={moreSection.imageUrl}
                        width={250}
                        height={400}
                        alt=""
                    />
                </div>
            }
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={slidesPerView}
                spaceBetween={20}
                loop={true}
                autoplay={autoplay}
                breakpoints={breakpoints}
                className="w-full"
            >
                {items.map((ele, index) => (
                    <SwiperSlide key={index} >
                        <Component {...ele} /> {/* Truyền prop động */}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}