"use client"

import React, {useState} from 'react'
import {Button} from "@/components/ui/button";
import {Loader} from "lucide-react";

interface Props {
    children: React.ReactNode
    className: string
}

const AddToCartButton = ({ children, className }:Props) => {
    const [loading, setLoading] = useState(false)
    const handleAddToCart = async() => {
        setLoading(true);

    }

    return (
        <Button onClick={handleAddToCart} className={className}>
            {loading ?
                <>
                    <Loader className="size-6 mr-1 animate-spin" />
                    <span>Adding...</span>
                </>
                : children}
        </Button>
    )
}
export default AddToCartButton
