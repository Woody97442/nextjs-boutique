import { Category } from "@prisma/client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface OrderState {
    categories: { category: Category; quantity: number }[];
    addCategory: (category: Category, quantity: number) => void;
    removeCategory: (category: Category) => void;
    clear: () => void;
}

export const useOrderStore = create(
    persist<OrderState>(
        (set, get) => ({
            categories: [],
            addCategory(category, quantity) {
                const categories = get().categories;
                const newCategory = { category, quantity };
                set({ categories: [...categories, newCategory] });
            },
            removeCategory(category) {
                const categories = get().categories;
                const newCategories = categories.filter(
                    (c) => c.category.id !== category.id
                );
                set({ categories: newCategories });
            },
            clear() {
                set({ categories: [] });
            },
        }),
        {
            name: "order",
        }
    )
);