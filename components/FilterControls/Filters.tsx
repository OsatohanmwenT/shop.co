"use client"

import React from 'react'
import FilterAccordion from "@/components/FilterControls/FilterAccordion";
import {Input} from "@/components/ui/input";
import {useFilterStore} from "@/stores/filterStore";
import {Filter} from "@/sanity/types";
import {ChevronRight} from "lucide-react";
import { useInitializeFilters, useSyncFilters } from "@/hooks/useFilters";

interface Props {
    DBFilters: Filter[];
}

const Filters = ({DBFilters}: Props) => {
    useInitializeFilters();
    useSyncFilters();

    const { filters, setFilter } = useFilterStore();

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            const currentValues = Array.isArray(filters[name]) ? filters[name] : [];
            const updatedValues = checked
                ? [...currentValues, value]
                : currentValues.filter((v) => v !== value);

            setFilter(name, updatedValues);
        } else {
            setFilter(name, value);
        }
    };

    return (
        <div className="h-full px-3">
            {DBFilters.map((filter: Filter) => (
                    <FilterAccordion key={filter._id} title={filter.title}>
                        {filter.type === "range" ? (
                            <div className="flex items-center">
                                <div className="flex items-center p-1 gap-5 justify-between">
                                    <Input
                                        placeholder="min." id="min-price"
                                        value={filters.min_price || ""}
                                        onChange={handleFilterChange}
                                        name="min_price"
                                        className="border-neutral-300"
                                    />
                                    <p className="text-center">to</p>
                                    <Input
                                        placeholder="max."
                                        value={filters.max_price || ""}
                                        onChange={handleFilterChange}
                                        id="max-price"
                                        name="max_price"
                                        className="border-neutral-300"
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
                                            checked={(filters[filter.slug.current] || []).includes(option.name)}
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
