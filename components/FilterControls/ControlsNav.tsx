import React from 'react'
import ControlDrawer from "@/components/FilterControls/ControlDrawer";
import BreadCrumbs from "@/components/Navigation/BreadCrumbs";

const ControlsNav = () => {

    return (
        <div className="mb-5 flex items-center justify-between px-5">
            <BreadCrumbs />
            <ControlDrawer />
        </div>
    )
}
export default ControlsNav
