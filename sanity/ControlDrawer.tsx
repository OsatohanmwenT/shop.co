import * as React from "react"
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer";
import {Separator} from "@/components/ui/separator";
import {CloseIcon} from "@sanity/icons";

interface Props {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function ControlDrawer({ isOpen, setIsOpen }: Props) {
    return (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerContent className="font-work-sans h-screen">
                <DrawerHeader>
                    <div className="flex items-center justify-between">
                        <DrawerTitle>Filter</DrawerTitle>
                        <button className="text-black" onClick={() => setIsOpen(false)}>
                            <CloseIcon className="size-7" />
                        </button>
                    </div>
                </DrawerHeader>
                <Separator />
                <div className="h-full">

                </div>
            </DrawerContent>
        </Drawer>
    )
}
