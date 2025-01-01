import React from 'react'
import {Product} from "@/sanity/types";
import {discountPrice, formatPrice} from "@/lib/utils";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {BiCart} from "react-icons/bi";
import Rating from "@/components/Rating";
import AddToCartButton from "@/components/AddToCartButton";

const ProductCard = ({name, price, images, _id, discount, rating}: Product) => {
    return (
        <div className="flex sm:flex-col xl:max-w-[350px] mx-auto items-center justify-between gap-6 sm:gap-1">
            <Link href={{
                pathname: `/products/${_id}`,
                hash: `#${name}`
            }} className="max-sm:w-[120px] min-w-[90px]">
                <img className="sm:h-[150px]" src={images ? images[0]?.asset?.url : ""} alt={name}/>
            </Link>
            <div className="flex flex-col justify-between gap-2 sm:mt-3 max-xs:max-w-[150px]">
                    {discount ? (
                            <div className="flex sm:order-2 gap-2">
                                <p className="self-start text-green-700 font-bold font-work-sans text-sm text-nowrap xs:text-xl text-end"><span className="font-medium">Now</span> {discountPrice(price, discount)}</p>
                                <p className="text-gray-500 text-xs line-through">{formatPrice(price)}</p>
                            </div>
                        )
                        : (
                            <p className="self-start max-sm:text-sm text-green-700 sm:order-2 font-bold font-work-sans text-xl text-end"><span className="font-medium">Now</span> {formatPrice(price)}</p>
                        )}
                <Link href={{
                    pathname: `/products/${_id}`,
                    hash: `#${name}`
                }} className="product-card_heading hover:text-blue-600 sm:order-3">{name}</Link>
                <div className="justify-self-end flex gap-2 sm:order-3 items-center">
                    <Rating rating={rating} />
                </div>
                <AddToCartButton className="text-white font-work-sans sm:order-1 font-semibold sm:w-fit bg-blue-500 rounded-3xl">
                    <BiCart className="size-5" />Add to cart
                </AddToCartButton>
            </div>
        </div>
    )
}
export default ProductCard
