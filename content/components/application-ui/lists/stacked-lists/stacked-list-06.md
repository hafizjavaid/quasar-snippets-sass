<!-- Stacked List 06 -->
::ContentCard{title="Stacked List 06" slug="stacked-list-06" }

#preview
::stacked-list-06
::

#codebase
::CodeView

```html
<template>
    <div style="max-width: 600px; width: 100%;" class="q-mx-auto">
        <q-list>
            <template v-for="(contact, i) in contacts" :key="contact.id">
                <q-item class="q-my-none" clickable v-ripple>
                    <q-item-section avatar>
                        <q-avatar size="50px" color="grey-3" text-color="white" icon="" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>{{ contact.name }}</q-item-label>
                        <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <div class="flex q-gutter-x-xs items-center">
                             <div>
                                <q-item-label class="text-grey-10">Founder / CEO</q-item-label>
                                <q-item-label v-if="!contact.isOnline" caption>Last seen 4h ago</q-item-label>
                                <div v-else class="flex q-gutter-x-sm items-center">
                                    <q-badge rounded color="green" />
                                    <q-item-label>Online</q-item-label>
                                </div>
                            </div>
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
```

::