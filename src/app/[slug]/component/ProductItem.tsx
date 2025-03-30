import { IProduct } from "@/type";
import Image from "next/image";


export default function ProductItem({ name, price, imageUrl }: IProduct) {
    return (
        <div className="bg-white flex flex-col gap-4 border h-full group hover:shadow-xl hover:border-none">
            <Image src={imageUrl} alt="" width={200} height={200}
                className="border-b w-full max-h-[280px] "
            />
            <div className="text-base cursor-pointer flex flex-col justify-center items-center px-2 pb-4">
                <div className="text-black group-hover:text-blue-500 max-w-[100%] truncate">{name}</div>
                <div className="text-blue font-bold text-blue-600">{price}</div>
            </div>
        </div>
    )
}