"use client"

import {useEffect, useState} from "react";
import {generateCartId} from "@/lib/utils";

const CART_ID_KEY = "cartId";

const useCartId = () => {
    const [cartId, setCartId] = useState<string>(CART_ID_KEY);

    useEffect(() => {
        let localCartId = localStorage.getItem(CART_ID_KEY);

        if (!localCartId) {
            localCartId = generateCartId();
            localStorage.setItem(CART_ID_KEY, localCartId);
        }

        setCartId(localCartId);
    }, []);

    return cartId;
};

export default useCartId;