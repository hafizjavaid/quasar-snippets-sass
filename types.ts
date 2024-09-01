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
    anchor: string;
    description: string;
    isNew: boolean;
    isLicensed: boolean;
    price: Price;
    checkout_id: string;
    pricing_description: string;
    categories: Category[];
};