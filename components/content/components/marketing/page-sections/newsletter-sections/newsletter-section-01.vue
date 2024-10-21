<template>
    <div class="full-width">
        <div class="q-pa-lg">
            <div class="row items-center q-col-gutter-lg">
                <div class="col-12 col-md-6">
                    <div style="max-width: 450px;">
                        <h1 :class="[$q.screen.gt.sm ? 'text-h5' : 'text-body2']"
                            class="text-weight-bold q-mt-none q-mb-md">
                            Subscribe to our newsletter.
                        </h1>
                        <p class="text-subtitle2 text-grey-8 q-mb-md q-mt-none">
                            Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor
                            incididunt
                            dolore.
                        </p>
                        <q-input v-model="email" unelevated standout placeholder="Enter your email">
                            <template v-slot:append>
                                <q-btn class="" color="primary" label="Subscribe" no-caps unelevated></q-btn>
                            </template>
                        </q-input>
                    </div>
                </div>
                <div v-for="item in newsletterItems" :key="item.title" class="col-12 col-sm-6 col-md-3">
                    <div>
                        <q-btn unelevated color="primary" class="q-mb-sm" :icon="item.icon">
                        </q-btn>
                        <p class="text-body2 text-weight-bold q-my-none q-pb-sm">
                            {{ item.title }}
                        </p>
                        <p class="text-caption q-my-none">{{ item.subtitle }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');

const newsletterItems = [
    {
        title: 'Weekly articles',
        subtitle: 'Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis.',
        icon: 'mdi-calendar',
    },
    {
        title: 'No spam',
        subtitle: 'Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.',
        icon: 'mdi-email-off',
    },
]

</script>

<style scoped></style>