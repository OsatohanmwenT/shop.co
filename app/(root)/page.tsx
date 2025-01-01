import React, {Suspense} from 'react'
import Hero from "@/components/landing/Hero";
import Products from "@/components/landing/Products";
import Image from "next/image";
import ProductCardSkeleton from "@/components/skeletons/ProductCardSkeleton";
import {SanityLive} from "@/sanity/lib/live";

const Page = () => {
    return (
        <main className="min-h-screen overflow-x-hidden">
            <Hero />
            <Products />
            <section className="md:px-10 px-5 flex items-center justify-center py-20">
                <Image height={100} width={500} src="/Frame.png" alt="frame image" />
            </section>
            <SanityLive />
        </main>
    )
}
export default Page
