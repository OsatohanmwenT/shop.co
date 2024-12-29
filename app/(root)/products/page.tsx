import React, {Suspense} from 'react'
import {Skeleton} from "@/components/ui/skeleton";
import FilterContainer from "@/components/FilterControls/FilterContainer";
import ProductsList from "@/components/ProductsList";
import ProductCardSkeleton from "@/components/skeletons/ProductCardSkeleton";

const Page = async ({searchParams}: {searchParams: Promise<{[key: string]: string | string[] | undefined}>}) => {
    const filters = await searchParams;

    const params = {
        search: filters.query || null,
        minPrice: parseFloat(filters.min_price as string) || 0,
        maxPrice: parseFloat(filters.max_price as string) || null,
        brands: Array.isArray(filters.brand) ? filters.brand : filters.brand?.split(",") || null,
    }

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
