<!-- Newsletter Section 05 -->
::ContentCard{title="Newsletter Section 05" slug="newsletter-section-05" :is-padding="false" }

#preview
::newsletter-section-05
::

#codebase
::CodeView

```html
<template>
    <div class="full-width q-pa-md q-pa-md-xl bg-primary text-white">
        <div style="max-width: 700px;">
            <h1 :class="[$q.screen.gt.sm ? 'text-h4' : 'text-h6']" class="text-weight-bold q-mt-none q-mb-md">
                Want product news and updates?
                <br>
                Sign up for our newsletter.
            </h1>
            <q-input class="bg-white q-my-md" square style="max-width: 450px" v-model="email" unelevated standout
                placeholder="Enter your email">
                <template v-slot:append>
                    <q-btn class="" color="primary" label="Subscribe" no-caps unelevated></q-btn>
                </template>
            </q-input>
            <p class="text-caption">
                We care about your data. Read our privacy policy.
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