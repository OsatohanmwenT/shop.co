import React from 'react'
import Hero from "@/components/landing/Hero";
import Products from "@/components/landing/Products";
import Image from "next/image";

const Page = () => {
    return (
        <main className="min-h-screen w-full overflow-x-hidden">
            <Hero />
            <Products />
            <section className="md:px-10 px-5 flex items-center justify-center py-20">
                <Image height={100} width={500} src="/Frame.png" alt="frame image" />
            </section>
        </main>
    )
}
export default Page
