"use client"
import React, { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Grid2X2, List } from "lucide-react";
import { useViewStore } from '@/store/useProductView';

const SortingViewInterface = () => {
    const { viewMode, setViewMode } = useViewStore();
    return (
        <div className="flex items-center justify-between w-full p-2 border-default rounded-md bg-white">
            <div className="flex gap-1">
                <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="icon"
                    className={`h-10 w-10 ${viewMode === "grid" ? "bg-[#0660bb] hover:bg-[#0660bb]" : ""}`}
                    onClick={() => setViewMode("grid")}
                >
                    <Grid2X2 className="h-5 w-5" />
                </Button>
                <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="icon"
                    className={`h-10 w-10 ${viewMode === "list" ? "bg-[#0660bb] hover:bg-[#0660bb]" : ""}`}
                    onClick={() => setViewMode("list")}
                >
                    <List className="h-5 w-5" />
                </Button>
            </div>

            <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Sắp xếp:</span>
                <Select defaultValue="price-asc">
                    <SelectTrigger className="w-40 h-10 border-default">
                        <SelectValue placeholder="Sắp xếp" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        {/* <SelectItem value="default">Sắp xếp</SelectItem> */}
                        <SelectItem value="price-asc">Giá tăng dần</SelectItem>
                        <SelectItem value="price-desc">Giá giảm dần</SelectItem>
                        <SelectItem value="newest">Mới nhất</SelectItem>
                        <SelectItem value="popular">Phổ biến nhất</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default SortingViewInterface;