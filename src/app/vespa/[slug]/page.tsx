import ProductList from "@/app/[slug]/component/ProductContent";
import BestSelling from "@/components/BestSelling";
import Hero from "@/components/Hero";

export default function Vespa() {
    return <div className="w-full bg-white">
        <Hero />
        <BestSelling />
        <ProductList />
    </div>
}