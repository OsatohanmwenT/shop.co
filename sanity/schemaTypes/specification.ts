import {defineField, defineType} from "sanity";

export const specification = defineType({
    name: "specification",
    title: "Specification",
    type: "object",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
        }),
        defineField({
            name: "value",
            title: "Value",
            type: "string",
        }),
    ],
});
