import React from 'react'
import {Product} from "@/sanity/types";
import {discountPrice, formatPrice} from "@/lib/utils";
import Link from "next/link";
import {BiCart} from "react-icons/bi";
import Rating from "@/components/Rating";
import AddToCartButton from "@/components/Products/AddToCartButton";

const ProductCard = ({name, price, images, _id, discount, rating, stock}: Product) => {
    return (
        <div className="flex border-[1px] transition-all duration-300 rounded-md overflow-clip hover:shadow-xl bg-neutral-100 sm:flex-col w-full xl:max-w-[350px] mx-auto items-center xs:justify-between xs:gap-6 sm:gap-1">
            <div className="group sm:w-full flex items-center justify-center">
                <Link href={{
                    pathname: `/products/${_id}`,
                    hash: `#${name}`
                }} className="max-sm:w-[120px] px-2 sm:pt-3 min-w-[90px]">
                    <img className="sm:h-[150px] group-hover:scale-110 transition-all duration-700" src={images ? images[0]?.asset?.url : ""} alt={name}/>
                </Link>
            </div>
            <div className="flex-1 flex flex-col bg-white p-3 justify-between gap-2 sm:mt-3">
                    {discount ? (
                            <div className="flex sm:order-2 gap-2">
                                <p className="self-start text-green-700 font-bold font-work-sans text-sm text-nowrap xs:text-lg text-end"><span className="font-medium">Now</span> {discountPrice(price, discount)}</p>
                                <p className="text-gray-500 text-xs line-through">{formatPrice(price)}</p>
                            </div>
                        )
                        : (
                            <p className="self-start max-sm:text-sm text-green-700 sm:order-2 font-bold font-work-sans text-xl text-end"><span className="font-medium">Now</span> {formatPrice(price)}</p>
                        )}
                <Link href={{
                    pathname: `/products/${_id}`,
                    hash: `#${name}`
                }} className="product-card_heading hover:text-yellow-600 sm:order-3">{name}</Link>
                <div className="justify-self-end flex gap-2 sm:order-3 items-center">
                    <Rating rating={rating} />
                </div>
                <AddToCartButton max={stock} _id={_id} className="text-white font-work-sans sm:order-1 font-semibold sm:w-fit bg-blue-500 rounded-md">
                    <BiCart className="size-5" />Add to cart
                </AddToCartButton>
            </div>
        </div>
    )
}
export default ProductCard
