"use client";

import React, { useEffect, useState } from "react";
import useCartId from "@/hooks/useCartId";
import { client } from "@/sanity/lib/client";
import { CART_LIST_BY_USERID_QUERY } from "@/sanity/lib/queries";
import CartTable from "@/components/CartTable";

const CartContainer = () => {
    const cartId = useCartId(); // Hook to get cartId
    const [cart, setCart] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Default to false
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!cartId) return;

        const fetchItems = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const data = await client
                    .withConfig({ useCdn: false })
                    .fetch(CART_LIST_BY_USERID_QUERY, { cartId });
                setCart(data || []); // Set fetched cart data
            } catch (err) {
                console.error("Error fetching cart:", err);
                setError("Failed to load cart. Please try again.");
            } finally {
                setIsLoading(false); // End loading state
            }
        };

        fetchItems();
    }, [cartId]);

    return (
        <div>
            {error && (
                <div className="text-red-500 mb-4">
                    {error}
                </div>
            )}
            <CartTable isLoading={isLoading} cart={cart} onError={error} />
        </div>
    );
};

export default CartContainer;
