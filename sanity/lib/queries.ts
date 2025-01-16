import {defineQuery} from "groq";

export const BANNER_QUERY = defineQuery(`*[_type=="banner" && defined(title)][0]{subtitle, _id, image{asset -> {url}}, title, link}`)

export const PRODUCT_QUERY = defineQuery(`*[_type=="product" && defined(slug.current)] | order(_createdAt desc) [0...3] {name, _id, images[]{asset -> {url}}, price, categories[] -> {_id,name}, discount, stock, rating}`)

export const PRODUCT_BY_ID_QUERY = defineQuery(`*[_type=="product" && _id == $id][0]{name, _id, description, images[]{asset -> {url}}, price, categories[] -> {_id,name}, discount, stock, rating}`)

export const ALL_PRODUCT_QUERY = defineQuery(`*[
  _type == "product" &&
  defined(slug.current) &&
  (
    !defined($search) || 
    name match $search || 
    (categories[]->name match $search) || 
    (tags[] match $search)
  ) &&
  (!defined($minPrice) || price >= $minPrice) &&
  (!defined($maxPrice) || price <= $maxPrice) &&
  (!defined($brands) || brand->name in $brands)
  ][$start...$end] | order(_createdAt desc)
{
  name,
  _id,
  images[]{asset -> {url}},
  price,
  categories[] -> {_id, name},
  discount,
  rating,
  stock
}`);

export const TRENDING_PRODUCT_QUERY = defineQuery(`*[_type=="product" && defined(slug.current) && isTrending ] | order(_createdAt desc) {name, _id, images[]{asset -> {url}}, price, categories[] -> {_id,name}, stock, discount, rating}`)

export const FILTER_QUERY = defineQuery(`*[_type == "filter"] | order(_createdAt asc) {
    _id,
    slug,
    title,
    source,
    type,
    options,
    "sources": *[_type == ^.source] {_id,name}
}`)

export const CART_BY_USER_QUERY = defineQuery(`*[_type == "cart" && _id == $cartId][0]{_id,cartItems,user}`)

export const CART_LIST_BY_USERID_QUERY = defineQuery(`*[_type == "cart" && _id == $cartId || user._ref == $cartId][0]{_id,cartItems[]{product->{_id,name,discount,price,stock,images[]}}`)

export const COUNT_QUERY = defineQuery(`count(*[
  _type == "product" &&
  defined(slug.current) &&
  (
    !defined($search) || 
    name match $search || 
    (categories[]->name match $search) || 
    (tags[] match $search)
  ) &&
  (!defined($minPrice) || price >= $minPrice) &&
  (!defined($maxPrice) || price <= $maxPrice) &&
  (!defined($brands) || brand->name in $brands)
  ])`)

export const USER_BY_ID_QUERY = defineQuery(`
*[_type == "user" && id == $id][0]{
_id,
id,
name,
username,
email,
image,
bio
}
`)