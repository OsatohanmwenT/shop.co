"use client"

import React, {useState} from 'react'
import {Button} from "@/components/ui/button";

const ExpandableText = ({description}: {description: string | undefined}) => {
    const [expanded, setExpanded] = useState(false)
    const limit = 300;

    if(!description) return null;

    if(description.length <= limit) return description;

    const summary = expanded ? description : description.substring(0,limit) + "...";

    return (
        <>
            <p className="text-sm">{summary}</p>
            <Button className="mt-4" onClick={() => setExpanded(prev => !prev)}>{expanded ? "Show less" : "Show more"}</Button>
        </>
    )
}
export default ExpandableText
