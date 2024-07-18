<template>
  <q-card style="max-width: 600px; width: 100%" class="q-mx-auto">
    <q-card-section class="q-py-sm q-px-md">
      <div class="flex items-center">
        <div class="flex q-gutter-x-sm items-center">
          <q-avatar size="40px" class="overlapping">
            <img :src="`https://cdn.quasar.dev/img/avatar2.jpg`" />
          </q-avatar>
          <div>
            <div class="text-h6 q-mb-0">Hafiz Javaid</div>
            <div class="text-subtitle2">@codewithhafiz</div>
          </div>
        </div>
        <q-space></q-space>
        <div class="flex q-gutter-xs">
          <q-btn round flat color="grey-9" icon="share" class="gt-xs" />
          <q-btn round flat color="grey-9" icon="favorite" class="gt-xs" />

          <q-btn round flat color="grey-9" icon="more_vert">
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
