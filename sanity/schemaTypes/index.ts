import { type SchemaTypeDefinition } from 'sanity'
import {user} from "@/sanity/schemaTypes/user";
import {product} from "@/sanity/schemaTypes/product";
import {category} from "@/sanity/schemaTypes/category";
import {review} from "@/sanity/schemaTypes/reviews";
import {banner} from "@/sanity/schemaTypes/banner";
import {order} from "@/sanity/schemaTypes/order";
import {cart} from "@/sanity/schemaTypes/cart";
import {brand} from "@/sanity/schemaTypes/brand";
import {specification} from "@/sanity/schemaTypes/specification";
import {filter} from "@/sanity/schemaTypes/filter";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [user,product,category,review,banner,order,cart,brand,specification,filter],
}
