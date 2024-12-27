import React from 'react'
import {ALL_PRODUCT_QUERY} from "@/sanity/lib/queries";
import {Product} from "@/sanity/types";
import ProductCard from "@/components/ProductCard";
import {sanityFetch} from "@/sanity/lib/live";

const Page = async ({searchParams}: {searchParams: Promise<{[key: string]: string | string[] | undefined}>}) => {
    const filters = await searchParams;
    const params = { search: filters.query || null };
    const { data: products } = await sanityFetch({ query: ALL_PRODUCT_QUERY, params })

    return (
        <>
            <main className="min-h-screen w-full border-t-[1px]">
                <div className="grid md:products-grid_system">
                    <div className="bg-white hidden md:block border-r-[1px] h-screen p-5">
                        filters
                    </div>
                    <div className="p-5 min-h-screen bg-white">
                        Products section
                        {products.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {products.map((product: Product) => (
                                    <div key={product._id} className="py-5 border-b-[1px]">
                                        <ProductCard {...product} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="font-bold text-red-500 text-5xl text-center">NO PRODUCT FOUND</p>
                        )
                        }
                    </div>
                </div>
            </main>
        </>
    )
}
export default Page
