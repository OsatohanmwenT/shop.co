"use server"

import {writeClient} from "@/sanity/lib/write-client";
import {client} from "@/sanity/lib/client";
import {CART_QUERY} from "@/sanity/lib/queries";

export const addToCart = async (_id: string, cartId: string) => {
    try {
        const product = {
            _key: `${_id}-${Date.now()}`,
        product: {
            _type: "reference",
                _ref: _id
        },
        quantity: 1,
    }

        const existingCart = await client.fetch(CART_QUERY, { cartId })

        if(existingCart) {
            const existingProduct = existingCart.cartItems.find(
                (item: any) => item.product._ref === _id
            );

            if (existingProduct) {
                // Increment the quantity if the product is already in the cart
                await writeClient
                    .patch(cartId)
                    .set({
                        cartItems: existingCart.cartItems.map((item: any) =>
                            item.product._ref === _id
                                ? {...item, quantity: item.quantity + 1}
                                : item
                        ),
                    })
                    .commit();
            } else {
                // Add the new product to the cart
                await writeClient
                    .patch(cartId)
                    .setIfMissing({ cartItems: [] })
                    .append("cartItems", [product])
                    .commit();
            }
        } else {
            // Create a new cart if none exists
            await writeClient.create({
                _id: cartId, // Use the generated cartId as the document ID
                _type: "cart",
                cartItems: [product],
            });
        }

    } catch (error: any) {
        console.error("Error adding to cart:", error.message);
        throw new Error("Failed to add product to cart.");
    }
}

export const removeFromCart = async (_id: string, cartId: string) => {
    try {
        const existingCart = await client.fetch(CART_QUERY, { cartId })

        if(existingCart) {
            const existingProduct = existingCart.cartItems.find(
                (item: any) => item.product._ref === _id
            );

            if (existingProduct) {
                if (existingProduct.quantity > 1) {
                    // Decrement the quantity if the product is already in the cart
                    await writeClient
                        .patch(cartId)
                        .set({
                            cartItems: existingCart.cartItems.map((item: any) =>
                                item.product._ref === _id
                                    ? {...item, quantity: item.quantity - 1}
                                    : item
                            ),
                        })
                        .commit();
                } else {
                    // Remove the product from the cart if the quantity is 1
                    await writeClient
                        .patch(cartId)
                        .set({
                            cartItems: existingCart.cartItems.filter(
                                (item: any) => item.product._ref !== _id
                            ),
                        })
                        .commit();
                }
            }
        }
    } catch (error) {
        console.error(error);
        throw new Error("Failed to remove product from cart.");
    }
}

export const linkCartToUser = async (cartId: string, userId: string) => {
    try {
        const updatedCart = await writeClient.patch(cartId)
            .set({ userId })
            .commit();

        return updatedCart;
    } catch (error: any) {
        console.error("Error linking cart to user:", error.message);
        throw new Error("Failed to link cart to user.");
    }
};