<!-- Feature Section 03 -->
::ContentCard{title="Feature Section 03" slug="feature-section-03" }

#preview
::feature-section-03
::

#codebase
::CodeView

```html

<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <div class="text-center q-mx-auto" style="max-width: 700px">
            <q-btn color="primary" unelevated padding="16px">
                <q-icon name="mdi-apps" size="20px"></q-icon>
            </q-btn>
            <div class="text-primary text-body1 text-weight-bold q-mt-lg">
                Why we're the best
            </div>
            <div class="text-h4 text-weight-bold q-mt-sm q-mb-sm">About our Product</div>
            <q-separator color="grey-5" size="2px" style="width: 32px" class="q-mx-auto"></q-separator>
        </div>
        <div class="row q-mt-xl q-col-gutter-md">
            <div v-for="(item, i) in features3" :key="i" class="col-12 col-md-4">
                <div style="max-width: 450px">
                    <div class="flex justify-between q-mb-lg">
                        <div class="q-gutter-y-sm">
                            <div class="text-grey-5">{{ item.title }}</div>
                            <div class="text-body2 text-weight-bold">{{ item.subtitle }}</div>
                            <q-separator color="primary" size="2.4px" style="width: 32px"></q-separator>
                        </div>
                        <div class="text-grey-5 text-h3">{{ item.number }}</div>
                    </div>
                    <p class="">
                        {{ item.text }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
const features3 = [
    {
        title: 'Best Productivity',
        subtitle: 'Grow your Revenue',
        text:
            'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
        number: '01',
    },
    {
        title: 'Special Offers',
        subtitle: 'Affordable Prices',
        text:
            'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
        number: '02',
    },
    {
        title: 'Income Flow',
        subtitle: 'Target Setting',
        text:
            'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
        number: '03',
    },
];
</script>

<style scoped></style>


```

::