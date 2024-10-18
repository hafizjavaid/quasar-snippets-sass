<template>
    <NuxtLayout>
        <!-- Navbar -->
        <q-bar class="bg-grey-3" style="position: sticky; top: 60px; z-index: 5; ">
            <Container>
                <q-breadcrumbs>
                    <q-breadcrumbs-el label="Home" to="/" />
                    <template v-if="breadcrumbs">
                        <q-breadcrumbs-el class="text-weight-bold" v-for="breadcrumb in breadcrumbs" :key="breadcrumb.label"
                            :label="breadcrumb.label" :to="breadcrumb.link" />
                    </template>
                </q-breadcrumbs>
            </Container>
        </q-bar>
        <Container style="padding-block-end: 60px; margin-top: 100px;">
            <div v-for="mainCategory in categoryComponents" :key="mainCategory.anchor" style="margin-bottom: 100px;">
                <div :id="mainCategory.anchor" class="q-mb-lg">
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="text-grey-9 text-h6 text-weight-bold"> {{ mainCategory.name }} </div>
                            <p>
                                {{ mainCategory.description }}
                            </p>
                        </div>
                        <q-btn v-if="!mainCategory.isLicensed" @click="createCheckout(mainCategory.productVariantId)"
                            padding="4px 10px" unelevated no-caps label="" dense color="grey-4" round outline
                            style="border-radius: 8px;">
                            <template #default>
                                <div class="text-dark">Unlock Package</div>
                            </template>
                        </q-btn>
                    </div>
                </div>
                <template v-if="mainCategory.categories">
                    <q-card v-for="(category, categoryIndex) in mainCategory.categories" :key="categoryIndex" bordered
                        flat class="q-mb-xl">
                        <q-card-section class="q-py-md q-px-lg ">
                            <div class="text-h6">{{ category.name }}</div>
                        </q-card-section>
                        <q-separator></q-separator>
                        <template v-if="category.subcategories">
                            <q-card-section>
                                <div class="row q-col-gutter-md">
                                    <div v-for="(subCategory, subCategoryIndex) in category.subcategories"
                                        :key="subCategoryIndex" class="col-sm-6 col-md-4 col-lg-3 col-12">
                                        <NuxtLink v-if="subCategory.isPublished" class="text-grey-6"
                                            style="text-decoration: none;" :to="subCategory.url">
                                            <ComponentCard :card="subCategory" :isLicensed="mainCategory.isLicensed">
                                            </ComponentCard>
                                        </NuxtLink>
                                        <div v-else class="text-grey-6">
                                            <ComponentCard :card="subCategory" :isLicensed="mainCategory.isLicensed">
                                            </ComponentCard>
                                            <q-tooltip class="bg-primary">
                                                <div class="text-body2">

                                                    <strong>{{ subCategory.name }}</strong> components are under
                                                    development. Soon they will be live and ready to use
                                                </div>
                                            </q-tooltip>
                                        </div>
                                    </div>
                                </div>
                            </q-card-section>
                        </template>
                    </q-card>
                </template>
            </div>
            {{ allComponents }}
        </Container>
    </NuxtLayout>
</template>

<script lang="ts" setup>
const allComponents = useComponents();
const { createCheckout } = useCheckout();

const { toTitleCase } = useBreadcrumbs();

definePageMeta({
    layout: 'default'
})
const route = useRoute();
const routeParams = computed(() => route.params as {
    category: string
});

const categoryComponents = computed(() => allComponents.value?.filter(c => c.linkIdentifier === routeParams.value.category))

const breadcrumbs = computed(() => {
    return [
        {
            label: toTitleCase(routeParams.value.category),
            link: undefined
        }
    ]
})

</script>
