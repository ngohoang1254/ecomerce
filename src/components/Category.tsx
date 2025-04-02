import Image from "next/image";
import { Button } from "./ui/button";

interface ICategory {
    imageUrl: string,
    url: string,
    button: string,
}

export default function Category({ imageUrl, url, button }: ICategory) {
    return (
        <div className="flex flex-col w-full md:w-[200px] gap-4">
            <div className="relative w-full xl:w-[200px] h-[200px]">
                <Image
                    src={imageUrl}
                    fill
                    alt=""
                    className="object-cover rounded-md w-full"
                />
            </div>
            <Button className="bg-[#f5f5f5] text-base text-[#555] font-bold p-4 hover:text-white cursor-pointer">
                {button}
            </Button>
        </div>
    )
}