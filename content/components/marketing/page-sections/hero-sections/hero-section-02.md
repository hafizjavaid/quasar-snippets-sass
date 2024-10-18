<!-- Hero Section 02 -->
::ContentCard{title="Hero Section 02" slug="hero-section-02" :is-padding="false" }

#preview
::hero-section-02
::

#codebase
::CodeView

```html
<template>
        <div>
            <q-layout view="hHh Lpr lff" container :style="$q.screen.gt.md ? 'min-height: 700px' : 'min-height: 550px'">
                <!-- Drawer for mobile -->
                <q-drawer v-model="drawer" :width="200" :breakpoint="1024" elevated overlay
                    :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
                    <q-scroll-area class="fit">
                        <q-list>
                            <template v-for="(menuItem, index) in menuList" :key="index">
                                <q-item clickable :active="menuItem === 'Outbox'" v-ripple>
                                    <q-item-section>{{ menuItem }}</q-item-section>
                                </q-item>
                            </template>
                        </q-list>
                    </q-scroll-area>
                </q-drawer>
                <!-- <q-page class="q-pa-none flex flex-center"> -->
                    <div :style="$q.screen.gt.md ? 'min-height: 700px' : 'min-height: 550px'"
                        class="img-gradient full-width">
                        <q-header class="bg-transparent q-pa-sm">
                            <q-toolbar>
                                <q-btn class="q-mr-sm lt-md" color="grey-1" flat @click="drawer = !drawer" round dense
                                    icon="menu" />
                                <q-avatar size="40px">
                                    <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
                                </q-avatar>
                                <q-space></q-space>
                                <div class="flex no-wrap q-gutter-x-sm items-center gt-sm">
                                    <q-btn v-for="(item, i) in menuList" :key="i" flat padding="4px 10px"
                                        text-color="grey-1" color="grey-2" no-caps unelevated :label="item" />
                                </div>
                                <q-space></q-space>
                                <q-btn flat padding="4px 10px" dense text-color="grey-1" color="grey-2" no-caps
                                    unelevated label="Login" icon-right="mdi-chevron-right"></q-btn>
                            </q-toolbar>
                        </q-header>
                        <q-page-container>
                            <div class="q-ma-none q-py-xl q-pa-md-none q-gutter-none flex flex-center"
                                :style="$q.screen.gt.md ? 'min-height: calc(700px - 66px)' : 'min-height: calc(550px - 66px)'">
                                <div class="text-center q-pa-md q-mx-auto" style="max-width: 800px;">

                                    <q-btn class="gt-sm" no-caps rounded padding=" 4px 8px" outline color="grey-4">
                                        <template #default>
                                            <span class="gt-md q-mr-xs text-grey-1">Announcing our</span>
                                            <span class="text-grey-1"><span
                                                    class="lt-lg text-grey-1">Our&nbsp;</span>next round of funding.
                                                Click</span>
                                            <span class="text-grey-1"><a class="q-mx-xs text-primary" href="#">here</a>
                                                to learn
                                                more.</span>
                                        </template>
                                    </q-btn>
                                    <div class="text-white q-my-md text-weight-bold"
                                        :class="[$q.screen.gt.sm ? 'text-h2' : 'text-h5']">
                                        Data to enrich your online business
                                    </div>
                                    <div class="text-body1 q-my-md q-my-md-xl text-grey-1">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione
                                        debitis quis est
                                        labore
                                        voluptatibus! Eaque cupiditate minima, at placeat totam!
                                    </div>
                                    <div class="row q-gutter-md justify-center">
                                        <q-btn no-caps unelevated style="border-radius: 8px;" color="primary"
                                            label="Get started" class="q-py-xs q-mr-md" />
                                        <q-btn no-caps color="white" text-color="dark" style="border-radius: 8px;"
                                            label="Learn more" icon-right="chevron_right" class="q-py-xs" />
                                    </div>
                                </div>
                            </div>
                        </q-page-container>
                    </div>
                <!-- </q-page> -->
            </q-layout>
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

<style scoped>
.img-gradient {
    background: linear-gradient(to left, rgba(23, 106, 192, .95), rgba(66, 66, 66, .95)),
        url('https://images.unsplash.com/photo-1622675363311-3e1904dc1885?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-size: cover;
    background-position: center;
}
</style>


```

::