import Image from "next/image";

interface IBestSellingItem {
    productInfo: {
        imageUrl: string,
        title: string,
        price: string,
    }
}
export default function BestSellingItem({ productInfo }: IBestSellingItem) {
    return (
        <div className="bg-white p-2 md:p-4 flex w-full md:max-w-[400px] max-h-[200px]">
            <Image src={productInfo?.imageUrl} alt="" width={130} height={130} />
            <div className="text-xl cursor-pointer">
                <div className="text-black hover:text-blue-500">{productInfo?.title}</div>
                <div className="text-blue font-bold text-blue-600">{productInfo?.price}</div>
            </div>
        </div>
    )
}