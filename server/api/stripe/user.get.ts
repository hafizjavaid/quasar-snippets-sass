export default defineEventHandler(async (event) => {
    await validateRequest(event);
    const userSubscription = await db.stripeCustomer.findUnique({
        where: {
            userId: event.context.user?.id,
        },
        select: {
            stripeCustomerId: true
        }
    });
    const userPurchases = await db.purchase.findMany({
        where: {
            userId: event.context.user?.id
        }
    })
    console.log('[USER_PURCHASES]', userPurchases);
    console.log('[USER_SUBSCRIPTION]', userSubscription);
    return userSubscription;
})