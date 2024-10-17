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
        <div class="row q-mt-lg q-gutter-y-lg">
            <div v-for="(item, i) in features2" :key="i" class="col-12 col-md-6">
                <div style="max-width: 500px">
                    <q-btn color="primary" unelevated padding="7px 12px" :icon="item.icon" />
                    <div class="text-body1 q-mt-sm text-weight-bold">{{ item.title }}</div>
                    <p class="">
                        {{ item.subtitle }}
                    </p>
                    <q-chip color="primary" text-color="primary" square outline icon-right="mdi-arrow-right">
                        Learn more
                    </q-chip>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
const features2 = [
    {
        title: 'Bleeding edge technology',
        subtitle:
            'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu.',
        icon: 'mdi-speedometer',
    },
    {
        title: 'Competitive pricing',
        subtitle:
            'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
        icon: 'mdi-cash-multiple',
    },
    {
        title: 'Always up to date',
        subtitle:
            'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
        icon: 'mdi-calendar',
    },
    {
        title: '24/7 support',
        subtitle:
            'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
        icon: 'mdi-headset',
    },
];
</script>

<style scoped></style>
