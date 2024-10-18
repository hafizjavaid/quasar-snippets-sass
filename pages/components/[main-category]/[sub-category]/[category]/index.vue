<template>
    <NuxtLayout>
        <!-- Navbar -->
        <q-bar class="bg-grey-3" style="position: sticky; top: 60px; z-index: 5; ">
            <Container>
                <q-breadcrumbs>
                    <q-breadcrumbs-el class="text-weight-bold text-subtitle2" label="Home" to="/" />
                    <template v-if="breadcrumbs">
                        <q-breadcrumbs-el class="text-weight-bold text-subtitle2"  v-for="breadcrumb in breadcrumbs" :key="breadcrumb.label"
                            :label="breadcrumb.label" :to="breadcrumb.link" />
                    </template>
                </q-breadcrumbs>
            </Container>
        </q-bar>
        <Container v-if="isComponentPage">
            <div style="margin-top: 60px;" class="q-py-lg">
                <ContentList :path="path" v-slot="{ list }">
                    <ContentQuery v-for="item in list" :key="item._path" :path="item._path" find="one"
                        v-slot="{ data }">
                        <ContentRenderer>
                            <ContentRendererMarkdown class="q-mb-xl" :value="data" />
                        </ContentRenderer>
                    </ContentQuery>
                </ContentList>
            </div>
        </Container>
    </NuxtLayout>
</template>

<script lang="ts" setup>
const { breadcrumbs } = useBreadcrumbs();

definePageMeta({
    layout: 'default'
})
const route = useRoute();

const isComponentPage = computed(() => route.path.includes('components'));
const path = computed(() => route.path);



</script>
