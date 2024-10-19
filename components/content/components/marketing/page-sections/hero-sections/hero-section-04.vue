<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <q-card  flat>
            <div class="relative-position">
                <div class="flex items-center" :style="$q.screen.gt.md ? 'min-height: 800px' : 'min-height: 550px'">
                    <div class="q-pl-md q-pl-md-xl q-pr-md-none q-pr-md full-width">
                        <div class="row items-center">
                            <div class="col-12 col-md-6">
                                <div :class="[$q.screen.gt.sm ? 'text-h6' : 'text-body2']" class="text-weight-regular">
                                    We love making things simple and amazing
                                </div>
                                <h1 :class="[$q.screen.gt.sm ? 'text-h2' : 'text-h5']" class="text-weight-bold q-mb-md">
                                    Welcome to Vuetify
                                </h1>
                                <div class="text-body1 text-grey-7 text-weight-medium q-mb-lg">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis
                                    quis est labore
                                    voluptatibus! Eaque cupiditate minima, at placeat totam!
                                </div>
                                <div class="flex q-gutter-md items-center flex-wrap">
                                    <q-btn no-caps unelevated color="primary" style="border-radius: 8px;"
                                        label="Discover more" class="q-py-xs" />
                                    <span>or</span>
                                    <q-btn no-caps padding="7px 12px" style="border-radius: 8px;" outline
                                        color="grey-4">
                                        <template #default>
                                            <div class="text-grey-9 q-mr-sm">Get started now</div>
                                            <q-icon color="grey-9" name="chevron_right"> </q-icon>
                                        </template>
                                    </q-btn>
                                </div>
                            </div>
                            <div class="col-12 gt-sm col-md-5 offset-md-1 flex items-center">
                                <q-img
                                    src="https://cdn.vuetifyjs.com/docs/images/one/snips/screenshots/vuetify-cards-light.png">
                                </q-img>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hero-background absolute-full">
                    <div aria-hidden="true" class="overflow-hidden full-height full-width" />
                </div>
            </div>
        </q-card>
    </div>
</template>


<script setup lang="ts">
const $q = useQuasar();
</script>

<style lang="scss" scoped>
.hero-background {
    pointer-events: none;
    filter: blur(56px);
    opacity: 0.2;

    &>div {
        background: linear-gradient(to bottom right,
                $info,
                $primary);
        z-index: -40;
        clip-path: polygon(10% 10%, 20% 10%, 70% 80%, 60% 80%, 30% 5%, 40% 10%, 50% 30%, 60% 50%, 50% 5%, 55% 15%, 45% 15%, 50% 5%, 30% 80%, 40% 85%, 35% 95%, 25% 90%);


    }
}
</style>
