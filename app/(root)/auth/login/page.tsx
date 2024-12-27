import React from 'react'
import {auth, signIn} from "@/auth";
import {Button} from "@/components/ui/button";
import {FaGithub, FaGoogle} from "react-icons/fa";
import {redirect} from "next/navigation";

const Page = async () => {
    const session = await auth();
    if (session) {
        console.log("session", session);
        redirect("/");
    }

    return (
        <div className="sign-in_container">
            <h1 className="font-work-sans font-bold text-3xl">SIGN IN</h1>
            <div className="border-2 rounded-xl flex flex-col items-center justify-center gap-4 p-5 w-fit">
                <form action={async () => {
                    "use server";
                    await signIn('github')
                }}>
                    <Button variant="outline" className="font-work-sans w-full" type="submit">
                        <FaGithub/>
                        Login with Github
                    </Button>
                </form>
                <form action={async () => {
                    "use server";
                    await signIn('google')
                }}>
                    <Button variant="outline" className="font-work-sans w-full" type="submit">
                        <FaGoogle/>
                        Login with Google
                    </Button>
                </form>
            </div>
        </div>
    )
}
export default Page
