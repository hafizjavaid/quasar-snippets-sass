<template>
  <!-- <NuxtLayout>

    <NuxtPage />

  </NuxtLayout> -->
  <!-- <QLayout view="hHh lpR fFf">
    <Header />
    <NuxtPage />
    <Footer></Footer>
    <BottomLinks></BottomLinks>
  </QLayout> -->
  <NuxtLoadingIndicator />
  <Toaster position="top-center" />
  <NuxtPage />
</template>
<script setup lang="ts">
import { Toaster } from "vue-sonner";

</script>


<style lang="scss">
.language-html {
  padding: 20px;
  margin: 0px;
}

html {
  scroll-behavior: smooth;
}
</style>