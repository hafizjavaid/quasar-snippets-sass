<template>
    <div class="blur-background flex flex-center full-width" style="min-height: 500px; border-radius: 12px;">
        <div style="position: relative; max-width: 600px; width: 100%;" class="q-mx-auto">
            <q-card>
                <q-card-section class="text-center">
                    <q-btn size="lg" class="" icon="mdi-check" text-color="green-9" unelevated round color="green-1" />
                    <div class="text-subtitle1 q-my-md text-weight-bold">Purchase complete</div>
                    <p class="text-center text-grey-8 q-px-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione
                        debitis quis est labore!
                    </p>
                    <div class="row q-col-gutter-md">
                        <div class="col">

                            <q-btn class="full-width" color="grey-5" unelevated no-caps outline>
                                <template #default>
                                    <div class="text-dark">Home</div>
                                </template>
                            </q-btn>
                        </div>
                        <div class="col">

                            <q-btn class="full-width" unelevated color="primary" no-caps label="Manage Team" />
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </div>
    </div>

</template>

<script setup lang="ts">
</script>

<style scoped>
.blur-background {
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10);
}
</style>