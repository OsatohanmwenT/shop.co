import React from 'react'
import {client} from "@/sanity/lib/client";
import {PRODUCT_BY_ID_QUERY} from "@/sanity/lib/queries";
import {Separator} from "@/components/ui/separator";
import {Product} from "@/sanity/types";
import {discountPrice, formatPrice} from "@/lib/utils";
import type {Metadata} from 'next'
import ExpandableText from "@/components/ExpandableText";
import Rating from "@/components/Rating";

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
            <section className="flex w-full max-lg:flex-col">
                <div className="flex max-lg:order-2 w-[200px] lg:flex-col max-lg:items-center justify-center gap-4">
                    <div className="rounded-xl overflow-hidden hover:border-blue-500 border-2">
                        <picture className="w-full h-full">
                            <img className="object-cover object-center " src="" alt=""/>
                        </picture>
                    </div>
                </div>
                <div className="rounded-xl w-[500px] max-lg:order-1 overflow-hidden">
                    <picture className="h-full w-full">
                        <img className="object-center" src="" alt=""/>
                    </picture>
                </div>
                <div className="flex-1">
                    <h1 className="text-2xl font-bold">{product.name}</h1>
                    <div className="flex mt-4 items-center">
                        {product.discount ? (
                                <div className="flex sm:order-2 gap-2">
                                    <p className="self-start text-green-700 font-bold font-work-sans text-xl text-nowrap xs:text-2xl text-end"><span className="font-medium">Now</span> {discountPrice(product.price, product.discount)}</p>
                                    <p className="text-gray-500 text-sm line-through">{formatPrice(product.price)}</p>
                                </div>
                            )
                            : (
                                <p className="self-start max-sm:text-xl text-green-700 sm:order-2 font-bold font-work-sans text-2xl text-end"><span className="font-medium">Now</span> {formatPrice(product.price)}</p>
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
                    <Separator className="w-full my-2" />
                    <ExpandableText description={product.description} />
                </div>
            </section>
        </main>
    )
}
export default Page
