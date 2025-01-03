import { create } from "zustand";
import { client } from "@/sanity/lib/client";
import {addToCart, removeFromCart} from "@/lib/actions";
import {CART_QUERY} from "@/sanity/lib/queries";

interface CartState {
    quantities: Record<string, number>;
    getCart: (cartId: string) => Promise<void>;
    incrementQuantity: (productId: string, cartId: string) => Promise<void>;
    decrementQuantity: (productId: string, cartId: string) => Promise<void>;
}

export const useCartStore = create<CartState>((set,get) => ({
    quantities: {},

    getCart: async (cartId) => {
        try {
            const cart = await client.withConfig({useCdn:false}).fetch(CART_QUERY, { cartId });
            const quantities = cart?.cartItems.reduce((acc: Record<string, number>, item: any) => {
                acc[item.product._ref] = item.quantity;
                return acc;
            }, {});

            set({ quantities: quantities || {} });
        } catch (error) {
            console.error("Error fetching cart:", error);
        }
    },

    incrementQuantity: async (productId, cartId) => {
        const currentQuantities = { ...get().quantities };
        console.log("Before increment:", currentQuantities);
        set({ quantities: { ...currentQuantities, [productId]: (currentQuantities[productId] || 0) + 1 } }); // Optimistic update

        try {
            console.log("Incrementing quantity for product:", productId);
            await addToCart(productId, cartId); // Sync with backend
        } catch (error) {
            console.error("Error incrementing quantity:", error);
            set({ quantities: currentQuantities }); // Revert on failure
        }
    },

    decrementQuantity: async (productId, cartId) => {
        const currentQuantities = { ...get().quantities };
        const newQuantity = Math.max((currentQuantities[productId] || 0) - 1, 0);
        set({ quantities: { ...currentQuantities, [productId]: newQuantity } }); // Optimistic update

        try {
            await removeFromCart(productId, cartId); // Sync with backend
        } catch (error) {
            console.error("Error decrementing quantity:", error);
            set({ quantities: currentQuantities }); // Revert on failure
        }
    },
}));
