<template>
    <NuxtLink class="text-grey-6" style="text-decoration: none;" :to="props.card.url">
        <q-list>
            <q-item style="border-radius: 12px;" class="q-pa-none" clickable>
                <template #default>
                    <q-card style="border-radius: 12px;" class="bg-transparent q-pa-md full-width" bordered flat>
                        <q-card bordered flat class="bg-grey-3 q-pa-none full-width"
                            style="height: 140px; border-radius: 12px;">
                            <!-- Image -->
                            <q-img :src="props.card.imageUrl" loading="lazy" spinner-color="white" height="150px"
                                style="max-width: 100%; border-radius: 12px;">
                                <!-- Loading -->
                                <template v-slot:loading>
                                    <div class="text-subtitle1">
                                        Loading...
                                    </div>
                                </template>
                                <!-- Error -->
                                <template v-slot:error>
                                    <div class="absolute-full flex flex-center bg-grey-3">
                                        <q-icon color="grey-5" size="56px" style="width: 56px; height: 56px"
                                            name="mdi-image"></q-icon>
                                    </div>
                                </template>
                            </q-img>
                            <div v-if="props.card.isLocked" class="absolute" style="top: 4px; right: 4px;">
                                <q-avatar size="30px" color="white">
                                    <q-icon color="dark" size="20px" name="mdi-lock-outline"></q-icon>
                                </q-avatar>
                            </div>
                        </q-card>
                        <div class="q-px-none q-pb-none q-mt-md flex items-start justify-between">
                            <div>
                                <div class="text-subtitle1 text-grey-10 text-weight-medium ">
                                    {{ props.card.name }}
                                </div>
                                <div class="text-body2 text-grey-7  text-weight-normal">
                                    {{ props.card.components }}
                                </div>
                            </div>
                            <!-- <q-chip dense v-if="props.card.isPublished != undefined && !props.card.isPublished"   text-color="negative" color="red-1">
                               <template #default>
                                <div  style="margin-bottom: 2px; font-size: 11px;" >
                                    Coming soon
                                </div>
                               </template>
                            </q-chip> -->
                            <!-- <q-chip dense v-if="props.card.isNew"   text-color="primary" color="green-1">
                               <template #default>
                                <div  style="margin-bottom: 2px; font-size: 11px;" >
                                    2 New
                                </div>
                               </template>
                            </q-chip> -->
                        </div>
                    </q-card>
                </template>
            </q-item>
        </q-list>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { Subcategory } from "~/types";
interface CardProps {
    card: Subcategory
}
const props = defineProps<CardProps>();
</script>

<style scoped></style>