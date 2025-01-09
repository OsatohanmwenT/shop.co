import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import {writeClient} from "@/sanity/lib/write-client";
import {client} from "@/sanity/lib/client";
import {USER_BY_ID_QUERY} from "@/sanity/lib/queries";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async signIn({ user, profile, account }: { user: any; profile: any; account: any }) {
            if (account?.provider === "github") {
                const { id, login, bio } = profile as any;
                const existingUser = await client.withConfig({ useCdn: false }).fetch(USER_BY_ID_QUERY, {
                    id,
                });

                if (!existingUser) {
                    await writeClient.create({
                        _type: "user",
                        id,
                        name: user.name,
                        username: login,
                        email: user.email,
                        image: user.image,
                        bio: bio || "",
                    });
                }
            } else if (account?.provider === "google") {
                const existingUser = await client.withConfig({ useCdn: false }).fetch(USER_BY_ID_QUERY, {
                    id: user.id, // Using email for Google
                });

                if (!existingUser) {
                    await writeClient.create({
                        _type: "user",
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        image: user.image,
                    });
                }
            }

            return true;
        },
        async jwt({token, profile, account }: { token:any, user: any; profile: any; account: any }) {
            if (account && profile) {
                const user = await client.withConfig({ useCdn: false }).fetch(USER_BY_ID_QUERY, { id: profile?.id})

                token.id = user._id
            }
            return token;
        },
        async session({ session, token }: { session: any; token: any }) {
            Object.assign(session, { id: token.id });
            return session
        },
    },
    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: "/",
    },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);