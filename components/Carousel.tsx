import React from 'react'

interface Props {
    images: any[] | undefined
}

const Carousel = ({images}: Props) => {
    return (
        <>
            <div className="flex max-lg:order-2 lg:flex-col max-lg:items-center gap-2">
                {images && images.map((image, i) => (
                    <div key={image._key}
                         className="rounded-xl w-[80px] aspect-square overflow-hidden hover:border-blue-500 border-2">
                        <picture className="w-full h-full">
                            <img className="object-cover object-center" src={image?.asset?.url} alt={image._key}/>
                        </picture>
                    </div>
                ))}
            </div>
            <div className="rounded-xl max-lg:order-1 overflow-hidden">
                <picture className="h-full w-full">
                    <img className="object-center" src="" alt=""/>
                </picture>
            </div>
        </>
    )
}
export default Carousel
