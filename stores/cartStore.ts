"use client"

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
        try {
            await addToCart(productId, cartId); // Call your server function
            const updatedCart = await client.withConfig({useCdn:false}).fetch(CART_QUERY, { cartId });
            const updatedQuantities = updatedCart.cartItems.reduce((acc: Record<string, number>, item: any) => {
                acc[item.product._ref] = item.quantity;
                return acc;
            }, {});

            set({ quantities: updatedQuantities });
        } catch (error) {
            console.error("Error incrementing quantity:", error);
        }
    },

    decrementQuantity: async (productId, cartId) => {
        try {
            await removeFromCart(productId, cartId);
            const updatedCart = await client.withConfig({useCdn:false}).fetch(CART_QUERY, { cartId });
            const updatedQuantities = updatedCart.cartItems.reduce((acc: Record<string, number>, item: any) => {
                acc[item.product._ref] = item.quantity;
                return acc;
            }, {});

            set({ quantities: updatedQuantities });
        } catch (error) {
            console.error("Error decrementing quantity:", error);
        }
    },
}));
