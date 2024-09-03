<template>

    <!-- Hero -->
    <Hero></Hero>
    <!-- Navbar -->
    <div class="bg-white" style="padding-block: 60px; position: sticky; top: 0; z-index: 5; ">
        <q-separator></q-separator>
        <Container style="padding-block: 10px;">
            <div class="flex justify-between items-center">
                <div class="flex q-gutter-x-sm">
                    <NuxtLink v-for="mainCategory in allComponents" :key="mainCategory.anchor"
                        :to="`/components#${mainCategory.anchor}`">
                        <q-btn flat padding="4px 10px" dense text-color="grey-9" color="grey-3" no-caps unelevated
                            :label="mainCategory.name"></q-btn>
                    </NuxtLink>
                </div>
                <div class="flex q-gutter-x-sm">
                    <NuxtLink 
                        :to="`/components#pricing`">
                        <q-btn flat padding="4px 10px" dense text-color="grey-9" color="grey-3" no-caps unelevated
                            label="Pricing"></q-btn>
                    </NuxtLink>
                    <NuxtLink 
                        :to="`/components#faq`">
                        <q-btn flat padding="4px 10px" dense text-color="grey-9" color="grey-3" no-caps unelevated
                            label="FAQs"></q-btn>
                    </NuxtLink>
                </div>
            </div>
        </Container>
        <q-separator></q-separator>
    </div>
    <Container style="padding-block-end: 60px;">
        <div v-for="mainCategory in allComponents" :key="mainCategory.anchor" style="margin-bottom: 100px;">
            <div :id="mainCategory.anchor" class="q-mb-xl">
                <div class="flex items-center q-gutter-x-sm text-grey-9">
                    <!-- <q-icon :name="mainCategory.icon" size="24px"></q-icon> -->
                    <div class="text-h4  text-weight-bold"> {{ mainCategory.name }} </div>
                </div>
                <p>
                    {{ mainCategory.description }}
                </p>
            </div>
            <!-- <q-separator class="q-my-xl  text-grey-1 bg-grey-3" /> -->
            <template v-if="mainCategory.categories">
                <q-card v-for="(category, categoryIndex) in mainCategory.categories" :key="categoryIndex" bordered flat
                    class="q-mb-xl">
                    <q-card-section class="q-py-md q-px-lg ">
                        <div class="text-h6">{{ category.name }}</div>
                    </q-card-section>
                    <q-separator></q-separator>
                    <template v-if="category.subcategories">
                        <q-card-section>
                            <div class="row q-col-gutter-md">
                                <div v-for="(subCategory, subCategoryIndex) in category.subcategories"
                                    :key="subCategoryIndex" class="col-sm-6 col-md-4 col-lg-3 col-12">
                                    <ComponentCard :card="subCategory"></ComponentCard>
                                </div>
                            </div>
                        </q-card-section>
                    </template>
                </q-card>
            </template>
        </div>
    </Container>

    <Pricing></Pricing>
    <Faq></Faq>


</template>

<script lang="ts" setup>
const allComponents = useComponents();
// const applicationUI = computed(() => allComponents.value ? allComponents.value.find(c => c.anchor.includes('application')) : null);
// const marketing = computed(() => allComponents.value ? allComponents.value.find(c => c.anchor.includes('marketing')) : null);
// const ecommerce = computed(() => allComponents.value ? allComponents.value.find(c => c.anchor.includes('ecommerce')) : null);

</script>

<style lang="scss" scoped></style>