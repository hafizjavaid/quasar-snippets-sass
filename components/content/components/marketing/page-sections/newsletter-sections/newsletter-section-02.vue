<template>
    <div class="full-width">
        <div class="q-pa-lg">
            <div class="row items-center q-col-gutter-lg">
                <div class="col-12 col-md-7">
                    <div class="" style="max-width: 600px;" :class="[$q.screen.lt.md ? 'q-mx-auto' : '']">
                        <h1 class="text-weight-bold q-mt-none q-mb-md"
                            :class="[$q.screen.lt.md ? 'text-center text-h6' : 'text-left text-h4']">
                            Want product news and updates?
                            Sign up for our newsletter.
                        </h1>
                    </div>
                </div>
                <div class="col-12 col-md-5">
                    <div style="max-width: 560px;" class="q-mx-auto">
                        <q-input v-model="email" unelevated standout placeholder="Enter your email">
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
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');


</script>

<style scoped></style>