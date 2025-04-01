"use client"
import { ISwiper } from "@/type"
import SwiperHome from "../Swiper"
import Category from "../Category";
import Product from "../Product";
import NewsItem from "../NewsItem";
import PartnerItem from "../PartnerItems";

interface ISlider extends Omit<ISwiper, "component"> {
    title: string
    componentString: string
    hideTitle?: boolean
}

const componentMap = {
    Category,
    Product,
    NewsItem,
    PartnerItem,
};

export default function Slider({ title, componentString, hideTitle = false, ...props }: ISlider) {
    const Component = componentMap[componentString as keyof typeof componentMap];
    return (
        <div className="flex flex-col container mx-auto justify-center gap-8 p-4 bg-white mt-4">
            {!hideTitle && <div className="text-2xl font-bold">{title}</div>}
            <SwiperHome
                {...props}
                component={Component}
            />
        </div>
    )
}