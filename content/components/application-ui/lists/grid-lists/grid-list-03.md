<!-- Grid List 03 -->
::ContentCard{title="Grid List 03" slug="grid-list-03" }

#preview
::grid-list-03
::

#codebase
::CodeView

```html
<template>
   <div class="row q-col-gutter-lg">
        <div v-for="n in 6" :key="n" class="col-12 col-sm-6 col-md-4">
            <q-card class="shadow-1" >
                <q-card-section>
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="flex items-center">
                                <div class="text-h5 text-weight-bold">Hafiz Javaid</div>
                                <q-chip color="green-2" size="10px" text-color="green-8"
                                    icon="mdi-shield-account-outline" class="q-ml-sm">
                                    Admin
                                </q-chip>
                            </div>
                            <div class="text-subtitle2 text-grey-6">Lead Engineer</div>
                        </div>
                        <q-avatar size="40px">
                            <img src="https://cdn.quasar.dev/img/avatar.png" />
                        </q-avatar>
                    </div>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

```

::