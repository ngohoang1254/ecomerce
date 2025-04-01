"use client"
import Product from "@/components/Product";
import { itemProduct } from "@/const";
import { useViewStore } from "@/store/useProductView";
import ProductItem from "./ProductItem";
import ProductItemList from "./ProductItemList";

export default function ProductView() {
    const { viewMode, setViewMode } = useViewStore();
    return (
        <div className="flex items-center justify-between w-full rounded-md bg-white">
            {viewMode === "grid" ?
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {itemProduct.map((item, index) => {
                        return (
                            <ProductItem {...item} key={index} />
                        )
                    })}
                </div>
                : <div className="flex flex-col gap-4 w-full">
                    {itemProduct.map((item, index) => {
                        return (
                            <ProductItemList {...item} key={index} />
                        )
                    })}
                </div>
            }

        </div>
    )
}