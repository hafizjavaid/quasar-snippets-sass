<!-- Stacked List 07 -->
::ContentCard{title="Dialogs 05" slug="dialogs-05" }

#preview
::dialogs-05
::

#codebase
::CodeView

```html
<template>
    <q-dialog backdrop-filter="blur(10px)" v-model="showModal" persistent>
         <q-card>
                <q-card-section class="q-pa-lg">
                    <div class="text-h6">Edit profile</div>
                    <p class="text-grey-8">
                        Make changes to your profile here.
                    </p>
                    <q-input outlined class="q-mb-md" dense color="grey-10" v-model="Name"
                        placeholder="Name" />
                    <q-input outlined class="q-mb-md" dense color="grey-10" v-model="Email" placeholder="Email" />
                </q-card-section>
                <q-separator></q-separator>
                <q-card-actions class="bg-white" align="right">
                    <q-btn unelevated color="grey-8" no-caps label="Save changes" />
                </q-card-actions>
            </q-card>
    </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showModal = ref(true);
const Name = ref('');
const Email = ref('');
</script>

<style scoped></style>

```

::