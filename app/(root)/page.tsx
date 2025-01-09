import React from 'react'
import Hero from "@/components/landing/Hero";
import Products from "@/components/landing/Products";
import Image from "next/image";
import {SanityLive} from "@/sanity/lib/live";
import { ShoppingBag, TrendingUp, Truck, Shield, Star } from 'lucide-react';

const Page = () => {
    return (
        <main className="min-h-screen overflow-x-hidden">
            <Hero/>
            <Products/>
            <div className="py-16 font-work-sans bg-neutral-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {icon: TrendingUp, title: 'Trending Styles', desc: 'Latest fashion trends'},
                            {icon: Truck, title: 'Fast Delivery', desc: 'Free shipping worldwide'},
                            {icon: Shield, title: 'Secure Shopping', desc: '100% secure checkout'},
                            {icon: Star, title: 'Top Rated', desc: 'Best-in-class service'},
                        ].map((feature, index) => (
                            <div key={index}
                                 className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
                                <feature.icon className="w-8 h-8 mb-4 text-indigo-600"/>
                                <h3 className="font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <SanityLive/>
        </main>
    )
}
export default Page
