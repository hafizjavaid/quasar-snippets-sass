<template>
    <QLayout view="hHh lpR fFf">
        <Header />
        <slot></slot>
        <Pricing v-if="!isAllAccess"></Pricing>
        <Faq></Faq>
        <Footer></Footer>
        <BottomLinks></BottomLinks>
    </QLayout>
</template>

<script setup lang="ts">
const isAllAccess = computed(() => useRoute().path.includes('all-access'));
</script>

<style scoped></style>