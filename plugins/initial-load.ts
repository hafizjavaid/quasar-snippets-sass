export default defineNuxtPlugin(() => {
    onNuxtReady(async() => {
        const allComponents = useComponents();

        // TODO
        const { data } = await useFetch('/api/components');
        allComponents.value = data.value;

    })
})