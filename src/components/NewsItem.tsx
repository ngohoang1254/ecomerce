import Image from "next/image";

export default function NewsItem(item: any) {
    return (
        <div className="flex flex-col gap-4 group cursor-pointer" key={item?.imageUrl} >
            <Image width={300} height={200} alt="" src={item?.imageUrl}
                className="w-full object-cover h-[400]"
            />
            <div className="flex flex-col gap-2">
                <div className="text-sm text-[#999]">
                    <div>{item?.date}</div>
                </div>
                <div className="font-bold text-black text-xl cursor-pointer group-hover:text-blue-500">{item?.title}</div>
            </div>
        </div>
    )
}