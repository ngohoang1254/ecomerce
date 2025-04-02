import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";

export default function MenuMobile() {
    const item = [
        {
            label: "Xe Vespa",
            value: "vespa",
            element: [
                { label: "Vespa GTS", value: "vespa-gts", url: "/vespa" },
                { label: "Vespa GTV", value: "vespa-gtv", url: "/vespa" },
            ],
        },
        {
            label: "Xe PIAGGIO",
            value: "piaggio",
            element: [
                { label: "PIAGGIO Liberty", value: "piaggio-liberty", url: "/liberty" },
                { label: "PIAGGIO Meddy", value: "piaggio-meddy", url: "/liberty" },
            ],
        },
        {
            label: "Tin tức & khuyến mãi",
            value: "news-promotions",
            element: [
                { label: "Bảng giá vespa", value: "price-vespa", url: "/bang-gia-vespa" },
                { label: "Khuyến mãi", value: "promotions" },
                { label: "Tin tức", value: "news" },
            ],
        },
        {
            label: "Phụ tùng phụ kiện",
            value: "accessories",
            element: [
                { label: "Phụ kiện", value: "accessory", url: "/phu-kien-vespa" },
                { label: "Phụ tùng", value: "spare-parts", url: "/phu-tung-vespa" },
                { label: "Giao hàng toàn quốc", value: "nationwide-shipping", url: "/giao-hang-vespa" },
            ],
        },
        {
            label: "Dịch vụ",
            value: "services",
            element: [
                { label: "Chính sách bảo hành", value: "warranty-policy", url: "/chinh-sach-bao-hanh" },
                { label: "Trung tâm bảo hành bảo dưỡng", value: "service-center", url: "/bao-hanh-bao-duong-vespa" },
                { label: "Sơn xe Vespa", value: "vespa-painting", url: "/son-xe-vespa" },
            ],
        },
        {
            label: "Mua xe trả góp",
            value: "installment-purchase",
            element: [
                { label: "Trả góp HD", value: "installment-hd", url: "/tra-gop-voi-hd-saigon" },
                { label: "Trả góp Shinhan", value: "installment-shinhan", url: "/tra-gop-voi-shinhan" },
                { label: "Trả góp Payoo", value: "installment-payoo", url: "/tra-gop-voi-sacombank" },
            ],
        },
        {
            label: "Showroom",
            value: "showroom",
            url: "/showroom"
        },
        {
            label: "Liên hệ",
            value: "contact",
        },
    ];
    return (
        <div className="flex justify-between lg:hidden items-center">
            <Link href={"/"}>
                <Image src="/assets/logo.jpeg" width={150} height={50} alt="logo" />
            </Link>
            <Sheet>
                <SheetTrigger>
                    <IoMenu size={40} />
                </SheetTrigger>
                <SheetContent className="bg-white min-h-screen">
                    <SheetHeader>
                        <SheetTitle>Danh mục</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col px-4">
                        <Accordion type="single" collapsible>
                            {item.map((ele) => (
                                ele.element ? (
                                    <AccordionItem key={ele.value} value={ele.value} className="py-0">
                                        <AccordionTrigger className="hover:text-blue-500 cursor-pointer">
                                            {ele.label}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex flex-col p-2 gap-2">
                                                {ele.element.map((subItem, index) => (
                                                    <Link key={index} href={subItem.url || "#"}>
                                                        <div className="hover:text-blue-500 focus:text-[#0660bb] cursor-pointer">
                                                            {subItem.label}
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ) : (
                                    <Link key={ele.value} href={ele.url || "#"}>
                                        <div className="hover:text-blue-500 cursor-pointer py-2 text-sm font-semibold focus:text-[#0660bb]">{ele.label}</div>
                                    </Link>
                                )
                            ))}
                        </Accordion>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}