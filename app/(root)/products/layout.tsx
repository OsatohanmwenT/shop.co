import React from 'react'
import ControlsNav from "@/components/FilterControls/ControlsNav";

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <main className="pt-5">
            <ControlsNav />
            {children}
        </main>
    )
}
export default Layout
            