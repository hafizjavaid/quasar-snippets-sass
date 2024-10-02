import { CheckoutOptions } from "./types";

export interface PaymentService {
    createCheckoutLink(options: CheckoutOptions): Promise<string>;
}
