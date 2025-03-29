import "./bestSelling.css";
import Carousel from "./SlideSelling";
export default function BestSelling() {

    return <div className="w-full p-8 flex justify-center">
        <div className="w-[80%] bestSelling-content p-8">
            <Carousel />
        </div>
    </div>
}