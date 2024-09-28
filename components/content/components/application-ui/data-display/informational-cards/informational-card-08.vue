<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <q-card style="max-width: 400px; border-radius: 12px" class="q-mx-auto shadow-inset shadow-1 q-pa-md">
            <div class="flex items-center q-gutter-x-md">
                <div class="text-h6 text-weight-bold text-grey-10">
                    Try out Quasar Discussions!
                </div>
                <q-chip outline color="green" size="10px" text-color="grey-6"> Beta </q-chip>
            </div>
            <div class="text-grey-7 q-mt-md">
                Discussions allows community members to start conversations and ask questions
                without opening issues. Get started by toggling Discussions under Features.
            </div>
            <q-card-actions class="q-pb-none q-mt-sm" align="right">
                <q-btn color="grey-4" padding="6px 14px" style="border-radius: 8px" outline unelevated no-caps>
                    <template #default>
                        <div class="text-primary">Get started</div>
                    </template>
                </q-btn>
                <q-btn color="grey-4" padding="6px 14px" style="border-radius: 8px" outline unelevated no-caps>
                    <template #default>
                        <div class="text-primary">Got it!</div>
                    </template>
                </q-btn>
            </q-card-actions>
        </q-card>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>