<template>
    <q-footer bordered class="bg-grey-1 q-py-sm">
        <Container>
            <div class="flex justify-between items-center">
                <div class="flex q-gutter-x-sm">
                    <NuxtLink class="social-link" to="https://github.com/hafizjavaid" target="_blank">
                        <Icon size="30px" class="" name="mdi:github" style="width: 24px; height: 24px;" />
                        <q-tooltip>
                            <strong>Github</strong>
                        </q-tooltip>
                    </NuxtLink>
                    <NuxtLink class="social-link" to="https://github.com/CodeWithHafiz" target="_blank">
                        <Icon size="30px" class="" name="mdi:twitter" style="width: 24px; height: 24px;" />
                        <q-tooltip>
                            <strong>X (Twiiter)</strong>
                        </q-tooltip>
                    </NuxtLink>
                    <NuxtLink class="social-link" to="mailto:hafizjaidi786@gmail.com" target="_blank">
                        <Icon size="30px" class="" name="tabler:mail" style="width: 24px; height: 24px;" />
                        <q-tooltip>
                            <strong>Email</strong>
                        </q-tooltip>
                    </NuxtLink>
                </div>
                <div class="text-subtitle2 text-grey-9">
                    © 2024 QuasarUI
                </div>
            </div>
        </Container>
    </q-footer>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.social-link {
    color: $grey-5;
    transition: .2s;

    &:hover {
        color: $grey-10;
    }
}
</style>