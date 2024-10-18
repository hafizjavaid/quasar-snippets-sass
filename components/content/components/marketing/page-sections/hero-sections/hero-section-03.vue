<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <section>
            <div class="relative-position">
                <div class="flex items-center" :style="$q.screen.gt.md ? 'min-height: 800px' : 'min-height: 550px'">
                    <div class="q-pa-md q-pa-md-xl" style="max-width: 800px">
                        <q-avatar size="40px" class="">
                            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
                        </q-avatar>
                        <div class="row q-gutter-sm q-my-md q-my-md-lg">
                            <q-btn no-caps unelevated rounded color="blue-1" text-color="primary" label="What's new"
                                class="q-py-xs q-mr-md" />
                            <q-btn no-caps flat color="grey-9" style="border-radius: 8px;" label="v3 Launch"
                                icon-right="chevron_right" class="q-py-xs" />
                        </div>
                        <div class="text-weight-bold" :class="[$q.screen.gt.sm ? 'text-h2' : 'text-h5']">
                            Deploy your app in seconds
                        </div>
                        <div class="text-body1 q-py-md q-py-md-lg text-grey">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est
                            labore
                            voluptatibus! Eaque cupiditate minima, at placeat totam!
                        </div>
                        <div class="row q-gutter-sm">
                            <q-btn no-caps unelevated style="border-radius: 8px;" color="primary" label="Get started"
                                class="q-py-xs q-mr-md" />
                            <q-btn no-caps flat color="grey-9" style="border-radius: 8px;" label="Learn more"
                                icon-right="chevron_right" class="q-py-xs" />
                        </div>
                    </div>
                </div>
                <div class="hero-background absolute-full">
                    <div aria-hidden="true" class="overflow-hidden full-height full-width" />
                </div>
            </div>
        </section>
    </div>
</template>


<script setup lang="ts">
const $q = useQuasar();
</script>

<style lang="scss" scoped>
.hero-background {
    filter: blur(128px);
    pointer-events: none;
    opacity: 0.2;

    &>div {
        background: linear-gradient(to bottom right,
                rgb(66, 66, 66),
                $primary);
        z-index: -10;
        clip-path: polygon(5% 20%, 15% 10%, 30% 15%, 40% 5%, 50% 25%, 60% 15%, 75% 30%, 85% 20%, 90% 40%, 70% 50%, 85% 70%, 65% 60%, 50% 85%, 35% 70%, 20% 80%, 10% 60%, 5% 40%);
    }
}
</style>
