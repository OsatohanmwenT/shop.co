import React from 'react'
import {client} from "@/sanity/lib/client";
import {FILTER_QUERY} from "@/sanity/lib/queries";
import Filters from "@/components/FilterControls/Filters";

const FilterContainer = async () => {
    const filters = await client.withConfig({ useCdn: false }).fetch(FILTER_QUERY)
    return <Filters DBFilters={filters} />
}
export default FilterContainer
