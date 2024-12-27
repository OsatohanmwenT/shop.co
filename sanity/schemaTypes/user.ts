import {defineField, defineType} from "sanity";
import {UserIcon} from "@sanity/icons";

export const user = defineType({
    name: 'user',
    title: 'User',
    type: "document",
    icon: UserIcon,
    fields: [
        defineField({
            name: "id",
            type: "number"
        }),
        defineField({
            name: "name",
            type: "string"
        }),
        defineField({
            name: "username",
            type: "string"
        }),
        defineField({
            name: "email",
            type: "string"
        }),
        defineField({
            name: "image",
            type: "url"
        }),
        defineField({
            name: "bio",
            type: "text"
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'object',
            fields: [
                { name: 'street', title: 'Street', type: 'string' },
                { name: 'city', title: 'City', type: 'string' },
                { name: 'state', title: 'State', type: 'string' },
                { name: 'postalCode', title: 'Postal Code', type: 'string' },
                { name: 'country', title: 'Country', type: 'string' },
            ],
        }),
        defineField({
            name: 'orders',
            title: 'Orders',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'order' }] }],
        },)
    ],
    preview: {
        select: {
            title: "name",
        }
    }
})