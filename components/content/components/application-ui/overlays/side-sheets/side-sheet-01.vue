<template>
    <div class="blur-background flex full-width  "
        style="max-height: 500px; height: 500px; border-radius: 12px; justify-content: end; ">
        <q-card flat class="column full-height" style="width: 350px">
            <q-card-section class="flex justify-between items-center">
                <div class="text-h6">Panel title</div>
                <q-btn flat dense round icon="mdi-close" v-close-popup />
            </q-card-section>

            <q-separator></q-separator>
            <q-card-section class="flex-1 col-grow">
                <q-skeleton height="100%" square />
            </q-card-section>
        </q-card>
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