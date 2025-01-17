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
            <div className="flex items-center max-lg:order-2 max-lg:mb-5 lg:flex-col max-lg:items-center max-lg:justify-center gap-2">
                {images && images.map((image, i) => (
                    <div onMouseEnter={() => setImageIndex(i)} key={i}
                         className={`rounded-xl w-[80px] max-md:mt-3 aspect-square overflow-hidden ${imageIndex === i && "border-blue-500"} hover:border-blue-500 border-2`}>
                        <picture className="w-full h-full">
                            <img className="object-cover object-center" src={image?.asset?.url} alt={image._key}/>
                        </picture>
                    </div>
                ))}
            </div>
            <div className="relative h-[400px] max-lg:order-1">
                <button onClick={handlePrev} className="absolute top-[50%] z-20 -translate-y-[50%] lg:-left-4 bg-black rounded-full p-3">
                    <ArrowLeft className="text-white" />
                </button>
                <div className="flex items-center overflow-hidden justify-center w-full max-w-md">
                    <div className="flex h-full items-center transition-transform duration-500 ease-in-out"
                         style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
                        {images && images.map((image, i) => (
                                <picture key={i} className="w-full flex-shrink-0 h-[400px] rounded-xl overflow-hidden">
                                    <img className="object-center mx-auto w-[270px] lg:w-full h-full object-contain" src={image.asset.url} alt=""/>
                                </picture>
                            ))
                        }
                    </div>
                </div>
                <button onClick={handleNext} className="absolute rounded-full z-20 right-0 bg-black p-3 top-[50%] -translate-y-[50%] lg:-right-4">
                    <ArrowRight className="text-white" />
                </button>
            </div>
        </>
    )
}
export default Carousel
