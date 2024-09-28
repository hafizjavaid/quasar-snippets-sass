<!-- Stacked List 11 -->
::ContentCard{title="Stacked List 11" slug="stacked-list-11" }

#preview
::stacked-list-11
::

#codebase
::CodeView

```html
<template>
    <div style="max-width: 600px; width: 100%;" class="q-mx-auto">
        <q-list style="border-radius: 12px" bordered>
            <div class="q-pa-md">
                <q-item-label class="text-weight-medium">Create your first project</q-item-label>
                <q-item-label caption class="text-grey-9">Get started by selecting a pre-made template or create your
                    own</q-item-label>
            </div>
            <q-separator />
            <template v-for="(list, i) in list11" :key="list.id">
                <q-item class="q-my-none" clickable v-ripple>
                    <q-item-section avatar>
                        <q-btn padding="8px 10px" :color="list.color" unelevated>
                            <q-icon :name="list.icon" :color="!list.color ? 'grey-7' : ''"></q-icon>
                        </q-btn>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>{{ list.title }}</q-item-label>
                        <q-item-label caption lines="1">{{ list.subtitle }}</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-icon :name="list.iconRight" color="grey-8" />
                    </q-item-section>
                </q-item>
                <q-separator v-if="i !== list11.length - 1" />
            </template>
        </q-list>
    </div>
</template>

<script setup lang="ts">
const list11 = [
    {
        id: 1,
        title: 'Marketing Campaign',
        subtitle: 'A campaign to promote your product',
        icon: 'mdi-bullhorn-outline',
        color: 'pink',
        iconRight: 'mdi-chevron-right',
    },
    {
        id: 2,
        title: 'E-commerce',
        subtitle: 'A simple online store',
        icon: 'mdi-cart-outline',
        color: 'blue',
        iconRight: 'mdi-chevron-right',
    },
    {
        id: 3,
        title: 'Blog',
        subtitle: 'A blog to share your thoughts',
        icon: 'mdi-pencil-outline',
        color: 'green',
        iconRight: 'mdi-chevron-right',
    },
    {
        id: 4,
        title: 'Or start from an empty project',
        subtitle: '',
        icon: 'mdi-file-star-outline',
        status: 'Processed',
        iconRight: 'mdi-chevron-right',
        color: '',
    },
];
</script>

<style>
.q-item__section--avatar {
    min-width: auto;
}
</style>


```

::