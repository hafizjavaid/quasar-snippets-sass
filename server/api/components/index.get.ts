

export default defineEventHandler(async (event) => {

    // All Free Components
    if (!event.context.user) {
        return [
            { ...marketing },
            { ...ecommerce },
            { ...applicationUI }
        ];
    }

     // User Purchased Items
    const userPurchases = await db.purchase.findMany({
        where: {
            userId: event.context.user?.id
        },
        include: {
            product: true
        }
    });

    // All Access
    const isAllAccess = userPurchases.find(p => p.product.title === 'All Access');

    // All Premium Componets
    if (isAllAccess) {

        return [
            { ...marketingPurchased },
            { ...ecommercePurchased },
            { ...applicationUIPurchased }
        ];
    };


    // Check user access for different components 
    const isMaketingAccess = userPurchases.some(p => p.product.id === marketing.checkout_id);
    const isEcommereceAccess = userPurchases.some(p => p.product.id === ecommerce.checkout_id);
    const isApplicationUIAccess = userPurchases.some(p => p.product.id === applicationUI.checkout_id);

    const userComponents = [
        !isMaketingAccess ? { ...marketing } : { ...marketingPurchased },
        !isEcommereceAccess ? { ...ecommerce } : { ...ecommercePurchased },
        !isApplicationUIAccess ? { ...applicationUI } : { ...applicationUIPurchased },
    ];

    return userComponents;


});