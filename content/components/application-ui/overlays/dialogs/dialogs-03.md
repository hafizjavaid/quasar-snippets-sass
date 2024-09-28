<!-- Stacked List 07 -->
::ContentCard{title="Dialogs 03" slug="dialogs-03" }

#preview
::dialogs-03
::

#codebase
::CodeView

```html
<template>
    <q-dialog backdrop-filter="blur(10px)" v-model="showModal" persistent>
       <q-card>
                <q-card-section class="text-center">
                    <q-btn size="lg" class="" icon="mdi-check" text-color="green-9" unelevated round color="green-1" />
                    <div class="text-subtitle1 q-my-md text-weight-bold">Payment successful</div>
                    <p class="text-center q-px-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione
                        debitis quis est labore!
                    </p>
                    <q-btn unelevated color="primary" class="full-width" no-caps label="Go to dashboard" />
                </q-card-section>
            </q-card>
    </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showModal = ref(true);
</script>

<style scoped></style>

```

::