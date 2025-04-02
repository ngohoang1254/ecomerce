import { IProduct } from "@/type";
import Image from "next/image";
import Link from "next/link";


export default function Product({ name, price, imageUrl, id }: IProduct) {
    return (
        <div className="bg-white flex flex-col gap-4 border h-full">
            <Link href={`/detail-product/${id}`}>
                <div className="relative w-full h-[280px] border-b-2">
                    <Image
                        src={imageUrl}
                        alt={name}
                        fill
                        className="object-cover"
                        quality={100}
                    />
                </div>
                <div className="text-base cursor-pointer flex flex-col justify-center items-center mt-4">
                    <div className="text-black hover:text-blue-500 truncate w-full text-center px-2">{name}</div>
                    <div className="text-blue font-bold text-blue-600">{price}</div>
                </div>
            </Link>
        </div>
    )
}