<!-- Timeline 05 -->
::ContentCard{title="Timeline 05" slug="timeline-05" }

#preview
::timeline-05
::

#codebase
::CodeView

```html
<template>
  <div class="q-mx-auto" style="max-width: 600px; width: 100%;">
       <div class="row q-gutter-md q-mb-lg">
            <q-option-group type="radio" dense v-model="layout" :options="[
                { label: 'Dense layout', value: 'dense' },
                { label: 'Comfortable layout', value: 'comfortable' },
                { label: 'Loose layout', value: 'loose' },
            ]" />
            <q-option-group type="radio" dense v-model="side" :disable="layout === 'loose'" :options="[
                { label: 'Content on right', value: 'right' },
                { label: 'Content on left', value: 'left' },
            ]" />
        </div>
        <q-timeline :layout="layout" :side="side" color="grey-8">
            <q-timeline-entry title="Event Title" subtitle="June 22, 2024">
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </div>
            </q-timeline-entry>
            <q-timeline-entry title="Event Title" subtitle="June 21, 2024" icon="delete">
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </div>
            </q-timeline-entry>
            <q-timeline-entry title="Event Title" subtitle="June 22, 2024" color="orange" icon="done_all">
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </div>
            </q-timeline-entry>
            <q-timeline-entry title="Event Title" subtitle="June 22, 2024"
                avatar="https://cdn.quasar.dev/img/avatar2.jpg">
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </div>
            </q-timeline-entry>
        </q-timeline>
      </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const layout = ref<'dense' | 'comfortable' | 'loose' | undefined>('dense');
const side = ref<'right' | 'left' | undefined>('right');
</script>

<style scoped></style>
```

::