import {defineField, defineType} from "sanity";

export const filter = defineType({
    name: "filter",
    title: "Filter",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Filter Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "type",
            title: "Filter Type",
            type: "string",
            options: {
                list: [
                    { title: "Range", value: "range" },
                    { title: "Checkbox", value: "checkbox" },
                ],
                layout: "radio",
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "options",
            title: "Filter Options",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            hidden: ({ parent }) => parent?.type === "range", // Only show for non-range filters
        }),
        defineField({
            name: "slug",
            title: "Filter ID",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "dynamicOptions",
            title: "Fetch Options Dynamically",
            type: "boolean",
            hidden: ({ parent }) => parent?.type !== "checkbox",
            description: "Enable to fetch checkbox options dynamically.",
        }),
        defineField({
            name: "source",
            title: "Source Document",
            type: "string",
            description: "Specify the source field to fetch options dynamically.",
            hidden: ({ parent }) => !parent?.dynamicOptions,
            options: {
                list: ["brand", "category", "tags"],
            },
        })
    ]
})