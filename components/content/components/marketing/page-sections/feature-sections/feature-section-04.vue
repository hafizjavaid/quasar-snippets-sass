<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <div class="text-center q-mx-auto" style="max-width: 700px">
            <div class="text-primary text-body1 text-weight-bold q-mt-lg">
                Everything, all in one place
            </div>
            <div class="text-h4 text-weight-bold q-mt-sm q-mb-sm">
                No design skills? No problem.
            </div>
            <p class="q-mt-md text-body1 text-grey-7">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                perferendis suscipit eaque, iste dolor cupiditate blanditiis.
            </p>
        </div>
        <div class="q-my-xl">
            <q-img src="https://cdn.vuetifyjs.com/docs/images/one/snips/screenshots/vuetify-get-started-light.png"
                fit="fill">
                <div class="absolute-full linear"></div>
            </q-img>
        </div>
        <div class="row q-mt-xl q-col-gutter-md">
            <div v-for="(item, i) in features4" :key="i" class="col-12 col-md-4">
                <div class="flex items-start no-wrap q-gutter-x-md">
                    <q-btn color="grey-2" unelevated>
                        <q-icon :name="item.icon" color="primary"></q-icon>
                    </q-btn>
                    <div>
                        <div class="text-grey-10 q-mb-sm text-weight-bold">{{ item.title }}</div>
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
const features4 = [
    {
        title: 'Push to deploy',
        icon: 'mdi-cloud-upload',
        text:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    },
    {
        title: 'SSL certificates',
        icon: 'mdi-lock',
        text:
            'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
    },
    {
        title: 'Simple queues',
        icon: 'mdi-sync',
        text:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    },
    {
        title: 'Advanced security',
        icon: 'mdi-security',
        text:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    },
    {
        title: 'Powerful API',
        icon: 'mdi-cog',
        text:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    },
    {
        title: 'Database backups',
        icon: 'mdi-database',
        text:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    },
];
</script>

<style lang="scss" scoped>
.linear {
    background-image: linear-gradient(to bottom,
            $linear-1 55%,
            $linear-2 ) !important;
}
</style>
