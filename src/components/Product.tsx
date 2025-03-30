import { IProduct } from "@/type";
import Image from "next/image";


export default function Product({ name, price, imageUrl }: IProduct) {
    return (
        <div className="bg-white flex flex-col gap-4 border h-full">
            <Image src={imageUrl} alt="" width={200} height={200}
                className="border-b-2 w-full max-h-[280px]"
            />
            <div className="text-base cursor-pointer flex flex-col justify-center items-center">
                <div className="text-black hover:text-blue-500">{name}</div>
                <div className="text-blue font-bold text-blue-600">{price}</div>
            </div>
        </div>
    )
}