import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface Props {
    crumbs: {
        href: string;
        name: string;
    }[]
}

const BreadcrumbNav = ({crumbs}: Props) => {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {crumbs.map((item, i) => (
                    <React.Fragment key={i}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={item.href}>{item.name}</BreadcrumbLink>
                        </BreadcrumbItem>
                        {i !== crumbs.length - 1 && (<BreadcrumbSeparator />)}
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
export default BreadcrumbNav
