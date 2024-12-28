"use client"

import React from 'react'
import {usePathname} from "next/navigation";
import BreadcrumbNav from "@/components/Navigation/BreadcrumbNav";

const BreadCrumbs = () => {
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
        <BreadcrumbNav crumbs={crumbs} />
    )
}
export default BreadCrumbs
