::ContentCard{title="Section Headings 08" slug="section-headings-08" }

#preview
::section-headings-08
::

#codebase
::CodeView

```html
<template>
   <div style="max-width: 1400px; width: 100%;" class="q-mx-auto">
        <section>
            <div class="flex items-center q-gutter-x-md">
                <h3 class="text-subtitle1 text-weight-bold q-my-sm">Section heading</h3>
                <q-tabs inline-label dense align="left" active-color="primary" no-caps indicator-color="primary" v-model="tab" shrink stretch>
                    <q-tab name="tab1" label="Open " />
                    <q-tab name="tab2" label="Closed" />
                </q-tabs>
            </div>
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