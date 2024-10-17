type Price = {
    currency: string;
    advertised: number;
    amount: number;
};

export type Subcategory = {
    name: string;
    url: string;
    imageUrl: string;
    components: string;
    isNew: boolean;
    isLocked: boolean;
    isPublished?: boolean;

};

type Category = {
    anchor: string;
    name: string;
    subcategories: Subcategory[];
};

export type SingleComponent = {
    name: string;
    description: string;
    priceDescription: string;
    price: Price;
    checkoutUrl: string;
    productId: number;
    productVariantId: number;
    anchor: string;
    isLicensed: boolean;
    categories?: Category[];
    linkIdentifier: string

    // name: 'All-access',
    // description: 'Includes access to all 500+ components and templates available in Quasar UI today, plus all future updates.',
    // priceDescription: 'Get lifetime access to all of the application UI, marketing, and ecommerce components, as well as all of our site templates for a single one-time purchase. ',
    // price: {
    //     currency: "USD",
    //     advertised: 149,
    //     amount: 299
    // },
    // checkoutUrl: "https://quasarsnippets.lemonsqueezy.com/buy/351682de-f0f8-475c-a13b-160a75694de7",
    // productId: 362511,
    // productVariantId: 538563,
    // isLicensed: false,
};

export type APIError = {
    statusCode: number,
    statusMessage: string,
    message: string,
    data?: Record<string, string[]>
}