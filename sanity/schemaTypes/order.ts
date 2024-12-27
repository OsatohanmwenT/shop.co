import {defineField, defineType} from "sanity";

export const order = defineType({
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
        defineField({
            name: 'user',
            type: 'reference',
            to: { type: 'user' },
        }),
        defineField({
            name: 'orderItems',
            title: 'Order Items',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'product',
                            title: 'Product',
                            type: 'reference',
                            to: [{ type: 'product' }],
                        },
                        { name: 'quantity', title: 'Quantity', type: 'number' },
                        { name: 'price', title: 'Price', type: 'number' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'totalAmount',
            type: 'number',
        }),
        defineField({
            name: 'status',
            title: 'Order Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Pending', value: 'pending' },
                    { title: 'Completed', value: 'completed' },
                    { title: 'Cancelled', value: 'cancelled' },
                ],
            },
        }),
        defineField({
            name: 'createdAt',
            title: 'Created At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        })
    ]
})