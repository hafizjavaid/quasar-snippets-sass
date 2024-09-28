<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <div class="row q-col-gutter-lg q-mt-xl">
            <div class="col-12 col-sm-6">
                <q-card bordered flat>
                    <q-card-section class="q-px-lg q-pb-md">
                        <div class="text-center">
                            <q-avatar class="q-mb-sm" style="margin-top: -70px" size="100px" color="teal"
                                text-color="white" icon="directions" />
                            <div class="text-weight text-h6">Beach picture</div>
                            <div class="text-subtitle2 text-grey-8">600/mo</div>
                        </div>
                        <div class="flex items-center justify-between q-mb-xs">
                            <div>Monthly Goal</div>
                            <div class="text-weight-medium">60%</div>
                        </div>
                        <div class="flex no-wrap q-gutter-x-xs q-mb-xs">
                            <q-linear-progress rounded size="6px" :value="1" color="primary" track-color="blue-2"
                                class="" />
                        </div>
                        <div class="flex items-center justify-between q-mb-xs">
                            <div>360/600</div>
                            <div class="text-negative">1 week left</div>
                        </div>
                    </q-card-section>
                </q-card>
            </div>

            <div class="col-12 col-sm-6">
                <q-card bordered flat>
                    <q-card-section class="q-px-lg q-pb-md">
                        <div class="text-center">
                            <q-avatar class="q-mb-sm" style="margin-top: -70px" size="100px" color="teal"
                                text-color="white" icon="directions" />
                            <div class="text-weight text-h6">Hills picture</div>
                            <div class="text-subtitle2 text-grey-8">200/mo</div>
                        </div>
                        <div class="flex items-center justify-between q-mb-xs">
                            <div>Monthly Goal</div>
                            <div class="text-weight-medium">60%</div>
                        </div>
                        <div class="flex no-wrap q-gutter-x-xs q-mb-xs">
                            <q-linear-progress rounded size="6px" :value="1" color="primary" track-color="blue-2"
                                class="" />
                        </div>
                        <div class="flex items-center justify-between q-mb-xs">
                            <div>42/200</div>
                            <div class="text-orange">2 week left</div>
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