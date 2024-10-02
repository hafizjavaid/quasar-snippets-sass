import { products } from "~/server/utils/products"

export default defineCachedEventHandler(async (event) => {
    return products

}, {
    maxAge: 1
})