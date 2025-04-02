import { IProduct } from "@/type";
import Image from "next/image";
import Link from "next/link";


export default function ProductItem({ name, price, imageUrl, id }: IProduct) {
    return (
        <div className="bg-white flex flex-col gap-4 border h-full group hover:shadow-xl hover:border-none rounded-md">
            <Link href={`/detail-product/${id}`}>
                <div className="relative w-full h-[280px] border-b-2">
                    <Image src={imageUrl}
                        alt={name}
                        fill
                        className="object-cover"
                        quality={100}
                    />
                </div>
                <div className="text-base cursor-pointer flex flex-col justify-center items-center px-2 pb-4">
                    <div className="text-black group-hover:text-blue-500 max-w-[100%] truncate">{name}</div>
                    <div className="text-blue font-bold text-blue-600">{price}</div>
                </div>
            </Link>
        </div>
    )
}