"use client"
import { useState } from "react";
import "./moreContent.css";
import { Button } from "./ui/button";

function ReadMoreComponent({ children }: any) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="readmore-container">
            <div className={`readmore-content ${isExpanded ? "expanded" : ""}`}>
                {children}
            </div>

            {!isExpanded && <div className="fade-overlay"></div>}
            {!isExpanded &&
                <Button className="readmore-button bg-blue-700" onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? "Thu gọn ▲" : "Xem thêm ▼"}
                </Button>
            }
        </div>
    );
}

export default ReadMoreComponent;
