"use client"
import ZoomImageComponent from "@/components/ZoomImageContainer";
import Image from "next/image";

export default function ProductImage({ productItems }: any) {
    return (
        <div className="border self-start flex flex-col">
            {/* <Image src="/assets/product/liberty-std-white-luna.webp" width={300} height={300} alt=""
                className="w-full h-auto"
            /> */}
            <ZoomImageComponent imageSrc={productItems.imageUrl} />
        </div>
    )
}