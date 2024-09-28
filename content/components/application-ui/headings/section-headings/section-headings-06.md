::ContentCard{title="Section Headings 06" slug="section-headings-06" }

#preview
::section-headings-06
::

#codebase
::CodeView

```html
<template>
   <div style="max-width: 1400px; width: 100%;" class="q-mx-auto">
        <section>
            <h3 class="text-subtitle1 text-weight-bold q-mb-xs">Section heading</h3>
            <q-tabs dense align="left" active-color="primary" no-caps indicator-color="primary" v-model="tab" shrink
                stretch>
                <q-tab name="tab1" label="Recent " />
                <q-tab name="tab2" label="Approved" />
                <q-tab name="tab3" label="Pending" />
                <q-tab name="tab4" label="Denied" />
                <q-tab name="tab5" label="All" />
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