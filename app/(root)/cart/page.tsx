import React from 'react'
import CartTable from "@/components/CartTable";
import {client} from "@/sanity/lib/client";
import {CART_LIST_BY_USERID_QUERY} from "@/sanity/lib/queries";

const Page = async () => {
    const cartList = await client.fetch(CART_LIST_BY_USERID_QUERY)
    console.log(cartList)

    return (
        <main className="p-5 min-h-[50vh]">
            <h1 className="font-bold font-work-sans text-stone-800 text-xl sm:text-3xl mb-4">YOUR SHOPPING CART</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
                <div className="md:col-span-2">
                    <CartTable />
                </div>
                <div className="border-2 p-5">

                </div>
            </div>
        </main>
    )
}
export default Page
