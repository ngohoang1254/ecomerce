import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
interface IMenu {
    item: {
        label: string,
        value: string,
        element: IMenuItem[]
    }
}

interface IMenuItem {
    label: string,
    value: string,
}

export default function MenuComponent({ item }: IMenu) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="hover:text-blue-500 text-black cursor-pointer !border-none!">{item.label}</DropdownMenuTrigger>
            {item?.element?.length > 0 && (
                <DropdownMenuContent>
                    {item.element?.map((ele, index) => {
                        return (
                            <DropdownMenuItem key={index}>{ele.label}</DropdownMenuItem>
                        )
                    })}
                </DropdownMenuContent>
            )}
        </DropdownMenu>
    )
}