<!-- Timeline 03 -->
::ContentCard{title="Timeline 03" slug="timeline-03" }

#preview
::timeline-03
::

#codebase
::CodeView

```html
<template>
  <div class="q-mx-auto" style="max-width: 600px; width: 100%;">
        <q-timeline color="grey-8">
            <q-timeline-entry heading body="Timeline heading" />
            <q-timeline-entry title="Event Title" subtitle="June 22, 2024"
                avatar="https://cdn.quasar.dev/img/avatar3.jpg" :body="body" />
            <q-timeline-entry title="Event Title" subtitle="June 22, 2024" icon="delete" :body="body" />
            <q-timeline-entry title="Event Title" subtitle="June 22, 2024" color="orange" icon="done_all"
                :body="body" />
            <q-timeline-entry title="Event Title" subtitle="June 22, 2024" icon="delete" :body="body" />
        </q-timeline>
      </div>
</template>

<script setup lang="ts">
const body =  `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`;
</script>

<style scoped></style>
```

::