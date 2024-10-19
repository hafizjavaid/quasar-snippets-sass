<template>
    <div>
        <div style="max-width: 700px;" class="q-mx-auto text-center q-mb-lg q-mb-md-xl ">
            <p class="text-weight-medium text-primary">Pricing</p>
            <h4 :class="[$q.screen.gt.sm ? 'text-h4' : 'text-h6']" class="text-weight-bold q-mt-none q-mb-md">
                Pricing plans for teams of all sizes
            </h4>
            <p class="text-subtitle1">
                Distinction and no one freed him, and not by some labor.
                Often and as if it were just a way of wanting to not take pleasure in it.
                I will explain it as snacks.
            </p>
        </div>
        <div style="max-width: 1000px;" class="q-mx-auto">
            <div class="row items-end q-mt-xl q-col-gutter-md" >
                <div v-for="(item, i) in plans" :key="i" class="col-12 col-md-4">
                    <q-card flat bordered style="border-radius: 8px; max-width: 450px;"
                        class="q-pa-md q-pa-md-lg relative-position q-mx-auto"
                        :class="{ 'margin-start': i === 2, 'margin-end': i === 0 }"
                        :style="i === 1 ? 'height: 500px; z-index: 2;' : 'height: 450px;'">
                        <div class="flex justify-between items-center">
                            <q-chip class="q-mb-md" :color="i == 1 ? 'primary' : ''" :text-color="i == 1 ? 'white' : ''"
                                :label="item.title" square />
                            <q-chip v-if="i == 1" class="q-mb-md" size="sm" color="blue-1" text-color="primary"
                                label="most popular" />
                        </div>
                        <p class="text-subtitle2 q-pb-sm">
                            {{ item.subtitle }}
                        </p>

                        <div :class="[$q.screen.gt.sm ? 'text-h4' : 'text-h6']" class=" q-mb-sm text-weight-bold">
                            ${{ item.cost }}

                            <small class="text-body2">/month</small>
                        </div>
                        <q-item style="min-height: unset" v-for="(feature, _index) in item.features" :key="_index"
                            class="flex items-center q-gutter-x-sm q-px-none text-body2 text-grey-8">
                            <q-icon size="16px" color="primary" name="mdi-check" />
                            <q-item-section>
                                {{ feature }}
                            </q-item-section>
                        </q-item>
                        <div class="flex flex-center">
                            <q-btn no-caps style="max-width: 256px; width: 100%;"
                                class="q-mb-md absolute-bottom-left absolute-bottom-right absolute q-mx-auto"
                                :color="i == 1 ? 'primary' : ''" label="Buy plan" unelevated :outline="i !== 1" />
                        </div>
                    </q-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
const $q = useQuasar();
const plans = [
    {
        title: 'Freelancer',
        subtitle: 'The essentials to provide your best work for clients.',
        cost: 24,
        features: [
            '5 products',
            'Up to 1,000 subscribers',
            'Basic analytics',
            '48-hour support response time',
        ],
    },
    {
        title: 'Startup',
        subtitle: 'A plan that scales with your rapidly growing business.',
        cost: 32,
        features: [
            '25 products',
            'Up to 10,000 subscribers',
            'Advanced analytics',
            '24-hour support response time',
            'Marketing automations',
        ],
    },
    {
        title: 'Enterprise',
        subtitle: 'Dedicated support and infrastructure of your company.',
        cost: 48,
        features: [
            'Unlimited products',
            'Unlimited subscribers',
            'Advanced analytics',
            '1-hour, dedicated support response time',
            'Marketing automations',
        ],
    },
]
</script>

<style scoped></style>