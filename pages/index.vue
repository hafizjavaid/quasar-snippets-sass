<template>
  <div class="q-pa-xl">
    <template> </template>
    <div v-for="mainCategory in navigation" :key="mainCategory.key" class="q-mb-xl">
      <div class="flex items-center q-gutter-x-sm text-grey-9">
        <q-icon :name="mainCategory.icon" size="24px"></q-icon>
        <div class="text-h5">{{ mainCategory.title }}</div>
      </div>
      <p>
        {{ mainCategory.description }}
      </p>
      <template v-if="mainCategory.children">
        <q-card
          v-for="(subCategory, subCategoryIndex) in mainCategory.children.filter(
            (c) => 'children' in c
          )"
          :key="subCategoryIndex"
          class="q-pa-md q-mb-lg"
          bordered
          flat
          style="border-radius: 8px"
        >
          <div class="flex items-center q-gutter-x-sm text-grey-9">
            <q-icon :name="subCategory.icon" size="24px"></q-icon>
            <div class="text-body1 text-weight-bold">{{ subCategory.title }}</div>
          </div>
          <template v-if="subCategory.children">
            <div class="row q-col-gutter-md q-mt-md">
              <div
                v-for="(lastCategory, lastCategoryIndex) in subCategory.children.filter(
                  (c) => 'children' in c
                )"
                :key="lastCategoryIndex"
                class="col-sm-6 col-md-4 col-lg-3 col-12"
              >
                <q-card class="q-pa-sm" bordered flat style="border-radius: 8px">
                  <img src="https://cdn.quasar.dev/img/mountains.jpg" />
                  <q-card-section class="q-px-none q-pb-none">
                    <div class="text-body1">
                      {{ lastCategory.title }}
                    </div>
                    <div
                      v-if="lastCategory.children"
                      class="text-subtitle2 text-grey-7 text-weight-normal"
                    >
                      {{ lastCategory.children.filter((c) => !('children' in c)).length }}
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
  
    <div @click="logout()">Sign out</div>
  
</template>

<script lang="ts" setup>
const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
);
const user = useUser();
const logout = async () =>  {
  console.log('TTT');
  // await $fetch('/api/auth/logout', {
  //   method: 'POST',
  // });
  // user.value = null;
  // await navigateTo('/login');
}
</script>
