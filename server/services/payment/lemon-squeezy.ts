import { CheckoutOptions } from "./types";
import { PaymentService } from "./payment-service";

import { lemonSqueezySetup, createCheckout } from "@lemonsqueezy/lemonsqueezy.js";

export class LemonSqueezyService implements PaymentService {
    constructor() {
        const apiKey = process.env.LEMONSQUEEZY_API_KEY;
        if (!apiKey) {
            throw new Error("LemonSqueezy API key is missing");
        }

        lemonSqueezySetup({
            apiKey,
            onError: (error) => console.error("LemonSqueezy Error:", error),
        });
    }


    async createCheckoutLink(options: CheckoutOptions): Promise<string> {
        const response = await createCheckout(
            String(process.env.LEMONSQUEEZY_STORE_ID),
            options.variantId,
            {
                productOptions: {
                    redirectUrl: options.redirectUrl,
                    enabledVariants: [Number.parseInt(options.variantId)],
                },
                checkoutData: {
                    email: options.email,
                    name: options.name,
                    // TODO: Convert this to utils
                    discountCode: "IYNZQ4MG",
                    custom: {
                        user_id: options.userId,
                    },
                },
            },
        );

        const url = response.data?.data.attributes.url;
        if (!url) {
            throw new Error("Failed to create checkout link");
        }
        return url;
    }
}
