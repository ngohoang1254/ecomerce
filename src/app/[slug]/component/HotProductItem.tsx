import Image from "next/image";

interface IHostProduct {
    productInfo: {
        imageUrl: string,
        title: string,
        price: string,
    }
}
export default function HotProductItem({ productInfo }: IHostProduct) {
    return (
        <div className="bg-white py-4 flex  max-h-[200px] items-center gap-4">
            <Image src={productInfo?.imageUrl} alt="" width={100} height={100} />
            <div className="text-lg cursor-pointer">
                <div className="text-black hover:text-blue-500 font-bold">{productInfo?.title}</div>
                <div className="text-blue font-bold text-blue-600 text-base">{productInfo?.price}</div>
            </div>
        </div>
    )
}