<template>
    <NuxtLayout>
        <!-- Ensure we only render when the condition is true -->
        <Container v-if="isComponentPage">
            <!-- <div  style="max-width: 1200px; margin-top: 60px;" class="q-mx-auto q-px-md q-py-lg">
                
            </div> -->
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
definePageMeta({
    layout: 'default'
})
const route = useRoute();

// Compute whether the page contains 'components' in the path
const isComponentPage = computed(() => route.path.includes('components'));
const path = computed(() => route.path);

</script>
