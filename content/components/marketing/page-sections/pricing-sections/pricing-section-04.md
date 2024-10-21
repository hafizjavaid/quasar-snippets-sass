<!-- Pricing Section 04 -->
::ContentCard{title="Pricing Section 04" slug="pricing-section-04"}

#preview
::pricing-section-04
::

#codebase
::CodeView

```html
<template>
    <div>
        <div style="max-width: 700px;" class="q-mx-auto text-center q-mb-lg q-mb-md-xl">
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
        <div class="flex flex-center q-mb-lg bg-grey-2">
             <q-btn rounded @click="handleChangePlanType('monthly')" no-caps class=""
                :color="selectedPlanType == 'monthly' ? 'primary' : 'grey-10'" :flat="selectedPlanType !== 'monthly'"
                label="Monthly" unelevated />
            <q-btn rounded @click="handleChangePlanType('annually')" no-caps class=""
                :color="selectedPlanType === 'annually' ? 'primary' : 'grey-10'" :flat="selectedPlanType !== 'annually'"
                label="Annually" unelevated />

        </div>
        <div style="max-width: 1000px;" class="q-mx-auto">
            <div class="row items-end q-mt-xl q-col-gutter-md">
                <div v-for="(item, i) in plans" :key="i" class="col-12 col-md-4">
                    <q-card flat bordered style="max-width: 450px; height: 500px; border-radius: 20px;"
                        class="q-pa-md q-pa-md-lg relative-position q-mx-auto">

                        <p class="q-mb-md text-weight-bold"> {{ item.title }} </p>

                        <p class="text-body2 text-weight-medium q-mt-md">
                            {{ item.subtitle }}
                        </p>

                        <div :class="[$q.screen.gt.sm ? 'text-h4' : 'text-h6']" class="q-mb-md text-weight-bold">
                            {{ i == 2 ? 'Custom' : selectedPlanType == 'monthly' ? "$" + item.cost : "$" +
                                item.annuallyCost }}

                            <small v-if="i != 2" class="text-body2">
                                /{{ selectedPlanType == 'monthly' ? 'month' : 'year' }}
                            </small>
                        </div>


                        <q-btn no-caps style="max-width: 256px; width: 100%;" class="q-mx-auto q-mb-md"
                            :color="i == 2 ? 'dark' : 'primary'" :label="i == 2 ? 'Contact Sales' : 'Buy plan'"
                            unelevated />

                        <q-item style="min-height: unset" v-for="(feature, _index) in item.features" :key="_index"
                            class="flex items-center q-gutter-x-sm q-px-none text-body2 text-grey-8">
                            <q-icon size="16px" :color="i == 2 ? 'dark' : 'primary'" name="mdi-check" />
                            <q-item-section>
                                {{ feature }}
                            </q-item-section>
                        </q-item>
                    </q-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
const $q = useQuasar();

import { shallowRef } from 'vue'

const selectedPlanType = shallowRef('monthly')

const handleChangePlanType = (value: string) => {
    selectedPlanType.value = value
}

const plans = [
    {
        title: 'Freelancer',
        subtitle: 'The essentials to provide your best work for clients.',
        cost: 15,
        annuallyCost: 144,
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
        cost: 30,
        annuallyCost: 288,
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
        subtitle: 'Dedicated support and infrastructure for your company.',
        features: [
            'Unlimited products',
            'Unlimited subscribers',
            'Advanced analytics',
            '1-hour, dedicated support response time',
            'Marketing automations',
            'Custom reporting tools',
        ],
    },
]
</script>

<style scoped></style>

```

::