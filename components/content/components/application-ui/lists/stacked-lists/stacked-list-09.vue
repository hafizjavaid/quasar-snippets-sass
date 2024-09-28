<template>
    <div style="max-width: 600px; width: 100%;" class="q-mx-auto">
        <q-list>
            <template v-for="(contact, i) in contacts" :key="contact.id">
                <q-item class="q-my-none q-py-lg">
                    <q-item-section>
                        <div class="flex q-gutter-x-sm q-mb-sm items-center">
                            <q-avatar size="30px" color="grey-3" text-color="white" icon="" />
                            <q-item-label class="text-weight-bold">{{ contact.name }}</q-item-label>
                        </div>
                        <q-item-label caption lines="1">{{ contact.subtitle }}</q-item-label>
                    </q-item-section>
                    <q-item-section side top>2h</q-item-section>
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