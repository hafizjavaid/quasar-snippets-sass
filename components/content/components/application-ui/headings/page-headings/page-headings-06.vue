<template>
    <div style="max-width: 1400px; width: 100%;" class="q-mx-auto">
        <div class="flex items-center">
          <div class="flex items-center q-gutter-x-sm">
            <q-btn unelevated round color="white">
              <q-avatar size="50px">
                <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
              </q-avatar>
            </q-btn>
            <div>
              <div class="text-subtitle1 text-weight-medium">Quasar, LLC</div>
              <div class="text-caption">Invoice #011001</div>
            </div>
          </div>
          <q-space></q-space>

          <div class="flex items-center q-gutter-md">
            <q-btn color="grey-4" style="border-radius: 12px" unelevated padding="8px 10px" no-caps outline>
              <template #default>
                <q-icon size="18px" name="mdi-content-copy" color="dark" class=""></q-icon>
                <div class="text-dark q-ml-sm">Copy URL</div>
              </template>
            </q-btn>
            <q-btn color="grey-4" style="border-radius: 12px" unelevated padding="8px 10px" no-caps outline>
              <template #default>
                <q-icon size="18px" name="mdi-pencil-outline" color="dark" class=""></q-icon>
                <div class="text-dark q-ml-sm">Edit</div>
              </template>
            </q-btn>
            <q-btn color="primary" style="border-radius: 12px" unelevated padding="6px 10px" no-caps>
              <template #default>
                <div class="flex items-center q-gutter-x-sm">
                  <q-icon size="18px" name="mdi-send-outline" />
                  <div>Send</div>
                </div>
              </template>
            </q-btn>
          </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>