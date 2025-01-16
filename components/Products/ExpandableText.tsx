"use client"

import React, {useState} from 'react'
import markdownit from "markdown-it"
import {Button} from "@/components/ui/button";

const md = markdownit()

const ExpandableText = ({description}: {description: string | undefined}) => {
    const parsedContent = md.render(description || "")
    const [expanded, setExpanded] = useState(false)
    const limit = 300;

    if(!parsedContent) return null;

    if(parsedContent.length <= limit) return parsedContent;

    const summary = expanded ? parsedContent : parsedContent.substring(0,limit) + "...";

    return (
        <>
            {parsedContent ? (
                <article
                    className="prose max-w-4xl font-work-sans break-all"
                    dangerouslySetInnerHTML={{ __html: summary }}
                />
            ): (
                <p className="no-result">No details provided</p>
            )}
            <Button className="mt-4" onClick={() => setExpanded(prev => !prev)}>{expanded ? "Show less" : "Show more"}</Button>
        </>
    )
}
export default ExpandableText
