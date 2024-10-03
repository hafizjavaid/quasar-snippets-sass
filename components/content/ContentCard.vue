<template>
  <div class="q-pa-md">
    <!-- {{ path }} -->
    <!-- {{ purchase }} -->

    <q-toolbar class="q-px-sm bg-grey-11 q-mb-md" style="border-radius: 12px">
      <div class="flex items-center">
        <q-btn flat round dense color="blue-2" text-color="blue" icon="mdi-link-variant">
        </q-btn>
        <q-toolbar-title class="text-subtitle1 text-weight-medium"> {{ title }} </q-toolbar-title>
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
        <div v-if="showCode" style="border-radius: 8px; font-size: 10px;" class="bg-grey-4 q-pa-xs">
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
        <nuxt-link v-else to="/all-access">
          <q-btn style="border-radius: 8px" icon-right="mdi-arrow-right" unelevated no-caps label="Get the code" flat
            color="dark">
          </q-btn>
        </nuxt-link>
      </div>
    </q-toolbar>
    <q-card style="border-radius: 12px;" class="full-width" flat bordered>
      <q-tab-panels v-model="view" animated class="shadow-2">
        <q-tab-panel v-if="showCode" name="code" class="q-pa-none">
          <slot name="codebase" />
        </q-tab-panel>
        <q-tab-panel class="q-pa-none" name="preview">
          <div class="q-pa-lg">
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
  isFree: false, // check lock status and if it's true then also check index 
  isNew: false,
});
const expanded = ref(false);
const view = ref("preview");

const allComponents = useComponents();
const { loggedIn } = useUserSession();



const showCode = computed(() => {
  if (loggedIn.value && allComponents.value) {
    const isAllAccess = allComponents.value.every(component => component.isLicensed);
    // All Access
    if (isAllAccess) return true;

    // If Application
    if (useRoute().path.includes('application-ui')) {
      const applicationProduct = allComponents.value.find(product => product.name === 'Application UI')
      if (applicationProduct) {
        return applicationProduct.isLicensed;
      }
      return false
    }
    // If Marketing
    if (useRoute().path.includes('marketing')) {
      const marketingProduct = allComponents.value.find(product => product.name === 'Marketing')
      if (marketingProduct) {
        return marketingProduct.isLicensed;
      }
      return false
    }
    // If Ecommerce
    if (useRoute().path.includes('ecommerce')) {
      const ecommerceProduct = allComponents.value.find(product => product.name === 'Ecommerce')
      if (ecommerceProduct) {
        return ecommerceProduct.isLicensed;
      }
      return false
    }
  }
  return false
})


</script>

<style lang="sass" scoped>

</style>
