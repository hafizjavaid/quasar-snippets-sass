export default defineNuxtPlugin(() => {
    onNuxtReady(async() => {
        const allComponents = useComponents();
        const { data } = await useFetch('/api/components');
        allComponents.value = data.value;

    })
})