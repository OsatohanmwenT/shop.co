"use client"

import React, {useState} from 'react'
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {signOut} from "next-auth/react";

interface Props {
    image: string | null | undefined;
    name: string | null | undefined;
}

const ProfileButton = ({image,name}: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const LogOut = async () => {
        setIsOpen(false);
        await signOut();
    }

    return (
        <>
            <DropdownMenu onOpenChange={setIsOpen} open={isOpen}>
                <DropdownMenuTrigger asChild>
                    <Avatar className="size-10">
                        <AvatarImage className="w-[40px] aspect-square" src={image || ""} alt={name || "user guest"}/>
                        <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 font-work-sans mt-6 font-semibold mr-4">
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            Manage My Account
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            My Order
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Wishlist
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={LogOut}>
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
export default ProfileButton
