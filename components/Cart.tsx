"use client"

import React from 'react'
import {ShoppingCartIcon} from "lucide-react";
import Link from "next/link";
import {useCartStore} from "@/stores/cartStore";

const Cart = () => {
    const { quantities, getCart } = useCartStore();
    const totalItems = Object.values(quantities).reduce((acc, quantity) => acc + quantity, 0);

    React.useEffect(() => {
        const cartId = localStorage.getItem("cartId");
        if (cartId) {
            getCart(cartId);
        }
    }, [getCart]);

    return (
        <Link className="mr-2 relative" href="/cart">
            {totalItems > 0 &&
                <span className="text-white flex items-center justify-center absolute -top-3 overflow-hidden p-1 -right-3 bg-blue-500 rounded-full w-6 h-6">
                    <span className="bg-inherit text-xs">{totalItems}</span>
                </span>
            }
            <ShoppingCartIcon className="size-6" />
        </Link>
    )
}
export default Cart
