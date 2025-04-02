"use client"
import Image from "next/image";
import { Button } from "./ui/button";
import { Eye } from "lucide-react";
import { IProduct } from "@/type";
import Link from "next/link";

interface IBestSellingItem {
    productInfo: IProduct
}
export default function BestSellingItem({ productInfo }: IBestSellingItem) {
    return (
        <div className="bg-white p-2 md:p-4 flex w-full md:max-w-[400px] max-h-[200px]">
            <Image src={productInfo?.imageUrl} alt="" width={130} height={130} />
            <div className="text-xl cursor-pointer ml-4">
                <div className="text-black hover:text-blue-500 truncate w-[200px]">{productInfo?.name}</div>
                <div className="text-blue font-bold text-blue-600">{productInfo?.price}</div>
                <div className="flex gap-2 mt-2">
                    <Link href={`/detail-product/${productInfo?.id}`}>
                        <Button className="bg-[#0660bb]">Mua hàng</Button>
                    </Link>
                    <Link href={`/detail-product/${productInfo?.id}`}>
                        <Button variant="default" className="bg-[#0660bb] cursor-pointer px-2">
                            <Eye size={20} />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}