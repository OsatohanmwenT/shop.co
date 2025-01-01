"use client"
import React, {useState} from 'react'
import {ArrowLeft, ArrowRight} from "lucide-react";

interface Props {
    images: any[] | undefined
}

const Carousel = ({images}: Props) => {
    const [imageIndex, setImageIndex] = useState(0);

    const handleNext = () => {
        if (!images) return;
        setImageIndex(prev => prev < images.length - 1 ? prev + 1 : 0);
    }

    const handlePrev = () => {
        if (!images) return;
        setImageIndex((prev) => prev === 0 ? images.length - 1 : prev - 1);
    }

    return (
        <>
            <div className="flex max-lg:order-2 max-lg:mb-5 lg:flex-col max-lg:items-center max-lg:justify-center gap-2">
                {images && images.map((image, i) => (
                    <div onMouseEnter={() => setImageIndex(i)} key={i}
                         className={`rounded-xl w-[80px] aspect-square overflow-hidden ${imageIndex === i && "border-blue-500"} hover:border-blue-500 border-2`}>
                        <picture className="w-full h-full">
                            <img className="object-cover object-center" src={image?.asset?.url} alt={image._key}/>
                        </picture>
                    </div>
                ))}
            </div>
            <div className="relative h-[400px] max-lg:order-1">
                <button onClick={handlePrev} className="absolute top-[50%] -translate-y-[50%] lg:-left-16 bg-white rounded-full p-4">
                    <ArrowLeft />
                </button>
                <div className="h-[400px] flex justify-center lg:w-[400px] rounded-xl overflow-hidden">
                    <picture className="lg:mx-auto">
                        <img className="object-center w-[200px] lg:w-full h-full object-contain" src={images && images[imageIndex]?.asset?.url} alt=""/>
                    </picture>
                </div>
                <button onClick={handleNext} className="absolute rounded-full right-0 bg-white p-4 top-[50%] -translate-y-[50%] lg:-right-16">
                    <ArrowRight />
                </button>
            </div>
        </>
    )
}
export default Carousel
