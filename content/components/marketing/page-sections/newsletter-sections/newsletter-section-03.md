<!-- Newsletter Section 03 -->
::ContentCard{title="Newsletter Section 03" slug="newsletter-section-03" :is-padding="false" }

#preview
::newsletter-section-03
::

#codebase
::CodeView

```html
<template>
    <div class="full-width img-gradient q-pa-md q-pa-md-xl text-center flex justify-center column"
        style="min-height: 400px;">
        <div class="row justify-center item-center">
            <div class="col-12 col-md-7 flex column justify-center">
                <div>
                    <h1 :class="[$q.screen.gt.sm ? 'text-h4' : 'text-h6']" class="text-weight-bold q-mt-none q-mb-md">
                        Get notified when we’re launching.
                    </h1>
                    <p class="text-subtitle2 text-grey-8 q-mb-md q-mt-none">
                        Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et
                        culpa.
                    </p>
                    <q-input class="q-mx-auto" style="max-width: 450px" v-model="email" unelevated outlined
                        placeholder="Enter your email">
                        <template v-slot:append>
                            <q-btn class="" color="primary" label="Subscribe" no-caps unelevated></q-btn>
                        </template>
                    </q-input>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');


</script>

<style lang="scss" scoped>
.img-gradient {

    background: linear-gradient(to bottom, rgba(255, 255, 255, .8), rgba(255, 255, 255, 1)),
        url('https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-size: cover;
    background-position: center;
}
</style>

```

::