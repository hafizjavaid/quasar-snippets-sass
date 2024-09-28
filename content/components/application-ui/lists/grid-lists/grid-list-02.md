<!-- Grid List 02 -->
::ContentCard{title="Grid List 02" slug="grid-list-02" }

#preview
::grid-list-02
::

#codebase
::CodeView

```html
<template>
    <div class="row q-col-gutter-lg">
        <div v-for="n in 6" :key="n" class="col-12 col-sm-6 col-md-4 col-lg-3">
            <q-card class="shadow-1">
                <q-card-section class="text-center">
                    <q-avatar class="q-mb-sm" size="120px">
                        <img src="https://cdn.quasar.dev/img/avatar.png" />
                    </q-avatar>
                    <div class="text-body1 text-grey-10">Hafiz Javaid</div>
                    <div class="text-subtitle2 text-grey-8 text-weight-normal q-mb-sm">
                        Lead Engineer
                    </div>
                    <q-chip color="green-2" size="10px" text-color="green-8" icon="mdi-shield-account-outline"
                        class="q-ml-sm">
                        Admin
                    </q-chip>
                </q-card-section>
                <q-separator></q-separator>
                <q-card-section class="q-pa-none">
                    <q-btn-group flat spread>
                        <q-btn flat unelevated icon="mdi-email-outline" rounded color="grey-7" no-caps label="Email" />
                        <q-separator vertical />
                        <q-btn flat unelevated icon="mdi-reply-outline" rounded color="grey-7" no-caps label="Reply" />
                    </q-btn-group>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

```

::