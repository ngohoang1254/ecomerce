import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
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
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="hover:text-blue-500 text-black cursor-pointer !border-none! text-base">{item.label}</NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-[200px]">
                        {item.element?.map((ele, index) => {
                            return (
                                <NavigationMenuLink key={index}>{ele.label}</NavigationMenuLink>
                            )
                        })}
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu >
    )
}