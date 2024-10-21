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
        <div class="flex flex-center q-mb-md">
            <q-btn rounded color="white" padding="4px 6px">
                <template #default>
                    <q-btn rounded @click="handleChangePlanType('monthly')" no-caps class="" color="primary"
                        :flat="selectedPlanType !== 'monthly'" label="Monthly" unelevated />
                    <q-btn rounded @click="handleChangePlanType('annually')" no-caps class="" color="primary"
                        :flat="selectedPlanType !== 'annually'" label="Annually" unelevated />
                </template>
            </q-btn>

        </div>
        <div style="max-width: 1000px;" class="q-mx-auto">
            <div class="row items-end q-mt-xl q-col-gutter-md">
                <div v-for="(item, i) in plans" :key="i" class="col-12 col-md-4">
                    <q-card style="max-width: 450px; height: 500px; border-radius: 20px;"
                        class="q-pa-md q-pa-md-lg relative-position shadow-5 q-mx-auto"
                        :class="[i == 1 ? 'bg-primary text-white' : 'bg-white']">
                        <div class="flex justify-between items-center">
                            <p class="q-mb-md text-weight-bold"> {{ item.title }} </p>
                            <v-chip v-if="i == 1" class="mb-4" size="small" text="most popular" />
                        </div>

                        <p class="text-subtitle2 q-mb-md">
                            {{ item.subtitle }}
                        </p>

                        <div :class="[$q.screen.gt.sm ? 'text-h4' : 'text-h6']" class="q-mb-md text-weight-bold">
                            ${{ selectedPlanType == 'monthly' ? item.cost : item.annuallyCost }}

                            <small class="text-body2">
                                /{{ selectedPlanType == 'monthly' ? 'month' : 'year' }}
                            </small>
                        </div>

                        <div class="flex flex-center">
                            <q-btn no-caps style="max-width: 256px; width: 100%;" class="q-mx-auto q-mb-md"
                                :color="i == 1 ? 'white' : 'primary'" text-color="primary" :outline="i !== 1"
                                label="Buy Plan" unelevated />
                        </div>

                        <q-item style="min-height: unset" v-for="(feature, _index) in item.features" :key="_index"
                            class="flex items-center q-gutter-x-sm q-px-none text-body2"
                            :class="[i === 1 ? 'text-white' : 'text-grey-8']">
                            <q-icon size="16px" :color="i == 1 ? 'white' : 'primary'" name="mdi-check" />
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
import { shallowRef } from 'vue'
const $q = useQuasar();

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
        cost: 60,
        annuallyCost: 576,
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