<template>
  <q-toolbar class="q-px-sm bg-grey-1 q-mb-md" style="border-radius: 12px">
    <div class="flex items-center">
      <q-btn flat round dense color="blue-2" text-color="blue" icon="mdi-link-variant">
      </q-btn>
      <q-toolbar-title class="text-subtitle1 text-weight-medium"> {{ title }} </q-toolbar-title>
    </div>
    <q-space></q-space>
    <div class="flex q-gutter-x-md items-center ">

      <template v-if="showCode">
        <div style="border-radius: 8px; font-size: 10px;" class="bg-grey-3 q-pa-xs">
          <q-tabs v-model="view" narrow-indicator inline-label active-bg-color="white" active-color="primary"
            style="border-radius: 8px;" indicator-color="transparent" no-caps>
            <q-tab style="min-height: unset;" :ripple="false" name="code">
              <template #default>
                <div style="font-size: 14px;" class="text-weight-medium flex items-center q-gutter-x-xs">
                  <q-icon class="text-weight-medium" name="mdi-code-tags"></q-icon>
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
        <q-icon @click="copyCode" class="cursor-pointer" color="grey-8" name="mdi-content-copy" size="20px">
          <q-tooltip>
            {{ view === 'preview' ? 'Switch to code view to copy' : 'Copy' }}
          </q-tooltip>
        </q-icon>
      </template>
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
        <!-- <slot name="codebase" /> -->
        <div ref="codeBlock">
          <slot name="codebase" />
        </div>
      </q-tab-panel>
      <q-tab-panel class="q-pa-none" name="preview">
        <div :class="{ 'q-pa-lg': isPadding }" class="">
          <div class="flex justify-center">
            <slot name="preview" />
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script setup lang="ts">
import { copyToClipboard } from 'quasar';

interface CardProps {
  title: string;
  slug: string;
  isFree?: boolean;
  isNew?: boolean;
  isPadding?: boolean
}
withDefaults(defineProps<CardProps>(), {
  title: '',
  slug: '',
  isFree: false, // check lock status and if it's true then also check index 
  isNew: false,
  isPadding: true
});
const view = ref("preview");

const allComponents = useComponents();
const { loggedIn } = useUserSession();
const { showMessage } = useStore();



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

const codeBlock = ref<HTMLDivElement | null>(null);

const $q = useQuasar();
const copyCode = () => {
  if (codeBlock.value) {
    const codeToCopy = codeBlock.value.innerText || '';
    copyToClipboard(codeToCopy)
      .then(() => {
        showMessage('Code copied to clipboard!');
      })
      .catch(() => {
        showMessage('Something Went Wrong');
      });
  }
};
</script>

<style lang="sass" scoped>

</style>
