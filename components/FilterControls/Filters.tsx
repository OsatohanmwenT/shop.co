import React from 'react'
import FilterAccordion from "@/components/FilterControls/FilterAccordion";
import {Input} from "@/components/ui/input";
import {client} from "@/sanity/lib/client";
import {FILTER_QUERY} from "@/sanity/lib/queries";
import {Filter} from "@/sanity/types";
import {Checkbox} from "@/components/ui/checkbox";

interface Props {
    filters: Filter[];
}

const Filters = async () => {
    const filters = await client.withConfig({ useCdn: false }).fetch(FILTER_QUERY)

    return (
        <div className="h-full px-3">
            {filters.map((filter: Filter) => (
                    <FilterAccordion key={filter._id} title={filter.title}>
                        {filter.type === "range" ? (
                            <div className="flex items-center p-1 gap-5 justify-between">
                                <Input placeholder="min." id="min-price" name="min_price" className="border-neutral-300"
                                       type="text"/>
                                <p className="text-center">to</p>
                                <Input placeholder="max." id="max-price" name="max_price" className="border-neutral-300"
                                       type="text"/>
                            </div>
                        ): filter.type === "checkbox" && (
                            <div className="space-y-2">
                                {[...(filter.sources || []), ...(filter.options || [])].map((option, index) => (
                                    <div key={index} className="flex items-center">
                                        <Checkbox
                                            className="size-5 border-b-[1px] shadow-none border-neutral-400"
                                            id={`${filter.slug?.current}_${option.name || option}`}
                                            name={`${filter.slug?.current}[]`}
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
