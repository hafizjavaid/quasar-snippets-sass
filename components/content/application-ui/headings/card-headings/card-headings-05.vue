<template>
  <q-card style="max-width: 600px; width: 100%" class="q-mx-auto">
    <q-card-section class="q-py-sm q-px-md">
      <div class="flex items-center">
        <div class="flex q-gutter-x-sm items-center">
          <q-avatar size="40px" class="overlapping">
            <img :src="`https://cdn.quasar.dev/img/avatar1.jpg`" />
          </q-avatar>
          <div>
            <div class="text-h6 q-mb-0">Hafiz Javaid</div>
            <div class="text-subtitle2">@codewithhafiz</div>
          </div>
        </div>
        <q-space></q-space>
        <div class="flex q-gutter-x-sm">
          <q-btn
            color="grey-2"
            style="border-radius: 8px"
            text-color="grey-9"
            unelevated
            :label="$q.screen.lt.md ? undefined : 'Phone'"
            :icon="$q.screen.lt.md ? 'call' : undefined"
          />
          <q-btn
            color="grey-2"
            style="border-radius: 8px"
            text-color="grey-9"
            icon="mail"
            unelevated
            no-caps
            :label="$q.screen.lt.md ? undefined : 'Email'"
          >
          </q-btn>
        </div>
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
