<template>
    <section>
        <!-- <pre>{{ applicationUIComponents }}</pre>
        <div style="max-width: 1300px; padding-block-start: 100px; width: 100%;" class="q-mx-auto">
            <div class="q-px-xl"> -->
        <Container>
            <div style="padding-block-start: 100px; width: 100%;">
                <div class="text-primary text-weight-medium text-body1">Components</div>
                <div class="text-h5 text-weight-bold q-mt-md">Beautifully crafted UI components</div>
                <div>Over 500+ professionally designed, fully responsive, expertly crafted component examples you can
                    drop into your Quasar projects and customize to your heart’s content.</div>
                <div class="q-py-xl relative-position">
                    <q-card style="border-radius: 8px;" class="q-mb-xl q-pa-sm" bordered flat>
                        <div class="">
                            <q-tabs v-model="currentPanel" active-color="primary" indicator-color="transparent" no-caps
                                switch-indicator align="justify" inline-label class="bg-transparent ">
                                <q-tab v-if="applicationUI && Object.keys(applicationUI).length" :ripple="false"
                                    class="text-left" name="application-ui" label="Application UI" />
                                <q-tab :ripple="false" name="marketing" label="Marketing" />
                                <q-tab :ripple="false" name="ecommerce" label="Ecommerce" />
                            </q-tabs>
                        </div>
                    </q-card>
                    <q-tab-panels v-model="currentPanel" animated class="q-pa-none">
                        <q-tab-panel class="q-pa-none" name="application-ui">
                            <div class="">
                                <div v-if="applicationUIComponents.length" class="row q-col-gutter-md">
                                    <div v-for="component in applicationUIComponents" :key="component.url" :ratio="1"
                                        class="col-sm-6 col-md-4 col-lg-3 col-12">
                                        <NuxtLink class="text-grey-6" style="text-decoration: none;"
                                            :to="component.url">
                                            <ComponentCard :isLicensed="true" :card="component"></ComponentCard>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <div v-else class="text-center">

                                    No Components Found

                                </div>
                            </div>
                            <div class="gradient-overlay"></div>
                            <div class="q-py-xl text-center">
                                <NuxtLink :to="`/components#${applicationUI?.anchor}`">
                                    <q-btn unelevated no-caps color="dark">
                                        Show more...
                                    </q-btn>
                                </NuxtLink>
                            </div>
                        </q-tab-panel>
                        <q-tab-panel name="marketing">
                            <div v-if="marketingUIComponents.length" class="row q-col-gutter-md">
                                <div v-for="component in marketingUIComponents" :key="component.url" :ratio="1"
                                    class="col-sm-6 col-md-4 col-lg-3 col-12">
                                    <NuxtLink class="text-grey-6" style="text-decoration: none;" :to="component.url">
                                        <ComponentCard :isLicensed="true" :card="component"></ComponentCard>
                                    </NuxtLink>
                                </div>
                            </div>
                            <div v-else class="text-center">

                                No Components Found

                            </div>
                            <div class="gradient-overlay"></div>
                            <div class="q-py-xl text-center">

                                <NuxtLink :to="`/components#${marketing?.anchor}`">
                                    <q-btn unelevated no-caps color="dark">
                                        Show more...
                                    </q-btn>
                                </NuxtLink>
                            </div>
                        </q-tab-panel>
                        <q-tab-panel name="ecommerce">
                            <div v-if="ecommerceUIComponents.length" class="row q-col-gutter-md">
                                <div v-for="component in ecommerceUIComponents" :key="component.url" :ratio="1"
                                    class="col-sm-6 col-md-4 col-lg-3 col-12">
                                    <NuxtLink class="text-grey-6" style="text-decoration: none;" :to="component.url">
                                        <ComponentCard :isLicensed="true" :card="component"></ComponentCard>
                                    </NuxtLink>
                                </div>
                            </div>
                            <div v-else class="text-center">

                                No Components Found

                            </div>
                            <div class="gradient-overlay"></div>
                            <div class="q-py-xl text-center">

                                <NuxtLink :to="`/components#${ecommerce?.anchor}`">
                                    <q-btn unelevated no-caps color="dark">
                                        Show more...
                                    </q-btn>
                                </NuxtLink>
                            </div>
                        </q-tab-panel>

                    </q-tab-panels>


                </div>
            </div>
        </Container>
        <!-- </div>
        </div> -->
    </section>
</template>

<script setup lang="ts">
// import { getRandomElementsFromSubcategories } from '../utils';
const allComponents = useComponents();
const applicationUI = computed(() => allComponents.value ? allComponents.value.find(c => c.anchor.includes('application')) : null);
const marketing = computed(() => allComponents.value ? allComponents.value.find(c => c.anchor.includes('marketing')) : null);
const ecommerce = computed(() => allComponents.value ? allComponents.value.find(c => c.anchor.includes('ecommerce')) : null);
const currentPanel = ref('application-ui');
const applicationUIComponents = computed(() => {
    if (applicationUI.value) {
        return getRandomElementsFromSubcategories(applicationUI.value, 6)
    }
    return []
});
const marketingUIComponents = computed(() => {
    if (marketing.value) {
        return getRandomElementsFromSubcategories(marketing.value, 6)
    }
    return []
});
const ecommerceUIComponents = computed(() => {
    if (ecommerce.value) {
        return getRandomElementsFromSubcategories(ecommerce.value, 6)
    }
    return []
});

</script>

<style scoped>
.gradient-overlay {
    position: absolute;
    left: -10px;
    right: -10px;
    bottom: -10px;
    height: 16.6%;
    background: linear-gradient(to top, #ffffff, rgba(255, 255, 255, 0.722));
    pointer-events: none;
}

@media (min-width: 640px) {
    .gradient-overlay {
        height: 33.3%;
    }
}
</style>