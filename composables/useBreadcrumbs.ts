type Params = {
    maincategory: string;
    subcategory: string;
    category: string;
};


export default () => {

    const route = useRoute();

    const allComponents = useComponents();

    const routeParams = computed(() => route.params as Params);

    const toTitleCase = (str: string): string => {
        // console.log(str);
        return str
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const breadcrumbs = computed(() => {
        if (allComponents.value) {
            // If Application
            if (useRoute().path.includes('application-ui')) {
                const applicationProduct = allComponents.value.find(product => product.name === 'Application UI')
                return [
                    {
                        link: `/components/${routeParams.value.maincategory}`,
                        label: toTitleCase(routeParams.value.maincategory),
                    },
                    {
                        link: `/components#${applicationProduct?.anchor}`, // #${applicationProduct?.anchor}
                        label: toTitleCase(routeParams.value.subcategory),
                    },
                    {
                        link: undefined,
                        label: toTitleCase(routeParams.value.category),
                    }
                ]
            }
            // If Marketing
            if (useRoute().path.includes('marketing')) {
                const marketingProduct = allComponents.value.find(product => product.name === 'Marketing')
                return [
                    {
                        link: `/components/${routeParams.value.maincategory}`,
                        label: toTitleCase(routeParams.value.maincategory),
                    },
                    {
                        link: `/components#${marketingProduct?.anchor}`,
                        label: toTitleCase(routeParams.value.subcategory),
                    },
                    {
                        link: undefined,
                        label: toTitleCase(routeParams.value.category),
                    }
                ]
            }
            // If Ecommerce
            if (useRoute().path.includes('ecommerce')) {
                const ecommerceProduct = allComponents.value.find(product => product.name === 'Ecommerce')
                return [
                    {
                        link: `/components/${routeParams.value.maincategory}`,
                        label: toTitleCase(routeParams.value.maincategory),
                    },
                    {
                        link: `/components#${ecommerceProduct?.anchor}`,
                        label: toTitleCase(routeParams.value.subcategory),
                    },
                    {
                        link: undefined,
                        label: toTitleCase(routeParams.value.category),
                    }
                ]
            }
        }
    })

    return {
        routeParams,
        toTitleCase,
        breadcrumbs
    }
}