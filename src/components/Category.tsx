import Image from "next/image";
import { Button } from "./ui/button";

interface ICategory {
    imageUrl: string,
    url: string,
    button: string,
}

export default function Category({ imageUrl, url, button }: ICategory) {
    return (
        <div className="flex flex-col w-full md:w-[200px]  gap-4">
            <Image src={imageUrl}
                width={200}
                height={200} alt=""
                className="w-full h-auto md:w-[200px] md:h-[200px]"
            />
            <Button className="bg-[#f5f5f5] text-base text-[#555] font-bold p-4 hover:text-white cursor-pointer">
                {button}
            </Button>
        </div>
    )
}