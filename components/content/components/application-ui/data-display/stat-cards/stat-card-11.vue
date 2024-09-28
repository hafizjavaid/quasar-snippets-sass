<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <div class="row q-col-gutter-md q-mt-xl">
            <div class="col-12 col-sm-6 col-md-4">
                <q-card flat bordered class="">
                    <q-card-section class="q-py-md q-px-md">
                        <div class="flex items-center justify-between q-mb-lg">
                            <div class="text-body1 text-grey-7">Cost per Unit</div>
                            <q-btn unelevated color="blue-1" padding="3px 10px" size="10px" no-caps text-color="blue-7"
                                label="Daily" />
                        </div>
                        <div class="flex items-center justify-between q-mb-md">
                            <div class="text-h4">$42.17</div>
                            <div>
                                <div class="text-subtitle2 text-grey-10">11.5%</div>
                                <q-icon name="mdi-arrow-up" color="green-4" />
                            </div>
                        </div>
                        <q-linear-progress rounded size="4px" :value="0.34" color="green" />
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
                <q-card flat bordered class="">
                    <q-card-section class="q-py-md q-px-md">
                        <div class="flex items-center justify-between q-mb-lg">
                            <div class="text-body1 text-grey-7">Total Revenue</div>
                            <q-btn unelevated color="blue-1" padding="3px 10px" size="10px" no-caps text-color="blue-7"
                                label="Weekly" />
                        </div>
                        <div class="flex items-center justify-between q-mb-md">
                            <div class="text-h4">$74.5</div>
                            <div>
                                <div class="text-subtitle2 text-grey-10">-5.5%</div>
                                <q-icon name="mdi-arrow-down" color="red-7" />
                            </div>
                        </div>
                        <q-linear-progress rounded size="4px" :value="0.34" color="red" />
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
                <q-card flat bordered class="">
                    <q-card-section class="q-py-md q-px-md">
                        <div class="flex items-center justify-between q-mb-lg">
                            <div class="text-body1 text-grey-7">Total Cost</div>
                            <q-btn unelevated color="blue-1" padding="3px 10px" size="10px" no-caps text-color="blue-7"
                                label="Monthly" />
                        </div>
                        <div class="flex items-center justify-between q-mb-md">
                            <div class="text-h4">$103.2</div>
                            <div>
                                <div class="text-subtitle2 text-grey-10">2.5%</div>
                                <q-icon name="mdi-arrow-up" color="teal-7" />
                            </div>
                        </div>
                        <q-linear-progress rounded size="4px" :value="0.34" color="teal" />
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>