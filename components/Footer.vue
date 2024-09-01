<template>
    <footer>
        <q-card bordered flat>
            <q-card-section class="q-px-none">
                <Container style="padding-block: 60px;">
                    <div class="row">
                        <div v-for="component in flatedComponents" :key="component.anchor"
                            class="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="text-body1 text-weight-medium q-mb-lg"> {{ component.name }} </div>
                            <NuxtLink v-for="item in component.categories.slice(0, 14)" :key="item.name"
                                class="footer-item block" to="/application-ui/core-layouts/stacked-layouts">
                                <q-item-section>
                                    {{ item.name }}
                                </q-item-section>
                            </NuxtLink>

                            <NuxtLink :to="`/components#${component?.anchor}`">
                                <q-btn color="grey-2" style="border-radius: 8px" text-color="grey-9"
                                    icon-right="mdi-arrow-right-thin" unelevated no-caps label="Browse all">
                                </q-btn>
                            </NuxtLink>
                        </div>
                    </div>
                </Container>
            </q-card-section>
        </q-card>
    </footer>
</template>

<script setup lang="ts">
const allComponents = useComponents();
const flatedComponents = computed(() => {
    if (allComponents.value) {
        return allComponents.value.map(c => {
            return {
                ...c,
                categories: c.categories.flatMap(category => category.subcategories)
            }
        })
    }
    return []
})
</script>

<style lang="scss" scoped>
.footer-item {
    color: $grey-6;
    transition: .2s;
    font-weight: 500;
    letter-spacing: .0892857143em;
    line-height: normal;
    max-width: 100%;
    text-indent: .0892857143em;
    margin-bottom: 20px;

    &:hover {
        color: $grey-10;
    }
}
</style>