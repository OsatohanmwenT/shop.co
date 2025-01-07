import React, {Suspense} from 'react'
import {Skeleton} from "@/components/ui/skeleton";
import FilterContainer from "@/components/FilterControls/FilterContainer";
import ProductsList from "@/components/ProductsList";
import ProductCardSkeleton from "@/components/skeletons/ProductCardSkeleton";
import Pagination from "@/components/Pagination";
import {sanityFetch} from "@/sanity/lib/live";
import {COUNT_QUERY} from "@/sanity/lib/queries";

const Page = async ({searchParams}: {searchParams: Promise<{[key: string]: string | string[] | undefined}>}) => {
    const filters = await searchParams;
    const currentPage = parseInt(filters.page as string || "1", 10);
    const pageSize = 1;

    const params = {
        search: filters.query || null,
        minPrice: parseFloat(filters.min_price as string) || 0,
        maxPrice: parseFloat(filters.max_price as string) || null,
        brands: Array.isArray(filters.brand) ? filters.brand : filters.brand?.split(",") || null,
        start: (currentPage - 1) * pageSize,
        end: currentPage * pageSize,
    }

    const { data: count } = await sanityFetch({ query: COUNT_QUERY, params})

    return (
        <>
            <main className="min-h-screen w-full border-t-[1px]">
                <div className="grid md:products-grid_system">
                    <div className="bg-white hidden md:block border-r-[1px] h-full min-h-screen">
                        <Suspense fallback={<Skeleton className="h-full" />}>
                            <FilterContainer />
                        </Suspense>
                    </div>
                    <div className="p-5 bg-white">
                        Products section
                        <Suspense fallback={<ProductCardSkeleton />}>
                            <ProductsList params={params} />
                        </Suspense>
                        <Pagination count={count} pageSize={pageSize} currentPage={currentPage} />
                    </div>
                </div>
            </main>
        </>
    )
}
export default Page
