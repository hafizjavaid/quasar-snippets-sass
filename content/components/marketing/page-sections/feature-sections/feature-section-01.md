<!-- Feature Section 01 -->
::ContentCard{title="Feature Section 01" slug="feature-section-01" }

#preview
::feature-section-01
::

#codebase
::CodeView

```html
<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <div class="text-center q-mx-auto" style="max-width: 700px">
            <div class="text-primary text-weight-medium">Develop faster</div>
            <div class="text-h5 text-weight-bold q-mt-sm">
                Everything you need to build a great app.
            </div>
            <p class="q-mt-md text-body1 text-grey-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione
                debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam,
                magni doloremque veniam neque porro libero rerum unde voluptatem!
            </p>
        </div>
        <div class="row q-mt-lg">
            <div v-for="(item, i) in features1" :key="i" class="col-12 col-md-4">
                <div style="max-width: 500px">
                    <div class="flex items-center q-gutter-x-sm text-body1 q-mb-sm">
                        <q-icon size="20px" color="primary" :name="item.icon"></q-icon>
                        <div class="text-weight-bold">{{ item.title }}</div>
                    </div>
                    <p class="">
                        {{ item.subtitle }}
                    </p>
                    <q-chip color="blue-1" text-color="primary" icon-right="mdi-arrow-right">
                        Learn more
                    </q-chip>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
const features1 = [
    {
        title: 'Push to deploy',
        subtitle:
            'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu.',
        icon: 'mdi-cloud-upload',
    },
    {
        title: 'SSL certificates',
        subtitle:
            'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
        icon: 'mdi-lock',
    },
    {
        title: 'Simple queues',
        subtitle:
            'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
        icon: 'mdi-sync',
    },
];
</script>

<style scoped></style>

```

::