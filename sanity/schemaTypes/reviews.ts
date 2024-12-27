import {defineField, defineType} from "sanity";

export const review = defineType({
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
        defineField({
            name: 'user',
            title: 'User',
            type: 'reference',
            to: { type: 'user' },
        }),
        defineField({
            name: 'product',
            type: 'reference',
            to: { type: 'product' },
        }),
        defineField({
            name: 'rating',
            type: 'number',
            validation: (Rule) => Rule.min(1).max(5).error('Rating must be between 1 and 5'),
        }),
        defineField({
            name: 'comment',
            type: 'text',
        }),
        defineField({
            name: 'createdAt',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        })
    ]
})