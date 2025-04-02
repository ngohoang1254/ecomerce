import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ButtonEye() {
    return (
        <Button variant="default" className="bg-[#0660bb] cursor-pointer px-2">
            <Eye size={20} />
        </Button>
    )
}