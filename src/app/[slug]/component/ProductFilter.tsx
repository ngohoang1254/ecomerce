import Filter from "./Filter";
import HotProduct from "./HotProduct";
import ProductList from "./ProductList";

export default function ProductFilter() {
    return (
        <div className="flex w-full flex-col gap-8">
            <ProductList />
            <Filter />
            <HotProduct />
        </div>
    )
}