import React from 'react'
import {client} from "@/sanity/lib/client";
import {BANNER_QUERY} from "@/sanity/lib/queries";
import {Banner} from "@/sanity/types";

const Hero = async () => {
    const banner: Banner = await client.fetch(BANNER_QUERY);

    return (
        <section>
            <section className="banner_container relative flex flex-col px-6 gap-5 lg:flex-row items-center">
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4l-2-2V24v-2h2l2-2v-2h-2l-2-2h-4v2l-2 2h-4v2h2v2l-2 2v4h2l2-2v2h2l2 2h4v-2l2-2h2zm-4-8h2v2h-2v-2z' fill='%23FFFFFF'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }}
            />
                <div className="max-w-2xl flex-shrink-0 max-lg:mb-5 max-md:mt-8 max-lg:text-center">
                    <h1 className="font-work-sans font-bold text-3xl md:text-5xl lg:text-8xl text-white">{banner.title}</h1>
                    <p className="font-work-sans sub-heading">{banner.subtitle}</p>
                    <button
                        className="rounded-full hover:bg-neutral-800 transition-all bg-white font-work-sans mt-5 font-medium text-[16px] text-black px-5 py-3">SHOP
                        NOW
                    </button>
                </div>
                <div className="xl:size-[500px] z-[5] flex items-center justify-center">
                    <img src={banner.image?.asset?.url} alt="banner image"/>
                </div>
            </section>
            <div className="bg-red-600 py-2 flex overflow-hidden">
                <div className="animate-marquee whitespace-nowrap">
                    {Array(10).fill('MEGA SALE').map((text, i) => (
                        <span key={i} className="mx-4 text-white font-bold">
                        {text}
                        </span>
                    ))}
                </div>
                <div className="animate-marquee whitespace-nowrap">
                    {Array(10).fill('MEGA SALE').map((text, i) => (
                        <span key={i + 10} className="mx-4 text-white font-bold">
                        {text}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Hero
