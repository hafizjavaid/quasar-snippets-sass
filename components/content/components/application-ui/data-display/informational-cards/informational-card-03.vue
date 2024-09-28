<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <q-card style="max-width: 300px; border-radius: 12px" class="q-mx-auto shadow-inset shadow-1">
            <div class="q-pa-md">
                <div class="flex items-center justify-between">
                    <div class="flex items-center q-gutter-x-md">
                        <q-btn size="10px" unelevated round color="grey-10"></q-btn>
                        <div>0xcBa...eBa9</div>
                    </div>
                    <div class="flex items-center q-gutter-x-sm">
                        <q-avatar rounded size="28px" color="grey-3">
                            <q-icon name="mdi-content-copy" size="16px"></q-icon>
                        </q-avatar>
                        <q-avatar rounded size="28px" color="grey-3">
                            <q-icon name="mdi-open-in-new" size="16px"></q-icon>
                        </q-avatar>
                        <q-avatar rounded size="28px" color="grey-3">
                            <q-icon name="mdi-power" size="16px"></q-icon>
                        </q-avatar>
                    </div>
                </div>

                <div class="q-my-lg q-gutter-y-sm text-center">
                    <div class="text-grey-8">ETH Balance</div>
                    <div class="text-grey-10 text-h2">0 ETH</div>
                    <div class="text-grey-8">$0.00 USD</div>
                </div>

                <q-btn color="primary" label="View and sell NFTs" no-caps class="full-width q-mb-sm" unelevated />
                <!-- <q-btn color="" outline icon="mdi-credit-card-outline" label="Buy Crypto" no-caps class="full-width"
            unelevated /> -->
                <q-btn color="grey-5" class="full-width" outline unelevated no-caps>
                    <template #default>
                        <q-icon name="mdi-credit-card-outline"></q-icon>
                        <div class="text-grey-9 q-ml-sm">Buy Crypto</div>
                    </template>
                </q-btn>

                <div class="q-my-md">
                    <q-separator></q-separator>
                </div>
                <div class="">
                    <q-item dense clickable>
                        <q-item-section>Transactions</q-item-section>
                        <q-item-section avatar>
                            <q-icon color="grey-8" name="mdi-chevron-right" />
                        </q-item-section>
                    </q-item>

                    <q-item dense clickable>
                        <q-item-section>Language</q-item-section>
                        <q-item-section avatar>
                            <q-icon color="grey-8" name="mdi-chevron-right" />
                        </q-item-section>
                    </q-item>
                    <q-item dense clickable>
                        <q-item-section>Light Theme</q-item-section>
                        <q-item-section avatar>
                            <q-icon color="grey-8" name="mdi-weather-sunny" />
                        </q-item-section>
                    </q-item>
                </div>
            </div>
        </q-card>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>