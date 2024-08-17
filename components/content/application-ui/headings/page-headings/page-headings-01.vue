<template>
  <div style="max-width: 1400px; width: 100%;" class="q-mx-auto">
    <div class="flex items-center">
      <div class="text-h6 q-ma-none">Blogs</div>

      <q-space></q-space>

      <div class="flex items-center q-gutter-x-sm">
        <q-btn color="grey-4" style="border-radius: 8px" unelevated padding="4px 20px" no-caps outline>
          <template #default>
            <div class="text-dark gt-sm">Edit</div>
            <q-icon name="mdi-pencil-outline" color="dark" class="lt-md"></q-icon>
          </template>
        </q-btn>
        <q-btn color="primary" style="border-radius: 8px" unelevated padding="4px 12px" no-caps label="Publish" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
