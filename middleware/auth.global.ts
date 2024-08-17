export default defineNuxtRouteMiddleware(async () => {
	const user = useUser();
	const userPurchase = usePurchase();
	const data = await useRequestFetch()("/api/context-user");
	if (data) {
		user.value = data;
	}
	if(!userPurchase.value){
		const userPurchases = await $fetch('/api/user/purchases');
		// @ts-ignore
		userPurchase.value = userPurchases;
	}

});