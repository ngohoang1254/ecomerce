import Hero from "@/components/Hero";
import ProductContent from "./components/ProductContent";
import ProductDetail from "./components/ProductDetail";
// import { itemProduct } from "@/const";
import Slider from "@/components/slider";
import { productList } from "@/const";

export default function DetailProduct({ params }: { params: { id: string } }) {
    console.log(params.id);
    const productItems = productList.find((item) => item.id === Number(params.id));
    return (
        <div className="w-full flex flex-col gap-8">
            <Hero />
            <ProductContent productItems={productItems} />
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
                    300: { slidesPerView: 1 }
                }}
                items={productList}
            />
        </div>
    )
}