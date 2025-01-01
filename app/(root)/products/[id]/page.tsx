import React from 'react'
import {client} from "@/sanity/lib/client";
import {PRODUCT_BY_ID_QUERY} from "@/sanity/lib/queries";
import {Separator} from "@/components/ui/separator";
import {Product} from "@/sanity/types";
import {discountPrice, formatPrice} from "@/lib/utils";
import type {Metadata} from 'next'
import ExpandableText from "@/components/ExpandableText";
import Rating from "@/components/Rating";
import Carousel from "@/components/Carousel";
import {Button} from "@/components/ui/button";
import AddToCartButton from "@/components/AddToCartButton";
import {BiCart} from "react-icons/bi";

interface Props {
    params: Promise<{id: string}>
}

export async function generateMetadata ({params}: Props): Promise<Metadata> {
    const id = (await params).id;
    const product: Product = await client.fetch(PRODUCT_BY_ID_QUERY, {id});

    return {
        title: `${product.name} - Shop.CO`,
        description: product?.description?.substring(0, 150),
        openGraph: {
            title: `${product.name} - Shop.CO`,
            description: product.description,
            images: [
                {
                    url: product.images && product?.images[0]?.asset?.url,
                    alt: product.name,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${product.name} - Shop.CO`,
            description: product.description,
            images: product.images && product?.images[0]?.asset?.url,
        },
    };
}


const Page = async ({params}: Props) => {
    const  id = (await params).id;
    const product: Product = await client.fetch(PRODUCT_BY_ID_QUERY, {id});

    return (
        <main className="min-h-screen w-full font-work-sans border-t-[1px] p-5 flex">
            <section className="flex max-lg:items-center justify-between w-full max-lg:flex-col">
                <Carousel images={product.images} />
                <div className="flex-1 order-3 max-w-[600px]">
                    <h1 className="text-2xl font-bold">{product.name}</h1>
                    <div className="flex mt-4 items-center">
                        {product.discount ? (
                                <div className="flex gap-2">
                                    <p className="self-start text-green-700 font-bold font-work-sans text-xl text-nowrap xs:text-2xl text-end"><span className="font-medium">Now</span> {discountPrice(product.price, product.discount)}</p>
                                    <p className="text-gray-500 text-sm line-through">{formatPrice(product.price)}</p>
                                </div>
                            )
                            : (
                                <p className="self-start max-sm:text-xl text-green-700 font-bold font-work-sans text-2xl text-end"><span className="font-medium">Now</span> {formatPrice(product.price)}</p>
                            )}
                        {product.discount &&
                            <div className="p-3 py-1 ml-4 rounded-3xl bg-red-200">
                                <p className="text-red-700">-{product.discount}%</p>
                            </div>
                        }
                    </div>
                    <div className="flex items-center mt-2 gap-1">
                        <Rating rating={product.rating} />
                    </div>
                    <AddToCartButton className="rounded-sm text-black hover:text-white mt-4 mx-auto bg-yellow-300">
                        <BiCart className="size-6 fill-black text-black" />Add to Cart
                    </AddToCartButton>
                    <Separator className="w-full my-2" />
                    <ExpandableText description={product.description} />
                </div>
            </section>
            <section></section>
        </main>
    )
}
export default Page
