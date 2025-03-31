
"use client"
import Image from "next/image"
import MenuComponent from "./Menu"
import MenuMobile from "./MenuMobile"
export default function Header() {
    const item = [
        {
            label: "Xe Vespa",
            value: "#",
            element: [
                {
                    label: "Vespa GTS",
                    value: "#",
                },
                {
                    label: "Vespa GTV",
                    value: "#",
                }
            ]
        },
        {
            label: "Xe PIAGGIO",
            value: "#",
            element: [
                {
                    label: "PIAGGIO Liberty",
                    value: "#",
                },
                {
                    label: "PIAGGIO Meddy",
                    value: "#",
                }
            ]
        },
        {
            label: "Tin tức & khuyến mãi",
            value: "#",
            element: [
                {
                    label: "Bảng giá vespa",
                    value: "#",
                },
                {
                    label: "Khuyến mãi",
                    value: "#",
                },
                {
                    label: "Tin tức",
                    value: "#",
                }
            ]
        },
        {
            label: "Phụ tùng phụ kiện",
            value: "#",
            element: [
                {
                    label: "Phụ kiện",
                    value: "#",
                },
                {
                    label: "Phụ tùng",
                    value: "#",
                },
                {
                    label: "Giao hàng toàn quốc",
                    value: "#",
                }
            ]
        },
        {
            label: "Dịch vụ",
            value: "#",
            element: [
                {
                    label: "Chính sách bảo hành",
                    value: "#",
                },
                {
                    label: "Trung tâm bảo hành bảo dưỡng",
                    value: "#",
                },
                {
                    label: "Sơn xe Vespa",
                    value: "#",
                }
            ]
        },
        {
            label: "Mua xe trả góp",
            value: "#",
            element: [
                {
                    label: "Trả góp HD",
                    value: "#",
                },
                {
                    label: "Trả góp Shinhan",
                    value: "#",
                },
                {
                    label: "Trả góp Payoo",
                    value: "#",
                }
            ]
        },
        {
            label: "Showroom",
            value: "#"
        },
        {
            label: "Liên hệ",
            value: "#"
        }
    ]
    return (
        <div className="p-4 w-full h-full bg-white sticky top-0 z-50">
            <div className="text-black font-bold cursor-pointer flex-wrap hidden lg:flex justify-center">
                <Image src="/assets/logo.jpeg" width={200} height={100} alt="logo" />
                {item.map((ele: any, index) => {
                    return <MenuComponent item={ele} key={index} />
                })}
            </div>
            <MenuMobile />
        </div>
    )
}