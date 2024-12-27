import React from 'react'
import {Skeleton} from "@/components/ui/skeleton";

const ProductCardSkeleton = () => {
    return (
        <div className="p-5 xs:p-10 grid justify-items-center grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1,2,3,4,5,6].map((item) => (
                <div key={item} className="max-w-[300px] flex items-center max-sm:gap-4 gap-2 sm:flex-col">
                    <Skeleton className="w-[300px] h-[150px] rounded-lg" />
                    <div className="w-full">
                        <Skeleton className="w-full h-2 rounded-xl mb-1" />
                        <Skeleton className="w-full h-2 rounded-xl mb-1" />
                        <Skeleton className="w-1/2 h-2 rounded-xl mb-1" />
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ProductCardSkeleton
