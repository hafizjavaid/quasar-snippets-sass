<template>
  <QLayout view="hHh lpR fFf">
    <!-- hHh lpR fFf -->
    <Header />
    <!-- <QPageContainer> -->
      <slot />
    <!-- </QPageContainer> -->
    <!-- Links Footer -->
     <Footer></Footer>
    <!-- Links -->
     <BottomLinks></BottomLinks>
    
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
