import React from 'react'
import {Table, TableBody, TableHead, TableHeader, TableRow} from "@/components/ui/table";

const CartTable = () => {
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
                    <TableRow>

                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}
export default CartTable
