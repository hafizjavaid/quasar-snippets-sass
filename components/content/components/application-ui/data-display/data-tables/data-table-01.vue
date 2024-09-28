<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <div class="flex justify-between items-center text-subtitle1 text-weight-bold">
            Promotions
            <q-btn no-caps class="text-none" color="primary" icon="mdi-plus" style="border-radius: 10px" unelevated
                label="Create promotion" />
        </div>

        <div class="text-body2 text-medium-emphasis q-mb-lg">
            A list of all the promotions that are currently running.
        </div>

        <q-table :rows="rows" flat :columns="columns" row-key="id" hide-bottom>
            <template v-slot:body-cell-actions="props">
                <q-td :props="props">
                    <q-btn flat color="primary" unelevated no-caps label="Edit"></q-btn>
                </q-td>
            </template>

        </q-table>
    </div>

</template>

<script setup lang="ts">
const columns = [
    {
        label: 'Title',
        name: 'title',
        field: 'title',
        align: 'left',
        sortable: true,
        headerStyle: 'font-size: 14px; font-weight: 700;',

    },
    {
        label: 'Description',
        name: 'description',
        field: 'description',
        align: 'left',
        sortable: true,
        headerStyle: 'font-size: 14px; font-weight: 700;',
    },
    {
        label: 'Status',
        name: 'status',
        field: 'status',
        align: 'left',
        sortable: true,
        headerStyle: 'font-size: 14px; font-weight: 700;',
    },
    {
        label: 'Start',
        name: 'start',
        field: 'start',
        align: 'left',
        sortable: true,
        headerStyle: 'font-size: 14px; font-weight: 700;',
    },
    {
        label: 'End',
        name: 'end',
        field: 'end',
        align: 'left',
        sortable: true,
        headerStyle: 'font-size: 14px; font-weight: 700;',
    },
    {
        label: '',
        name: 'actions',
        field: 'actions',
        align: 'left',
        headerStyle: 'font-size: 14px; font-weight: 700;',
    },
];
const rows = [
    {
        id: 1,
        title: '20% off all products',
        description: 'Get 20% off all products in the store.',
        status: 'Active',
        start: '2021-08-01',
        end: '2021-08-31',
    },
    {
        id: 2,
        title: 'Free shipping on orders over $50',
        description: 'Get free shipping on all orders over $50.',
        status: 'Active',
        start: '2021-08-01',
        end: '2021-08-31',
    },
    {
        id: 3,
        title: 'Buy one get one free',
        description: 'Buy one product and get another one for free.',
        status: 'Inactive',
        start: '2021-08-01',
        end: '2021-08-31',
    },
    {
        id: 4,
        title: '10% off all products',
        description: 'Get 10% off all products in the store.',
        status: 'Active',
        start: '2021-08-01',
        end: '2021-08-31',
    },
    {
        id: 5,
        title: 'Buy one get one free',
        description: 'Buy one product and get another one for free.',
        status: 'Inactive',
        start: '2021-08-01',
        end: '2021-08-31',
    },
    {
        id: 6,
        title: '10% off all products',
        description: 'Get 10% off all products in the store.',
        status: 'Active',
        start: '2021-08-01',
        end: '2021-08-31',
    },
];
</script>

<style scoped></style>