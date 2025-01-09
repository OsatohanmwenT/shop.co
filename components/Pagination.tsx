"use client"

import React from 'react'
import {Button} from "@/components/ui/button";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

interface Props {
    count: number;
    pageSize: number;
    currentPage: number
}

const Pagination = ({count, pageSize, currentPage}: Props) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const {replace} = useRouter();

    const totalPages = Math.ceil(count / pageSize);

    const createPageUrl = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set("page", String(pageNumber))
        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div className="flex items-center mb-5 font-work-sans justify-center gap-3 xs:gap-6">
            <Button
                onClick={() => createPageUrl(currentPage - 1)}
                disabled={currentPage <= 1}
                variant="ghost"
                className="disabled:cursor-not-allowed"
            >
                <ChevronLeft className="size-5"/> Previous
            </Button>
            <div className="flex gap-1">
                {currentPage - 1 > 0 && <Button onClick={() => createPageUrl(currentPage - 1)} variant="ghost">{currentPage - 1}</Button>}
                <Button onClick={() => createPageUrl(currentPage)} className="bg-neutral-200" variant="ghost">{currentPage}</Button>
                {currentPage < totalPages && <Button onClick={() => createPageUrl(currentPage + 1)} variant="ghost">{currentPage + 1}</Button>}
            </div>
            <Button
                onClick={() => createPageUrl(currentPage + 1)}
                disabled={currentPage >= totalPages}
                variant="ghost">Next <ChevronRight className="size-5"/>
            </Button>
        </div>
    )
}
export default Pagination
