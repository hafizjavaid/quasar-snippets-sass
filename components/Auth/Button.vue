<template>
    <q-btn :disable="isLoading" @click="open" color="grey-2" style="border-radius: 8px" text-color="grey-9" unelevated
        no-caps class="full-width q-py-sm">
        <Icon class="q-mr-sm" :name="icon" style="width: 18px; height: 18px;" />
        {{ label }}
    </q-btn>
</template>

<script setup>
import { ref } from 'vue';

const isLoading = ref(false);

const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
});

function open() {
    isLoading.value = true;
    window.location.href = props.path;
}
</script>