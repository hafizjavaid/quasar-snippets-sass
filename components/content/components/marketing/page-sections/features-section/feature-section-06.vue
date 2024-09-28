<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <q-card bordered flat>
            <div class="q-py-xl q-pl-xl q-pr-md-none q-pr-xl">
                <div class="row">
                    <div class="col-12 col-md-6">
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
                        <div v-for="(item, i) in features5" :key="i" class="q-mb-lg">
                            <div class="flex items-center q-mb-sm q-gutter-x-md">
                                <q-icon :name="item.icon" size="24px" color="primary"></q-icon>
                                <div class="text-grey-10 q-mb-none text-weight-bold">
                                    {{ item.title }}
                                </div>
                            </div>
                            <p class="ellipsis-2-lines">
                                {{ item.text }}
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-md-5 offset-md-1 flex items-center">
                        <q-img src="https://cdn.vuetifyjs.com/docs/images/one/snips/screenshots/vuetify-cards-dark.png">
                        </q-img>
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
