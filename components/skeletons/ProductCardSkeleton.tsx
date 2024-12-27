import React from 'react'
import {Skeleton} from "@/components/ui/skeleton";

const ProductCardSkeleton = () => {
    return (
        <>
            {[1,2,3].map((item) => (
                <div key={item} className="max-w-[300px]">
                    <Skeleton className="w-[300px] h-[150px] rounded-lg mb-1" />
                    <Skeleton className="w-full h-2 rounded-xl mb-1" />
                </div>
            ))}
        </>
    )
}
export default ProductCardSkeleton
