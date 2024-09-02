<template>
    <div style="max-width: 1400px; width: 100%;" class="q-mx-auto">
        <div class="flex items-center">
            <div class="text-h4 q-ma-none text-weight-bold">Projects</div>
            <q-space></q-space>
            <div class="flex items-center q-gutter-x-sm">
                <q-btn color="primary" unelevated padding="6px 12px" no-caps>
                    <template #default>
                        <div class="flex items-center q-gutter-x-sm">
                            <q-icon size="20px" name="mdi-plus" />
                            <div>Create project</div>
                        </div>
                    </template>
                </q-btn>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>