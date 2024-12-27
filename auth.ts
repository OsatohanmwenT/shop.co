import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import GitHub from "@auth/core/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [Google,GitHub]
})