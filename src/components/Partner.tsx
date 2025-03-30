import { itemBrands } from "@/const";
import Image from "next/image";

export default function Partner() {
    return (
        <div className="container mx-auto p-4 flex flex-col gap-4">
            <div className="text-2xl font-bold">Đối tác</div>
            <div className="bg-white w-full flex items-center gap-4 p-4">
                {itemBrands.map((item, index) => {
                    return (
                        <Image width={100} src={item.imageUrl} alt="" key={item.imageUrl} height={200}
                            className="h-[80px] w-auto"
                        />
                    )
                })}
            </div>
        </div>
    )
}