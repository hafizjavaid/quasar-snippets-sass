<!-- Pricing Section 10 -->
::ContentCard{title="Pricing Section 10" slug="pricing-section-10" :is-padding="false"}

#preview
::pricing-section-10
::

#codebase
::CodeView

```html
<template>
    <div style="max-width: 1200px;" class="q-mx-auto full-width q-pa-xl">
        <div>
            <div class="flex flex-center q-mb-lg q-gutter-x-md">
                <p @click="currentPlan = 'monthly'" class="cursor-pointer text-weight-medium text-subtitle1 q-my-none">Monthly Billing
                </p>
                <q-toggle color="primary" false-value="monthly" true-value="yearly" v-model="currentPlan" />
                <p @click="currentPlan = 'yearly'" class="cursor-pointer text-weight-medium text-subtitle1 q-my-none">Annually Billing
                </p>
            </div>
            <div class="row q-col-gutter-md items-center">
                <div v-for="(item, i) in plans" :key="i" class="col-12 col-md-4">
                    <q-card :class="[i === 1 ? 'bg-red-8' : 'bg-grey-9']" flat bordered style="border-radius: 8px;"
                        class="q-pa-lg q-pa-md-lg flex column q-mx-auto text-white">
                        <p :class="[$q.screen.gt.sm ? 'text-h5' : 'text-body2']" class="text-center">{{ item.title }}
                        </p>

                        <div class="py-8 text-center">
                            <q-icon :name="item.icon" size="64px" />
                        </div>

                        <q-separator class="q-my-lg bg-grey-5" size="1px"></q-separator>

                        <div class="q-mb-lg q-mb-md-xl">

                            <q-item style="min-height: unset" v-for="(feature, _index) in item.features" :key="_index"
                                class="flex items-center q-gutter-x-sm q-px-none text-body2">
                                <q-icon size="16px" color="grey-6" name="mdi-circle-medium" />
                                <q-item-section>
                                    {{ feature }}
                                </q-item-section>
                            </q-item>
                        </div>

                        <div :class="[$q.screen.gt.sm ? 'text-h2' : 'text-h6']"
                            class="text-weight-bold text-center q-mb-lg q-mb-md-xl">
                            <template v-if="currentPlan == 'monthly'">
                                ${{ item.cost }}
                            </template>

                            <template v-else> ${{ item.annual }} </template>

                            <small class="text-body2">
                                /{{ currentPlan == 'monthly' ? 'MO' : 'YR' }}
                            </small>
                        </div>

                        <q-btn rounded label="CHOOSE PLAN" color="white" :text-color="i == 1 ? 'red-4' : 'grey-8'"
                            no-caps unelevated></q-btn>
                    </q-card>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'
import { useQuasar } from 'quasar';
const $q = useQuasar();


const currentPlan = shallowRef('monthly')

const plans = [
    {
        title: 'BASIC',
        cost: 19,
        annual: 199,
        icon: 'mdi-bicycle',
        features: [
            'Get started with messaging',
            'Flexible team meetings',
            '5 TB cloud storage',
        ],
    },
    {
        title: 'STANDARD',
        cost: 39,
        annual: 399,
        icon: 'mdi-airplane',
        features: [
            'All feature in Basic',
            'Flexible call scheduling',
            '15 TB cloud storage',
        ],
    },
    {
        title: 'PREMIUM',
        cost: 49,
        annual: 499,
        icon: 'mdi-rocket',
        features: [
            'All feature in Standard',
            'Growth oriented',
            'Unlimited cloud storage',
        ],
    },
]
</script>

<style scoped></style>
```

::