<template>
    <div class="blur-background flex flex-center full-width" style="min-height: 500px; border-radius: 12px;">
        <div style="position: relative; max-width: 600px; width: 100%;" class="q-mx-auto">
            <q-card>
                <q-card-section class="q-pa-lg">
                    <div class="text-h6">Edit profile</div>
                    <p class="text-grey-8">
                        Make changes to your profile here.
                    </p>
                    <q-input  outlined class="q-mb-md" dense color="grey-10" v-model="Name"
                        placeholder="Name" />
                    <q-input outlined class="q-mb-md" dense color="grey-10" v-model="Email" placeholder="Email" />
                </q-card-section>
                <q-separator></q-separator>
                <q-card-actions class="bg-white" align="right">
                    <q-btn unelevated color="grey-8" no-caps label="Save changes" />
                </q-card-actions>
            </q-card>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'

const Name = ref('');
const Email = ref('');

</script>

<style scoped>
.blur-background {
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10);
}
</style>