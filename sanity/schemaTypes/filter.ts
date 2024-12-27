import {defineField, defineType} from "sanity";

export const filter = defineType({
    name: "filter",
    title: "Filter",
    type: "document",
    fields: [
        defineField({
            name: "name",
            type: "string",
        })
    ]
})