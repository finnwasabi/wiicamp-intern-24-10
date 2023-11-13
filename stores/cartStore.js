import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      items: [],
      addToCart: (product) =>
        set((state) => ({ items: [...state.items, product] })),
      removeFromCart: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.productId !== productId),
        })),
      increaseQuantity: (productId) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.productId === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        })),
      decreaseQuantity: (productId) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.productId === productId && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          ),
        })),
      updateQuantity: (productId, newQuantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.productId === productId
              ? { ...item, quantity: newQuantity }
              : item,
          ),
        })),
    }),
    { name: "cart-storage" },
  ),
);

export default useCartStore;
