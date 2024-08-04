// import type { H3Event } from 'h3';
import Stripe from 'stripe'

export default defineEventHandler(async (event) => {
    await validateRequest(event);
    const returlUrl = absoluteUrl(undefined);
    const user = event.context.user;

    const body = await readBody(event);

    console.log(body);

    const products = await db.product.findMany();

    console.log(products);
    
    
    

    // Check if current Product exist or not
    const product = await db.product.findUnique({
        where: {
            id: body.id,
            
        },
    })

    if (!product) {
        throw createError({
            statusCode: 404,
            statusMessage: 'No Product Found',
        });

    }


    if (event.context.user && body.id) {


        // Check if product is already purchased or not
        const purchase = await db.purchase.findUnique({
            where: {
                userId_productId: {
                    userId: event.context.user?.id,
                    productId: body.id,
                },
            },
        })
        if (purchase) {
            throw createError({
                statusCode: 400,
                statusMessage: `${product.title} is already Purchased`,
            });
        }

        // Product Details ( We will show this in checkout page )
        const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
            {
                quantity: 1,
                price_data: {
                    currency: 'usd',
                    unit_amount: Math.round(product.price! * 100),
                    product_data: {
                        name: product.title,
                        description: product.description ? product.description : undefined,
                    },
                },
            },
        ]

        // Find Customer 
        let stripeCustomer = await db.stripeCustomer.findUnique({
            where: {
                userId: user?.id
            },
            select: {
                stripeCustomerId: true
            }
        })

        // Create Customer 
        if (!stripeCustomer) {
            const customer = await stripe.customers.create({
                email: event.context.user.email ? event.context.user.email : undefined
            })

            stripeCustomer = await db.stripeCustomer.create({
                data: {
                    userId: event.context.user?.id,
                    stripeCustomerId: customer.id,
                },
            })
        }

        const stripeSession = await stripe.checkout.sessions.create({
            success_url: returlUrl,
            cancel_url: returlUrl,
            payment_method_types: ["card"],
            mode: 'payment',
            billing_address_collection: "auto",
            customer: stripeCustomer.stripeCustomerId ? stripeCustomer.stripeCustomerId : undefined,
            line_items,
            metadata: {
                userId: user?.id ? user.id : null,
                productId: product.id
            },
        })


        return stripeSession.url



    }




})