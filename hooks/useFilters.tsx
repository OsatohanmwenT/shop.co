"use client"

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useFilterStore } from "@/stores/filterStore";
import { getFiltersFromURL, updateURL } from "@/lib/utils";

export const useInitializeFilters = () => {
    const searchParams = useSearchParams();
    const {initializeFromURL} = useFilterStore();

    useEffect(() => {
        const filters = getFiltersFromURL(searchParams);
        initializeFromURL(filters);
    }, [searchParams, initializeFromURL]);
};

export const useSyncFilters = () => {
    const pathname = usePathname();
    const { replace } = useRouter();
    const { filters } = useFilterStore();

    useEffect(() => {
        updateURL(pathname, filters, replace);
    }, [pathname, filters, replace]);
};
