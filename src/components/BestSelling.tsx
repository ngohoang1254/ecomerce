import "./bestSelling.css";
import Carousel from "./SlideSelling";
export default function BestSelling() {
    const item = [
        {
            imageUrl: "/public/assets/liberty.webp",
            title: "Liberty Z Urban Sky",
            price: "59.300.000₫"
        },
        {
            imageUrl: "/public/assets/vespa1.webp",
            title: "Vespa Sprint Carbon 125 - Black",
            price: "84.600.000₫"
        },
        {
            imageUrl: "/public/assets/vespa2.webp",
            title: "Vespa Sprint S 150 White",
            price: "97.800.000₫"
        },
        {
            imageUrl: "/public/assets/vespa1.webp",
            title: "Vespa Sprint ABS 125 Rosso Scarlatto",
            price: "84.600.000₫"
        }
    ]
    return <div className="container mx-auto px-4 py-4 flex justify-center">
        <div className="container bestSelling-content p-8">
            <Carousel />
        </div>
    </div>
}