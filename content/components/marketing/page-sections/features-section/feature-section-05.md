<!-- Feature Section 05 -->
::ContentCard{title="Feature Section 05" slug="feature-section-05" }

#preview
::feature-section-05
::

#codebase
::CodeView

```html

<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <q-card bordered flat>
            <div class="q-py-xl q-pr-xl q-pl-md-none q-pl-xl">
                <div class="row">
                    <div class="col-12 col-md-5 flex items-center">
                        <q-img :ratio="16 / 9"
                            src="https://cdn.vuetifyjs.com/docs/images/one/snips/screenshots/vuetify-cards-dark.png">
                        </q-img>
                    </div>
                    <div class="col-12 col-md-6 offset-md-1">
                        <div class="text-primary text-body1 text-weight-bold q-mt-lg">
                            Create faster
                        </div>
                        <div class="text-h4 text-weight-bold q-mt-sm q-mb-sm">
                            A better framework
                        </div>
                        <p class="q-mt-md text-body1 text-grey-7 q-mb-lg">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                            perferendis suscipit eaque, iste dolor cupiditate blanditiis.
                        </p>

                        <div v-for="(item, i) in features5" :key="i"
                            class="flex items-start no-wrap q-gutter-x-sm q-mb-lg">
                            <q-btn color="grey-2" unelevated>
                                <q-icon :name="item.icon" color="primary"></q-icon>
                            </q-btn>
                            <div>
                                <div class="text-grey-10 q-mb-none text-weight-bold">
                                    {{ item.title }}
                                </div>
                                <p class="ellipsis-2-lines">
                                    {{ item.text }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </q-card>
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