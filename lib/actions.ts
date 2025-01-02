"use server"

import { writeClient } from "@/sanity/lib/write-client";
import { client } from "@/sanity/lib/client";
import { CART_QUERY } from "@/sanity/lib/queries";

interface CartItem {
    _key: string;
    product: {
        _type: string;
        _ref: string;
    };
    quantity: number;
}

const updateCartItems = async (cartId: string, updateFn: (cartItems: CartItem[]) => CartItem[]) => {
    try {
        const existingCart = await client.withConfig({ useCdn: false }).fetch(CART_QUERY, { cartId });

        if (existingCart) {
            const updatedCartItems = updateFn(existingCart.cartItems);
            await writeClient.patch(cartId).set({ cartItems: updatedCartItems }).commit();
        } else {
            throw new Error("Cart not found");
        }
    } catch (error: any) {
        console.error("Error updating cart items:", error.message);
        throw new Error("Failed to update cart items.");
    }
};

export const addToCart = async (_id: string, cartId: string) => {
    const product: CartItem = {
        _key: `${_id}-${Date.now()}`,
        product: {
            _type: "reference",
            _ref: _id
        },
        quantity: 1,
    };

    await updateCartItems(cartId, (cartItems) => {
        const existingProduct = cartItems.find(item => item.product._ref === _id);
        if (existingProduct) {
            return cartItems.map(item =>
                item.product._ref === _id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            return [...cartItems, product];
        }
    });
};

export const removeFromCart = async (_id: string, cartId: string) => {
    await updateCartItems(cartId, (cartItems) => {
        const existingProduct = cartItems.find(item => item.product._ref === _id);
        if (existingProduct) {
            if (existingProduct.quantity > 1) {
                return cartItems.map(item =>
                    item.product._ref === _id ? { ...item, quantity: item.quantity - 1 } : item
                );
            } else {
                return cartItems.filter(item => item.product._ref !== _id);
            }
        } else {
            return cartItems;
        }
    });
};

export const linkCartToUser = async (cartId: string, userId: string) => {
    try {
        return await writeClient.patch(cartId).set({ userId }).commit();
    } catch (error: any) {
        console.error("Error linking cart to user:", error.message);
        throw new Error("Failed to link cart to user.");
    }
};