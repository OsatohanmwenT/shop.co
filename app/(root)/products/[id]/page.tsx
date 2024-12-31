import React from 'react'
import {client} from "@/sanity/lib/client";
import {PRODUCT_BY_ID_QUERY} from "@/sanity/lib/queries";
import {Separator} from "@/components/ui/separator";
import {Product} from "@/sanity/types";
import {formatPrice} from "@/lib/utils";
import {Star, StarHalf} from "lucide-react";
import type {Metadata} from 'next'

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
                    url: product?.images[0]?.asset?.url,
                    alt: product.name,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${product.name} - Shop.CO`,
            description: product.description,
            images: product?.images[0]?.asset?.url,
        },
    };
}


const Page = async ({params}: Props) => {
    const  id = (await params).id;
    const product: Product = await client.fetch(PRODUCT_BY_ID_QUERY, {id});

    const hasHalfStar = (product.rating || 0) % 1 !== 0;

    return (
        <main className="min-h-screen w-full font-work-sans border-t-[1px] p-5 flex">
            <section className="flex w-full max-sm:flex-col">
                <div className="flex max-sm:order-2 w-[200px] sm:flex-col max-sm:items-center justify-center gap-4">
                    <div className="rounded-xl overflow-hidden hover:border-blue-500 border-2">
                        <picture className="w-full h-full">
                            <img className="object-cover object-center " src="" alt=""/>
                        </picture>
                    </div>
                </div>
                <div className="rounded-xl w-[500px] max-sm:order-1 overflow-hidden">
                    <picture className="h-full w-full">
                        <img className="object-center" src="" alt=""/>
                    </picture>
                </div>
                <div className="flex-1">
                    <h1 className="text-2xl font-bold">{product.name}</h1>
                    <div className="flex mt-4 items-center">
                        <p className="text-xl font-semibold">{formatPrice(product.price)}</p>
                        {product.discount &&
                            <div className="p-3 py-1 ml-4 rounded-3xl bg-red-200">
                                <p className="text-red-700">-{product.discount}%</p>
                            </div>
                        }
                    </div>
                    <div className="flex items-center mt-2 gap-1">
                        {Array.from({length: product.rating || 0}, (_, i) => i + 1).map((item, i) => (
                            <Star key={i} className="text-yellow-300 fill-yellow-300 size-5" />
                        ))}
                        {hasHalfStar && (
                            <StarHalf key="half" className="text-yellow-300 fill-yellow-300 size-5" />
                        )}
                        {Array.from({length: 5 - (product.rating || 0)}, (_, i) => i + 1).map((item, i) => (
                            <Star key={i} className="text-yellow-300 size-5" />
                        ))}
                        <p>{product.rating}/5</p>
                    </div>
                    <Separator className="w-full my-2" />
                    <p className="">{product.description}</p>
                </div>
            </section>
        </main>
    )
}
export default Page
