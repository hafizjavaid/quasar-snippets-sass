<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <div class="row q-col-gutter-lg">
            <div class="col-12 col-sm-6 col-md-4">
                <q-card bordered flat>
                    <q-card-section class="q-px-lg q-py-md">
                        <div class="flex items-center q-gutter-x-md q-mb-md">
                            <q-btn padding="8px 10px" color="light-blue-1" text-color="blue-8" unelevated>
                                <q-icon name="mdi-cash-multiple"></q-icon>
                            </q-btn>
                            <div>
                                <div class="text-weight-bold text-subtitle1">Revenue</div>
                                <div class="text-subtitle2 text-grey-8">Sales goal</div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between q-mb-xs">
                            <div>Completed</div>
                            <div class="text-weight-medium">12/12</div>
                        </div>
                        <div class="flex no-wrap q-gutter-x-xs">
                            <q-linear-progress rounded size="6px" :value="1" color="primary" class="" />
                            <q-linear-progress rounded size="6px" :value="1" color="primary" class="" />
                            <q-linear-progress rounded size="6px" :value="1" color="primary" class="" />
                            <q-linear-progress rounded size="6px" :value="1" color="primary" class="" />
                            <q-linear-progress rounded size="6px" :value="1" color="primary" class="" />
                        </div>
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
                <q-card bordered flat>
                    <q-card-section class="q-px-lg q-py-md">
                        <div class="flex items-center q-gutter-x-md q-mb-md">
                            <q-btn padding="8px 10px" color="purple-1" text-color="purple" unelevated>
                                <q-icon name="mdi-cart-outline"></q-icon>
                            </q-btn>
                            <div>
                                <div class="text-weight-bold text-subtitle1">Orders</div>
                                <div class="text-subtitle2 text-grey-8">Total orders</div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between q-mb-xs">
                            <div>Pending shipment</div>
                            <div class="text-weight-medium">4/20</div>
                        </div>
                        <div class="flex no-wrap q-gutter-x-xs">
                            <q-linear-progress rounded size="6px" :value="1" color="purple" track-color="purple-2"
                                class="" />
                            <q-linear-progress rounded size="6px" :value="0" color="purple" track-color="purple-2"
                                class="" />
                            <q-linear-progress rounded size="6px" :value="0" color="purple" track-color="purple-2"
                                class="" />
                            <q-linear-progress rounded size="6px" :value="0" color="purple" track-color="purple-2"
                                class="" />
                            <q-linear-progress rounded size="6px" :value="0" color="purple" track-color="purple-2"
                                class="" />
                        </div>
                    </q-card-section>
                </q-card>
            </div>

            <div class="col-12 col-sm-6 col-md-4">
                <q-card bordered flat>
                    <q-card-section class="q-px-lg q-py-md">
                        <div class="flex items-center q-gutter-x-md q-mb-md">
                            <q-btn padding="8px 10px" color="brown-1" text-color="brown" unelevated>
                                <q-icon name="mdi-cart-outline"></q-icon>
                            </q-btn>
                            <div>
                                <div class="text-weight-bold text-subtitle1">Products</div>
                                <div class="text-subtitle2 text-grey-8">Total new</div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between q-mb-xs">
                            <div>Reviewed</div>
                            <div class="text-weight-medium">5/12</div>
                        </div>
                        <div class="flex no-wrap q-gutter-x-xs">
                            <q-linear-progress rounded size="6px" :value="1" color="brown" track-color="brown-2"
                                class="" />
                            <q-linear-progress rounded size="6px" :value="1" color="brown" track-color="brown-2"
                                class="" />
                            <q-linear-progress rounded size="6px" :value="0" color="brown" track-color="brown-2"
                                class="" />
                            <q-linear-progress rounded size="6px" :value="0" color="brown" track-color="brown-2"
                                class="" />
                            <q-linear-progress rounded size="6px" :value="0" color="brown" track-color="brown-2"
                                class="" />
                        </div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>