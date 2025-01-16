import React from 'react'
import {Product} from "@/sanity/types";
import ProductCard from "@/components/Products/ProductCard";
import {sanityFetch} from "@/sanity/lib/live";
import {ALL_PRODUCT_QUERY} from "@/sanity/lib/queries";

const ProductsList = async ({params}: any) => {
    const { data: products } = await sanityFetch({ query: ALL_PRODUCT_QUERY, params })

    return (
        <div className="p-5 min-h-screen">
            {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {products.map((product: Product) => (
                        <ProductCard key={product._id} {...product} />
                    ))}
                </div>
            ) : (
                <p className="font-bold text-red-500 text-5xl text-center">NO PRODUCT FOUND</p>
            )
            }
        </div>
    )
}
export default ProductsList
