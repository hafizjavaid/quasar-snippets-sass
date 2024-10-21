<!-- header Section 06 -->
::ContentCard{title="Header Section 06" slug="header-section-06" :is-padding="false"  }

#preview
::header-section-06
::

#codebase
::CodeView

```html
<template>
    <div class="full-width overflow-hidden relative-position" style="border-radius: 12px;">
        <div>
            <div>
                <q-img
                    src="https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="" class="absolute-full" style="z-index: 0;" />
                <div class="img-gradient absolute-full">
                </div>
            </div>
            <div class="q-pa-md q-pa-sm-xl flex items-center relative-position" style="margin-block: 80px; z-index: 1;">
                <div style="max-width: 660px; width: 100%;">
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
    background-image: linear-gradient(to left, rgba(255, 255, 255, .8), rgba(255, 255, 255, 1));
    z-index: 0;
}
</style>

```

::