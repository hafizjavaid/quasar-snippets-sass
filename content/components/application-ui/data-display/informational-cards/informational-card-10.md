<!-- Informational Card 01 -->
::ContentCard{title="Informational Card 01" slug="informational-card-01" }

#preview
::informational-card-01
::

#codebase
::CodeView

```html
<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
       <q-card style="max-width: 637px; border-radius: 12px" class="q-mx-auto shadow-inset shadow-1">
            <div class="q-pa-md">
                <div class="text-h6 text-weight-bold text-grey-10">Account summary</div>
            </div>
            <q-separator></q-separator>
            <div class="q-pa-lg">
                <div class="row q-col-gutter-lg items-center">
                    <div class="col-5">
                        <div class="flex items-center justify-between">
                            <div class="text-body1 text-grey-10 text-weight-medium">Account</div>
                            <div class="text-body1 text-grey-10 text-weight-medium">040-00265-10</div>
                        </div>
                    </div>
                    <div class="col-7">
                        <div class="flex items-center justify-between">
                            <div class="text-body1 text-grey-10 text-weight-medium">Balance</div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="row q-col-gutter-lg items-center">
                    <div class="col-5">
                        <div class="flex items-center justify-between">
                            <div class="text-body2 text-grey-8">Owner</div>
                            <div class="text-body2 text-grey-10">John Doe</div>
                        </div>
                    </div>
                    <div class="col-7">
                        <div class="flex items-center justify-between">
                            <div class="text-body2 text-grey-8">Prior to balance</div>
                            <div class="text-body2 text-grey-10">$0.00</div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="row q-col-gutter-lg items-center">
                    <div class="col-5">
                        <div class="flex items-center justify-between">
                            <div class="text-body2 text-grey-8">Service address</div>
                            <div class="text-body2 text-grey-10">1234 Main St</div>
                        </div>
                    </div>
                    <div class="col-7">
                        <div class="flex items-center justify-between">
                            <div class="flex q-gutter-x-md items-center">
                                <div class="text-body2 text-grey-8">Current bill</div>
                                <q-chip rounded size="9px" color="blue-2" text-color="blue-9">
                                    Due 5/22/2023
                                </q-chip>
                            </div>
                            <div class="text-body2 text-grey-10">$298.17</div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="row q-col-gutter-lg items-center">
                    <div class="col-5">
                        <div class="flex items-center justify-between">
                            <div class="text-body2 text-grey-8">Status</div>
                            <q-chip color="green-1" size="10px" text-color="green-10"
                                class="text-weight-bold q-mt-none">
                                Active
                            </q-chip>
                        </div>
                    </div>
                    <div class="col-7">
                        <div class="flex items-center justify-between">
                            <div class="text-body2 text-grey-8">Transactions since current bill</div>
                            <div class="text-body2 text-grey-10">$0</div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="row q-col-gutter-lg items-center">
                    <div class="col-5">
                        <div class="flex items-center justify-between">
                            <div class="text-body2 text-grey-8">Auto pay</div>
                            <q-btn color="primary" flat label="Enroll in auto pay" no-caps class=" " unelevated />
                        </div>
                    </div>
                    <div class="col-7">
                        <div class="flex items-center justify-between">
                            <div class="text-body2 text-grey-8">Account balance</div>
                            <div class="text-body2 text-weight-bold text-grey-10">$298.17</div>
                        </div>
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