<template>


    <div style="max-width: 1200px;" class="q-mx-auto q-px-md">

        <ContentList :query="query" v-slot="{ list }">
            <ContentQuery v-for="item in list" :key="item._path" :path="item._path" find="one" v-slot="{ data }">
                <ContentRenderer>
                    <ContentRendererMarkdown :value="data" />
                </ContentRenderer>
            </ContentQuery>
        </ContentList>

    </div>
</template>

<script lang="ts" setup>
const path = useRoute().path;
// @ts-ignore
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';
const query: QueryBuilderParams = {
    path,
    where: [{ _path: { $ne: `${path}` } }],
};

</script>