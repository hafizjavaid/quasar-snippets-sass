<template>
  <q-card style="max-width: 600px; width: 100%" class="q-mx-auto">
    <q-card-section class="q-py-sm q-px-md">
      <div class="flex items-center">
        <div class="text-h6">Records</div>
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
