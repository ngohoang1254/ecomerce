import { itemNews } from "@/const";
import Image from "next/image";

export default function NewsList() {
    return (
        <div className="container mx-auto">
            <div className="w-full p-2 flex flex-col gap-4">
                <div className="text-2xl font-bold text-white bg-blue-500 rounded-tl-sm rounded-tr-sm px-4 py-2">
                    TIN TỨC
                </div>
                <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {itemNews.map((item, index) => {
                        return (
                            <div className="flex flex-col gap-4 group cursor-pointer" key={item.imageUrl} >
                                <Image width={300} height={200} alt="" src={item.imageUrl}
                                    className="w-full"
                                />
                                <div className="flex flex-col gap-2">
                                    <div className="text-sm text-[#999]">
                                        <div>{item.date}</div>
                                    </div>
                                    <div className="font-bold text-black text-xl cursor-pointer group-hover:text-blue-500">{item.title}</div>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    )
}