<!-- Informational Card 04 -->
::ContentCard{title="Informational Card 04" slug="informational-card-04" }

#preview
::informational-card-04
::

#codebase
::CodeView

```html
<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <q-card style="max-width: 637px; border-radius: 12px" class="q-mx-auto shadow-inset shadow-1">
            <div class="q-pa-md">
                <div class="text-h6 text-weight-bold text-grey-10">Applicant profile</div>
                <div class="text-grey-7">Applicant specific details and information</div>
            </div>
            <q-separator></q-separator>
            <div class="q-pa-md">
                <div class="row">
                    <div class="col-12 col-sm-6 q-mb-lg">
                        <div class="text-body2 text-grey-7 q-mb-sm">Name</div>
                        <div class="text-body2 text-grey-10">Hafiz Javaid</div>
                    </div>
                    <div class="col-12 col-sm-6 q-mb-lg">
                        <div class="text-body2 text-grey-7 q-mb-sm">Email</div>
                        <div class="text-body2 text-grey-10">hafiz@quasar.com</div>
                    </div>
                    <div class="col-12 col-sm-6 q-mb-lg">
                        <div class="text-body2 text-grey-7 q-mb-sm">Applied position</div>
                        <div class="text-body2 text-grey-10">Frontend Developer</div>
                    </div>
                    <div class="col-12 col-sm-6 q-mb-lg">
                        <div class="text-body2 text-grey-7 q-mb-sm">Experience</div>
                        <q-chip square color="green-1" text-color="green"> 5 Years </q-chip>
                    </div>
                    <div class="col-12 q-mb-lg">
                        <div class="text-body2 text-grey-7 q-mb-sm">Bio</div>
                        <div class="text-body2 text-grey-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione
                            debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat
                            totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
                        </div>
                    </div>
                    <div class="col-12 q-mb-lg">
                        <div class="text-body2 text-grey-7 q-mb-sm">Files</div>
                        <q-separator></q-separator>
                        <q-item>
                            <q-item-section>
                                <div class="flex items-center q-gutter-x-sm">
                                    <q-icon size="16px" name="mdi-file-outline"></q-icon>
                                    <div class="text-subtitle1 text-grey-10">john_resume.pdf</div>
                                </div>
                            </q-item-section>
                            <q-item-section avatar>
                                <q-btn color="blue-9" style="border-radius: 8px" unelevated no-caps outline>
                                    <template #default>
                                        <q-icon name="mdi-download-outline" color="blue-9" class=""></q-icon>
                                        <div class="text-blue-9 gt-sm">Dowload</div>
                                    </template>
                                </q-btn>
                            </q-item-section>
                        </q-item>
                        <q-separator></q-separator>
                        <q-item>
                            <q-item-section>
                                <div class="flex items-center q-gutter-x-sm">
                                    <q-icon size="16px" name="mdi-file-outline"></q-icon>
                                    <div class="text-subtitle1 text-grey-10">john_resume.pdf</div>
                                </div>
                            </q-item-section>
                            <q-item-section avatar>
                                <q-btn color="blue-9" style="border-radius: 8px" unelevated no-caps outline>
                                    <template #default>
                                        <q-icon name="mdi-download-outline" color="blue-9" class=""></q-icon>
                                        <div class="text-blue-9 gt-sm">Dowload</div>
                                    </template>
                                </q-btn>
                            </q-item-section>
                        </q-item>
                        <q-separator></q-separator>
                    </div>
                </div>
            </div>
        </q-card>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
```

::