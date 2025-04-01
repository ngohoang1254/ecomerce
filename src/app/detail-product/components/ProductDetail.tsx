import ProductTabsContent from "./ProductTabsContent";

export default function ProductDetail() {
    return (
        <div className="container mx-auto flex gap-2">
            <div className="lg:w-1/4 lg:block hidden">
                <img src="/assets/product/banner_detail_product.webp"
                    className="w-auto h-auto"
                />
            </div>
            <div className="lg:w-3/4 w-full">
                <ProductTabsContent />
            </div>
        </div>
    )
}