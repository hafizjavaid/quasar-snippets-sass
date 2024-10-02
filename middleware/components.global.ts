export default defineNuxtRouteMiddleware(async (to) => {
    // Skip middleware on initial client load
    const nuxtApp = useNuxtApp()
    if (import.meta.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered) return

    if(import.meta.server) return

    if (to.path.includes('auth')) return

    const allComponents = useComponents();
    const { toggleLoading, showError } = useStore();

    if (!allComponents.value) {
        // TODO
        try {
            toggleLoading(true);
            const data = await $fetch('/api/components');
            // console.log(data);
            allComponents.value = data;

        } catch (error) {
            const err = handleError(error);
            showError(err);
        } finally {
            toggleLoading(true);

        }
    }
})
