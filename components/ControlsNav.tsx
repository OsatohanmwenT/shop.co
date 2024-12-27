"use client"

import React from 'react'
import BreadcrumbNav from "@/components/Navigation/BreadcrumbNav";
import {Settings2} from "lucide-react";
import {usePathname} from "next/navigation";

const ControlsNav = () => {
    const pathname = usePathname()
    const pathSegments = pathname.split('/').filter(Boolean);

    const crumbs = [
        { name: 'Home', href: '/' },
        ...pathSegments.map((segment, index) => ({
            name: segment === '[id]' ? 'Product Details' : segment.replace(/-/g, ' '),
            href: '/' + pathSegments.slice(0, index + 1).join('/'),
        })),
    ];

    return (
        <div className="mb-5 flex items-center justify-between px-5">
            <BreadcrumbNav crumbs={crumbs} />
            <button className="p-1 flex md:hidden items-center justify-center rounded-full border-2">
                <Settings2 className="size-5" />
            </button>
        </div>
    )
}
export default ControlsNav
