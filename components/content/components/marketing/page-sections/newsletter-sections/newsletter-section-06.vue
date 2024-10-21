<template>
    <div class="full-width q-pa-lg">
        <div class="row">
            <div class="col-12 col-md-7">
                <h1 :class="[$q.screen.gt.sm ? 'text-h4' : 'text-h6']" class="text-weight-bold q-mt-none q-mb-md">
                    Want product news and updates?
                </h1>
                <p class="q-my-none" style="max-width: 500px;">
                    Subscribe to our newsletter to receive the latest updates and exclusive offers directly in your
                    inbox.
                </p>
                <q-input class="q-my-md" style="max-width: 450px" v-model="email" unelevated outlined
                    placeholder="Enter your email">
                    <template v-slot:append>
                        <q-btn class="" color="primary" label="Subscribe" no-caps unelevated></q-btn>
                    </template>
                </q-input>
                <p class="text-caption">
                    We care about your data. Read our <span class="text-primary text-weight-medium">privacy
                        policy.</span>
                </p>
            </div>
            <div class="col-12 col-md-5 flex justify-end items-center">
                <q-img alt="Newsletter Image" style="max-width: 400px; border-radius: 20px" rounded
                    src="https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');


</script>

<style lang="scss" scoped></style>