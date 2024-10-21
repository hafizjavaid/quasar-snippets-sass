<!-- header Section 04 -->
::ContentCard{title="Header Section 04" slug="header-section-04" :is-padding="false"  }

#preview
::header-section-04
::

#codebase
::CodeView

```html
<template>
    <div class="full-width overflow-hidden relative-position" style="border-radius: 12px;">
        <div>
            <div>
                <q-img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="" class="absolute-full" style="z-index: 0;" />
                <div class="img-gradient absolute-full">
                </div>
            </div>
            <div class="q-pa-md q-pa-sm-xl relative-position" style="margin-block: 80px; z-index: 1;">
                <div style="max-width: 700px;">
                    <h3 :class="[$q.screen.gt.sm ? 'text-h3' : 'text-h6']" class="text-weight-bold q-my-none">
                        Work with us </h3>
                    <p class="q-mt-md text-body1 text-grey-7 q-mb-none">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
                        sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </p>
                </div>
                <div class="flex q-gutter-md flex-wrap q-py-xl">
                    <q-btn size="sm" padding="7px 12px" v-for="item in items" :key="item" outline color="grey-6">
                        <template #default>
                            <div class="text-grey-9 q-mr-sm">{{ item }}</div>
                            <q-icon color="grey-9" name="mdi-arrow-right"> </q-icon>
                        </template>
                    </q-btn>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-3" v-for="(item, i) in features" :key="i">
                        <p class="text-h5 text-weight-bold q-pb-sm q-my-none">
                            {{ item.title }}
                        </p>
                        <p class="q-mb-none text-grey-7">{{ item.subtitle }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
const $q = useQuasar();
const items = [
    'Career opportunities',
    'Graduate program',
    'Core principles',
    'Leadership team',
]
const features = [
    {
        title: '20',
        subtitle: 'Countries served',
    },
    {
        title: '150+',
        subtitle: 'Project collaborations',
    },
    {
        title: '50',
        subtitle: 'Annual events',
    },
    {
        title: 'Comprehensive',
        subtitle: 'Health benefits',
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