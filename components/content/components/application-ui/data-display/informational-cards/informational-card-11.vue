<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <q-card style="max-width: 400px; border-radius: 12px" class="q-mx-auto shadow-inset shadow-1 q-pa-md">
            <q-card-section class="row q-py-none">
                <q-space />
                <q-btn icon="close" unelevated color="grey-3" text-color="grey-10" round dense v-close-popup />
            </q-card-section>
            <q-card-section class="text-center">
                <q-icon name="mdi-forum-outline" size="96px"></q-icon>
                <div class="text-h6">Tell us more about yourself</div>
                <p>We would love to learn more about you so we can make our product better serve you</p>
            </q-card-section>
            <div class="q-gutter-y-sm">
                <q-btn color="primary" label="Take the 20 second survey" class="full-width" no-caps unelevated rounded>
                </q-btn>
                <q-btn color="grey-6" flat label="Skip" no-caps class="full-width" unelevated rounded />
            </div>
        </q-card>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>