import React from 'react'
import {client} from "@/sanity/lib/client";
import {BANNER_QUERY} from "@/sanity/lib/queries";
import {Banner} from "@/sanity/types";
import Image from "next/image";

const Hero = async () => {
    const banner: Banner = await client.fetch(BANNER_QUERY);

    return (
        <section>
            <section className="banner_container relative flex flex-col px-6 gap-5 lg:flex-row items-center">
                <div className="max-w-2xl flex-shrink-0 max-lg:mb-5 max-md:mt-8 max-lg:text-center">
                    <h1 className="font-work-sans font-bold text-3xl md:text-5xl lg:text-8xl text-black">{banner.title}</h1>
                    <p className="font-work-sans sub-heading">{banner.subtitle}</p>
                    <button className="rounded-full hover:bg-neutral-800 transition-all bg-black font-work-sans mt-5 font-medium text-[16px] text-white px-5 py-3">SHOP NOW</button>
                </div>
                <Image height={100} width={100} src="/Vector.png"
                       className="absolute top-[30vh] w-[80px] h-[80px] right-3 lg:top-10 md:right-[15vw] lg:right-5 xl:right-16"
                       alt="star" />
                <Image height={60} width={60} src="/Vector.png" className="absolute top-[35vh] md:top-[450px] max-lg:left-[5vw] lg:right-[44vw]" alt="star" />
                <div className="xl:size-[500px] flex items-center justify-center">
                    <img src={banner.image?.asset?.url} alt="banner image" />
                </div>
            </section>
        </section>
    )
}
export default Hero
