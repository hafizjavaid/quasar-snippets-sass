<template>
  <div style="max-width: 1400px; width: 100%;" class="q-mx-auto">
    <div class="flex items-center">
      <div class="text-h6 text-weight-bold q-ma-none">Products</div>

      <q-space></q-space>

      <div class="flex items-center q-gutter-x-sm">
        <q-btn color="grey-4" style="border-radius: 8px" unelevated padding="6px 10px" no-caps outline>
          <template #default>
            <div class="text-dark">Preview</div>
          </template>
        </q-btn>

        <q-btn color="dark" style="border-radius: 8px" padding="6px 10px" no-caps label="Discard" unelevated>
        </q-btn>
        <q-btn style="border-radius: 8px" padding="6px 16px" no-caps label="Save">
        </q-btn>
      </div>
    </div>

    <q-breadcrumbs class="text-grey q-mt-md" active-color="grey-9">
      <q-breadcrumbs-el label="Home" />
      <q-breadcrumbs-el label="Products" />
      <q-breadcrumbs-el label="Edit" />
    </q-breadcrumbs>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
