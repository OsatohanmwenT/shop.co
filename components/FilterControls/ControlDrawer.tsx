import * as React from "react"
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle, DrawerTrigger,
} from "@/components/ui/drawer";
import {Separator} from "@/components/ui/separator";
import Filters from "@/components/FilterControls/Filters";
import {Settings2} from "lucide-react";
import {CloseIcon} from "@sanity/icons";
import {Suspense} from "react";
import {Skeleton} from "@/components/ui/skeleton";
export default function ControlDrawer() {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <button
                        className="p-1 flex md:hidden items-center justify-center rounded-full border-2">
                    <Settings2 className="size-5"/>
                </button>
            </DrawerTrigger>
            <DrawerContent className="font-work-sans">
                <DrawerHeader>
                    <div className="flex items-center justify-between">
                        <DrawerTitle>Filter</DrawerTitle>
                        <DrawerTrigger asChild>
                            <button
                                className="p-1 flex md:hidden items-center justify-center rounded-full border-2">
                                <CloseIcon className="size-7"/>
                            </button>
                        </DrawerTrigger>
                    </div>
                </DrawerHeader>
                <Separator />
                <Suspense fallback={<Skeleton className="h-full w-full" />}>
                    <Filters />
                </Suspense>
            </DrawerContent>
        </Drawer>
    )
}
