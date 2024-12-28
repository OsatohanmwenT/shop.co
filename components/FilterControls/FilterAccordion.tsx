import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface Props {
    title: string | undefined
    children: React.ReactNode
}

const FilterAccordion = ({ title, children }: Props) => {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger aria-controls="filter-content" className="font-semibold font-work-sans text-lg">{title}</AccordionTrigger>
                <AccordionContent id="filter-content">
                    {children}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
export default FilterAccordion
