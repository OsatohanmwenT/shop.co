import React from 'react'
import {Button} from "@/components/ui/button";
import {ChevronLeft, ChevronRight} from "lucide-react";

const Pagination = () => {
    return (
        <div className="flex items-center font-work-sans justify-center gap-6">
            <Button variant="ghost"><ChevronLeft className="size-5"/> Previous</Button>
            <Button variant="ghost">Next <ChevronRight className="size-5"/></Button>
        </div>
    )
}
export default Pagination
