import ButtonEye from "@/components/ButtonEye";
import { Button } from "@/components/ui/button";
import { IProduct } from "@/type";
import { Eye } from "lucide-react";
import Image from "next/image";

interface IHostProduct {
    productInfo: IProduct
}
export default function HotProductItem({ productInfo }: IHostProduct) {
    return (
        <div className="bg-white py-4 flex  max-h-[200px] items-center gap-4">
            <Image src={productInfo?.imageUrl} alt="" width={100} height={100} />
            <div className="text-lg cursor-pointer">
                <div className="text-black hover:text-blue-500 font-bold">{productInfo?.name}</div>
                <div className="text-blue font-bold text-blue-600 text-base">{productInfo?.price}</div>
                <div className="flex gap-2">
                    <Button className="bg-[#0660bb]">Mua hàng</Button>
                    <Button variant="default" className="bg-[#0660bb] cursor-pointer px-2">
                        <Eye size={20} />
                    </Button>
                </div>
            </div>
        </div>
    )
}