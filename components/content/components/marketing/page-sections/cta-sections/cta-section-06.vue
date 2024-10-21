<template>
    <div class="full-width">
        <div class="row items-center">
            <div class="col-12 col-md-6">
                <q-img fit="cover" style="max-height: 440px;"
                    src="https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <div class="col-12 col-md-6 q-pa-md q-pa-md-xl" :class="[!$q.screen.lt.md ? 'text-left' : 'text-center']">
                <div class="q-mx-auto" style="max-width: 500px;">

                    <p class="text-weight-medium text-primary pb-1 q-my-none">Award wining support</p>
                    <h1 :class="[$q.screen.gt.sm ? 'text-h4' : 'text-h6']" class="text-weight-bold q-mb-md q-mt-none">
                        We're here to help
                    </h1>
                    <p class="text-subtitle2 text-weight-medium q-mb-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed.
                        Quam a
                        scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut
                        interdum
                        tincidunt duis.
                    </p>
                    <q-btn color="primary" label="Visit the help center" no-caps unelevated></q-btn>
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