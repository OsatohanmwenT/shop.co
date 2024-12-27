import {defineField, defineType} from "sanity";

export const banner = defineType({
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields:  [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            type: 'string',
        }),
        defineField({
            name: 'image',
            type: 'image',
        }),
        defineField({
            name: 'link',
            type: 'url',
        })
    ]
})