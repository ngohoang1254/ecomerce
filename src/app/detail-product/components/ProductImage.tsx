import ZoomImageComponent from "@/components/ZoomImageContainer";
import Image from "next/image";

export default function ProductImage() {
    return (
        <div className="border self-start">
            {/* <Image src="/assets/product/liberty-std-white-luna.webp" width={300} height={300} alt=""
                className="w-full h-auto"
            /> */}
            <ZoomImageComponent imageSrc="/assets/product/liberty-std-white-luna.webp" />
        </div>
    )
}