<template>
    <!-- Ensure we only render when the condition is true -->
    <div v-if="isComponentPage" style="max-width: 1200px; margin-top: 60px;" class="q-mx-auto q-px-md q-py-lg">
        <ContentList :path="path" v-slot="{ list }">
            <ContentQuery v-for="item in list" :key="item._path" :path="item._path" find="one" v-slot="{ data }">
                <ContentRenderer>
                    <ContentRendererMarkdown class="q-mb-xl" :value="data" />
                </ContentRenderer>
            </ContentQuery>
        </ContentList>
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();

// Compute whether the page contains 'components' in the path
const isComponentPage = computed(() => route.path.includes('components'));
const path = computed(() => route.path);

</script>
