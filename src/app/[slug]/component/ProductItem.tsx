import { IProduct } from "@/type";
import Image from "next/image";
import Link from "next/link";


export default function ProductItem({ name, price, imageUrl, id }: IProduct) {
    return (
        <div className="bg-white flex flex-col gap-4 border h-full group hover:shadow-xl hover:border-none">
            <Link href={`/detail-product/${id}`}>
                <Image src={imageUrl} alt="" width={200} height={200}
                    className="border-b w-full h-[280px] "
                />
                <div className="text-base cursor-pointer flex flex-col justify-center items-center px-2 pb-4">
                    <div className="text-black group-hover:text-blue-500 max-w-[100%] truncate">{name}</div>
                    <div className="text-blue font-bold text-blue-600">{price}</div>
                </div>
            </Link>
        </div>
    )
}