<!-- Stat Card 08 -->
::ContentCard{title="Stat Card 08" slug="stat-card-08" }

#preview
::stat-card-08
::

#codebase
::CodeView

```html
<template>
   <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <div class="row q-col-gutter-md q-mt-xl">
            <div v-for="n in 3" :key="n" class="col-12 col-sm-6 col-md-4">
                <q-card class="shadow-1 shadow-inset">
                    <q-card-section class="q-py-lg q-px-md text-center">
                        <div class="flex q-mb-lg items-center q-gutter-md">
                            <q-avatar size="40px" color="grey-5" text-color="white" icon="" />
                            <div>
                                <div class="text-body1">John Leider</div>
                                <div class="text-grey-7">Administrator</div>
                            </div>
                        </div>
                        <div class="q-mb-sm">
                            <div class="flex items-center justify-between q-mb-xs">
                                <div class="flex items-center q-gutter-sm">
                                    <q-icon size="16px" name="mdi-github" color="dark"></q-icon>
                                    <div class="text-weight-bold text-subtitle1">GitHub</div>
                                </div>
                                <div class="text-weight-bold text-subtitle1">34%</div>
                            </div>
                            <div class="flex no-wrap q-gutter-x-xs q-mb-xs">
                                <q-linear-progress rounded size="8px" :value="0.34" color="dark" class="" />
                            </div>
                        </div>
                        <div class="q-mb-sm">
                            <div class="flex items-center justify-between q-mb-xs">
                                <div class="flex items-center q-gutter-sm">
                                    <q-icon size="16px" name="mdi-facebook" color="dark"></q-icon>
                                    <div class="text-weight-bold text-subtitle1">Facebook</div>
                                </div>
                                <div class="text-weight-bold text-subtitle1">60%</div>
                            </div>
                            <div class="flex no-wrap q-gutter-x-xs q-mb-xs">
                                <q-linear-progress rounded size="8px" :value="0.34" color="blue" track-color="blue-2"
                                    class="" />
                            </div>
                        </div>
                        <div class="q-mb-sm">
                            <div class="flex items-center justify-between q-mb-xs">
                                <div class="flex items-center q-gutter-sm">
                                    <q-icon size="16px" name="mdi-instagram" color="dark"></q-icon>
                                    <div class="text-weight-bold text-subtitle1">Instagram</div>
                                </div>
                                <div class="text-weight-bold text-subtitle1">80%</div>
                            </div>
                            <div class="flex no-wrap q-gutter-x-xs q-mb-xs">
                                <q-linear-progress rounded size="8px" :value="0.34" color="orange"
                                    track-color="orange-2" class="" />
                            </div>
                        </div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
```

::