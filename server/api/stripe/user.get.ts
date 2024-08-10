export default defineEventHandler(async (event) => {
    // await validateRequest(event);
    if (!event.context.user) {
        return null;
    }
    const userSubscription = await db.stripeCustomer.findUnique({
        where: {
            userId: event.context.user?.id,
        },
        select: {
            stripeCustomerId: true
        }
    });
    console.log('[USER_SUBSCRIPTION]', userSubscription);
    return userSubscription;
})