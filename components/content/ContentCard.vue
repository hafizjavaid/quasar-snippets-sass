<template>
  <div class="q-pa-md q-gutter-y-md">
    <q-toolbar class="bg-grey-3 text-grey-10" style="border-radius: 12px">
      <div class="flex items-center">
        <q-btn flat round dense color="blue-2" text-color="blue" icon="mdi-link-variant">
        </q-btn>
        <q-toolbar-title class="text-weight-bold"> Page Headings 01 </q-toolbar-title>
        <q-badge>Free </q-badge>
      </div>
      <q-space></q-space>
      <div class="flex">
        <q-btn
          color="grey-2"
          text-color="grey-10"
          flat
          round
          dense
          icon="mdi-theme-light-dark"
          class="q-mr-xs"
        />
        <q-btn
          color="grey-2"
          text-color="grey-10"
          flat
          round
          dense
          icon="mdi-content-copy"
          class="q-mr-xs"
        />
        <q-btn
          color="grey-9"
          unelevated
          dense
          :icon="expanded ? 'mdi-chevron-up' : 'mdi-code-tags'"
          @click="t"
          class="q-mr-xs"
        />
      </div>
    </q-toolbar>
    <q-card class="full-width" flat bordered>
      <q-slide-transition>
        <div v-show="expanded">
          <q-card-section>
            <slot name="codebase" />
          </q-card-section>
          <q-separator />
        </div>
      </q-slide-transition>
      <div class="q-pa-xl">
        <div class="flex justify-center">
          <slot name="preview" />
        </div>
      </div>
    </q-card>
  </div>
</template>

<script setup lang="ts">
const expanded = ref(false);

const t = () => {
  console.log('YY');

  expanded.value = !expanded.value;
};
</script>

<style lang="sass" scoped></style>
