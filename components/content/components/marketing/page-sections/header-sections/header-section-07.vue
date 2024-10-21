<template>
    <div class="full-width overflow-hidden relative-position" style="border-radius: 12px;">
        <div>
            <div>
                <q-img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="" class="absolute-full" style="z-index: 0;" />
                <div class="img-gradient absolute-full">
                </div>
            </div>
            <div class="q-pa-md q-pa-sm-xl flex flex-center relative-position" style="margin-block: 80px; z-index: 1;">
                <div class="q-mx-auto text-center" style="max-width: 660px; width: 100%;">
                    <h4 :class="[$q.screen.gt.sm ? 'text-h4' : 'text-h6']" class="text-weight-bold q-my-none">Support
                        Center</h4>
                    <p class="q-mt-md text-body1 q-my-none text-grey-7">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
                        sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
const $q = useQuasar();

</script>

<style lang="scss" scoped>
.img-gradient {
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, .8), rgba(255, 255, 255, 1));
    z-index: 0;
}
</style>
