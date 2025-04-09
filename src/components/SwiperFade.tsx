"use client";
import { FaSearch } from "react-icons/fa";

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
import { useRouter } from 'next/navigation';

export default function Banner() {
    const router = useRouter();
    const categories = [
        { value: "3168264", label: "Vespa GTV" },
        { value: "3047353", label: "Piaggio Beverly" },
        { value: "3047346", label: "Piaggio MP3" },
        { value: "3024636", label: "Vespa Primavera" },
        { value: "2663976", label: "Xe Medley" },
        { value: "2663970", label: "Xe Medley" },
        { value: "2663857", label: "Phụ kiện khác" },
        { value: "2663856", label: "Nón bảo hiểm" },
        { value: "2663855", label: "Topbox" },
        { value: "2663853", label: "Piaggio" },
        { value: "2663852", label: "Vespa" },
        { value: "2663850", label: "Xe Liberty" },
        { value: "2663848", label: "GTS Super Tech" },
        { value: "2663847", label: "GTS Super Sport" },
        { value: "2663838", label: "Vespa GTS Super" },
        { value: "2663833", label: "Vespa Sprint" },
        { value: "2663817", label: "Primavera Speccial" },
        { value: "2323497", label: "Phụ tùng" },
        { value: "2278730", label: "Phụ kiện" },
        { value: "2278729", label: "Xe Piaggio" },
        { value: "2278728", label: "Xe Vespa" },
        { value: "2273073", label: "Sản phẩm mới" },
        { value: "2273072", label: "Trang chủ" },
        { value: "2273071", label: "Sản phẩm khuyến mãi" },
        { value: "2273070", label: "Sản phẩm nổi bật" }
    ];
    return (
        <div className="relative">
            <Swiper
                effect="fade"
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                modules={[EffectFade, Autoplay, Navigation]}
                className="w-full h-[300px] md:h-[500px] xl:h-[700px]"
            >
                <SwiperSlide className="relative w-full h-full">
                    <Image src="/assets/banner.jpg" alt="Slide 1" fill />
                </SwiperSlide>
                <SwiperSlide className="relative w-full h-full">
                    <Image src="/assets/slider3.webp" alt="Slide 2" fill />
                </SwiperSlide>
            </Swiper>
            <div className="hidden xl:flex absolute bg-[rgba(0,0,0,0.75)] bg-opacity-50 w-[300px] h-full top-0 left-[10%] z-10 flex-col justify-center p-4 gap-4 ">
                <div className="text-2xl text-white font-bold">Tìm kiếm xe bạn thích</div>
                <p className="text-[#888b86] font-semibold">Nhí Motors - Nhà phân phối Vespa, Piaggio chính hãng tại Việt Nam. Hơn 30 năm đồng hành và phát triển cùng tập đoàn Piagigo Italia.</p>
                <Input type="text" placeholder="Nhập tên xe" className="bg-white h-[48px]" />
                <Select>
                    <SelectTrigger className="w-full bg-white text-black border border-gray-300 h-12"
                        style={{ height: "48px" }}
                    >
                        <SelectValue placeholder="Chọn danh mục" />
                    </SelectTrigger>
                    <SelectContent>
                        {categories.map((item, index) => {
                            return (
                                <SelectItem value={item.value} key={item.value}>{item.label}</SelectItem>
                            )
                        })}
                    </SelectContent>
                </Select>
                <Button className="bg-[#0660bb] hover:bg-[#0660bb] cursor-pointer"
                    onClick={() => {
                        router.push("/danh-sach")
                    }}
                >Tìm kiếm</Button>
            </div>
            {/* Menu search mobile */}
            <div className="w-full bg-[rgba(0,0,0,0.75)] p-4 block xl:hidden">
                <div className="text-white font-bold text-xl mb-2">Tìm kiếm xe bạn thích</div>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                    <Input type="text" placeholder="Nhập tên xe" className="bg-white h-[48px]" />
                    <div className="flex gap-2">
                        <Select>
                            <SelectTrigger className="w-full bg-white text-black border border-gray-300 h-12"
                                style={{ height: "48px" }}

                            >
                                <SelectValue placeholder="Chọn danh mục" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((item, index) => {
                                    return (
                                        <SelectItem value={item.value} key={item.value}>{item.label}</SelectItem>
                                    )
                                })}
                            </SelectContent>
                        </Select>
                        <Button className="h-12 bg-[#0660bb] font-bold"
                            onClick={() => {
                                router.push("/danh-sach")
                            }}
                        >
                            <FaSearch color="white" />
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    );
}