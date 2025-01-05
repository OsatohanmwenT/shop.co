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
    const { quantities, incrementQuantity, decrementQuantity } = useCartStore();
    const quantity = quantities[_id] || 0;

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
            <p className="font-work-sans">{quantity} out of {max} left</p>
            {quantity > 0 ? (
                <div className="flex items-center overflow-hidden w-fit mt-2 border-2 rounded-sm">
                    <button onClick={handleRemoveFromCart} className="flex border-r-2 disabled:bg-neutral-200  hover:bg-black hover:text-white items-center justify-center p-2">
                        <Minus className="size-6" />
                    </button>
                    <p className="px-8 text-lg">{quantity === max ? `max ${max}` : quantity}</p>
                    <button disabled={quantity === max} onClick={handleAddToCart} className="flex border-l-2 disabled:bg-neutral-200 disabled:hover:text-black  items-center hover:bg-black hover:text-white justify-center p-2">
                        <Plus className="size-6"/>
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
