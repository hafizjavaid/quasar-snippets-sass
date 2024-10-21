<!-- Pricing Section 09 -->
::ContentCard{title="Pricing Section 09" slug="pricing-section-09" :is-padding="false"}

#preview
::pricing-section-09
::

#codebase
::CodeView

```html
<template>
    <div style="max-width: 1200px;" class="q-mx-auto bg-grey-3 q-pa-xl">
        <div>
            <div class="row q-col-gutter-md ">
                <div class="col-12 col-md-6">
                    <q-card flat bordered style="border-radius: 8px;" class="q-pa-lg q-pa-md-xl">
                        <div class="flex q-mb-lg">
                            <q-btn unelevated rounded color="primary" padding="4px 6px">
                                <template #default>
                                    <q-btn rounded @click="plan = 'monthly'" no-caps class="" color="white"
                                        :text-color="plan == 'monthly' ? 'dark' : undefined" :flat="plan !== 'monthly'"
                                        label="Monthly" unelevated />
                                    <q-btn rounded @click="plan = 'yearly'" no-caps class="" color="white"
                                        :text-color="plan == 'yearly' ? 'dark' : undefined" :flat="plan !== 'yearly'"
                                        label="Yearly" unelevated />
                                </template>
                            </q-btn>
                        </div>
                        <div class="flex column q-gutter-y-md">
                            <q-item style="min-height: unset" v-for="(item, i) in features" :key="i"
                                class="flex items-center justify-between text-body2 q-py-xs">
                                <q-item-section style="flex: 1">
                                    <strong>{{ item }}</strong>
                                </q-item-section>
                                <q-icon size="24px" name="mdi-check-circle" :color="getIconColor(isActive, i)" />
                            </q-item>
                        </div>
                    </q-card>
                </div>
                <div class="col-12 col-md-6 flex column justify-between q-gutter-md">
                    <q-card v-for="(item, i) in plans" :key="i" boredered class="flex items-center q-pa-lg" flat
                        :class="[isActive === i ? 'bg-primary text-white' : 'bg-white']" @click="isActive = i"
                        style="border-radius: 20px">
                        <div class="flex items-center q-gutter-x-md q-gutter-y-none ">
                            <q-icon size="24px" name="mdi-check-circle" :color="isActive == i ? 'white' : 'grey'" />
                            <div class="flex column">
                                <div class="text-body2">{{ item.title }}</div>
                                <q-chip class="q-ma-none q-mt-xs" :color="isActive == i ? 'white' : 'red-2'"
                                    size="small" label="Save 20%" />
                            </div>
                        </div>

                        <div class="flex text-h3 q-my-none justify-end" style="flex-grow: 1;">
                            <template v-if="plan == 'monthly'">
                                <small class="text-h5 q-my-none">$</small>{{ item.cost }}
                            </template>
                            <template v-else>
                                <small class="text-h5 q-my-none">$</small>{{ item.yearlyCost }}
                            </template>
                            <small class="text-body2 flex items-center q-ml-xs">
                                /{{ plan == 'monthly' ? 'mo' : 'yr' }}
                            </small>
                        </div>
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


const isActive = shallowRef(0)
const plan = shallowRef('monthly')

const features = [
    'All Limited links',
    'Own analytics platform',
    'Chat support',
    'Optimize hashtags',
    'Unlimited users',
    'Advanced Statistics',
]

const plans = [
    {
        title: 'Intro',
        cost: 19,
        yearlyCost: 199,
    },
    {
        title: 'Base',
        cost: 39,
        yearlyCost: 399,
    },
    {
        title: 'Popular',
        cost: 49,
        yearlyCost: 499,
    },
    {
        title: 'Enterprise',
        cost: 59,
        yearlyCost: 599,
    },
]

function getIconColor(index: number, i: number) {
    return i > index + 2 ? 'grey-8' : 'primary'
}
</script>

<style scoped></style>
```

::