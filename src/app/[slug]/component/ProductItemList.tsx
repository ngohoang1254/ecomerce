import ButtonCart from "@/components/ButtonCart";
import ButtonEye from "@/components/ButtonEye";
import { IProduct } from "@/type";
import Image from "next/image";

export default function ProductItemList({ name, price, imageUrl }: IProduct) {
    return (
        <div className="bg-white flex gap-4 border h-full cursor-pointer group hover:shadow-2xl">
            <Image src={imageUrl} alt="" width={200} height={400}
                className="h-full"
            />
            <div className="flex flex-col">
                <div className="text-base cursor-pointer py-2">
                    <div className="text-black group-hover:text-[#0660bb] text-lg font-bold truncate max-w-[150px] md:max-w-full">{name}</div>
                    <div className="text-blue font-bold text-[#0660bb]">{price}</div>
                </div>
                <div className="flex gap-2 mt-4">
                    <ButtonCart />
                    <ButtonEye />
                </div>
            </div>


        </div>
    )
}