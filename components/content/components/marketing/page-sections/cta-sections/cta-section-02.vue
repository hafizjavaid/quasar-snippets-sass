<template>
    <div class="full-width q-py-lg q-py-md-xl">
        <div>
            <div style="max-width: 500px;" class="">
                <h1 :class="[$q.screen.gt.sm ? 'text-h4' : 'text-h6']" class="text-weight-bold q-mb-md q-mt-none">
                    Boost your productivity. Start using our app today.
                </h1>
                <div class="flex items-center">
                    <q-btn class="q-mr-sm " color="primary" label="Get started" no-caps unelevated></q-btn>
                    <q-btn flat label="Learn more" color="grey-9" no-caps unelevated
                        icon-right="mdi-arrow-right"></q-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
const $q = useQuasar();


</script>

<style scoped></style>