"use client"
import { ISwiper } from "@/type"
import SwiperHome from "../Swiper"
import Category from "../Category";
import Product from "../Product";

interface ISlider extends Omit<ISwiper, "component"> {
    title: string
    componentString: string
}

const componentMap = {
    Category,
    Product,
};

export default function Slider({ title, componentString, ...props }: ISlider) {
    const Component = componentMap[componentString as keyof typeof componentMap];
    return (
        <div className="flex flex-col container mx-auto justify-center gap-8 p-4 bg-white mt-4">
            <div className="text-2xl font-bold">{title}</div>
            <SwiperHome
                {...props}
                component={Component}
            />
        </div>
    )
}