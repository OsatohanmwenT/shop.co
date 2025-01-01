import React from 'react'
import {Button} from "@/components/ui/button";

interface Props {
    children: React.ReactNode
    className: string
}

const AddToCartButton = ({ children, className }:Props) => {
    return (
        <Button className={className}>
            {children}
        </Button>
    )
}
export default AddToCartButton
