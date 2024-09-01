::ContentCard{title="Card Headings 07" slug="card-headings-07" }

#preview
::CardHeadings07
::

#codebase
::CodeView

```vue
<template>
  <q-card style="max-width: 600px; width: 100%" class="q-mx-auto">
    <q-card-section class="q-py-sm q-px-md">
      <div class="flex items-center">
        <div class="flex q-gutter-x-sm items-center">
          <q-avatar size="90px" class="overlapping">
            <img :src="`https://cdn.quasar.dev/img/avatar3.jpg`" />
          </q-avatar>
          <div>
            <div class="text-subtitle2">Welcome back,</div>
            <div class="text-h6 q-mb-0">Hafiz Javaid</div>
            <div class="text-subtitle2">Project Leader</div>
          </div>
        </div>
        <q-space></q-space>
        <div class="flex q-gutter-xs gt-xs">
          <q-btn
            color="grey-4"
            style="border-radius: 8px"
            unelevated
            :padding="$q.screen.lt.md ? '4px 8px' : '8px 12px'"
            no-caps
            outline
          >
            <template #default>
              <div class="text-dark gt-sm">Profile view</div>
              <q-icon name="mdi-account-outline" color="dark" class="lt-md"></q-icon>
            </template>
          </q-btn>
          <q-btn
            color="grey-4"
            style="border-radius: 8px"
            unelevated
            padding="4px 8px"
            no-caps
            outline
          >
            <template #default>
              <q-icon name="mdi-share-variant-outline" color="dark"></q-icon>
            </template>
          </q-btn>
          <q-btn
            color="grey-4"
            style="border-radius: 8px"
            unelevated
            padding="4px 8px"
            no-caps
            outline
          >
            <template #default>
              <q-icon name="mdi-pin-outline" color="dark"></q-icon>
            </template>
          </q-btn>
        </div>
      </div>
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section>
      <div class="row q-col-gutter-md">
        <div class="col-12 col-sm-4">
          <q-skeleton height="200px" square />
        </div>

        <div class="col-12 col-sm-4">
          <q-skeleton height="200px" square />
        </div>
        <div class="col-12 col-sm-4">
          <q-skeleton height="200px" square />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts"></script>

<style scoped></style>

```

::
