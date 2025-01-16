"use client"

import {useEffect, useRef, useState} from "react";
import {generateCartId} from "@/lib/utils";
import {useSession} from "next-auth/react";
import {linkCartToUser} from "@/lib/actions";

const CART_ID_KEY = "cartId";

const useCartId = () => {
    const { data: session } = useSession();
    const [cartId, setCartId] = useState<string>(CART_ID_KEY);

    useEffect(() => {
        const localCartId = localStorage.getItem(CART_ID_KEY);
            if (!localCartId) {
                const newCartId = generateCartId();
                localStorage.setItem(CART_ID_KEY, newCartId);
                setCartId(newCartId);
            } else {
                setCartId(localCartId);
            }
    }, [session]);

    return cartId;
};

export default useCartId;