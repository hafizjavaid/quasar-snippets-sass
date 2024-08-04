<template>
  <NuxtLayout>
    <div class="q-pa-xl">
      <div class="row q-col-gutter-lg">
        <div v-for="product in products" :key="product.id" class="col-12 col-sm-6 col-md-4 col-lg-3">
          <q-card bordered flat>
            <q-card-section class="q-px-lg q-py-md">
              <div class="flex items-center q-gutter-x-md">
                <div class="text-subtitle2 text-grey-8"> {{ product.title }} </div>
                <q-btn @click="manageSubscription(product)" padding="8px 10px" color="primary" unelevated>
                  {{ product.title }}
                </q-btn>
              </div>
            </q-card-section>

          </q-card>
        </div>
        

      </div>
      <SubscriptionButton></SubscriptionButton>
    </div>
    <div class="q-pa-xl">
      <div v-for="mainCategory in navigation" :key="mainCategory.key" class="q-mb-xl">
        <div class="flex items-center q-gutter-x-sm text-grey-9">
          <q-icon :name="mainCategory.icon" size="24px"></q-icon>
          <div class="text-h5">{{ mainCategory.title }}</div>
        </div>
        <p>
          {{ mainCategory.description }}
        </p>
        <template v-if="mainCategory.children">
          <q-card v-for="(subCategory, subCategoryIndex) in mainCategory.children.filter(
            (c) => 'children' in c
          )" :key="subCategoryIndex" class="q-pa-md q-mb-lg" bordered flat style="border-radius: 8px">
            <div class="flex items-center q-gutter-x-sm text-grey-9">
              <q-icon :name="subCategory.icon" size="24px"></q-icon>
              <div class="text-body1 text-weight-bold">{{ subCategory.title }}</div>
            </div>
            <template v-if="subCategory.children">
              <div class="row q-col-gutter-md q-mt-md">
                <div v-for="(lastCategory, lastCategoryIndex) in subCategory.children.filter(
                  (c) => 'children' in c
                )" :key="lastCategoryIndex" class="col-sm-6 col-md-4 col-lg-3 col-12">
                  <q-card class="q-pa-sm" bordered flat style="border-radius: 8px">
                    <img src="https://cdn.quasar.dev/img/mountains.jpg" />
                    <q-card-section class="q-px-none q-pb-none">
                      <div class="text-body1">
                        {{ lastCategory.title }}
                      </div>
                      <div v-if="lastCategory.children" class="text-subtitle2 text-grey-7 text-weight-normal">
                        {{
                          lastCategory.children.filter((c) => !('children' in c)).length
                        }}
                        snippets
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </template>
          </q-card>
        </template>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
// definePageMeta({
//   layout: 'default'
// })
const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
);

const products = ref([
  {
    id: '66af878c483e68dc8d69b195',
    title: 'All Access',
    description: 'Gain access to all of the snippets in the Application UI, Marketing, and Ecommerce categories — all of the components you need to build any UI'
  },
  {
    id: '66af878c483e68dc8d69b196',

    title: 'Application UI Access',
    description: ''
  },
  {
    id: '66af878c483e68dc8d69b197',

    title: 'Marketing Access',
    description: ''
  },
  {
    id: '66af878c483e68dc8d69b198',
    title: 'Ecommerce Access',
    description: ''
  },
]);

const manageSubscription = async (p: any) => {
    console.log(p);
    
};
</script>
