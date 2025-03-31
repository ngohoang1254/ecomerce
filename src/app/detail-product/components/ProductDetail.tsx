import ProductTabsContent from "./ProductTabsContent";

export default function ProductDetail() {
    return (
        <div className="container mx-auto flex gap-2">
            <div className="w-1/4">
                <img src="/assets/product/banner_detail_product.webp"
                    className="w-auto h-auto"
                />
            </div>
            <div className="w-3/4">
                <ProductTabsContent />
            </div>
        </div>
    )
}