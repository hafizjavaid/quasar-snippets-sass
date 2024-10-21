<template>
    <div style="max-width: 960px; border-radius: 20px; width: 100%;" class="bg-img q-mx-auto q-pa-xl">
        <div class="text-center text-white">
            <h1 :class="[$q.screen.gt.sm ? 'text-h4' : 'text-h6']"
                class="text-weight-bold q-mb-md q-mt-none text-h4 text-center">
                Join our Newsletter
            </h1>
            <p class="text-subtitle2 text-grey-5 q-mb-md q-mt-none">
                Get the latest news and updates delivered straight to your inbox.
            </p>
            <q-input class="q-mx-auto bg-white q-mb-md" square style="max-width: 500px" v-model="email" unelevated
                standout color="white" placeholder="Enter your email">
                <template v-slot:append>
                    <q-btn class="" color="primary" label="Subscribe" no-caps unelevated></q-btn>
                </template>
            </q-input>
            <p class="text-caption">
                We care about your data. Read our <span class="text-primary text-weight-medium">privacy
                    policy.</span>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');


</script>

<style lang="scss" scoped>
.bg-img {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('https://images.unsplash.com/photo-1534081333815-ae5019106622?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjY3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080');
    background-size: cover;
}
</style>