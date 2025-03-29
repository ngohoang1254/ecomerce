import MenuComponent from "./Menu"

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
        <div className="p-8 w-full h-full bg-white">
            <div className="flex justify-center gap-4 text-black font-bold cursor-pointer">
                {item.map((ele: any, index) => {
                    return <MenuComponent item={ele} key={index} />
                })}
            </div>
        </div>
    )
}