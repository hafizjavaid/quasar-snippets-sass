<!-- Feature Section 07 -->
::ContentCard{title="Feature Section 07" slug="feature-section-07" }

#preview
::feature-section-07
::

#codebase
::CodeView

```html

<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <div class="row">
            <div class="col-12 col-lg-4">
                <div class="text-primary text-body1 text-weight-bold">Create faster</div>
                <div class="text-h4 text-weight-bold q-mt-sm q-mb-sm">A better framework</div>
                <p class="q-mt-md text-body1 text-grey-7 q-mb-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                    perferendis suscipit eaque, iste dolor cupiditate blanditiis.
                </p>
            </div>
            <div class="col-12 col-lg-8">
                <div class="row q-col-gutter-md">
                    <div v-for="(item, i) in features5" :key="i" class="col-md-6 col-12">
                        <div class="flex items-center q-gutter-x-sm q-mb-sm">
                            <q-btn class="q-px-none" icon="mdi-check" text-color="primary" flat unelevated>
                            </q-btn>
                            <div class="text-grey-10 q-mb-none text-weight-bold">
                                {{ item.title }}
                            </div>
                        </div>
                        <p class="">
                            {{ item.text }}
                        </p>
                    </div>
                    <div v-for="(item, i) in features5" :key="i" class="col-md-6 col-12">
                        <div class="flex items-center q-gutter-x-sm q-mb-sm">
                            <q-btn class="q-px-none" icon="mdi-check" text-color="primary" flat unelevated>
                            </q-btn>
                            <div class="text-grey-10 q-mb-none text-weight-bold">
                                {{ item.title }}
                            </div>
                        </div>
                        <p class="">
                            {{ item.text }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
const features5 = [
    {
        title: 'Over 80 components',
        icon: 'mdi-widgets-outline',
        text:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    },
    {
        title: 'Weekly releases',
        icon: 'mdi-calendar-outline',
        text:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    },
    {
        title: 'Expansive API',
        icon: 'mdi-cogs',
        text:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    },
];
</script>

<style scoped></style>


```

::