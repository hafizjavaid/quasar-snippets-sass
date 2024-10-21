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
        <div style="max-width: 1000px;" class="q-mx-auto">
            <div class="row items-end q-mt-xl q-col-gutter-md">
                <div v-for="(item, i) in plans" :key="i" class="col-12 col-md-4">
                    <q-card flat bordered style="max-width: 450px; height: 500px;"
                        class="q-pa-md q-pa-md-lg relative-position q-mx-auto">

                        <p class="q-mb-md text-weight-bold"> {{ item.title }} </p>

                        <div :class="[$q.screen.gt.sm ? 'text-h4' : 'text-h6']" class="q-mb-sm text-weight-bold">
                            ${{ item.cost }}
                            <small class="text-body2">/month</small>
                        </div>
                        <p class="q-mb-md text-body2"> ${{ item.annuallyCost }} per month if paid annually </p>
                        <q-btn no-caps style="max-width: 256px; width: 100%;" class="q-mx-auto" color="primary"
                            label="Buy plan" unelevated />
                        <p class="text-body2 text-weight-medium q-mt-md">
                            {{ item.subtitle }}
                        </p>
                        <q-item style="min-height: unset" v-for="(feature, _index) in item.features" :key="_index"
                            class="flex items-center q-gutter-x-sm q-px-none text-body2 text-grey-8">
                            <q-icon size="16px" color="primary" name="mdi-check" />
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
const plans = [
    {
        title: 'Basic',
        subtitle: 'Everything necessary to get started. Perfect for small teams.',
        cost: 15,
        annuallyCost: 12,
        features: [
            '5 products',
            'Up to 1,000 subscribers',
            'Basic analytics',
            '48-hour support response time',
        ],
    },
    {
        title: 'Essential',
        subtitle: 'Everything in Basic, plus essential tools for growing your business.',
        cost: 30,
        annuallyCost: 24,
        features: [
            '25 products',
            'Up to 10,000 subscribers',
            'Advanced analytics',
            '24-hour support response time',
            'Marketing automations',
        ],
    },
    {
        title: 'Growth',
        subtitle: 'Everything in Essential, plus collaboration tools and deeper insights.',
        cost: 60,
        annuallyCost: 48,
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