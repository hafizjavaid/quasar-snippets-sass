<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <div style="max-width: 500px" class="q-mx-auto">
            <q-card class="shadow-1 shadow-inset">
                <q-card-section class="q-py-lg q-px-md ">
                    <div class="q-mb-md">
                        <div class="flex q-mb-lg items-center justify-between">
                            <div class="text-weight-medium text-h6">Transactions</div>
                            <q-btn round flat color="grey-8" icon="mdi-dots-vertical"></q-btn>
                        </div>
                    </div>

                    <div class="flex items-center justify-between q-mb-lg">
                        <div class="flex q-gutter-x-md items-center">
                            <q-btn color="orange-2" style="width: 48px; height: 48px" unelevated text-color="orange-8">
                                <template #default>
                                    <q-icon name="mdi-cash-multiple" size="20px"></q-icon>
                                </template>
                            </q-btn>
                            <div>
                                <div class="text-weight-regular text-subtitle1 text-grey-10">Jane Doe</div>
                                <div class="text-weight-regular text-subtitle1 text-grey-7">21 Mar 8:00PM</div>
                            </div>
                        </div>
                        <div class="text-green-5 text-h6 text-weight-regular">
                            +$36.11
                        </div>
                    </div>
                    <div class="flex items-center justify-between q-mb-lg">
                        <div class="flex q-gutter-x-md items-center">
                            <q-btn size="md" color="red-1" style="width: 48px; height: 48px" unelevated
                                text-color="red-5">

                                <template #default>
                                    <q-icon name="mdi-shopping-outline" size="20px"></q-icon>
                                </template>

                            </q-btn>
                            <div>
                                <div class="text-weight-regular text-subtitle1 text-grey-10">John Leider</div>
                                <div class="text-weight-regular text-subtitle1 text-grey-7">21 Mar 8:00PM</div>
                            </div>
                        </div>
                        <div class="text-negative text-h6 text-weight-regular">
                            +$36.11
                        </div>
                    </div>
                    <div class="flex items-center justify-between q-mb-lg">
                        <div class="flex q-gutter-x-md items-center">
                            <!-- <q-btn size="md" color="purple-1" label="JD" unelevated text-color="purple-5"></q-btn> -->
                            <q-btn color="purple-1" style="width: 48px; height: 48px" unelevated text-color="purple-5">
                                <template #default>
                                    <div class="text-weight-regular">JD</div>
                                    <!-- <q-icon name="mdi-cash-multiple" size="14px"></q-icon> -->
                                </template>
                            </q-btn>
                            <div>
                                <div class="text-weight-regular text-subtitle1 text-grey-10">Jane Doe</div>
                                <div class="text-weight-regular text-subtitle1 text-grey-7">21 Mar 8:00PM</div>
                            </div>
                        </div>
                        <div class="text-green-5 text-h6 text-weight-regular">
                            +$36.11
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