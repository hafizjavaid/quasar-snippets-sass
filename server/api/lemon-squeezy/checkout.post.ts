import { checkoutLinkSchema } from "~/server/validations/payments";
import { createCheckout } from "@lemonsqueezy/lemonsqueezy.js";
import { LemonSqueezyService } from "~/server/services/payment/lemon-squeezy";


export default defineEventHandler(async (event) => {
    const { user } = await requireUserSession(event);

    const { variantId, redirectUrl } = await readValidatedBody(event, (body) =>
        checkoutLinkSchema.parse(body),
    );

    const purchase = await db.purchase.findUnique({
        where: {
            userId_productId: {
                userId: user.id,
                productId: variantId + '',
            },
        },
    })

    if (purchase) {
        throw createError({
            statusCode: 400,
            statusMessage: `Product is already Purchased`,
        });
    }

    // // Find Customer 
    // let lemonSqueezyCustomer = await db.lemonSqueezyCustomer.findUnique({
    //     where: {
    //         userId: user.id
    //     },
    //     select: {
    //         lemonSqueezyCustomerId: true
    //     }
    // })

    // // Create Customer 
    // if (!lemonSqueezyCustomer) {
    //     lemonSqueezyCustomer = await db.lemonSqueezyCustomer.create({
    //         data: {
    //             userId: user.id,
    //             lemonSqueezyCustomerId: customer.id,
    //         },
    //     })
    // }

    // const checkoutSession = await createCheckout(String(process.env.LEMONSQUEEZY_STORE_ID), variantId, {
    //     productOptions: {
    //         redirectUrl,
    //         enabledVariants: [Number.parseInt(variantId)],
    //     },
    //     checkoutData: {
    //         email: user.email,
    //         name: user.name,
    //         // TODO: Convert this to utils
    //         discountCode: "IYNZQ4MG",
    //         custom: {
    //             user_id: user.id,
    //         },
    //     },
    // });

    // console.log(checkoutSession);


    // const url = checkoutSession.data?.data.attributes.url;


    // if (!url) {
    //     throw createError({
    //         statusCode: 400,
    //         statusMessage: `Failed to create checkout link`,
    //     });
    // }

    // return url;

    const lemonsqueezy = new LemonSqueezyService();

    const checkoutLink = await lemonsqueezy.createCheckoutLink({
        userId: user.id,
        email: user.email,
        name: user.name,
        variantId,
        redirectUrl,
    });
    return checkoutLink;
})