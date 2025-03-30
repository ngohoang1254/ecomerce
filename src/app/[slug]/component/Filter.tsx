import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox"

export default function Filter() {
    return (
        <div className="w-full border-[1px] flex flex-col">
            <div className="flex w-full">
                <Image src="/assets/icon_vespa2.png" width={50} height={50} alt="" />
                <div className="bg-blue-500 cursor-pointer flex-1 flex items-center font-bold text-xl p-2 text-white">Bộ lọc</div>
            </div>
            <div className="text-lg font-bold text-black px-2 pt-4">Bảo hành</div>
            <div className="flex flex-col p-4 gap-4">
                <div className="flex gap-2">
                    <Checkbox id="terms" />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        24 tháng
                    </label>
                </div>
                <div className="flex gap-2">
                    <Checkbox id="terms" />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        36 tháng
                    </label>
                </div>
            </div>
        </div>
    )
}