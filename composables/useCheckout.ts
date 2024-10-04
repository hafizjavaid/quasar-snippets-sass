
export default () => {
    const { toggleLoading, showError } = useStore();
    const { baseUrl } = useRuntimeConfig().public;
    const createCheckout = async (variantId: number) => {
        try {
            toggleLoading(true);
            const data = await $fetch("/api/lemon-squeezy/checkout", {
                method: "POST",
                body: {
                    variantId: variantId + '',
                    redirectUrl: `${baseUrl}`,
                },
            });
            window.location.href = data;
        } catch (error) {
            const err = handleError(error);
            showError(err);
        } finally {
            toggleLoading(false);
        }
    };

    return {
        createCheckout
    }
}