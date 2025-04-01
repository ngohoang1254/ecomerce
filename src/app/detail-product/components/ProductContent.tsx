import HotProduct from "@/app/[slug]/component/HotProduct";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

export default function ProductContent() {
    return (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
            <ProductImage />
            <ProductInfo />
            <div className="max-w-[300px] justify-end hidden lg:flex">
                <HotProduct height={600} />
            </div>
        </div>
    )
}