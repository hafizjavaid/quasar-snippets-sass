<template>
    <div class="full-width q-pa-md-xl q-pa-lg">
        <div class="row items-center">
            <div class="col-12 col-md-6 q-py-md q-py-md-xl q-pr-md q-pr-md-xl" :class="[!$q.screen.lt.md ? 'text-left' : 'text-center']">
                <div style="max-width: 500px;" class="q-mx-auto">
                    <h1 :class="[$q.screen.gt.sm ? 'text-h4' : 'text-h6']" class="text-weight-bold q-mb-md">
                        Boost your productivity. Start using our app today.
                    </h1>
                    <p class="text-subtitle2 text-weight-medium q-mb-md">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                        lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                        fugiat aliqua.
                    </p>

                    <div class="flex justify-center justify-md-start">
                        <q-btn class="q-mr-sm " color="primary" label="Get started" no-caps unelevated></q-btn>
                        <q-btn flat label="Learn more" color="grey-9" no-caps unelevated
                            icon-right="mdi-arrow-right"></q-btn>
                    </div>

                </div>
            </div>
            <div class="col-12 col-md-6">
                <q-img src="https://cdn.vuetifyjs.com/docs/images/one/snips/screenshots/vuetify-get-started-light.png"
                    fit="cover" position="-50% 50%" style="min-height: 440px;">
                </q-img>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
const $q = useQuasar();


</script>

<style scoped></style>