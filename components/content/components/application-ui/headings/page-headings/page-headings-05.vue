<template>
    <div style="max-width: 1400px; width: 100%;" class="q-mx-auto">
        <div class="flex items-center">
            <div class="flex items-center q-gutter-x-sm">
                <div class="text-h4 text-weight-bold">Dashboard</div>
                <q-btn color="grey-9" class="" no-caps rounded unelevated>
                    Personal Plan
                    <q-menu>
                        <div class="q-pa-md" style="max-width: 200px">
                            You are limited to 1 members per project on the Starter plan.
                            <span class="text-strike text-weight-bold">Upgrade</span>
                            for additional members.
                        </div>
                    </q-menu>
                </q-btn>
            </div>
            <q-space></q-space>

            <div class="flex items-center q-gutter-md">
                <q-avatar color="blue-1" font-size="14px" text-color="grey-10">HJ</q-avatar>
                <q-btn color="grey-4" style="border-radius: 8px" unelevated padding="10px 20px" no-caps outline>
                    <template #default>
                        <q-icon name="mdi-account-plus-outline" color="dark" class=""></q-icon>
                        <div class="text-dark q-ml-sm">Invite</div>
                    </template>
                </q-btn>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>