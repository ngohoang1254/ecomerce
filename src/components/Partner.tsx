import { itemBrands, itemNews } from "@/const";
import Image from "next/image";
import Slider from "./slider";

export default function Partner() {
    return (
        <div className="container mx-auto p-4 flex flex-col gap-4">
            <div className="text-2xl font-bold">Đối tác</div>
            <Slider
                hideTitle={true}
                title={"Phụ tùng Vespa - Piaggio"}
                componentString={"PartnerItem"}
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
                items={itemBrands}
            />
        </div>
    )
}