<template>
    <div class="blur-background flex flex-center full-width" style="min-height: 500px; border-radius: 12px;">
        <div style="position: relative; max-width: 600px; width: 100%;" class="q-mx-auto">
            <q-card>
                <q-card-section>
                    <div class="flex no-wrap items-start q-gutter-x-md">
                        <q-btn icon="mdi-account-plus-outline" text-color="green-9" unelevated round color="green-1" />
                        <div>
                            <div class="text-h6">Alert</div>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum saepe
                                minima deleniti quo nulla eos. Voluptatem quis dolorem, reprehenderit est
                                odio asperiores placeat maiores aliquam quia deserunt quas voluptas earum.
                            </p>
                        </div>
                    </div>
                </q-card-section>
                <q-separator></q-separator>
                <q-card-actions class="bg-grey-3" align="right">
                    <q-btn unelevated color="grey-1" text-color="dark" no-caps label="Cancel" />
                    <q-btn unelevated color="green-6" no-caps label="Activate" />
                </q-card-actions>
            </q-card>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'

const showModal = ref(true);
</script>

<style scoped>
.blur-background{
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10);
}
</style>