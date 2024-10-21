<!-- header Section 09 -->
::ContentCard{title="Header Section 09" slug="header-section-09" :is-padding="false" }

#preview
::header-section-09
::

#codebase
::CodeView

```html
<template>
    <div class="full-width">
        <div>
            <q-img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="" class="absolute-full" style="z-index: 0;" />
            <div class="img-gradient absolute-full">
            </div>
        </div>
        <div class="q-pa-md q-pa-sm-xl relative-position" style="margin-block: 80px; z-index: 1;">
            <div style="max-width: 700px;">
                <h3 :class="[$q.screen.gt.sm ? 'text-h3' : 'text-h6']" class="text-weight-bold q-my-none">Work with
                    us </h3>
                <p class="q-mt-md text-body1 text-grey-7 q-mb-none">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
                    sunt amet
                    fugiat veniam occaecat fugiat aliqua.
                </p>
            </div>
            <div class="row q-mt-lg q-col-gutter-md">
                <div v-for="(item, i) in features" :key="i" class="col-12 col-md-4">
                    <q-card bordered flat class="q-pa-lg full-height"
                        style="background-color: rgba(255, 255, 255, 0.4);">
                        <div class="flex items-center q-gutter-x-sm text-body1 q-mb-sm">
                            <q-icon size="20px" color="primary" :name="item.icon"></q-icon>
                            <div class="text-weight-bold">{{ item.title }}</div>
                        </div>
                        <p class="q-mb-none">
                            {{ item.subtitle }}
                        </p>
                    </q-card>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
const $q = useQuasar();

const features = [
    {
        title: 'Push to deploy',
        subtitle:
            'Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.',
        icon: 'mdi-cloud-upload',
    },
    {
        title: 'SSL certificates',
        subtitle:
            'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
        icon: 'mdi-lock',
    },
    {
        title: 'Simple queues',
        subtitle:
            'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
        icon: 'mdi-sync',
    },
]
</script>

<style lang="scss" scoped>
.img-gradient {
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, .8), rgba(255, 255, 255, 1));
    z-index: 0;
}
</style>

```

::