<template>
    <div class="full-width">
        <div class="row items-center q-col-gutter-lg">
            <div class="col-12 col-md-4">
                <q-img fit="cover" style="min-height: 300px;"
                    src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <div class="col-12 col-md-8">
                <h1 :class="[$q.screen.gt.sm ? 'text-h4' : 'text-h6']" class="text-weight-bold q-mb-md q-mt-none">
                    Boost your productivity.
                </h1>
                <p class="text-subtitle2 text-grey-7 q-mb-lg">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                    lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                    fugiat aliqua.
                </p>
                <div class="row q-mb-md">
                    <div v-for="(item, i) in rewards" :key="i" class="col-12 col-md-6">
                        <q-item dense class="flex items-center q-gutter-x-sm q-px-none text-body2 text-grey-8">
                            <q-icon size="16px" color="primary" name="mdi-check" />
                            <q-item-section>
                                {{ item }}
                            </q-item-section>
                        </q-item>
                    </div>
                </div>
                <q-btn label="See our job postings" color="primary" outline no-caps unelevated
                    icon-right="mdi-arrow-right"></q-btn>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
const $q = useQuasar();


const rewards = [
    'Competitive salaries',
    'Flexible work hours',
    '30 days of paid vacation',
    'Annual team retreats',
    'Benefits for you and your family',
    'A gerat work environment',
]
</script>

<style scoped></style>