import BestSelling from "@/components/BestSelling";
import Hero from "@/components/Hero";
import ProductContent from "./component/ProductContent";

export default function Product() {
    return (
        <div className="w-full bg-white">
            <Hero />
            <BestSelling />
            <ProductContent />
        </div>
    )
}