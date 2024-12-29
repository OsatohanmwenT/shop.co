import {defineQuery} from "groq";

export const BANNER_QUERY = defineQuery(`*[_type=="banner" && defined(title)][0]{subtitle, _id, image{asset -> {url}}, title, link}`)

export const PRODUCT_QUERY = defineQuery(`*[_type=="product" && defined(slug.current)] | order(_createdAt desc) [0...3] {name, _id, images[]{asset -> {url}}, price, categories[] -> {_id,name}, discount, rating}`)

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
  ] | order(_createdAt desc)
{
  name,
  _id,
  images[]{asset -> {url}},
  price,
  categories[] -> {_id, name},
  discount,
  rating
}`);

export const TRENDING_PRODUCT_QUERY = defineQuery(`*[_type=="product" && defined(slug.current) && isTrending ] | order(_createdAt desc) {name, _id, images[]{asset -> {url}}, price, categories[] -> {_id,name}, discount, rating}`)

export const FILTER_QUERY = defineQuery(`*[_type == "filter"] | order(_createdAt desc) {
    _id,
    slug,
    title,
    source,
    type,
    options,
    "sources": *[_type == ^.source] {_id,name}
}`)