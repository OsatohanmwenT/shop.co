import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {auth} from "@/auth";
import {SearchIcon} from "lucide-react";
import Form from "next/form";
import Menu from "@/components/Navigation/Menu";
import ProfileButton from "@/components/ProfileButton";
import Cart from "@/components/Cart";


const Navbar = async ({query}: {query?: string}) => {
    const session = await auth()

    return (
        <header className="px-5 py-4 sticky top-0 w-full z-[10] font-work-sans bg-white border-b-2 backdrop-filter text-black">
            <nav className="flex-between gap-10">
                <div className="flex items-center">
                    <Menu/>
                    <Link className="flex-shrink-0" href="/">
                        <Image src="/SHOP.CO.png" alt="logo" height={50} width={150}
                               className="max-xs:w-[100px] object-cover"/>
                    </Link>
                </div>
                <div className="items-center hidden max-w-2xl sm:flex md:w-full flex-1 gap-2">
                    <Form action="/products" className="cursor-pointer search-form">
                        <input name="query" defaultValue={query} placeholder="search..." className="search-input"
                               type="text"/>
                        <button type="submit" className="search-btn text-white">
                            <SearchIcon className="size-5"/>
                        </button>
                    </Form>
                </div>
                    <div className="flex items-center gap-2">
                        <button className="block sm:hidden">
                            <SearchIcon className="size-7 mr-2"/>
                        </button>
                        <Cart/>
                        <div className="flex items-center gap-5">
                            {session?.user && session ? (
                                <>
                                    <ProfileButton image={session.user.image} name={session.user.name}/>
                                </>
                            ) : (
                                <Link href="/auth/login" className="flex items-center gap-1" type="submit">
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
            </nav>
        </header>
)
}
export default Navbar
