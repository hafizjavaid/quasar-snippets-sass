<!-- Data Table 03 -->
::ContentCard{title="Data Table 03" slug="data-table-03" }

#preview
::data-table-03
::

#codebase
::CodeView

```html
<template>
    <div class="q-mx-auto" style="max-width: 1400px; width: 100%;">
        <div class="flex justify-between items-center text-subtitle1 text-weight-bold">
            Users
            <q-btn no-caps class="text-none" color="primary" style="border-radius: 10px" unelevated label="Add user" />
        </div>

        <div class="text-body2 text-medium-emphasis q-mb-lg">
            A list of all users in your account. You can edit or delete them as needed.
        </div>
        <q-table :rows="rows2" :columns="columns2" row-key="id" hide-bottom>
            <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td key="name" :props="props">
                        <div class="flex items-center q-gutter-x-md ">
                            <q-avatar size="40px">
                                <img :src="`${props.row.img}`">
                            </q-avatar>
                            <div>
                                <div class="text-subtitle2 text-weight-bold">
                                    {{ props.row.name }}
                                </div>
                                <div class="text-subtitle2 text-weight-regular">
                                    {{ props.row.email }}
                                </div>
                            </div>
                        </div>
                    </q-td>
                    <q-td key="title" :props="props">
                        <div class="text-subtitle2 text-weight-bold">
                            {{ props.row.title }}
                        </div>
                        <div class="text-subtitle2 text-weight-regular">
                            {{ props.row.subtitle }}
                        </div>
                    </q-td>
                    <q-td key="status" :props="props">
                        <q-badge outline color="primary" :label="props.row.status" />
                    </q-td>
                    <q-td key="role" :props="props">
                        {{ props.row.role }}
                    </q-td>
                    <q-td key="actions" :props="props">
                        <q-btn flat color="primary" unelevated no-caps label="Edit"></q-btn>
                    </q-td>

                </q-tr>
            </template>

        </q-table>
    </div>
</template>

<script setup lang="ts">
const columns2 = [
    {
        label: 'Name',
        name: 'name',
        field: 'name',
        align: 'left',
        sortable: true,
        headerStyle: 'font-size: 14px; font-weight: 700;',
        headerClasses: 'bg-grey-3'
    },
    {
        label: 'Title',
        name: 'title',
        field: 'title',
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
        label: 'Role',
        name: 'role',
        field: 'role',
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
const rows2 = [
    {
        id: 1,
        img: 'https://randomuser.me/api/portraits/men/89.jpg',
        name: 'Tom Brown',
        email: 'tom@quasar.com',
        title: 'DevOps Engineer',
        subtitle: 'Infrastructure',
        role: 'Engineer',
        status: 'Inactive',
    },
    {
        id: 2,
        img: 'https://randomuser.me/api/portraits/men/90.jpg',
        name: 'John Leider',
        email: 'john@quasar.com',
        title: 'Front-end Developer',
        subtitle: 'Optimization',
        role: 'Admin',
        status: 'Active',
    },
    {
        id: 3,
        img: 'https://randomuser.me/api/portraits/women/74.jpg',
        name: 'Jane Doe',
        email: 'jane@quasar.com',
        title: 'UI/UX Designer',
        subtitle: 'User Experience',
        role: 'Designer',
        status: 'Active',
    },
    {
        id: 4,
        img: 'https://randomuser.me/api/portraits/women/75.jpg',
        name: 'Mike Smith',
        email: 'mike@quasar.com',
        title: 'Back-end Developer',
        subtitle: 'API Development',
        role: 'Developer',
        status: 'Active',
    },


];
</script>

<style scoped></style>
```

::