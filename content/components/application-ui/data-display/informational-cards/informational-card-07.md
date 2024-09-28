<!-- Informational Card 07 -->
::ContentCard{title="Informational Card 07" slug="informational-card-07" }

#preview
::informational-card-07
::

#codebase
::CodeView

```html
<template>
    <q-card style="max-width: 600px; border-radius: 8px" flat bordered class="q-mx-auto">
            <div class="q-pa-md">
                <div class="flex items-center justify-between">
                    <div class="flex items-center q-gutter-x-md">
                        <q-avatar round size="48px" color="grey-10">
                            <q-badge align="bottom" round floating color="yellow-10">
                                <q-icon size="10px" name="mdi-star"></q-icon>
                            </q-badge>
                        </q-avatar>
                        <div>
                            <div class="flex items-center q-gutter-x-xs">
                                <div class="text-weight-bold">quasar</div>
                                <div class="text-grey-6 text-weight-regular">starred a repository</div>
                            </div>
                            <div class="text-caption text-grey-6 text-weight-regular">
                                3 hours ago
                            </div>
                        </div>
                    </div>

                    <q-btn size="sm" icon="mdi-dots-horizontal" flat round no-caps unelevated>
                    </q-btn>
                </div>
                <div class="q-mt-md">
                    <div class="bg-grey-3 q-pa-md" style="border-radius: 8px">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center q-gutter-x-sm">
                                <q-avatar round size="16px" color="grey-10"> </q-avatar>
                                <div class="text-weight-bold">quasar/one</div>
                            </div>
                            <q-btn-dropdown split unelevated push color="primary" no-caps icon="mdi-star-outline"
                                label="Star"></q-btn-dropdown>
                        </div>
                        <div class="q-mb-sm text-body2">✨ Binding the Quasar ecosystem</div>
                        <div class="flex items-center q-gutter-x-md">
                            <div class="flex items-center">
                                <q-badge color="primary" rounded class="q-mr-sm" />
                                <div class="text-caption">TypeScript</div>
                            </div>
                            <div class="flex items-center q-gutter-x-xs">
                                <q-icon size="16px" name="mdi-star-outline"></q-icon>
                                <div class="text-caption">431</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </q-card>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
```

::