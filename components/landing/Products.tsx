import React from 'react'
import ProductCard from "@/components/ProductCard";
import {client} from "@/sanity/lib/client";
import {PRODUCT_QUERY, TRENDING_PRODUCT_QUERY} from "@/sanity/lib/queries";
import {Product} from "@/sanity/types";
import {Separator} from "@/components/ui/separator";

const Products = async () => {
    const products = await client.fetch(PRODUCT_QUERY)
    const trendingProducts = await client.fetch(TRENDING_PRODUCT_QUERY)

    return (
        <>
            <section className="md:py-10 px-10 mb-5 md:px-6 xl:px-20 ">
                <p className="text-center text-3xl mb-2">New Collection</p>
                <Separator className="mb-5" />
                <div className="grid grid-cols-1 max-sm:text-center sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {products.map((product: Product) => (
                        <ProductCard key={product._id} {...product} />
                    ))}
                </div>
            </section>
            <section className="md:py-10 px-10 mb-5 md:px-6 xl:px-20 w-full">
                <p className="text-center text-3xl mb-2">Trending</p>
                <Separator className="mb-5" />
                <div className="grid grid-cols-1 max-sm:text-center sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {trendingProducts.map((product: Product) => (
                        <ProductCard key={product._id} {...product} />
                    ))}
                </div>
            </section>
        </>
    )
}
export default Products
