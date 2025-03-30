"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Image from "next/image";
import { Input } from "./ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "./ui/button";
export default function Banner() {
    return (
        <div className="relative">
            <Swiper
                effect="fade"
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                modules={[EffectFade, Autoplay, Navigation]}
                className="w-full h-[700px]"
            >
                <SwiperSlide className="relative w-full h-full">
                    <Image src="/assets/slider_2.webp" alt="Slide 1" fill />
                </SwiperSlide>
                <SwiperSlide className="relative w-full h-full">
                    <Image src="/assets/slider_3.webp" alt="Slide 2" fill />
                </SwiperSlide>
            </Swiper>
            <div className="absolute bg-[rgba(0,0,0,0.75)] bg-opacity-50 w-[300px] h-full top-0 left-[10%] z-10 flex flex-col justify-center p-4 gap-4">
                <div className="text-2xl text-white font-bold">Tìm kiếm xe bạn thích</div>
                <p className="text-[#888b86] font-semibold">Piaggio Sapa - Nhà phân phối Vespa, Piaggio chính hãng tại Việt Nam. Hơn 30 năm đồng hành và phát triển cùng tập đoàn Piagigo Italia.</p>
                <Input type="text" placeholder="Nhập tên xe" className="bg-white h-[48px]" />
                <Select>
                    <SelectTrigger className="w-full bg-white text-black border border-gray-300 h-12"
                        style={{ height: "48px" }}

                    >
                        <SelectValue placeholder="Chọn danh mục" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
                <Button className="bg-blue-500 hover:bg-blue-500 cursor-pointer">Tìm kiếm</Button>
            </div>
        </div>
    );
}