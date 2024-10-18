<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <div class="">
            <q-layout view="hHh Lpr lff" container :style="$q.screen.gt.md ? 'min-height: 700px' : 'min-height: 550px'"
                class="">
                <q-header class="bg-transparent q-pa-sm">
                    <q-toolbar>
                        <q-btn class="q-mr-sm lt-md" color="grey-9" flat @click="drawer = !drawer" round dense
                            icon="menu" />
                        <q-avatar size="40px">
                            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
                        </q-avatar>
                        <q-space></q-space>
                        <div class="flex no-wrap q-gutter-x-sm items-center gt-sm">
                            <q-btn v-for="(item, i) in menuList" :key="i" flat padding="4px 10px" text-color="grey-9"
                                color="grey-2" no-caps unelevated :label="item" />
                        </div>
                        <q-space></q-space>
                        <q-btn flat padding="4px 10px" dense text-color="grey-9" color="grey-2" no-caps unelevated
                            label="Login" icon-right="mdi-chevron-right"></q-btn>
                    </q-toolbar>
                </q-header>

                <q-drawer v-model="drawer" :width="200" :breakpoint="1024" elevated overlay
                    :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
                    <q-scroll-area class="fit">
                        <q-list>
                            <template v-for="(menuItem, index) in menuList" :key="index">
                                <q-item clickable :active="menuItem === 'Outbox'" v-ripple>
                                    <q-item-section>
                                        {{ menuItem }}
                                    </q-item-section>
                                </q-item>
                            </template>
                        </q-list>
                    </q-scroll-area>
                </q-drawer>

                <q-page-container class="q-pa-none">
                    <q-page class="q-pa-none flex flex-center">
                        <div class="q-ma-none q-pa-none q-gutter-none ">
                            <div class="text-center q-pa-md q-mx-auto" style="max-width: 800px">
                                <q-btn class="gt-sm" no-caps rounded padding="4px 8px" outline color="grey-4">
                                    <template #default>
                                        <span class="gt-md q-mr-xs text-grey-7">Announcing our</span>
                                        <span class="text-grey-7"><span class="lt-lg text-grey-7">Our&nbsp;</span>next
                                            round of funding.
                                            Click</span>
                                        <span class="text-grey-7"><a class="q-mx-xs text-primary" href="#">here</a> to
                                            learn more.</span>
                                    </template>
                                </q-btn>
                                <div class="q-my-md text-weight-bold"
                                    :class="[$q.screen.gt.sm ? 'text-h2' : 'text-h5']">
                                    Data to enrich your online business
                                </div>
                                <div class="q-body-1 q-mb-md text-grey">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis
                                    quis est labore
                                    voluptatibus! Eaque cupiditate minima, at placeat totam!
                                </div>
                                <div class="row q-gutter-md justify-center">
                                    <q-btn no-caps unelevated style="border-radius: 8px;" color="primary"
                                        label="Get started" class="q-py-xs q-mr-md" />
                                    <q-btn no-caps flat color="grey-9" style="border-radius: 8px;" label="Learn more"
                                        icon-right="chevron_right" class="q-py-xs" />
                                </div>
                            </div>
                            <div class="v-bg absolute-full">
                                <div aria-hidden="true" class="overflow-hidden full-height full-width" />
                            </div>
                        </div>
                    </q-page>
                </q-page-container>
            </q-layout>
        </div>
    </div>
</template>


<script setup lang="ts">
const $q = useQuasar();

const menuList = [
    'Products',
    'Services',
    'About',
    'Contact',
]

const drawer = ref(false);
</script>

<style lang="scss" scoped>
.v-bg {
    filter: blur(56px);
    pointer-events: none;
    opacity: 0.2;
    &>div {
        background: linear-gradient(to bottom right,
                $primary,
                $negative);
        z-index: -10;
        clip-path: polygon(20% 50%, 27% 66%, 41% 66%, 50% 50%, 41% 34%, 27% 34%, 20% 50%, 55% 50%, 62% 66%, 76% 66%, 85% 50%, 76% 34%, 62% 34%, 55% 50%, 30% 50%, 37% 66%, 51% 66%, 60% 50%, 51% 34%, 37% 34%, 30% 50%);
    }
}
</style>
