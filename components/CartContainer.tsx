"use client"

import React, {useEffect, useState} from 'react'
import useCartId from "@/hooks/useCartId";
import {client} from "@/sanity/lib/client";
import {CART_LIST_BY_USERID_QUERY} from "@/sanity/lib/queries";
import CartTable from "@/components/CartTable";

const CartContainer = () => {
    const cartId = useCartId()
    const [cart, setCart] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!cartId) return;

        setIsLoading(true)
        const fetchItems = async () => {
            try {
                const data = await client.withConfig({ useCdn: false }).fetch(CART_LIST_BY_USERID_QUERY, { cartId })
                setCart(data)
            } catch (error) {
                console.error("error when fetching cart:", error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchItems()
    }, [cartId]);

    return (
        <>
            <CartTable isLoading={isLoading} cart={cart} />
        </>
    )
}
export default CartContainer
