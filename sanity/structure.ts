import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
        S.documentTypeListItem("product").title('Product'),
        S.documentTypeListItem("banner").title('Banner'),
        S.documentTypeListItem("user").title('User'),
        S.documentTypeListItem("category").title('Category'),
        S.documentTypeListItem("review").title('Review'),
        S.documentTypeListItem("order").title('Order'),
        S.documentTypeListItem("cart").title('Cart'),
        S.documentTypeListItem("brand").title('Brand'),
        S.documentTypeListItem("specification").title('Specification'),
        S.documentTypeListItem("filter").title('Filter'),
    ])
