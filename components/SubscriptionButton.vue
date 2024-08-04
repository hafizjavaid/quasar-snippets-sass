<template>

    <p>

        {{
            isPro ? 'You are currently on a Pro plan.' : 'You are currently on a free plan.'
        }}

    </p>

    <q-btn v-if="!isPro" @click="manageSubscription" padding="8px 10px" color="primary" unelevated>
        Become Pro
                </q-btn>


</template>

<script setup lang="ts">
const isLoading = ref(false);
const isPro = ref(false);
const manageSubscription = async () => {
    console.log(' Upgrade');
    
};

// const { data: isPro, pending } = await useFetch('/api/stripe/checkStatus');
</script>

<style scoped></style>