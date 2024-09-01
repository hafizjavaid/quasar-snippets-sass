::ContentCard{title="Card Headings 02" slug="card-headings-02" }

#preview
::CardHeadings02
::

#codebase
::CodeView

```vue
<template>
  <q-card style="max-width: 600px; width: 100%" class="q-mx-auto">
    <q-card-section class="q-py-sm q-px-md bg-primary text-white">
      <div class="flex items-center">
        <div>
          <div class="text-h6">Records</div>
          <div class="text-subtitle2">John Doe</div>
        </div>
        <q-space></q-space>
        <q-btn round flat padding="4px" icon="more_vert">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>New tab</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>New incognito tab</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Recent tabs</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>History</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Downloads</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Settings</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Help &amp; Feedback</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
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
