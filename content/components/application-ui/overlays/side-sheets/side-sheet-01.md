<!-- Stacked List 07 -->
::ContentCard{title="Side Sheet 01" slug="side-sheet-01" }

#preview
::side-sheet-01
::

#codebase
::CodeView

```html
<template>
    <q-dialog full-height position="right" backdrop-filter="blur(10px)" v-model="showSideSheet">
      <q-card class="column full-height" style="width: 300px">
        <q-card-section class="flex justify-between items-center">
          <div class="text-h6">Panel title</div>
          <q-btn flat dense round icon="mdi-close" v-close-popup />
        </q-card-section>

        <q-separator></q-separator>
        <q-card-section class="flex-1 col-grow">
          <q-skeleton height="100%" square />
        </q-card-section>
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