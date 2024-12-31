import React from 'react'
import {Star, StarHalf} from "lucide-react";

const Rating = ({rating}: {rating: number | undefined}) => {
    const hasHalfStar = (rating || 0) % 1 !== 0;

    return (
        <div className="flex items-center mt-2 gap-1">
            {Array.from({length: rating || 0}, (_, i) => i + 1).map((item, i) => (
                <Star key={i} className="text-yellow-300 fill-yellow-300 size-5"/>
            ))}
            {hasHalfStar && (
                <StarHalf key="half" className="text-yellow-300 fill-yellow-300 size-5"/>
            )}
            {Array.from({length: 5 - (rating || 0)}, (_, i) => i + 1).map((item, i) => (
                <Star key={i} className="text-yellow-300 size-5"/>
            ))}
            <p>{rating}/5</p>
        </div>
    )
}
export default Rating
