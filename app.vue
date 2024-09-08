<template>
  <!-- <NuxtLayout>

    <NuxtPage />

  </NuxtLayout> -->
  <QLayout view="hHh lpR fFf">
    <Header />
    <NuxtPage />
    <Footer></Footer>
    <BottomLinks></BottomLinks>
  </QLayout>
</template>



<style lang="scss">
.language-html {
  padding: 20px;
  margin: 0px;
}

html {
  scroll-behavior: smooth;
}
</style>