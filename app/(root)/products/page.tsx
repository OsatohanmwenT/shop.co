import React, {Suspense} from 'react'
import {ALL_PRODUCT_QUERY} from "@/sanity/lib/queries";
import {Product} from "@/sanity/types";
import ProductCard from "@/components/ProductCard";
import {sanityFetch} from "@/sanity/lib/live";
import {Skeleton} from "@/components/ui/skeleton";
import Filters from "@/components/FilterControls/Filters";
import FilterContainer from "@/components/FilterControls/FilterContainer";
import ProductsList from "@/components/ProductsList";
import ProductCardSkeleton from "@/components/skeletons/ProductCardSkeleton";

const Page = async ({searchParams}: {searchParams: Promise<{[key: string]: string | string[] | undefined}>}) => {
    const filters = await searchParams;
    const params = { search: filters.query || null };

    return (
        <>
            <main className="min-h-screen w-full border-t-[1px]">
                <div className="grid md:products-grid_system">
                    <div className="bg-white hidden md:block border-r-[1px] h-screen">
                        <Suspense fallback={<Skeleton className="h-full" />}>
                            <FilterContainer />
                        </Suspense>
                    </div>
                    <div className="p-5 min-h-screen bg-white">
                        Products section
                        <Suspense fallback={<ProductCardSkeleton />}>
                            <ProductsList params={params} />
                        </Suspense>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Page
