"use client"
import ProductFilter from "./ProductFilter";
import ProductSort from "./ProductSort";
import ProductView from "./ProductView";

export default function ProductContent() {
    return (
        <div className="flex container mx-auto p-8 gap-4">
            <div className="w-1/3">
                <ProductFilter />
            </div>
            <div className="w-2/3">
                <div className="flex flex-col gap-4">
                    <ProductSort />
                    <ProductView />
                </div>
            </div>
        </div>
    )
}