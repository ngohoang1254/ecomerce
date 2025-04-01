import { ElementType } from "react";

export interface ISwiper {
    component: ElementType;
    slidesPerView: number;
    autoplay: {
        delay: number;
        disableOnInteraction: boolean
    } | boolean
    breakpoints: {
        300: { slidesPerView: number },
        640: { slidesPerView: number },
        768: { slidesPerView: number },
        1024: { slidesPerView: number },
        1440: { slidesPerView: number },
    }

    items: any[];

    moreSection?: {
        imageUrl: string,
    }
}

export interface IProduct {
    name: string,
    price: string,
    imageUrl: string
}