"use client"

import React, {useState} from 'react'
import {Button} from "@/components/ui/button";
import {Loader, Minus, Plus} from "lucide-react";
import useCartId from "@/hooks/useCartId";
import {useCartStore} from "@/stores/cartStore";

interface Props {
    children: React.ReactNode
    className: string
    _id: string;
    max: number | undefined;
}

const AddToCartButton = ({ _id, children, className, max }:Props) => {
    const cartId = useCartId();
    const [isActionLoading, setIsActionLoading] = useState(false)
    const quantity = useCartStore((state) => state.quantities[_id] || 0);
    const incrementQuantity = useCartStore((state) => state.incrementQuantity);
    const decrementQuantity = useCartStore((state) => state.decrementQuantity);

    const handleAddToCart = async () => {
        setIsActionLoading(true);
        await incrementQuantity(_id, cartId);
        setIsActionLoading(false);
    };

    const handleRemoveFromCart = async () => {
        setIsActionLoading(true);
        await decrementQuantity(_id, cartId);
        setIsActionLoading(false);
    };

    return (
        <>
            {quantity > 0 ? (
                <div className="flex items-center overflow-hidden w-fit mt-2 border-2 rounded-sm">
                    <button onClick={handleRemoveFromCart} className="flex border-r-2 disabled:bg-neutral-200  hover:bg-black hover:text-white items-center justify-center p-2">
                        <Minus className="size-5 xs:size-6" />
                    </button>
                    <p className="px-3 xs:px-8 text-sm md:text-lg">{quantity === max ? `max ${max}` : quantity}</p>
                    <button disabled={quantity === max} onClick={handleAddToCart} className="flex border-l-2 disabled:bg-neutral-200 disabled:hover:text-black  items-center hover:bg-black hover:text-white justify-center p-2">
                        <Plus className="size-5 xs:size-6"/>
                    </button>
                </div>
            ) : (
            <Button onClick={handleAddToCart} className={className} disabled={isActionLoading}>
                    {isActionLoading ?
                        <>
                            <Loader className="size-6 mr-1 animate-spin" />
                            <span>Loading...</span>
                        </>
                        : children}
            </Button>
            )}
        </>
    )
}
export default AddToCartButton
