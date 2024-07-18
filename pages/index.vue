<template>
  <ContentList path="/" v-slot="{ list }">
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
  </ContentList>
</template>

<script setup></script>
