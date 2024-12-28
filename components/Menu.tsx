"use client"

import React, {useEffect, useState} from 'react'
import {MenuIcon} from "lucide-react";
import {CloseIcon} from "@sanity/icons";

const Menu = () => {
    const [open, setOpen] = useState(false);

    const toggleBodyScroll = (disable: boolean) => {
        if (disable) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    };

    useEffect(() => {
        toggleBodyScroll(open);

        return () => toggleBodyScroll(false);
    }, [open]);

    return (
        <>
            <div className={`${open ? "inset-0 size-full" : ""} absolute z-10 bg-black/50`}></div>
            <button onClick={() => setOpen(prev => !prev)} className="block z-50 mr-2 lg:hidden">
                {open ? <CloseIcon className="size-7" /> : <MenuIcon className="size-7"/>}
            </button>
            <aside
                role="menu"
                aria-label="aside nav menu"
                className={`inset-y-0 -inset-x-5 z-20 absolute bg-white ${open ? "w-[80vw]" : "w-0"} lg:hidden flex flex-col transition-all duration-500 shadow-2xl`}>
            </aside>
        </>
    )
}
export default Menu
