import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ButtonCart() {
    return (
        <Button variant="default" className="bg-[#0660bb] hover:bg-green-700 cursor-pointer px-2">
            <ShoppingCart size={20} />
        </Button>
    )
}