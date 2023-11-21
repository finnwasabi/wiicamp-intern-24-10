import { create } from "zustand";
import { persist } from "zustand/middleware";

const useWishStore = create(
  persist(
    (set) => ({
      items: [],
      addToWish: (product) =>
        set((state) => ({ items: [...state.items, product] })),
      removeFromWish: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.productId !== productId),
        })),
      removeFromWishAll: () => set({ items: [] }),
    }),
    { name: "wish-storage" },
  ),
);

export default useWishStore;
