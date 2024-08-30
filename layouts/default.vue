<template>
  <QLayout view="hHh lpR fFf">
    <!-- hHh lpR fFf -->
    <Header />
    <!-- <QPageContainer> -->
      <slot />
    <!-- </QPageContainer> -->
    <!-- Links Footer -->
     <Footer></Footer>
    <!-- Mini Footer -->
    <q-footer bordered class="bg-grey-1 q-pa-sm">
     <div class="flex justify-between items-center">
      <div class="flex q-gutter-x-sm">
        <Icon size="30px" class=" q-ml-sm" name="devicon:quasar"
                                    style="width: 24px; height: 24px;" />
      </div>
      <div class="text-body1"></div>
     </div>
    </q-footer>
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
