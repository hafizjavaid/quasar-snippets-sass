<template>
  <div class="q-pa-md">
    <!-- {{ path }} -->
    <!-- {{ purchase }} -->

    <q-toolbar class="q-px-none" style="border-radius: 12px">
      <div class="flex items-center">
        <q-btn flat round dense color="blue-2" text-color="blue" icon="mdi-link-variant">
        </q-btn>
        <q-toolbar-title class="text-weight-bold"> {{ title }} </q-toolbar-title>
        <!-- <q-badge v-if="isFree">Free </q-badge>
        <q-badge v-if="isNew" color="green"> New </q-badge> -->
      </div>
      <q-space></q-space>
      <div class="flex q-gutter-x-sm ">
        <!-- <q-btn
          color="grey-2"
          text-color="grey-10"
          flat
          round
          dense
          icon="mdi-theme-light-dark"
          class="q-mr-xs"
        /> -->
        <div style="border-radius: 8px; font-size: 10px;" class="bg-blue-grey-1 q-pa-xs">
          <q-tabs v-model="view" narrow-indicator inline-label active-bg-color="white" active-color="primary"
            style="border-radius: 8px;" indicator-color="transparent" no-caps>
            <q-tab style="min-height: unset;" :ripple="false" name="code">
              <template #default>
                <div style="font-size: 14px;" class="text-weight-medium flex items-center q-gutter-x-xs">
                  <q-icon class="text-weight-medium" name="mdi-content-copy"></q-icon>
                  <div> Code </div>
                </div>
              </template>
            </q-tab>
            <q-tab style="min-height: unset;" :ripple="false" name="preview">
              <template #default>
                <div style="font-size: 14px;" class="text-weight-medium flex items-center q-gutter-x-xs">
                  <q-icon name="mdi-eye-outline"></q-icon>
                  <div> Preview </div>
                </div>
              </template>
            </q-tab>
          </q-tabs>
        </div>

        <!-- <q-btn dense color="primary" no-caps label="Get the code" icon-right="mdi-arrow-right" padding="1px 12px"
          style="border-radius: 4px" unelevated /> -->

      </div>
    </q-toolbar>
    <q-card style="border-radius: 12px;" class="full-width" flat bordered>
      <q-tab-panels v-model="view" animated class="shadow-2">
        <q-tab-panel name="code" class="q-pa-none">
          <slot name="codebase" />
        </q-tab-panel>
        <q-tab-panel name="preview">
          <div class="q-pa-xl">
            <div class="flex justify-center">
              <slot name="preview" />
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script setup lang="ts">
interface CardProps {
  title: string;
  slug: string;
  isFree?: boolean;
  isNew?: boolean;
}
withDefaults(defineProps<CardProps>(), {
  title: '',
  slug: '',
  isFree: false,
  isNew: false,
});
const expanded = ref(false);
const view = ref("preview");
const purchase = usePurchase();

const path = useRoute().path;


</script>

<style lang="sass" scoped>

</style>
