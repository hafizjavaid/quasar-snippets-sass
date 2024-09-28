<template>
    <div style="max-width: 600px; width: 100%;" class="q-mx-auto">
        <q-list>
            <template v-for="(contact, i) in contacts" :key="contact.id">
                <q-item class="q-my-none" clickable v-ripple>
                    <q-item-section>
                        <div class="flex items-center">
                            <q-item-label class="text-weight-bold">{{ contact.name }}</q-item-label>
                            <q-chip v-if="contact.status === 'Complete'" color="green-2" size="10px"
                                text-color="green-8">Complete</q-chip>
                            <q-chip v-if="contact.status === 'Progress'" color="grey-3" size="10px"
                                text-color="grey-8">In progress</q-chip>
                            <q-chip v-if="contact.status === 'Archived'" color="orange-2" size="10px"
                                text-color="orange-8">Archived</q-chip>
                        </div>
                        <q-item-label caption lines="1">{{ contact.subtitle }}</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <div class="flex q-gutter-x-sm items-center">
                            <q-btn color="grey-4" unelevated :padding="'4px 12px'" no-caps outline>
                                <template #default>
                                    <div class="text-dark">Profile view</div>
                                    <q-icon class="q-ml-sm" size="16px" name="mdi-open-in-new" color="dark"></q-icon>
                                </template>
                            </q-btn>
                            <q-btn flat round size="12px" icon="mdi-dots-vertical">
                                <q-menu>
                                    <q-list style="min-width: 100px">
                                        <q-item clickable v-close-popup>
                                            <q-item-section>Edit Project</q-item-section>
                                            <q-item-section side>
                                                <q-icon size="20px" name="mdi-pencil-circle-outline" color="dark" />
                                            </q-item-section>
                                        </q-item>
                                        <q-item clickable v-close-popup>
                                            <q-item-section>Delete Project</q-item-section>
                                            <q-item-section side>
                                                <q-icon size="20px" name="mdi-trash-can-outline" color="dark" />
                                            </q-item-section>
                                        </q-item>
                                        <q-separator />
                                    </q-list>
                                </q-menu>
                            </q-btn>
                        </div>
                    </q-item-section>
                </q-item>
                <q-separator v-if="i !== contacts.length - 1" />
            </template>
        </q-list>
    </div>
</template>
<script setup lang="ts">
const contacts = [
    {
        id: 1,
        name: 'Ruddy Jedrzej',
        email: 'rjedrzej0@discuz.net',
        letter: 'R',
        icon: 'mdi-delete',
        iconRight: 'mdi-menu-right',
        subtitle: 'Due Date: May 3rd, 2023 • Created by Sarah Connors',
        status: 'Complete',
        status1: 'Inspect',
        hashTag: '#introductions',
        emoji: '🎉',
    },
    {
        id: 2,
        name: 'Mallorie Alessandrini',
        email: 'malessandrini1@marketwatch.com',
        letter: 'M',
        icon: 'mdi-navigation',
        iconRight: 'mdi-menu-right',
        isOnline: true,
        subtitle: 'Due Date: May 3rd, 2024 • Created by Sarah Connors',
        status: 'Progress',
        status1: 'Production',
        hashTag: '#general-discussion',
        emoji: '💬',
    },
    {
        id: 3,
        name: 'Elisabetta Wicklen',
        email: 'ewicklen2@microsoft.com',
        letter: 'E',
        icon: 'mdi-palette',
        iconRight: 'mdi-menu-right',
        subtitle: 'Due Date: May 3rd, 2024 • Created by Sarah Connors',
        status: 'Complete',
        status1: 'Building',
        hashTag: '#subscriber-help',
        emoji: '🆘',
    },
    {
        id: 4,
        name: 'Seka Fawdrey',
        email: 'sfawdrey3@wired.com',
        letter: 'S',
        icon: 'mdi-shield',
        iconRight: 'mdi-open-in-new',
        isOnline: true,
        subtitle: 'Due Date: May 3rd, 2024 • Created by Sarah Connors',
        status: 'Archived',
        status1: 'Failed',
        hashTag: '#Quasar-3-help',
        emoji: '3️⃣',
    },
];

</script>

<style>
.q-item__section--avatar {
    min-width: auto;
}
</style>