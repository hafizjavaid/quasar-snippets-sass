<template>
    <section id="pricing">
        <Container style="padding-block-end: 140px;">
            <div class="text-primary text-weight-medium text-body1">Pricing</div>
            <div class="text-h5 text-weight-bold q-mt-md">Unlimited Qusar UI</div>
            <div>Your purchase gives you lifetime access to all current and future Qusar UI components. Use them in
                personal or commercial projects without any additional fees. </div>
            <div class="q-py-xl">
                <div class="row items-center ">
                    <div class="col-12 col-sm-6" style="z-index: 2;">
                        <q-card color="grey-2" bordered style="border-radius: 20px;" class="q-pa-lg bg-grey-2">
                            <div class="flex justify-between q-mb-sm">
                                <div class="text-primary text-weight-medium text-body1">Get with all-access</div>
                                <q-btn @click="purchasePackage('66af878c483e68dc8d69b195')" padding="4px 10px"
                                    unelevated no-caps label="Get all-access" dense color="dark"
                                    style="border-radius: 8px;"></q-btn>
                            </div>
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
                            <q-card-section class="q-px-none">
                                <div class="text-body1">

                                    Get <strong>lifetime access</strong> to all of the application UI, marketing, and
                                    ecommerce
                                    components,
                                    as well as all of our site templates for a single one-time purchase.
                                </div>
                            </q-card-section>

                            <q-separator class="q-my-xl"></q-separator>

                            <div class="flex items-center  no-wrap q-gutter-x-md  q-mb-xl">
                                <q-icon size="40px" name="img:/icons/box.svg" color="primary">
                                </q-icon>
                                <div class="text-body1">
                                    <span class="text-weight-bold">Over 500+ components</span>
                                    <br /> everything you need to build beautiful application UIs, marketing sites,
                                    ecommerce
                                    stores, and more.
                                </div>
                            </div>
                            <div class="flex items-center  no-wrap q-gutter-x-md  q-mb-xl">
                                <q-icon size="40px" name="img:/icons/template.svg" color="primary">
                                </q-icon>
                                <div class="text-body1">
                                    <span class="text-weight-bold">Every site template</span>
                                    <br /> beautifully designed, expertly crafted website templates built with modern
                                    technologies like Quasar and Nuxt.
                                </div>
                            </div>
                            <div class="flex items-center  no-wrap q-gutter-x-md">
                                <q-icon size="40px" name="img:/icons/inifinity.svg" color="primary">
                                </q-icon>
                                <div class="text-body1">
                                    <span class="text-weight-bold">Lifetime access</span>
                                    <br /> Your purchase gives you lifetime access to all current and future QuasarUI
                                    components. Use them in personal or commercial projects without any additional fees.
                                </div>
                            </div>

                        </q-card>
                    </div>
                    <div class="col-12 col-sm-6">
                        <q-card bordered flat style="border-radius: 20px;" class="q-pa-lg">
                            <div v-if="applicationUI">
                                <div class="flex justify-between items-center">
                                    <div class="text-weight-medium text-body1 text-primary ">{{ applicationUI.name }}
                                    </div>
                                    <q-btn @click="purchasePackage(applicationUI.checkout_id)" padding="4px 10px"
                                        unelevated no-caps label="" dense color="grey-4" round outline
                                        style="border-radius: 8px;">
                                        <template #default>
                                            <div class="text-dark">Unlock Package</div>
                                        </template>
                                    </q-btn>
                                </div>
                                <div class="flex items-center q-gutter-x-sm">
                                    <div class="text-h4">
                                        <span class="text-strike "> ${{ applicationUI.price.amount }} </span>
                                        <span class="text-weight-bold q-ml-sm">${{ applicationUI.price.advertised }}
                                        </span>
                                    </div>
                                    <div>
                                        <div>plus local taxes</div>
                                    </div>
                                </div>
                                <q-card-section class="q-px-none">
                                    <div class="text-body1">
                                        Gain access to all of the QuasarUI components in the Application UI category —
                                        all
                                        of
                                        the components you need to
                                        build out your application's UI.
                                    </div>
                                </q-card-section>
                            </div>
                            <q-separator class="q-my-lg"></q-separator>
                            <div v-if="marketing">
                                <div class="flex justify-between items-center">
                                    <div class="text-weight-medium text-body1 text-primary "> {{ marketing.name }}
                                    </div>
                                    <q-btn @click="purchasePackage(marketing.checkout_id)" padding="4px 10px" unelevated
                                        no-caps label="" dense color="grey-4" round outline style="border-radius: 8px;">
                                        <template #default>
                                            <div class="text-dark">Unlock Package</div>
                                        </template>
                                    </q-btn>
                                </div>
                                <div class="flex items-center q-gutter-x-sm">
                                    <div class="text-h4">
                                        <span class="text-strike "> ${{ marketing.price.amount }} </span>
                                        <span class="text-weight-bold q-ml-sm">${{ marketing.price.advertised }} </span>
                                    </div>
                                    <div>
                                        <div>plus local taxes</div>
                                    </div>
                                </div>
                                <q-card-section class="q-px-none">
                                    <div class="text-body1">
                                        Gain access to all of the QuasarUI components in the Marketing category — all of
                                        the components you need to
                                        build out your marketing pages.
                                    </div>
                                </q-card-section>
                            </div>
                            <q-separator class="q-my-lg"></q-separator>

                            <div v-if="ecommerce">
                                <div class="flex justify-between items-center">
                                    <div class="text-weight-medium text-body1 text-primary "> {{ ecommerce.name }}
                                    </div>
                                    <q-btn @click="purchasePackage(ecommerce.checkout_id)" padding="4px 10px" unelevated
                                        no-caps label="" dense color="grey-4" round outline style="border-radius: 8px;">
                                        <template #default>
                                            <div class="text-dark">Unlock Package</div>
                                        </template>
                                    </q-btn>
                                </div>
                                <div class="flex items-center q-gutter-x-sm">
                                    <div class="text-h4">
                                        <span class="text-strike "> ${{ ecommerce.price.amount }} </span>
                                        <span class="text-weight-bold q-ml-sm">${{ ecommerce.price.advertised }} </span>
                                    </div>
                                    <div>
                                        <div>plus local taxes</div>
                                    </div>
                                </div>
                                <q-card-section class="q-px-none">
                                    <div class="text-body1">
                                        Gain access to all of the QuasarUI components in the E-commerce category — all
                                        of the components you need to
                                        build out your e-commerce pages.
                                    </div>
                                </q-card-section>
                            </div>

                        </q-card>
                    </div>

                </div>
            </div>

        </Container>
    </section>
</template>

<script setup lang="ts">
const allComponents = useComponents();
const applicationUI = computed(() => allComponents.value ? allComponents.value.find(c => c.anchor.includes('application')) : null);
const marketing = computed(() => allComponents.value ? allComponents.value.find(c => c.anchor.includes('marketing')) : null);
const ecommerce = computed(() => allComponents.value ? allComponents.value.find(c => c.anchor.includes('ecommerce')) : null);

const purchasePackage = async (productId: string) => {
    await $fetch('/api/stripe', {
        method: 'POST',
        body: {
            id: productId,
        },
    }).then((res) => {
        if (res) {
            window.location.assign(res);
        }
    }).catch((err) => {
        console.error(err);
    })
}
</script>

<style scoped></style>