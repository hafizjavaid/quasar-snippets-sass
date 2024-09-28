<!-- Stacked List 07 -->
::ContentCard{title="Side Sheet 03" slug="side-sheet-03" }

#preview
::side-sheet-03
::

#codebase
::CodeView

```html
<template>
    <q-dialog full-height position="right" backdrop-filter="blur(10px)" v-model="showSideSheet">
       <q-card class="column full-height" style="width: 350px">
        <q-card-section class="full-width q-py-md">
          <div class="flex justify-between items-center">
            <div class="text-h6">Panel title</div>
            <q-btn flat dense round icon="mdi-close" v-close-popup />
          </div>
          <p class="text-no-wrap q-mb-none" style="text-overflow: ellipsis; max-width: 90%; overflow: hidden">
            Lorem, ipsum dolor sit amet consectetur adipisicing
          </p>
        </q-card-section>

        <q-separator></q-separator>
        <q-card-section class="flex-1 col-grow">
          <q-skeleton height="100%" square />
        </q-card-section>
        <q-separator></q-separator>
        <q-card-actions class="q-py-md" align="right">
          <q-btn color="grey-4" style="border-radius: 12px" unelevated no-caps outline>
            <template #default>
              <div class="text-dark">Cancel</div>
            </template>
          </q-btn>
          <q-btn unelevated style="border-radius: 12px" color="primary" no-caps label="Save" />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const showSideSheet = ref(false);
</script>

<style scoped></style>

```

::