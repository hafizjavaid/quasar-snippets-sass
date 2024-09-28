<!-- Informational Card 02 -->
::ContentCard{title="Informational Card 02" slug="informational-card-02" }

#preview
::informational-card-02
::

#codebase
::CodeView

```html
<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <q-card style="max-width: 400px; border-radius: 12px" class="q-mx-auto shadow-inset shadow-1">
            <q-card-section class="q-pa-md bg-grey-4">
                <div class="flex items-center q-gutter-x-sm">
                    <q-icon size="16px" name="mdi-star"></q-icon>
                    <div class="text-subtitle2 text-weight-bold">Your offers</div>
                </div>
            </q-card-section>
            <q-card-section class="q-py-lg q-px-md">
                <div class="text-h4 text-weight-bold">
                    Check out credit card offers matched to you
                </div>
                <div class="q-my-lg">
                    <q-skeleton style="border-radius: 16px" height="200px" />
                </div>
                <p class="text-grey-8 q-mb-none">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione
                    debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat
                    totam!
                </p>
            </q-card-section>
            <q-card-section class="q-px-md q-pt-sm q-pb-lg">
                <q-btn color="primary" label="See your offers" no-caps class="full-width" unelevated />
            </q-card-section>
        </q-card>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
```

::