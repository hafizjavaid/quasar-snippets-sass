<template>
    <div class="blur-background flex flex-center full-width" style="min-height: 500px; border-radius: 12px;">
        <div style="position: relative; max-width: 600px; width: 100%;" class="q-mx-auto">
            <q-card>
                <q-card-section>
                    <div class="flex no-wrap items-center q-gutter-x-md q-mb-md">
                        <q-btn icon="mdi-account-plus-outline" text-color="red-9" unelevated round color="red-1" />

                        <div class="text-h6">Deactivate</div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum saepe
                        minima deleniti quo nulla eos. Voluptatem quis dolorem, reprehenderit est odio
                        asperiores placeat maiores aliquam quia deserunt quas voluptas earum.
                    </p>
                    <q-input class="q-mb-lg" filled dense color="negative" v-model="deactivateText"
                        placeholder="Type Deactivate" />
                </q-card-section>

                <q-separator></q-separator>
                <q-card-actions class="bg-white" align="right">
                    <!-- <q-btn unelevated outline color="grey-1" text-color="dark" no-caps label="Cancel" /> -->
                    <q-btn color="grey-5" unelevated no-caps outline>
                        <template #default>
                            <div class="text-dark">Cancel</div>
                        </template>
                    </q-btn>
                    <q-btn unelevated color="negative" no-caps label="Deactivate" />
                </q-card-actions>
            </q-card>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
const deactivateText = ref('');
</script>

<style scoped>
.blur-background {
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10);
}
</style>