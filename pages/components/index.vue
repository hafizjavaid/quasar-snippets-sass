<template>
    <NuxtLayout>

        <!-- Hero Section -->
        <!-- Hero Section -->
        <!-- <div class="q-pa-xl">
            <div>
                <section id="product-ecommerce" class="q-pa-xl flex justify-center items-center" style="height: 500px;">

                    Product ecommerce
                </section>
                <section id="product-marketing" class="q-pa-xl flex justify-center items-center" style="height: 500px;">

                    Product marketing
                </section>
                <section id="product-application-ui" class="q-pa-xl flex justify-center items-center"
                    style="height: 500px;">

                    Product application-ui
                </section>

            </div>
        </div> -->
       
        <!-- <pre> {{  navigation  }} </pre> -->
        <div class="q-pa-xl">
            <div v-for="mainCategory in navigation" :key="mainCategory.key" class="q-mb-xl">
                <div :id="mainCategory.anchor" class=" ">
                    <div class="flex items-center q-gutter-x-sm text-grey-9">
                        <q-icon :name="mainCategory.icon" size="24px"></q-icon>
                        <div class="text-h5">{{ mainCategory.title }}  </div>
                    </div>
                    <p>
                        {{ mainCategory.description }}
                    </p>
                </div>
                <q-separator class="q-my-xl  text-grey-1 bg-grey-3" />
                <template v-if="mainCategory.children">
                    <q-card  v-for="(subCategory, subCategoryIndex) in mainCategory.children.filter(
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
                                        <NuxtLink class="text-grey-6" style="text-decoration: none;"
                                            :to="lastCategory._path">
                                            <q-list>
                                                <q-item style="border-radius: 12px;" class="q-pa-none" clickable>
                                                    <template #default>
                                                        <q-card style="border-radius: 12px;"
                                                            class="bg-transparent q-pa-md" bordered flat>
                                                            <img style="border-radius: 12px;"
                                                                src="https://cdn.quasar.dev/img/mountains.jpg" />
                                                            <div class="q-px-none q-pb-none q-mt-md">
                                                                <div
                                                                    class="text-subtitle1 text-grey-10 text-weight-medium ">
                                                                    {{ lastCategory.title }}
                                                                </div>
                                                                <div v-if="lastCategory.children"
                                                                    class="text-body2 text-grey-7  text-weight-normal">
                                                                    {{ lastCategory.children.filter((c) => !('children'
                                                                    in c)).length }} snippets
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
const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
);


// const { data:  navigation } = await useLazyFetch('/api/components');

</script>

<style lang="scss" scoped></style>