<template>
  <div class="q-pa-md q-gutter-y-md">
    <q-toolbar class="bg-grey-3 text-grey-10" style="border-radius: 12px">
      <div class="flex items-center">
        <q-btn flat round dense color="blue-2" text-color="blue" icon="mdi-link-variant">
        </q-btn>
        <q-toolbar-title class="text-weight-bold"> {{ title }} </q-toolbar-title>
        <q-badge v-if="isFree">Free </q-badge>
        <q-badge v-if="isNew" color="green"> New </q-badge>
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
          @click="expanded = !expanded"
          class="q-mr-xs"
        />
        <q-btn
          dense
          color="primary"
          outline
          no-caps
          label="Get the code"
          icon-right="mdi-arrow-right"
          padding="3px 12px"
          style="border-radius: 4px"
        />
        <!-- <q-btn color="primary" class="full-width" outline unelevated no-caps>
            <template #default>
              <q-icon name="mdi-credit-card-outline"></q-icon>
              <div class="text-grey-9 q-ml-sm">Buy Crypto</div>
            </template>
          </q-btn> -->
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
interface CardProps {
  title: string;
  slug: string;
  isFree: boolean;
  isNew: boolean;
}
withDefaults(defineProps<CardProps>(), {
  title: '',
  slug: '',
  isFree: false,
  isNew: false,
});
const expanded = ref(false);
</script>

<style lang="sass" scoped></style>
