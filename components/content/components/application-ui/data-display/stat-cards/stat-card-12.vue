<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <div style="max-width: 500px" class="q-mx-auto">
            <q-card class="shadow-1 shadow-inset">
                <q-card-section class="q-py-lg q-px-md text-center">
                    <div class="q-mb-md">
                        <div class="flex q-mb-lg items-center justify-between">
                            <div class="text-weight-medium text-h6">Summary</div>
                            <q-btn round flat color="grey-8" icon="mdi-dots-vertical"></q-btn>
                        </div>
                    </div>
                    <div class="flex items-center q-gutter-x-md q-mb-lg">
                        <q-btn size="md" round color="purple-1" icon="mdi-shopping-outline" unelevated
                            text-color="purple-5"></q-btn>
                        <div class="col-grow">
                            <div class="flex items-center justify-between q-mb-xs">
                                <div class="text-weight-regular text-subtitle1 text-grey-7">
                                    Revenue
                                </div>
                                <div class="text-weight-regular text-subtitle1 text-grey-7">
                                    $47,230
                                </div>
                            </div>

                            <q-linear-progress rounded size="8px" :value="0.34" color="purple-4" class="" />
                        </div>
                    </div>
                    <div class="flex items-center q-gutter-x-md q-mb-lg">
                        <q-btn size="md" round color="cyan-1" icon="mdi-chart-bar-stacked" unelevated
                            text-color="cyan"></q-btn>
                        <div class="col-grow">
                            <div class="flex items-center justify-between q-mb-xs">
                                <div class="text-weight-regular text-subtitle1 text-grey-7">Sales</div>
                                <div class="text-weight-regular text-subtitle1 text-grey-7">
                                    $14,345
                                </div>
                            </div>

                            <q-linear-progress rounded size="8px" :value="0.34" color="cyan" class="" />
                        </div>
                    </div>
                    <div class="flex items-center q-gutter-x-md q-mb-lg">
                        <q-btn size="md" round color="orange-1" icon="mdi-wallet-outline" unelevated
                            text-color="orange"></q-btn>
                        <div class="col-grow">
                            <div class="flex items-center justify-between q-mb-xs">
                                <div class="text-weight-regular text-subtitle1 text-grey-7">Cost</div>
                                <div class="text-weight-regular text-subtitle1 text-grey-7">
                                    $14,345
                                </div>
                            </div>

                            <q-linear-progress rounded size="8px" :value="0.34" color="orange" class="" />
                        </div>
                    </div>
                    <div class="flex items-center q-gutter-x-md q-mb-lg">
                        <q-btn size="md" round color="green-1" icon="mdi-cash-multiple" unelevated
                            text-color="green"></q-btn>
                        <div class="col-grow">
                            <div class="flex items-center justify-between q-mb-xs">
                                <div class="text-weight-regular text-subtitle1 text-grey-7">Profit</div>
                                <div class="text-weight-regular text-subtitle1 text-grey-7">
                                    $14,345
                                </div>
                            </div>

                            <q-linear-progress rounded size="8px" :value="0.34" color="green" class="" />
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>