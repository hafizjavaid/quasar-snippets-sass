<!-- Newsletter Section 04 -->
::ContentCard{title="Newsletter Section 04" slug="newsletter-section-04" :is-padding="false" }

#preview
::newsletter-section-04
::

#codebase
::CodeView

```html
<template>
    <div class="full-width q-pa-md q-pa-md-xl">
        <div style="max-width: 700px;">
            <h1 :class="[$q.screen.gt.sm ? 'text-h4' : 'text-h6']" class="text-weight-bold q-mt-none q-mb-md">
                Want product news and updates?
                <br>
                Sign up for our newsletter.
            </h1>
            <q-input class="q-my-md" style="max-width: 450px" v-model="email" unelevated standout
                placeholder="Enter your email">
                <template v-slot:append>
                    <q-btn class="" color="primary" label="Subscribe" no-caps unelevated></q-btn>
                </template>
            </q-input>
            <p class="text-caption">
                We care about your data. Read our <span class="text-primary text-weight-medium">privacy policy.</span>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');


</script>

<style lang="scss" scoped></style>

```

::