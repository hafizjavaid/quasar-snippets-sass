<template>
  <!-- <ContentList :query="query" v-slot="{ list }">
    <ContentQuery
      v-for="item in list"
      :key="item._path"
      :path="item._path"
      find="one"
      v-slot="{ data }"
    >
      <ContentRenderer>
        <ContentRendererMarkdown :value="data" />
      </ContentRenderer>
    </ContentQuery>
  </ContentList> -->
  <!-- <pre>
  {{ headings }}
  </pre> -->
  <template v-for="heading in headings" :key="heading._path">
    <ContentRenderer>
      <ContentRendererMarkdown :value="heading" />
    </ContentRenderer>
  </template>
</template>

<script lang="ts" setup>
const path = useRoute().path;

const headings = await queryContent(path)
  .where({ _path: { $ne: `${path}` } })
  .find();
</script>
