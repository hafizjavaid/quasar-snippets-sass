<template>
  <QLayout view="hHh lpR fFf">
    <Header />
    <QPageContainer>
      <slot />
    </QPageContainer>
  </QLayout>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'MainLayout',
});
</script>

<style>

html{
  scroll-behavior: smooth;
}
</style>
