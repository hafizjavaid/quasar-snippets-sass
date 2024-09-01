<template>
  <NuxtLayout>
    <!-- <div class="q-pa-xl"> -->

      <!-- Hero Section -->
      <!-- Hero Section -->

      <!-- Components / Products Section only frontend with links to component page -->
      <!-- Components / Products Section only frontend with links to component page -->


      <!-- Templates Section only frontend with links to template page -->
      <!-- Templates Section only frontend with links to template page -->


      <!-- Temporary Section -->
      <!-- <div class="q-pa-lg">
        <div class="row q-col-gutter-md">
          <div v-for="product in products" :key="product.title" class="col-12 col-md-6 col-lg-4">
            <q-card flat bordered class="q-mx-auto">
              <q-card-section class="q-py-sm q-px-md">
                <div class="flex items-center">
                  <div class="text-h6"> {{ product.title }} </div>
                  <q-space></q-space>
                  <q-btn @click="navigateTo(`${product.link}`)" color="primary" unelevated label="Show more..." no-caps>
                  </q-btn>
                </div>
              </q-card-section>
              <q-separator></q-separator>
              <q-card-section>
                <p>
                  {{ product.description }}
                </p>
              </q-card-section>
            </q-card>
          </div>
        </div>

      </div> -->

      <!-- Hero -->
       <Hero></Hero>

       <!-- Components -->
        <Preview></Preview>
      <!-- Pricing -->

      <Pricing></Pricing>

      <!-- FAQ -->

      <Faq></Faq>




      <!-- <pre>

        {{ navigation }}
      </pre> -->
      <!-- <div class="row q-col-gutter-lg">
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
      <SubscriptionButton></SubscriptionButton> -->
      <!-- <pre>

        {{ userStatus }}

      </pre>
      <pre>

        {{ userPurchases }}
      </pre> -->
      <!-- <pre> {{ userPurchase }} </pre> -->
    <!-- </div> -->
    <div class="q-pa-xl">
      <!-- 
      
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
          )" :key="subCategoryIndex" class="shadow-1 q-mb-lg">
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
                        <q-item style="border-radius: 12px;" class="q-pa-none" clickable>
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

-->
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
// definePageMeta({
//   layout: 'default'
// })
// const { data: navigation } = await useAsyncData('navigation', () =>
//   fetchContentNavigation()
// );
const userPurchase = useState('purchase')


const products = ref([
  
  {
    title: 'Application UI Access',
    description: 'Form layouts, tables, modal dialogs — everything you need to build beautiful responsive web applications.',
    link: '/components#product-application-ui'
  },
  {

    title: 'Marketing Access',
    description: 'Heroes, feature sections, newsletter sign up forms — everything you need to build beautiful marketing websites.',
    link: '/components#product-marketing'
  },
  {

    title: 'Ecommerce Access',
    description: 'Checkout forms, shopping carts, product views — everything you need to build your next ecommerce front-end.',
    link: '/components#product-ecommerce'
  },
]);


</script>
