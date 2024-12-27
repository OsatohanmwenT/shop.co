"use client"

import React, {useState} from 'react'
import {MenuIcon} from "lucide-react";
import {CloseIcon} from "@sanity/icons";

const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={`${open ? "inset-0 size-full" : ""} absolute z-10 bg-black/50`}></div>
            <button onClick={() => setOpen(prev => !prev)} className="block z-50 mr-2 lg:hidden">
                {open ? <CloseIcon className="size-7" /> : <MenuIcon className="size-7"/>}
            </button>
            <aside
                role="menu"
                aria-label="aside nav menu"
                className={`inset-y-0 -inset-x-5 z-20 absolute bg-white ${open ? "w-[60vw]" : "w-0"} lg:hidden flex flex-col transition-all duration-500 shadow-2xl`}>
            </aside>
        </>
    )
}
export default Menu
