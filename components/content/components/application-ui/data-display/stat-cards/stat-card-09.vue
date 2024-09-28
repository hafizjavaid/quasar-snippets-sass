<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <div style="max-width: 500px" class="q-mx-auto">
            <q-card class="shadow-1 shadow-inset">
                <q-card-section class="q-py-lg q-px-md text-center">
                    <div class="q-mb-md">
                        <div class="flex q-mb-lg items-center justify-between">
                            <div class="text-weight-regular text-h6">Monthly goals</div>
                            <q-btn round flat color="grey-8" icon="mdi-dots-vertical"></q-btn>
                        </div>
                    </div>
                    <q-card flat bordered rounded style="border-radius: 12px">
                        <div class="q-pa-md">
                            <div class="text-subtitle1 text-left">85% (2125/2500)</div>
                            <div class="flex no-wrap q-gutter-x-xs q-mb-xs">
                                <q-linear-progress rounded size="8px" :value="0.34" color="blue" track-color="blue-2"
                                    class="" />
                            </div>
                        </div>
                    </q-card>
                    <div class="flex items-center justify-between q-my-md">
                        <div class="flex items-center q-gutter-lg">
                            <q-btn round size="sm" unelevated color="green-3"></q-btn>
                            <div class="text-subtitle1 text-left">Quarterly Sales</div>
                        </div>
                        <div class="text-grey-7 text-subtitle1 text-weight-bold">+ 10%</div>
                    </div>
                    <div class="flex items-center justify-between q-my-md">
                        <div class="flex items-center q-gutter-lg">
                            <q-btn round size="sm" unelevated color="yellow-3"></q-btn>
                            <div class="text-subtitle1 text-left">Quarterly Sales</div>
                        </div>
                        <div class="text-grey-7 text-subtitle1 text-weight-bold">152</div>
                    </div>
                    <div class="flex items-center justify-between q-my-md">
                        <div class="flex items-center q-gutter-lg">
                            <q-btn round size="sm" unelevated color="blue-3"></q-btn>
                            <div class="text-subtitle1 text-left">Quarterly Sales</div>
                        </div>
                        <div class="text-grey-7 text-subtitle1 text-weight-bold">200</div>
                    </div>
                    <div class="flex items-center justify-between q-my-md">
                        <div class="flex items-center q-gutter-lg">
                            <q-btn round size="sm" unelevated color="red-3"></q-btn>
                            <div class="text-subtitle1 text-left">Quarterly Sales</div>
                        </div>
                        <div class="text-grey-7 text-subtitle1 text-weight-bold">$ 25,000</div>
                    </div>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>