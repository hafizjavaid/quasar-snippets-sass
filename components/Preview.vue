<template>
    <section>
        <div style="max-width: 1300px; padding-block-start: 140px; width: 100%;" class="q-mx-auto">
            <div class="q-px-xl">
                <div class="text-primary text-weight-medium text-body1">Components</div>
                <div class="text-h5 text-weight-bold q-mt-md">Beautifully crafted UI components</div>
                <div>Over 500+ professionally designed, fully responsive, expertly crafted component examples you can
                    drop into your Quasar projects and customize to your heart’s content.</div>
                <div class="q-py-xl relative-position">
                    <q-card style="border-radius: 8px;" class="q-mb-xl q-pa-sm" bordered flat>

                        <div class="">
                            <q-tabs active-color="primary" indicator-color="transparent" no-caps switch-indicator
                                align="left" inline-label class="bg-transparent ">
                                <q-tab :ripple="false" class="text-left" name="application-ui" label="Application UI" />
                                <q-tab :ripple="false" name="marketing" label="Marketing" />
                                <q-tab :ripple="false" name="ecommerce" label="Ecommerce" />
                            </q-tabs>

                        </div>
                    </q-card>
                    <div class="">
                        <div class="row q-col-gutter-md">
                            <div v-for="n in 6" :key="n" :ratio="1" class="col-sm-6 col-md-4 col-lg-3 col-12">
                                <NuxtLink class="text-grey-6" style="text-decoration: none;" to="/">
                                    <q-list>
                                        <q-item style="border-radius: 12px;" class="q-pa-none" clickable>
                                            <template #default>
                                                <q-card style="border-radius: 12px;"
                                                    class="bg-transparent q-pa-md full-width" bordered flat>
                                                    <q-card bordered flat class="bg-grey-3 q-pa-none full-width"
                                                        style="height: 140px; border-radius: 12px;">
                                                        <!-- Image -->
                                                        <q-img src="https://pics/500/300" loading="lazy"
                                                            spinner-color="white" height="150px"
                                                            style="max-width: 100%; border-radius: 12px;">
                                                            <!-- Loading -->
                                                            <template v-slot:loading>
                                                                <div class="text-subtitle1">
                                                                    Loading...
                                                                </div>
                                                            </template>
                                                            <!-- Error -->
                                                            <template v-slot:error>
                                                                <div class="absolute-full flex flex-center bg-grey-3">
                                                                    <q-icon color="grey-5" size="56px"
                                                                        style="width: 56px; height: 56px"
                                                                        name="mdi-image"></q-icon>
                                                                </div>
                                                            </template>
                                                        </q-img>
                                                        <div class="absolute" style="top: 4px; right: 4px;">
                                                            <q-avatar size="30px" color="white">
                                                                <q-icon color="dark" size="20px"
                                                                    name="mdi-lock-outline"></q-icon>
                                                            </q-avatar>
                                                        </div>

                                                    </q-card>
                                                    <div class="q-px-none q-pb-none q-mt-md">
                                                        <div class="text-subtitle1 text-grey-10 text-weight-medium ">
                                                            Card Headings
                                                        </div>
                                                        <div class="text-body2 text-grey-7  text-weight-normal">
                                                            7 snippets
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </template>
                                        </q-item>
                                    </q-list>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="gradient-overlay"></div>
                    </div>
                    <div class="q-py-xl text-center">
                        <q-btn unelevated no-caps color="dark">
                            Show more...
                        </q-btn>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.gradient-overlay {
  position: absolute;
  left: -10px;
  right: -10px; 
  bottom: -10px; 
  height: 16.6%;
  background: linear-gradient(to top, #ffffff, rgba(255, 255, 255, 0.722));
  pointer-events: none;
}

@media (min-width: 640px) {
  .gradient-overlay {
    height: 33.3%;
  }
}
</style>