<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <q-card style="max-width: 400px; border-radius: 8px" class="q-mx-auto shadow-inset shadow-1">
            <div class="q-px-md q-py-sm">
                <div class="flex items-end justify-between">
                    <div>
                        <div class="text-grey-7">Amount</div>
                        <div class="text-h6 text-weight-bold text-grey-10">$23,420</div>
                    </div>
                    <q-chip square size="10px" color="green-1" text-color="green"> Paid </q-chip>
                </div>
            </div>
            <q-list class="bg-grey-3">
                <q-item>
                    <q-item-section avatar>
                        <q-icon name="mdi-account-circle-outline" />
                    </q-item-section>
                    <q-item-section>Hafiz Javaid</q-item-section>
                </q-item>
                <q-item>
                    <q-item-section avatar>
                        <q-icon name="mdi-calendar-outline" />
                    </q-item-section>
                    <q-item-section>May 22nd, 2024</q-item-section>
                </q-item>
                <q-item>
                    <q-item-section avatar>
                        <q-icon name="mdi-credit-card-outline" />
                    </q-item-section>
                    <q-item-section>Paid with Visa</q-item-section>
                </q-item>
            </q-list>
            <div class="q-px-md q-py-sm">
                <q-btn color="grey-6" unelevated no-caps flat>
                    <template #default>
                        <div class="text-grey-9 gt-sm">Download receipt</div>
                        <q-icon name="mdi-chevron-right" color="grey-9" size="20px" class="q-ml-sm"></q-icon>
                    </template>
                </q-btn>
            </div>
        </q-card>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>