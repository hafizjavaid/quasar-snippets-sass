export default defineEventHandler(async (event) => {
    const products = await db.product.findMany();
    return products;
})