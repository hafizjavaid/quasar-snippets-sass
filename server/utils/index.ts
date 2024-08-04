
import Stripe from 'stripe';
const config = useRuntimeConfig();
export const stripe = new Stripe(config.stripeSecret, {
    apiVersion: '2024-06-20',
    typescript: true
});

export function absoluteUrl(path: string | undefined) {
    if(path){
        return `${config.appUrl}${path}`
    }
    return `${config.appUrl}`;
}