::ContentCard{title="Page Headings 02" slug="page-headings-02" }

#preview
::page-headings-02
::

#codebase
::CodeView

```html
<template>
<div style="max-width: 1400px" class="q-mx-auto">
    <q-breadcrumbs class="text-grey q-mb-md" active-color="grey-9">
      <q-breadcrumbs-el label="Home" />
      <q-breadcrumbs-el label="Products" />
      <q-breadcrumbs-el label="Edit" />
    </q-breadcrumbs>
    <div class="flex items-center">
      <div class="text-h4 q-ma-none">Products</div>

      <q-space></q-space>

      <div class="flex items-center q-gutter-x-sm">
        <q-btn color="red-10" style="border-radius: 8px" unelevated padding="6px 16px" no-caps outline>
          <template #default>
            <div class="flex q-gutter-x-sm">
              <q-icon name="mdi-link-variant" />
              <div class="gt-sm">Delete</div>
            </div>
          </template>
        </q-btn>
        <q-btn color="grey-9" icon="mdi-check" style="border-radius: 8px" unelevated padding="6px 16px" no-caps
          label="Update" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
```

::
