import { verifySignature } from "~/server/utils/verifySignature";

interface WebhookPayload {
    data: {
        attributes: {
            status: string;
            total_formatted: string;
            user_name: string;
            user_email: string;
            discount_total_formatted: string;
            first_order_item: {
                product_name: string;
                product_id: number
            };
            customer_id: number,
        };
    };
}

export default defineEventHandler(async (event) => {
    try {
        console.log("Received webhook");
        const webhookSecret = await validateWebhookSecret();
        const signatureHeader = validateSignatureHeader(event);
        const body = await validateRequestBody(event);

        await validateSignature(body, signatureHeader, webhookSecret);

        const payload: WebhookPayload = JSON.parse(body);
        console.log('---Payload', payload);



        // Check if customer already exist or not and then Save Customer 

        // Add Purchase 




        return "OK";
    } catch (error) {
        if (error instanceof Error) {
            throw createError({
                statusCode: 400,
                statusMessage: "Invalid request",
                message: error.message,
            });
        } else {
            throw createError({
                statusCode: 400,
                statusMessage: "Invalid request",
                message: "An unknown error occurred",
            });
        }
    }
});

async function validateWebhookSecret(): Promise<string> {
    const webhookSecret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
    if (!webhookSecret) {
        throw new Error("LemonSqueezy Webhook Secret is missing");
    }
    return webhookSecret;
}

function validateSignatureHeader(event: any): string {
    const signatureHeader = getHeader(event, "x-signature");
    if (!signatureHeader) {
        throw createError({
            statusCode: 400,
            statusMessage: "LemonSqueezy signature is missing",
        });
    }
    return signatureHeader;
}

async function validateRequestBody(event: any): Promise<string> {
    const body = await readRawBody(event);
    if (!body) {
        throw createError({
            statusCode: 400,
            statusMessage: "Request body is missing",
        });
    }
    return body;
}

async function validateSignature(
    body: string,
    signatureHeader: string,
    webhookSecret: string
): Promise<void> {
    const isValidSignature = await verifySignature(
        body,
        signatureHeader,
        webhookSecret
    );
    if (!isValidSignature) {
        console.log("Invalid signature");
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid signature",
        });
    }
}

