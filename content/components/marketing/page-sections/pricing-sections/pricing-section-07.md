<!-- Pricing Section 07 -->
::ContentCard{title="Pricing Section 07" slug="pricing-section-07"}

#preview
::pricing-section-07
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
        <div style="max-width: 1000px;" class="q-mx-auto">
            <div class="row items-center justify-center q-mt-xl" :class="{ 'q-col-gutter-md': $q.screen.lt.md }">
                <div v-for="(item, i) in plans" :key="i" class="col-12 col-md-4">
                    <q-card :style="i == 0 ? 'min-height: 380px;' : 'min-height: 400px;'" style="border-radius: 24px;"
                        :class="[i == 1 ? 'bg-primary text-white' : '']"
                        class="q-pa-md q-pa-md-lg relative-position shadow-6 q-mx-auto">
                        <p class="text-subtitle2 text-weight-bold q-mb-md">
                            {{ item.title }}
                        </p>
                        <div :class="[$q.screen.gt.sm ? 'text-h4' : 'text-h6']" class="q-mb-md text-weight-bold">
                            ${{ item.cost }}
                            <small class="text-body2">
                                /month
                            </small>
                        </div>
                        <p class="text-subtitle2  q-mb-md">
                            {{ item.subtitle }}
                        </p>
                        <q-item style="min-height: unset" v-for="(feature, _index) in item.features" :key="_index"
                            class="flex items-center q-gutter-x-sm q-px-none text-body2"
                            :class="[i === 1 ? 'text-white' : 'text-grey-8']">
                            <q-icon size="16px" name="mdi-check" />
                            <q-item-section>
                                {{ feature }}
                            </q-item-section>
                        </q-item>
                        <div class="flex flex-center">
                            <q-btn no-caps dense style="width: 100%;" class="q-mx-auto q-mt-md"
                                :color="i == 0 ? 'primary' : 'white'" :text-color="i == 1 ? 'primary' : ''"
                                label="Get started today" unelevated />
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
        title: 'Hobby',
        subtitle: 'Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.',
        cost: 49,
        features: [
            '5 products',
            'Up to 1,000 subscribers',
            'Basic analytics',
            '48-hour support response time',
        ],
    },
    {
        title: 'Team',
        subtitle: 'Explicabo quo fugit vel facere ullam corrupti non dolores. Expedita eius sit sequi.',
        cost: 79,
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