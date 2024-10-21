<!-- CTA Section 04 -->
::ContentCard{title="CTA Section 04" slug="cta-section-04" :is-padding="false"  }

#preview
::cta-section-04
::

#codebase
::CodeView

```html
<template>
    <div class="full-width q-pa-md-xl q-pa-lg bg-primary text-white">
        <div>
            <div style="max-width: 500px;" class="q-mx-auto text-center">
                <h1 :class="[$q.screen.gt.sm ? 'text-h4' : 'text-h6']" class="text-weight-bold q-mb-md q-mt-none">
                    Boost your productivity.
                </h1>
                <p class="text-subtitle2 text-weight-medium q-mb-md text-grey-4">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                    lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                    fugiat aliqua.
                </p>
                <q-btn class="q-mr-sm" color="grey-1" flat text-color="white" label="Get started" no-caps
                    unelevated></q-btn>
                <q-btn flat label="Learn more" color="grey-1" text-color="white" no-caps unelevated
                    icon-right="mdi-arrow-right"></q-btn>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
const $q = useQuasar();


</script>

<style scoped></style>

```

::