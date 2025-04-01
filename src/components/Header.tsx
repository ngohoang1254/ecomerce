
"use client"
import Image from "next/image"
import MenuComponent from "./Menu"
import MenuMobile from "./MenuMobile"
import Link from "next/link";
export default function Header() {
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
        <div className="p-4 w-full h-full bg-white sticky top-0 z-50">
            <div className="text-black font-bold cursor-pointer flex-wrap hidden lg:flex justify-center">
                <Link href="/" passHref>
                    <Image src="/assets/logo.jpeg" width={200} height={100} alt="logo" />
                </Link>
                {item.map((ele: any, index) => {
                    return <MenuComponent item={ele} key={index} />
                })}
            </div>
            <MenuMobile />
        </div >
    )
}