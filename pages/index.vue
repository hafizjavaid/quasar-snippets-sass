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
  // {

  //   title: 'All Access',
  //   description: 'Gain access to all of the snippets in the Application UI, Marketing, and Ecommerce categories — all of the components you need to build any UI',
  //   price: 100.0,
  //   link: '/components/'
  // },
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

const Templates = [
  {
    "id": 4,
    "anchor": "product-catalyst",
    "name": "Catalyst",
    "type": "Application UI kit",
    "url": "https://tailwindui.com/templates/catalyst",
    "summary": "Modern application UI components to kickstart your design system.",
    "images": [
      {
        "url": "https://tailwindui.com/img/templates/catalyst/preview-01.png",
        "alt": "This is a preview image",
        "type": "preview"
      },
      {
        "url": "https://tailwindui.com/img/templates/catalyst/preview-02.png",
        "alt": "This is a preview image",
        "type": "preview"
      },
      {
        "url": "https://tailwindui.com/img/templates/catalyst/preview-03.png",
        "alt": "This is a preview image",
        "type": "preview"
      }
    ],
    "price": {
      "currency": "USD",
      "advertised": 149,
      "amount": 149
    },
    "downloadable": true,
    "download_url": "https://tailwindui.com/templates/catalyst/download",
    "is_new": false
  },
  {
    "id": 11,
    "anchor": "product-spotlight",
    "name": "Spotlight",
    "type": "Personal website template",
    "url": "https://tailwindui.com/templates/spotlight",
    "summary": "A personal website so nice you’ll actually be inspired to publish on it.",
    "images": [
      {
        "url": "https://tailwindui.com/img/templates/spotlight/preview-01.png",
        "alt": "This is a preview image",
        "type": "preview"
      },
      {
        "url": "https://tailwindui.com/img/templates/spotlight/preview-02.png",
        "alt": "This is a preview image",
        "type": "preview"
      },
      {
        "url": "https://tailwindui.com/img/templates/spotlight/preview-03.png",
        "alt": "This is a preview image",
        "type": "preview"
      }
    ],
    "price": {
      "currency": "USD",
      "advertised": 99,
      "amount": 99
    },
    "downloadable": true,
    "download_url": "https://tailwindui.com/templates/spotlight/download",
    "is_new": false
  },
  {
    "id": 10,
    "anchor": "product-salient",
    "name": "Salient",
    "type": "SaaS marketing template",
    "url": "https://tailwindui.com/templates/salient",
    "summary": "A beautiful SaaS landing page to announce your next big idea.",
    "images": [
      {
        "url": "https://tailwindui.com/img/templates/salient/preview-01.png",
        "alt": "This is a preview image",
        "type": "preview"
      },
      {
        "url": "https://tailwindui.com/img/templates/salient/preview-02.png",
        "alt": "This is a preview image",
        "type": "preview"
      },
      {
        "url": "https://tailwindui.com/img/templates/salient/preview-03.png",
        "alt": "This is a preview image",
        "type": "preview"
      }
    ],
    "price": {
      "currency": "USD",
      "advertised": 99,
      "amount": 99
    },
    "downloadable": true,
    "download_url": "https://tailwindui.com/templates/salient/download",
    "is_new": false
  },
  {
    "id": 9,
    "anchor": "product-protocol",
    "name": "Protocol",
    "type": "API reference template",
    "url": "https://tailwindui.com/templates/protocol",
    "summary": "Probably the nicest API documentation website you've ever seen.",
    "images": [
      {
        "url": "https://tailwindui.com/img/templates/protocol/preview-01.png",
        "alt": "This is a preview image",
        "type": "preview"
      },
      {
        "url": "https://tailwindui.com/img/templates/protocol/preview-02.png",
        "alt": "This is a preview image",
        "type": "preview"
      },
      {
        "url": "https://tailwindui.com/img/templates/protocol/preview-03.png",
        "alt": "This is a preview image",
        "type": "preview"
      }
    ],
    "price": {
      "currency": "USD",
      "advertised": 99,
      "amount": 99
    },
    "downloadable": true,
    "download_url": "https://tailwindui.com/templates/protocol/download",
    "is_new": false
  },
  {
    "id": 5,
    "anchor": "product-commit",
    "name": "Commit",
    "type": "Changelog template",
    "url": "https://tailwindui.com/templates/commit",
    "summary": "Share your work in progress with this beautiful changelog template.",
    "images": [
      {
        "url": "https://tailwindui.com/img/templates/commit/preview-01.png",
        "alt": "This is a preview image",
        "type": "preview"
      },
      {
        "url": "https://tailwindui.com/img/templates/commit/preview-02.png",
        "alt": "This is a preview image",
        "type": "preview"
      },
      {
        "url": "https://tailwindui.com/img/templates/commit/preview-03.png",
        "alt": "This is a preview image",
        "type": "preview"
      }
    ],
    "price": {
      "currency": "USD",
      "advertised": 99,
      "amount": 99
    },
    "downloadable": true,
    "download_url": "https://tailwindui.com/templates/commit/download",
    "is_new": false
  },
  {
    "id": 8,
    "anchor": "product-primer",
    "name": "Primer",
    "type": "Info product template",
    "url": "https://tailwindui.com/templates/primer",
    "summary": "A stunning landing page for your first course or ebook.",
    "images": [
      {
        "url": "https://tailwindui.com/img/templates/primer/preview-01.png",
        "alt": "This is a preview image",
        "type": "preview"
      },
      {
        "url": "https://tailwindui.com/img/templates/primer/preview-02.png",
        "alt": "This is a preview image",
        "type": "preview"
      },
      {
        "url": "https://tailwindui.com/img/templates/primer/preview-03.png",
        "alt": "This is a preview image",
        "type": "preview"
      }
    ],
    "price": {
      "currency": "USD",
      "advertised": 99,
      "amount": 99
    },
    "downloadable": true,
    "download_url": "https://tailwindui.com/templates/primer/download",
    "is_new": false
  },
  {
    "id": 12,
    "anchor": "product-studio",
    "name": "Studio",
    "type": "Agency template",
    "url": "https://tailwindui.com/templates/studio",
    "summary": "Showcase your work and find new clients with this sophisticated agency template.",
    "images": [
      {
        "url": "https://tailwindui.com/img/templates/studio/preview-01.png",
        "alt": "This is a preview image",
        "type": "preview"
      },
      {
        "url": "https://tailwindui.com/img/templates/studio/preview-02.png",
        "alt": "This is a preview image",
        "type": "preview"
      },
      {
        "url": "https://tailwindui.com/img/templates/studio/preview-03.png",
        "alt": "This is a preview image",
        "type": "preview"
      }
    ],
    "price": {
      "currency": "USD",
      "advertised": 99,
      "amount": 99
    },
    "downloadable": true,
    "download_url": "https://tailwindui.com/templates/studio/download",
    "is_new": false
  },
  {
    "id": 14,
    "anchor": "product-transmit",
    "name": "Transmit",
    "type": "Podcast template",
    "url": "https://tailwindui.com/templates/transmit",
    "summary": "A clean and professional podcast template fit for any show.",
    "images": [
      {
        "url": "https://tailwindui.com/img/templates/transmit/preview-01.png",
        "alt": "This is a preview image",
        "type": "preview"
      },
      {
        "url": "https://tailwindui.com/img/templates/transmit/preview-02.png",
        "alt": "This is a preview image",
        "type": "preview"
      },
      {
        "url": "https://tailwindui.com/img/templates/transmit/preview-03.png",
        "alt": "This is a preview image",
        "type": "preview"
      }
    ],
    "price": {
      "currency": "USD",
      "advertised": 99,
      "amount": 99
    },
    "downloadable": true,
    "download_url": "https://tailwindui.com/templates/transmit/download",
    "is_new": false
  },
  {
    "id": 7,
    "anchor": "product-pocket",
    "name": "Pocket",
    "type": "App marketing template",
    "url": "https://tailwindui.com/templates/pocket",
    "summary": "The perfect website template for your exciting new mobile app.",
    "images": [
      {
        "url": "https://tailwindui.com/img/templates/pocket/preview-01.png",
        "alt": "Banner",
        "type": "preview"
      },
      {
        "url": "https://tailwindui.com/img/templates/pocket/preview-02.png",
        "alt": "Feature section",
        "type": "preview"
      },
      {
        "url": "https://tailwindui.com/img/templates/pocket/preview-03.png",
        "alt": "Pricing",
        "type": "preview"
      }
    ],
    "price": {
      "currency": "USD",
      "advertised": 99,
      "amount": 99
    },
    "downloadable": true,
    "download_url": "https://tailwindui.com/templates/pocket/download",
    "is_new": false
  },
  {
    "id": 13,
    "anchor": "product-syntax",
    "name": "Syntax",
    "type": "Documentation template",
    "url": "https://tailwindui.com/templates/syntax",
    "summary": "Educate your users in style with this documentation template.",
    "images": [
      {
        "url": "https://tailwindui.com/img/templates/syntax/preview-01.png",
        "alt": "This is a preview image",
        "type": "preview"
      },
      {
        "url": "https://tailwindui.com/img/templates/syntax/preview-02.png",
        "alt": "This is a preview image",
        "type": "preview"
      },
      {
        "url": "https://tailwindui.com/img/templates/syntax/preview-03.png",
        "alt": "This is a preview image",
        "type": "preview"
      }
    ],
    "price": {
      "currency": "USD",
      "advertised": 99,
      "amount": 99
    },
    "downloadable": true,
    "download_url": "https://tailwindui.com/templates/syntax/download",
    "is_new": false
  },
  {
    "id": 6,
    "anchor": "product-keynote",
    "name": "Keynote",
    "type": "Conference template",
    "url": "https://tailwindui.com/templates/keynote",
    "summary": "Launch your next conference with a splash with this eye-catching template.",
    "images": [
      {
        "url": "https://tailwindui.com/img/templates/keynote/preview-01.png",
        "alt": "This is a preview image",
        "type": "preview"
      },
      {
        "url": "https://tailwindui.com/img/templates/keynote/preview-02.png",
        "alt": "This is a preview image",
        "type": "preview"
      },
      {
        "url": "https://tailwindui.com/img/templates/keynote/preview-03.png",
        "alt": "This is a preview image",
        "type": "preview"
      }
    ],
    "price": {
      "currency": "USD",
      "advertised": 99,
      "amount": 99
    },
    "downloadable": true,
    "download_url": "https://tailwindui.com/templates/keynote/download",
    "is_new": false
  }
]

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
