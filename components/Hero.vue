<template>
    <div>
        <div style="max-width: 1300px; padding-block: 140px; width: 100%;" class="q-mx-auto dots">
            <div class="q-px-xl">
                <div class="row">
                    <div class="col-12 col-sm-6">
                        <div class="text-primary text-weight-medium ">
                            By Hafiz Javaid Iqbal
                        </div>
                        <div class="text-h2 text-weight-bold q-mb-md">
                            QuasarUI components, built with Qusar
                        </div>
                        <p>
                            QuasarUI is a collection of over 480 beautifully crafted UI components, built with Qusar,
                            aimed
                            at making your development process easier and faster.
                        </p>
                        <div class="flex q-gutter-x-md">
                            <q-btn unelevated no-caps color="dark">
                                Browse Components
                                <Icon class="text-white q-ml-sm" name="flowbite:arrow-right-outline"
                                    style="width: 24px; height: 24px;" />
                            </q-btn>
                        </div>
                    </div>
                    <div class="col-12 col-sm-5 offset-md-1">
                        <div class="flex items-start  no-wrap q-gutter-x-md q-mb-xl">
                            <div class="flex justify-center items-center bg-pink-6 q-mt-xs"
                                style="border-radius: 8px; min-width: 40px; height: 40px;">
                                <Icon class="text-white " name="uil:github" style="width: 24px; height: 24px;" />
                            </div>
                            <div class="">
                                <span class="text-body2 text-weight-bold">Over 500+ components</span>
                                <br /> Beautifully designed and simple to use components that support both light and
                                dark
                                mode themes. Created to make your development process faster and easier.
                            </div>
                        </div>
                        <div class="flex items-start  no-wrap q-gutter-x-md q-mb-xl">
                            <div class="flex justify-center items-center bg-green-6 q-mt-xs"
                                style="border-radius: 8px; min-width: 40px; height: 40px;">
                                <Icon class="text-white " name="pepicons-pop:rewind-time"
                                    style="width: 24px; height: 24px;" />
                            </div>
                            <div class="">
                                <span class="text-body2 text-weight-bold">Continuously updated</span>
                                <br /> Components are added and updated regularly to ensure you always have the latest
                                and
                                greatest examples.
                            </div>
                        </div>
                        <div class="flex items-start  no-wrap q-gutter-x-md">
                            <div class="flex justify-center items-center bg-blue-6 q-mt-xs"
                                style="border-radius: 8px; min-width: 40px; height: 40px;">
                                <Icon class="text-white " name="devicon-plain:quasar"
                                    style="width: 24px; height: 24px;" />
                            </div>
                            <div class="">
                                <span class="text-body2 text-weight-bold">Built with Quasar</span>
                                <br /> All components are built 100% using Quasar, the most complete Vue.js component
                                framework.
                            </div>
                        </div>

                    </div>
                </div>
                <div></div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.dots {
    background-image: radial-gradient(hsla(0, 0%, 78%, .4) 1px, transparent 0);
    background-size: 12px 12px;
}
</style>