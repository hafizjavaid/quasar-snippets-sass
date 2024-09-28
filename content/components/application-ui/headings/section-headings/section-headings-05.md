::ContentCard{title="Section Headings 05" slug="section-headings-05" }

#preview
::section-headings-05
::

#codebase
::CodeView

```html
<template>
   <div style="max-width: 1400px; width: 100%;" class="q-mx-auto">
        <section>
            <div class="flex items-center">
                <h3 class="text-subtitle1 text-weight-bold q-mb-md">Section heading</h3>
                <q-space />
                <q-input style="border-radius: 20px" placeholder="Search sections" outlined v-model="text" dense>
                    <template v-slot:prepend>
                        <q-icon name="mdi-magnify" />
                    </template>
                    <template v-slot:append>
                        <q-btn no-caps size="12px" padding="4px" flat color="grey-8" icon="mdi-sort-descending" icon-right="mdi-chevron-down" label="Sort" />
                    </template>
                </q-input>
            </div>
            <q-separator />
        </section>
    </div>
</template>
```

```js

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('');
</script>

```

::