<template>
  <NuxtLayout>
    <div class="q-pa-xl">
      <!-- <pre>

        {{ navigation }}
      </pre> -->
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
      <!-- <pre>

        {{ userStatus }}

      </pre>
      <pre>

        {{ userPurchases }}
      </pre> -->
      <pre> {{ userPurchase }} </pre>
    </div>
    <div class="q-pa-xl">
      <div v-for="mainCategory in navigation" :key="mainCategory.key" class="q-mb-xl">
        <div class=" ">
          <div class="flex items-center q-gutter-x-sm text-grey-9">
            <q-icon :name="mainCategory.icon" size="24px"></q-icon>
            <div class="text-h5">{{ mainCategory.title }}</div>
          </div>
          <p>
            {{ mainCategory.description }}
          </p>
        </div>
        <q-separator class="q-my-xl  text-grey-1 bg-grey-3" />
        <template v-if="mainCategory.children">
          <q-card v-for="(subCategory, subCategoryIndex) in mainCategory.children.filter(
            (c) => 'children' in c
          )" :key="subCategoryIndex"  class="shadow-1 q-mb-lg">
            <q-card-section class="q-py-md q-px-lg ">
              <div class="text-h6">{{ subCategory.title }}</div>
            </q-card-section>
            <q-separator></q-separator>
            <template v-if="subCategory.children">
              <q-card-section>
                <div class="row q-col-gutter-md">
                  <div v-for="(lastCategory, lastCategoryIndex) in subCategory.children.filter(
                    (c) => 'children' in c
                  )" :key="lastCategoryIndex" class="col-sm-6 col-md-4 col-lg-3 col-12">
                    <NuxtLink class="text-grey-6" style="text-decoration: none;" :to="lastCategory._path">
                      <q-list>
                        <q-item style="border-radius: 12px;"  class="q-pa-none" clickable>
                          <template #default>
                            <q-card style="border-radius: 12px;" class="bg-transparent q-pa-md" bordered flat>
                              <img style="border-radius: 12px;" src="https://cdn.quasar.dev/img/mountains.jpg" />
                              <div class="q-px-none q-pb-none q-mt-md">
                                <div class="text-subtitle1 text-grey-10 text-weight-medium ">
                                  {{ lastCategory.title }}
                                </div>
                                <div v-if="lastCategory.children" class="text-body2 text-grey-7  text-weight-normal">
                                  {{ lastCategory.children.filter((c) => !('children' in c)).length }} snippets
                                </div>
                              </div>
                            </q-card>
                          </template>
                        </q-item>
                      </q-list>
                    </NuxtLink>
                  </div>
                </div>
              </q-card-section>
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
const userPurchase = useState('purchase')


const products = ref([
  {
    id: '66af878c483e68dc8d69b195',
    title: 'All Access',
    description: 'Gain access to all of the snippets in the Application UI, Marketing, and Ecommerce categories — all of the components you need to build any UI',
    price: 100.0,
  },
  {
    id: '66af878c483e68dc8d69b196',
    title: 'Application UI Access',
    description: '',
    price: 100.0,
  },
  {
    id: '66af878c483e68dc8d69b197',
    title: 'Marketing Access',
    description: '',
    price: 100.0,
  },
  {
    id: '66af878c483e68dc8d69b198',
    title: 'Ecommerce Access',
    description: '',
    price: 100.0,
  },
]);

const manageSubscription = async (p: any) => {
  try {
    const res = await $fetch('/api/stripe', {
      body: p,
      method: 'POST'
    })
    console.log(res);
    if (res) {
      window.location.assign(res);
    }
  } catch (error) {
    console.log(error);
  }
};
</script>
