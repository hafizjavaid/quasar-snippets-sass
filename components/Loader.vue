<template>
    <q-dialog v-model="isLoading" backdrop-filter="blur(4px)" persistent>
        <div class="full-width full-height flex flex-center">
            <q-spinner color="secondary" size="3em" />
        </div>
    </q-dialog>
</template>

<script lang="ts" setup>
const { isLoading } = useStore();
</script>

<style lang="scss" scoped></style>