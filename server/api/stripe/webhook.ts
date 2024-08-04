import Stripe from "stripe"
const STRIPE_WEBHOOK_SECRET =
    useRuntimeConfig().stripeWebhookSecret;

export default defineEventHandler(async (event) => {
    const signature = getHeader(event, 'Stripe-Signature') as string;
    console.log(signature, 'signature');
    
    const body = await readRawBody(event);
    // Verify the webhook signature
    let stripeEvent: Stripe.Event
    try {
        // @ts-ignore
        stripeEvent = stripe.webhooks.constructEvent(body, signature, STRIPE_WEBHOOK_SECRET);
    } catch (error) {
        console.error(error);
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid signature',
        });
    }
    const session = stripeEvent.data.object as Stripe.Checkout.Session
    const userId = session?.metadata?.userId
    const productId = session?.metadata?.productId
    if (stripeEvent.type === 'checkout.session.completed') {
        if (!userId || !productId) {

            throw createError({
                statusCode: 400,
                statusMessage: 'Webhook Error: Missing metadata',
            });
        }

        await db.purchase.create({
            data: {
                userId,
                productId,
            },
        })
    } else {
        throw createError({
            statusCode: 200,
            statusMessage: `Webhook Error: Unhandled event type ${stripeEvent.type}`,
        });
    }
    return 200;
});