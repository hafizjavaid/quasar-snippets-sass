<template>
    <div>
        <q-card bordered flat>
            <q-card-section class="q-px-none">
                <div style="max-width: 1300px; padding-block: 140px; width: 100%;" class="q-mx-auto dots">
                    <div class="q-px-xl">
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                <div class="text-body1 text-weight-medium q-mb-lg">Application UI</div>
                                <NuxtLink class="footer-item block"
                                    to="/application-ui/core-layouts/stacked-layouts">
                                    <q-item-section>
                                        Stacked layouts
                                    </q-item-section>
                                </NuxtLink>

                                <NuxtLink class="footer-item block"
                                    to="/application-ui/core-layouts/drawer-layouts">
                                    <q-item-section>
                                        Drawer layouts
                                    </q-item-section>
                                </NuxtLink>

                                <NuxtLink class="footer-item block"
                                    to="/application-ui/core-layouts/multi-column-layouts">
                                    <q-item-section>
                                        Multi-Column layouts
                                    </q-item-section>
                                </NuxtLink>

                                <NuxtLink class="footer-item block"
                                    to="/application-ui/core-layouts/bottom-navigation-layouts">
                                    <q-item-section>
                                        Bottom navigation layouts
                                    </q-item-section>
                                </NuxtLink>

                                <NuxtLink class="footer-item block" to="/application-ui/headings/card-headings">
                                    <q-item-section>
                                        Card headings
                                    </q-item-section>
                                </NuxtLink>

                                <NuxtLink class="footer-item block" to="/application-ui/headings/page-headings">
                                    <q-item-section>
                                        Page headings
                                    </q-item-section>
                                </NuxtLink>

                                <NuxtLink class="footer-item block"
                                    to="/application-ui/headings/section-headings">
                                    <q-item-section>
                                        Section headings
                                    </q-item-section>
                                </NuxtLink>

                                <NuxtLink class="footer-item block" to="/application-ui/forms/inputs">
                                    <q-item-section>
                                        Inputs
                                    </q-item-section>
                                </NuxtLink>

                                <NuxtLink class="footer-item block" to="/application-ui/forms/radio-groups">
                                    <q-item-section>
                                        Radio groups
                                    </q-item-section>
                                </NuxtLink>

                                <NuxtLink class="footer-item block" to="/application-ui/forms/textareas">
                                    <q-item-section>
                                        Textareas
                                    </q-item-section>
                                </NuxtLink>

                                <NuxtLink class="footer-item block" to="/application-ui/forms/login-forms">
                                    <q-item-section>
                                        Login forms
                                    </q-item-section>
                                </NuxtLink>

                                <NuxtLink class="footer-item block" to="/application-ui/navigation/app-bars">
                                    <q-item-section>
                                        App bars
                                    </q-item-section>
                                </NuxtLink>

                                <NuxtLink class="footer-item block"
                                    to="/application-ui/navigation/command-palettes">
                                    <q-item-section>
                                        Command palettes
                                    </q-item-section>
                                </NuxtLink>

                                <NuxtLink class="footer-item block" to="/application-ui/navigation/pagination">
                                    <q-item-section>
                                        Pagination
                                    </q-item-section>
                                </NuxtLink>

                            </div>


                        </div>
                    </div>
                </div>
            </q-card-section>
        </q-card>
    </div>
</template>

<script setup lang="ts">

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