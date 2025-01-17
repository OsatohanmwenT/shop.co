"use client";

import { useEffect, useState } from "react";
import { generateCartId } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { linkCartToUser } from "@/lib/actions";

const CART_ID_KEY = "cartId";

const useCartId = () => {
    const { data: session } = useSession();
    const [cartId, setCartId] = useState<string | null>(null);

    useEffect(() => {
        const localCartId = localStorage.getItem(CART_ID_KEY);

        const initializeCartId = async () => {
            if (session?.id) {
                if (localCartId) {
                    await linkCartToUser(localCartId, session.id);
                }
            } else {
                if (!localCartId) {
                    const newCartId = generateCartId();
                    localStorage.setItem(CART_ID_KEY, newCartId);
                    setCartId(newCartId);
                } else {
                    setCartId(localCartId);
                }
            }
        };

        initializeCartId();
    }, [session]);

    return cartId;
};

export default useCartId;
