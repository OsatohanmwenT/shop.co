"use client"

import React from 'react'
import FilterAccordion from "@/components/FilterControls/FilterAccordion";
import {Input} from "@/components/ui/input";
import {Filter} from "@/sanity/types";
import {ChevronRight} from "lucide-react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

interface Props {
    filters: Filter[];
}

const Filters = ({filters}: Props) => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const { replace } = useRouter();

    const updateQueryParams = (name: string, value: string | string[]) => {
        const params = new URLSearchParams(searchParams);

        if (Array.isArray(value)) {
            value.length ? params.set(name, value.join(",")) : params.delete(name);
        } else {
            value ? params.set(name, value) : params.delete(name);
        }

        replace(`${pathname}?${params.toString()}`);
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            const existingValues = new URLSearchParams(searchParams)
                .get(name)?.split(",") || [];
            const updatedValues = checked
                ? [...existingValues, value]
                : existingValues.filter((val) => val !== value);

            updateQueryParams(name, updatedValues);
        } else {
            updateQueryParams(name, value);
        }
    };

    return (
        <div className="h-full px-3">
            {filters.map((filter: Filter) => (
                    <FilterAccordion key={filter._id} title={filter.title}>
                        {filter.type === "range" ? (
                            <div className="flex items-center">
                                <div className="flex items-center p-1 gap-5 justify-between">
                                    <Input onChange={handleFilterChange} placeholder="min." id="min-price" name="min_price" className="border-neutral-300"
                                    />
                                    <p className="text-center">to</p>
                                    <Input onChange={handleFilterChange} placeholder="max." id="max-price" name="max_price" className="border-neutral-300"
                                    />
                                </div>
                                <button>
                                    <ChevronRight className="size-5 text-neutral-400" />
                                </button>
                            </div>
                        ): filter.type === "checkbox" && (
                            <div className="space-y-2">
                                {[...(filter.sources || []), ...(filter.options || [])].map((option, index) => (
                                    <div key={index} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            onChange={handleFilterChange}
                                            className="size-5 border-b-[1px] shadow-none border-neutral-400"
                                            id={`${filter.slug?.current}_${option.name || option}`}
                                            name={`${filter.slug?.current}`}
                                            value={option.name || option}
                                        />
                                        <label htmlFor={`${filter.slug?.current}_${option.name || option}`}
                                               className="ml-2">
                                            {option.name || option}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        )}
                    </FilterAccordion>
                )
            )}
        </div>
    )
}
export default Filters
