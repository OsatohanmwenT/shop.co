import {defineField, defineType} from "sanity";

export const cart = defineType({
    name: 'cart',
    title: 'Cart',
    type: 'document',
    fields: [
        defineField({
            name: 'user',
            type: 'reference',
            to: [{ type: 'user' }],
        }),
        defineField({
            name: 'cartItems',
            title: 'Cart Items',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'product',
                            type: 'reference',
                            to: [{ type: 'product' }],
                        },
                        { name: 'quantity', title: 'Quantity', type: 'number' },
                    ],
                },
            ],
        })
    ]
})