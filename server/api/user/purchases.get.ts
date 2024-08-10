export default defineEventHandler(async (event) => {

    // await validateRequest(event);
    if (!event.context.user) {
        return [];
    }
    const userPurchases = await db.purchase.findMany({
        where: {
            userId: event.context.user?.id
        },
        include: {
            product: true
        }
    })
    return userPurchases;
})