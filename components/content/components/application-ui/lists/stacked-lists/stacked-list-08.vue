<template>
    <div style="max-width: 600px; width: 100%;" class="q-mx-auto">
        <q-list>
            <template v-for="(contact, i) in contacts" :key="contact.id">
                <q-item class="q-my-none" clickable v-ripple>
                    <q-item-section>
                        <div class="flex q-gutter-x-sm q-mb-sm items-center">
                            <q-badge rounded v-if="contact.status === 'Complete'" color="green-4" />
                            <q-badge rounded v-if="contact.status === 'Progress'" color="grey-5" />
                            <q-badge rounded v-if="contact.status === 'Archived'" color="orange-4" />
                            <q-item-label class="text-weight-bold">{{ contact.name }}</q-item-label>
                        </div>
                        <q-item-label caption lines="1">{{ contact.subtitle }}</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <div class="flex q-gutter-x-sm items-center">
                            <q-chip v-if="contact.status1 === 'Inspect'" color="grey-3" size="12px"
                                icon-right="mdi-magnify" text-color="grey-8">Inspect</q-chip>
                            <q-chip v-if="contact.status1 === 'Production'" color="blue-2" size="12px"
                                icon-right="mdi-lightbulb-on-outline" text-color="blue">Production</q-chip>
                            <q-chip v-if="contact.status1 === 'Building'" color="orange-2" size="12px"
                                icon-right="mdi-wrench-outline" text-color="orange-8">Building</q-chip>
                            <q-chip v-if="contact.status1 === 'Failed'" color="red-2" size="12px"
                                icon-right="mdi-alert-circle-outline" text-color="red-9">Failed</q-chip>
                            <q-icon size="20px" name="mdi-chevron-right" color="grey-10" />
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