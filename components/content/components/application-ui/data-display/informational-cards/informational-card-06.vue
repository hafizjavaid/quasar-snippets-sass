<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <q-card style="max-width: 500px; border-radius: 20px" flat bordered class="q-mx-auto">
            <q-img fit="contain" src="https://img.logoipsum.com/297.svg" class="q-ml-md q-mt-sm"
                style="height: 60px; width: 140px" />
            <div class="q-px-md q-pb-md">
                <div class="text-h6 text-weight-bold text-grey-10">
                    Save up to $30 on Quasar One
                </div>
                <div class="text-grey-7">Applicant specific details and information</div>
            </div>
            <div class="row q-col-gutter-md q-pa-md">
                <div class="col">
                    <q-btn class="full-width" color="grey-3" rounded unelevated no-caps>
                        <template #default>
                            <div class="text-dark">Dismiss</div>
                        </template>
                    </q-btn>
                </div>
                <div class="col">
                    <q-btn class="full-width" unelevated rounded color="primary" no-caps label="Claim Offer" />
                </div>
            </div>
        </q-card>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>