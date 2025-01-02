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
        <Link className="mr-2 relative max-xs:hidden" href="/">
            {totalItems > 0 &&
                <span className="text-white flex items-center justify-center absolute -top-2 overflow-hidden p-1 -right-2 hover:bg-blue-500 bg-black rounded-full w-6 h-6">
                    <span className="bg-inherit text-sm">{totalItems}</span>
                </span>
            }
            <ShoppingCartIcon className="size-8" />
        </Link>
    )
}
export default Cart
