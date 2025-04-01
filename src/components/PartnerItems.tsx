import { itemBrands } from "@/const"
import Image from "next/image"

export default function PartnerItem(item: any) {
    return (
        <Image width={100} src={item.imageUrl} alt="" key={item.imageUrl} height={200}
            className="h-auto md:h-[80px] w-auto"
        />
    )
}