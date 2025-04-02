import BestSellingItem from "@/components/BestSellingItem";
import Image from "next/image";
import HotProductItem from "./HotProductItem";
import { productList } from "@/const";
interface IHotProduct {
    height?: number
}
export default function HotProduct({ height }: IHotProduct) {
    const item = [
        {
            imageUrl: "/assets/liberty.webp",
            title: "Liberty Z Urban Sky",
            price: "59.300.000₫"
        },
        {
            imageUrl: "/assets/vespa1.webp",
            title: "Vespa Sprint Carbon 125 - Black",
            price: "84.600.000₫"
        },
        {
            imageUrl: "/assets/vespa2.webp",
            title: "Vespa Sprint S 150 White",
            price: "97.800.000₫"
        },
        {
            imageUrl: "/assets/vespa1.webp",
            title: "Vespa Sprint ABS 125 Rosso Scarlatto",
            price: "84.600.000₫"
        }
    ]
    return (
        <div className="w-full border-[1px] flex flex-col overflow-auto relative"
            style={{ height: height ? height : 200 }}
        >
            <div className="flex w-full sticky top-0">
                <Image src="/assets/icon_vespa2.png" width={50} height={50} alt="" />
                <div className="bg-[#0660bb] cursor-pointer flex-1 flex items-center font-bold text-xl p-2 text-white">Sản phẩm hot</div>
            </div>
            <div className="flex flex-col p-4 gap-4">
                {productList.map((ele, index) => {
                    return (
                        <HotProductItem productInfo={ele} key={index} />
                    )
                })}
            </div>
        </div>
    )
}