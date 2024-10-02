export default defineCachedEventHandler(async (event) => {
    const { user } = await getUserSession(event);

    if (!user) {
        return [];
    }
    const userPurchases = await db.purchase.findMany({
        where: {
            userId: user.id
        },
    })
    return userPurchases;
})