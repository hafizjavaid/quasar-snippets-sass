<template>
  <div class="q-pa-md q-gutter-y-md">
    <q-toolbar class="" style="border-radius: 12px">
      <div class="flex items-center">
        <q-btn flat round dense color="blue-2" text-color="blue" icon="mdi-link-variant">
        </q-btn>
        <q-toolbar-title class="text-weight-bold"> {{ title }} </q-toolbar-title>
        <q-badge v-if="isFree">Free </q-badge>
        <q-badge v-if="isNew" color="green"> New </q-badge>
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
        <q-tabs
        v-model="view"
        narrow-indicator
        dense 
        inline-label
        class="bg-grey-2 text-dark"
        style="border-radius: 8px; font-size: 10px;"
        indicator-color="transparent"
        active-color="primary"
        no-caps
        
      
      >
        <q-tab :ripple="false" name="code" icon="mdi-content-copy" label="Code" color="yellow"  />
        <q-tab :ripple="false" name="preview" icon="mdi-eye-outline" label="Preview" />
       
      </q-tabs>
        
        <q-btn
          dense
          color="primary"
          no-caps
          label="Get the code"
          icon-right="mdi-arrow-right"
          padding="1px 12px"
          style="border-radius: 4px"
          unelevated
        />
       
      </div>
    </q-toolbar>
    <q-card class="full-width" flat bordered>
     
      <q-tab-panels v-model="view" animated class="shadow-2 rounded-borders">
        <q-tab-panel name="code">
          <q-card-section>
            <slot name="codebase" />
          </q-card-section>
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
const view = ref("code");
</script>

<style lang="sass" scoped></style>
