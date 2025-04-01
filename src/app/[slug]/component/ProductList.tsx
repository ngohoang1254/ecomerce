import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"

export default function ProductList() {
    return (
        <div className="w-full border-[1px] border-[#818589] border-solid flex flex-col border-">
            <div className="flex w-full">
                <Image src="/assets/icon_vespa2.png" width={50} height={50} alt="" />
                <div className="bg-[#0660bb] cursor-pointer flex-1 flex items-center font-bold text-xl p-2 text-white">Sản phẩm</div>
            </div>
            <div className="flex flex-col p-4">
                <Accordion type="single" collapsible >
                    <AccordionItem value="item-1" className="py-0">
                        <AccordionTrigger className="hover:text-blue-500 cursor-pointer">Xe Vespa</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col p-2 gap-2">
                                <div className="flex flex-col">
                                    <div className="hover:text-blue-500 cursor-pointer">Vespa GTS</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="hover:text-blue-500 cursor-pointer">Vespa GTV</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="hover:text-blue-500 cursor-pointer">Vespa Primavera</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="hover:text-blue-500 cursor-pointer">Vespa Sprint</div>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                {/* */}
                <Accordion type="single" collapsible >
                    <AccordionItem value="item-1" className="py-0">
                        <AccordionTrigger className="hover:text-blue-500">Xe Piaggio</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col p-2 gap-2">
                                <div className="flex flex-col">
                                    <div className="hover:text-blue-500 cursor-pointer">Piaggio Liberty</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="hover:text-blue-500 cursor-pointer">Piaggio Medley</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="hover:text-blue-500 cursor-pointer">Piaggio MP3</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="hover:text-blue-500 cursor-pointer">Piaggio Beverly</div>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible >
                    <AccordionItem value="item-1" className="py-0">
                        <AccordionTrigger className="hover:text-blue-500 cursor-pointer">Phụ tùng phụ kiện</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col p-2 gap-2">
                                <div className="flex flex-col">
                                    <div className="hover:text-blue-500 cursor-pointer">Phụ kiện</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="hover:text-blue-500 cursor-pointer">Phụ tùng</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="hover:text-blue-500 cursor-pointer">Giao hàng toàn quốc</div>
                                </div>

                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}