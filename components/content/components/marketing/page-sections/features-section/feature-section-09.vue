<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <div class="text-center q-mx-auto q-mb-xl" style="max-width: 700px">
            <div class="text-primary text-weight-medium">Professional Services</div>
            <div class="text-h5 text-weight-bold q-mt-xs">No design skills? No problem.</div>
            <p class="q-mt-md text-body1 text-grey-7">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                perferendis suscipit eaque, iste dolor cupiditate blanditiis.
            </p>
        </div>
        <div class="row q-col-gutter-md">
            <div v-for="(item, i) in features" :key="i" class="col-lg-3 col-md-4 col-12">
                <div class="text-center">
                    <q-btn padding="8px" color="grey-2" class="q-mb-md" unelevated>
                        <q-icon :name="item.icon" color="primary"></q-icon>
                    </q-btn>
                    <div class="text-grey-10 text-h6 q-mb-xs text-weight-bold">
                        {{ item.title }}
                    </div>
                    <q-separator class="q-mx-auto q-mb-lg" color="primary" size="2.4px"
                        style="width: 32px"></q-separator>
                    <p class="">
                        {{ item.text }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
const features = [
    {
        title: 'Trendy Design',
        icon: 'mdi-keyboard',
        text:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    },
    {
        title: 'Photography',
        icon: 'mdi-camera',
        text:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    },
    {
        title: 'Brand Making',
        icon: 'mdi-pencil-ruler',
        text:
            'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    },
    {
        title: '24/7 Support',
        icon: 'mdi-puzzle',
        text:
            'QuiArcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    },
];
</script>

<style scoped></style>
