<template>
    <nuxt-layout>
        <div class="dots">
            <div style="max-width: 1300px; padding-block: 140px; width: 100%;" class="q-mx-auto ">
                <div class="q-px-xl">
                    <div class="text-center">
                        <div class="text-primary text-weight-medium ">
                            All-access
                        </div>
                        <div class="text-h2 text-weight-bold q-mb-md">
                            Get everything, forever.
                        </div>
                        <p class="text-center q-mx-auto" style="max-width: 800px;">
                            Get lifetime access to 500+ components and every template available today, plus any new content
                            we add in the future for a simple one-time price.
                        </p>
    
                    </div>
                    <div class="q-pt-xl">
                        <div class="row items-center justify-center">
                            <div class="col-12 col-sm-6" style="z-index: 2;">
                                <q-card style="border-radius: 20px;" color="" bordered class="q-pa-xl">
                                    <q-card style="border-radius: 20px;" class="bg-gray-50 q-mb-md">
                                        <q-card-section class="q-pa-xl">
                                            <div class="flex items-center q-gutter-x-sm">
                                                <div class="text-h3">
                                                    <span class="text-strike ">$299</span>
                                                    <span class="text-weight-bold q-ml-sm">$99</span>
                                                </div>
                                                <div>
                                                    <div class="text-weight-bold">one-time payment</div>
                                                    <div>plus local taxes</div>
                                                </div>
                                            </div>
                                            <q-btn @click="createCheckout(538563)" padding="4px 10px" unelevated no-caps
                                                label="Get all-access" dense color="dark" class="full-width q-mt-lg"
                                                style="border-radius: 8px;"></q-btn>
    
                                            <p class="q-mt-sm text-center text-grey-7">Lifetime access.
                                                Unlimited projects.
                                                Free updates.</p>
                                        </q-card-section>
                                    </q-card>
                                    <q-separator class="q-my-lg"></q-separator>
    
                                    <div class="flex items-center  no-wrap q-gutter-x-md  q-mb-xl">
                                        <q-icon size="40px" name="img:/icons/box.svg" color="primary">
                                        </q-icon>
                                        <div class="text-body1">
                                            <span class="text-weight-bold">Over 500+ components</span>
                                            <br /> everything you need to build beautiful application UIs, marketing
                                            sites, ecommerce
                                            stores, and more.
                                        </div>
                                    </div>
                                    <div class="flex items-center  no-wrap q-gutter-x-md  q-mb-xl">
                                        <q-icon size="40px" name="img:/icons/template.svg" color="primary">
                                        </q-icon>
                                        <div class="text-body1">
                                            <span class="text-weight-bold">Every site template</span>
                                            <br /> beautifully designed, expertly crafted website templates built with
                                            modern
                                            technologies like Quasar and Nuxt.
                                        </div>
                                    </div>
                                    <div class="flex items-center  no-wrap q-gutter-x-md">
                                        <q-icon size="40px" name="img:/icons/inifinity.svg" color="primary">
                                        </q-icon>
                                        <div class="text-body1">
                                            <span class="text-weight-bold">Lifetime access</span>
                                            <br /> Your purchase gives you lifetime access to all current and future
                                            QuasarUI
                                            components. Use them in personal or commercial projects without any
                                            additional fees.
                                        </div>
                                    </div>
    
                                </q-card>
                            </div>
    
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <Faq></Faq>
    </nuxt-layout>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'default',
    middleware: 'auth'
})
const { baseUrl } = useRuntimeConfig().public;

const createCheckout = async (variantId: number) => {
    try {
        // loading.value = true;
        const data = await $fetch("/api/lemon-squeezy/checkout", {
            method: "POST",
            body: {
                variantId: variantId + '',
                redirectUrl: `${baseUrl}`,
            },
        });
        window.location.href = data;
    } catch (error) {
        // loading.value = false;
        // toast.error("Error creating checkout link");
    }
};
</script>

<style scoped>
.dots {
    background-image: radial-gradient(hsla(0, 0%, 78%, .4) 1px, transparent 0);
    background-size: 12px 12px;
}
</style>