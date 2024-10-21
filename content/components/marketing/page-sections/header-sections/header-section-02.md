<!-- header Section 02 -->
::ContentCard{title="Header Section 02" slug="header-section-02"  }

#preview
::header-section-02
::

#codebase
::CodeView

```html
<template>
    <div class="full-width">
        <div class="flex items-center" style="min-height: 300px;">
            <div style="max-width: 660px; width: 100%;">
                <h4 :class="[$q.screen.gt.sm ? 'text-h4' : 'text-h6']" class="text-weight-bold q-mt-none q-mb-none">Support Center
                </h4>
                <p class="q-mt-md text-body1">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                    amet
                    fugiat veniam occaecat fugiat aliqua.
                </p>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
const $q = useQuasar();


</script>

<style lang="scss" scoped></style>


```

::