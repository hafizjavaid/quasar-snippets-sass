::ContentCard{title="Card Headings 04" slug="card-headings-04" }

#preview
::CardHeadings04
::

#codebase
::CodeView

```vue
<template>
  <q-card style="max-width: 600px; width: 100%" class="q-mx-auto">
    <q-card-section class="q-py-sm q-px-md bg-dark text-white">
      <div class="flex items-center">
        <div class="flex q-gutter-x-sm items-center">
          <q-icon size="24px" name="group"></q-icon>
          <div>
            <div class="text-h6 q-mb-0">Records</div>
            <div class="text-subtitle2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
        <q-space></q-space>
        <q-btn color="primary" unelevated label="Create new" no-caps> </q-btn>
      </div>
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section>
      <q-skeleton height="200px" square />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts"></script>

<style scoped></style>
```

::
