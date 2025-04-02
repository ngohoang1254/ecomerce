"use client"
import BestSelling from "@/components/BestSelling";
import Hero from "@/components/Hero";
import ProductContent from "./component/ProductContent";
import { Button } from "@/components/ui/button";
import { FaFilter } from "react-icons/fa";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import ProductFilter from "./component/ProductFilter";
export default function Product() {
    return (
        <div className="w-full bg-white relative">
            <Hero />
            <BestSelling />
            <ProductContent />
            <Sheet>
                <SheetTrigger>
                    <Button className="absolute top-[20%] right-0 bg-[#0660bb] height-[40px]"
                    >
                        <FaFilter size={20} className="text-[#FFFFFF]" />
                    </Button>
                </SheetTrigger>
                <SheetContent className="bg-white min-h-screen overflow-y-auto">
                    <SheetHeader>
                        <SheetTitle>Danh mục</SheetTitle>
                    </SheetHeader>
                    <div className="px-4">
                        <ProductFilter />
                    </div>
                </SheetContent>
            </Sheet>
        </div >
    )
}