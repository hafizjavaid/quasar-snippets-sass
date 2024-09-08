export default defineNuxtPlugin(() => {
    onNuxtReady(async () => {
        const allComponents = useComponents();

        // TODO
        try {
            const data = await $fetch('/api/components');
            allComponents.value = data;

        } catch (error) {
            console.log(error);

        }
        // const { data } = await useFetch('/api/components');
        // allComponents.value = data.value;

    })
})