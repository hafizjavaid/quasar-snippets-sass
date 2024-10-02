import type { SingleComponent } from "~/types";

import { allAccess } from "~/server/utils/components";


export default defineEventHandler(async (event) => {

    const { user } = await getUserSession(event);

    // All Free Components
    if (!user) {
        console.log('No user');
        
        return [
            { ...marketing },
            { ...ecommerce },
            { ...applicationUI },
            { ...allAccess },

        ] as SingleComponent[]
    }

    // User Purchased Items
    const userPurchases = await db.purchase.findMany({
        where: {
            userId: user.id
        },
    });

    console.log('userPurchases', userPurchases);


    // All Access
    const isAllAccess = userPurchases.find(p => p.productName === 'All-access' && p.productId === 538563 + '');

    // All Premium Componets
    if (isAllAccess) {
        return [
            { ...marketing, isLicensed: true },
            { ...ecommerce, isLicensed: true },
            { ...applicationUI, isLicensed: true },
            { ...allAccess, isLicensed: true },
        ] as SingleComponent[]
    };


    // Check user access for different components 
    const isMaketingAccess = userPurchases.some(p => p.productId === marketing.productVariantId + '');
    const isEcommereceAccess = userPurchases.some(p => p.productId === ecommerce.productVariantId + '');
    const isApplicationUIAccess = userPurchases.some(p => p.productId === applicationUI.productVariantId + '');

    // console.log('isMaketingAccess', isMaketingAccess);
    // console.log('isEcommereceAccess', isEcommereceAccess);
    console.log('isApplicationUIAccess', isApplicationUIAccess);



    const userComponents = [
        !isMaketingAccess ? { ...marketing } : { ...marketing, isLicensed: true },
        !isEcommereceAccess ? { ...ecommerce } : { ...ecommerce, isLicensed: true },
        !isApplicationUIAccess ? { ...applicationUI } : { ...applicationUI, isLicensed: true },
        { ...allAccess, isLicensed: false },
    ];
    return userComponents as SingleComponent[];
});