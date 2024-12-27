import React from 'react'
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/landing/Footer";

const Layout = async ({ children, searchParams }: { children: React.ReactNode; searchParams?: Promise<{ query?: string }> }) => {
    const query = (await searchParams)?.query;

    return (
        <div className="flex flex-col justify-between min-h-screen">
            <Navbar query={query} />
            {children}
            <Footer />
        </div>
    )
}
export default Layout
