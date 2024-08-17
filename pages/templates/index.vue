<template>
    <NuxtLayout>

        <!-- Hero Section -->
        <!-- Hero Section -->
        <!-- <div class="q-pa-xl">
            <div>
                <section id="product-ecommerce" class="q-pa-xl flex justify-center items-center" style="height: 500px;">

                    Product ecommerce
                </section>
                <section id="product-marketing" class="q-pa-xl flex justify-center items-center" style="height: 500px;">

                    Product marketing
                </section>
                <section id="product-application-ui" class="q-pa-xl flex justify-center items-center"
                    style="height: 500px;">

                    Product application-ui
                </section>

            </div>
        </div> -->
       
        <div class="q-pa-xl">
                
        </div>

    </NuxtLayout>
</template>

<script lang="ts" setup>
const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
);
</script>

<style lang="scss" scoped></style>