import { create } from "zustand";

type ViewState = {
    viewMode: "grid" | "list";
    setViewMode: (mode: "grid" | "list") => void;
};

export const useViewStore = create<ViewState>((set) => ({
    viewMode: "grid",
    setViewMode: (mode) => set({ viewMode: mode }),
}));