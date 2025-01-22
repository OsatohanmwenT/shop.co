import React from 'react'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Skeleton} from "@/components/ui/skeleton";
import {Cart} from "@/sanity/types";
import {urlFor} from "@/sanity/lib/image";
import Link from "next/link";
import {formatPrice} from "@/lib/utils";

interface Props {
    isLoading: boolean;
    cart: Cart;
    onError: string | null
}

const CartTable = ({isLoading, cart, onError}: Props) => {
    return (
        <div className="border rounded-lg overflow-hidden">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Subtotal</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                        {cart === null || cart.cartItems === null || onError &&
                            <TableRow>
                                <TableCell colSpan={4}>
                                    <div className="rounded-lg py-10 bg-red-50 border-red-400 border flex items-center justify-center">
                                        <p className="text-red-700 font-work-sans">No Cart Items Found</p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        }
                        {isLoading ?
                            <TableRow>
                                <TableCell className="p-0" colSpan={4}>
                                    <Skeleton className="h-40 w-full rounded-none" />
                                </TableCell>
                            </TableRow>
                            :
                            <>
                            {cart?.cartItems?.map((item) => (
                                <TableRow key={item._key}>
                                    <TableCell>
                                        <div className="flex items-center">
                                            <img
                                                src={urlFor(item?.product?.images[0]).width(80).url()}
                                                alt={item?.product?.name}
                                                className="w-[60px] object-contain"
                                            />
                                            <div className="ml-4 max-w-sm">
                                                <Link href={`/products/${item?.product?._id}`} className="font-work-sans hover:text-yellow-700 max-lg:line-clamp-2 text-neutral-500 text-xs sm:text-sm">{item?.product?.name}</Link>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <p className="font-work-sans text-sm">{formatPrice(item?.product?.price)}</p>
                                    </TableCell>
                                    <TableCell>
                                        <p className="font-work-sans text-center text-sm">{item.quantity}</p>
                                    </TableCell>
                                    <TableCell>
                                        <p className="font-work-sans font-bold text-sm">${(item?.product?.price * item?.quantity).toFixed(2)}</p>
                                    </TableCell>
                                </TableRow>
                            ))}
                            </>
                        }
                </TableBody>
            </Table>
        </div>
    )
}
export default CartTable
