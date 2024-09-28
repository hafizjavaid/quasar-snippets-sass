<template>
    <div style="max-width: 1400px; width: 100%;" class="q-mx-auto">
        <section>
            <div class="flex items-center q-mb-sm">
                <h3 class="text-subtitle1 text-weight-bold q-my-sm">Section heading</h3>
                <q-space />
                <div class="flex items-center q-gutter-x-sm">
                    <q-btn label="Upgrade to Premium" color="primary" text-color="primary" flat no-caps unelevated />
                    <q-btn label="Save changes" color="primary" style="border-radius: 12px;" no-caps unelevated />
                    <q-btn size="sm" icon="mdi-dots-vertical" flat round no-caps unelevated />
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
            <q-tabs dense align="left" active-color="primary" no-caps indicator-color="primary" v-model="tab" shrink
                stretch>
                <q-tab name="tab1" label="Recent " />
                <q-tab name="tab2" label="Approved" />
                <q-tab name="tab3" label="Pending" />
                <q-tab name="tab4" label="Denied" />
                <q-tab name="tab5" label="All" />
            </q-tabs>
            <q-separator />
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tab = ref('tab1');
</script>

<style scoped></style>
