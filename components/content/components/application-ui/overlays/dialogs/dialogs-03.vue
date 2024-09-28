<template>
    <div class="blur-background flex flex-center full-width" style="min-height: 500px; border-radius: 12px;">
        <div style="position: relative; max-width: 600px; width: 100%;" class="q-mx-auto">
            <q-card>
                <q-card-section class="text-center">
                    <q-btn size="lg" class="" icon="mdi-check" text-color="green-9" unelevated round color="green-1" />
                    <div class="text-subtitle1 q-my-md text-weight-bold">Payment successful</div>
                    <p class="text-center q-px-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione
                        debitis quis est labore!
                    </p>
                    <q-btn unelevated color="primary" class="full-width" no-caps label="Go to dashboard" />
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