<!-- Stacked List 07 -->
::ContentCard{title="Dialogs 04" slug="dialogs-04" }

#preview
::dialogs-04
::

#codebase
::CodeView

```html
<template>
    <q-dialog backdrop-filter="blur(10px)" v-model="showModal" persistent>
        <q-card>
                <q-card-section class="text-center">
                    <q-btn size="lg" class="" icon="mdi-check" text-color="green-9" unelevated round color="green-1" />
                    <div class="text-subtitle1 q-my-md text-weight-bold">Purchase complete</div>
                    <p class="text-center text-grey-8 q-px-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione
                        debitis quis est labore!
                    </p>
                    <div class="row q-col-gutter-md">
                        <div class="col">

                            <q-btn class="full-width" color="grey-5" unelevated no-caps outline>
                                <template #default>
                                    <div class="text-dark">Home</div>
                                </template>
                            </q-btn>
                        </div>
                        <div class="col">

                            <q-btn class="full-width" unelevated color="primary" no-caps label="Manage Team" />
                        </div>
                    </div>
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