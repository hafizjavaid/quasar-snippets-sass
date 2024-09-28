::ContentCard{title="Section Headings 07" slug="section-headings-07" }

#preview
::section-headings-07
::

#codebase
::CodeView

```html
<template>
 <div style="max-width: 1400px; width: 100%;" class="q-mx-auto">
    <section>
      <div class="flex items-center q-mb-sm">
        <h3 class="text-subtitle1 text-weight-bold q-my-sm">Section heading</h3>
        <q-space />
        <div class="flex items-center q-gutter-x-sm">
          <q-btn color="grey-4" style="border-radius: 8px" unelevated padding="6px 10px" no-caps outline>
            <template #default>
              <div class="text-dark">Share</div>
            </template>
          </q-btn>
          <q-btn color="primary" style="border-radius: 8px" padding="6px 10px" no-caps label="Create" unelevated />
        </div>
      </div>
      <q-tabs inline-label dense align="left" active-color="primary" no-caps indicator-color="primary" v-model="tab"
        shrink stretch>
        <q-tab name="tab1" label="Recent " icon="mdi-history" />
        <q-tab name="tab2" label="Approved" icon="mdi-check-decagram-outline" />
        <q-tab name="tab3" label="Pending" icon="mdi-account-clock-outline" />
        <q-tab name="tab4" label="Denied" icon="mdi-cancel" />
        <q-tab name="tab5" label="All" icon="mdi-account-group-outline" />
      </q-tabs>
      <q-separator />
    </section>
  </div>
</template>
```


```js

<script setup lang="ts">
import { ref } from 'vue';

const tab = ref('tab1');
</script>

```


::