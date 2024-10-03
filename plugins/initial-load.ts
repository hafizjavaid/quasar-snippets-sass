export default defineNuxtPlugin(() => {
    onNuxtReady(async () => {
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
                toggleLoading(false);
            }
        }

    })
})