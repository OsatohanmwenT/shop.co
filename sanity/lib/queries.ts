import {defineQuery} from "groq";

export const BANNER_QUERY = defineQuery(`*[_type=="banner" && defined(title)][0]{subtitle, _id, image{asset -> {url}}, title, link}`)

export const PRODUCT_QUERY = defineQuery(`*[_type=="product" && defined(slug.current)] | order(_createdAt desc) [0...3] {name, _id, images[]{asset -> {url}}, price, categories[] -> {_id,name}, discount, rating}`)

export const ALL_PRODUCT_QUERY = defineQuery(`*[_type=="product" && defined(slug.current) && ( !defined($search) || name match $search || categories[]->name match $search || tags[] match $search )] | order(_createdAt desc) {name, _id, images[]{asset -> {url}}, price, categories[] -> {_id,name}, discount, rating}`)

export const TRENDING_PRODUCT_QUERY = defineQuery(`*[_type=="product" && defined(slug.current) && isTrending ] | order(_createdAt desc) {name, _id, images[]{asset -> {url}}, price, categories[] -> {_id,name}, discount, rating}`)