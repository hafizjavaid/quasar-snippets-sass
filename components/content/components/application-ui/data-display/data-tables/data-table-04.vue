<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <div class="flex justify-between items-center text-subtitle1 text-weight-bold">
            Users
            <q-btn no-caps class="text-none" color="primary" style="border-radius: 10px" unelevated label="Add user" />
        </div>

        <div class="text-body2 text-medium-emphasis q-mb-lg">
            A list of all users in your account. You can edit or delete them as needed.
        </div>
        <!-- @vue-expect-error -->
        <q-table :rows="rows3" :columns="columns3" row-key="id" hide-bottom>
            <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td key="domain" :props="props">
                        <div class="text-caption text-weight-regular">
                            {{ props.row.domain }}
                        </div>
                    </q-td>
                    <q-td key="status" :props="props">
                        <q-badge outline color="primary" :label="props.row.status" />
                    </q-td>
                    <q-td key="autoRenew" :props="props">
                        <q-toggle v-model="props.row.autoRenew" checked-icon="check" color="green"
                            unchecked-icon="clear" />
                    </q-td>

                    <q-td key="expires" :props="props">
                        {{ props.row.expires }}
                    </q-td>
                    <q-td key="actions" :props="props">
                        <q-btn flat color="primary" unelevated no-caps label="Manage"></q-btn>
                    </q-td>

                </q-tr>
            </template>

        </q-table>
    </div>
</template>

<script setup lang="ts">
const columns3 = [
    {
        label: 'Domain',
        name: 'domain',
        field: 'domain',
        align: 'left',
        sortable: true,
        headerStyle: 'font-size: 14px; font-weight: 700;',
        headerClasses: 'bg-grey-3'
    },
    {
        label: 'Status',
        name: 'status',
        field: 'status',
        align: 'left',
        sortable: true,
        headerStyle: 'font-size: 14px; font-weight: 700;',
        headerClasses: 'bg-grey-3'
    },

    {
        label: 'Auto-Renew',
        name: 'autoRenew',
        field: 'autoRenew',
        align: 'left',
        sortable: true,
        headerStyle: 'font-size: 14px; font-weight: 700;',
        headerClasses: 'bg-grey-3'
    },
    {
        label: 'Expires',
        name: 'expires',
        field: 'expires',
        align: 'left',
        sortable: true,
        headerStyle: 'font-size: 14px; font-weight: 700;',
        headerClasses: 'bg-grey-3'
    },


    {
        label: '',
        name: 'actions',
        field: 'actions',
        align: 'left',
        headerStyle: 'font-size: 14px; font-weight: 700;',
        headerClasses: 'bg-grey-3'
    },
];
const rows3 = [
    {
        id: 1,
        domain: 'vbin.io',
        status: 'Inactive',
        autoRenew: false,
        expires: 'Aug 04, 2025',


    },
    {
        id: 2,
        domain: 'quasar.io',
        autoRenew: true,
        expires: 'Aug 04, 2025',
        status: 'Active',
    },
    {
        id: 3,
        domain: 'quasar.net',
        autoRenew: false,
        expires: 'Jul 14, 2022',
        status: 'Active',
    },
    {
        id: 4,
        domain: 'quasar.org',
        autoRenew: false,
        expires: 'Jul 14, 2022',
        status: 'Active',
    },
    {
        id: 5,
        domain: 'quasar.io',
        autoRenew: false,
        expires: 'Jul 14, 2022',
        status: 'Pending Transfer',
    },


];
</script>

<style scoped></style>