<!-- Pricing Section 01 -->
::ContentCard{title="Pricing Section 01" slug="pricing-section-01" }

#preview
::pricing-section-01
::

#codebase
::CodeView

```html
<template>
    <div>
        <div style="max-width: 700px;" class="q-mx-auto text-center ">
            <h3 :class="[$q.screen.gt.sm ? 'text-h3' : 'text-h5']" class="text-weight-bold q-mb-md">
                Gain access for One Price
            </h3>
            <p class="text-subtitle1 text-weight-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
                ratione debitis quis est labore voluptatibus! Eaque cupiditate
                minima, at placeat totam.
            </p>
        </div>
        <div style="max-width: 1000px;" class="q-mx-auto ">
            <q-card flat bordered style="border-radius: 20px;">
                <q-card-section class="q-pa-sm">
                    <div class="row">
                        <div class="col-12 col-md-4">
                            <q-card flat class="bg-grey-3 q-pa-md full-height" style="border-radius: 20px;">
                                <div class="text-center">
                                    <div class="text-subtitle1 text-weight-medium q-mb-sm">
                                        Pay once, get access forever
                                    </div>
                                    <div :class="[$q.screen.gt.sm ? 'text-h3' : 'text-h5']" class=" q-mb-md text-weight-bold">
                                        $199
                                        <small class="text-overline">USD</small>
                                    </div>
                                    <q-btn label="Get access" no-caps unelevated color="green"
                                        style="border-radius: 8px;" class="q-mb-md full-width"></q-btn>
                                    <div style="width: 75%;" class="text-caption text-center q-mx-auto">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </div>
                                </div>
                            </q-card>
                        </div>
                        <div class="col-12 col-md-8">
                            <div class="q-pa-lg">
                                <h5 :class="[$q.screen.gt.sm ? 'text-h5' : 'text-body1']" class="q-mt-none text-weight-bold q-mb-md">Lifetime subscription</h5>
                                <p class="q-mb-md">
                                    Get the most out of QuasarUI with a lifetime subscription. This
                                    is a limited time offer and will not be available in the future.
                                    Get access to all current and future features, including full
                                    access to all QuasarUI components.
                                </p>

                                <div class="flex items-center q-mb-lg">
                                    <span class="text-primary text-no-wrap text-body2 text-weight-medium q-mr-md">What
                                        you get</span>
                                    <q-separator style="flex: 1;" />
                                </div>

                                <div class="row">
                                    <div v-for="feature in features" :key="feature" class="col-12 col-md-6">
                                        <q-icon name="mdi-check-circle" color="green"></q-icon>
                                        <span class="text-caption q-ml-sm"> {{ feature }} </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
const $q = useQuasar();
const features = [
    'All templates developed using Quasar',
    'Full access to all QuasarUI components',
    'Access to all current and future features',
    'Lifetime QuasarUI access',
]
</script>

<style scoped></style>

```

::