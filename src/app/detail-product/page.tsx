import Hero from "@/components/Hero";
import ProductContent from "./components/ProductContent";
import ProductDetail from "./components/ProductDetail";
import { itemProduct } from "@/const";
import Slider from "@/components/slider";

export default function DetailProduct() {
    return (
        <div className="w-full flex flex-col gap-8">
            <Hero />
            <ProductContent />
            <ProductDetail />
            <Slider
                title={"Sản phẩm liên quan"}
                componentString={"Product"}
                slidesPerView={4}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    1440: {
                        slidesPerView: 5
                    },
                    1024: {
                        slidesPerView: 5
                    },
                    768: { slidesPerView: 3 },
                    640: { slidesPerView: 2 },
                }}
                items={itemProduct}
            />
        </div>
    )
}