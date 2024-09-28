<!-- Stacked List 03 -->
::ContentCard{title="Stacked List 03" slug="stacked-list-03" }

#preview
::stacked-list-03
::

#codebase
::CodeView

```html
<template>
    <div style="max-width: 600px; width: 100%;" class="q-mx-auto">
        <q-list style="border-radius: 12px" bordered>
            <q-item-label class="text-weight-bold text-grey-10 text-h6 q-md-none" header>Recent
                Transactions</q-item-label>
            <q-separator />
            <template v-for="(transaction, i) in transactions" :key="transaction.id">
                <q-item class="q-my-none" clickable v-ripple>
                    <q-item-section>
                        <q-item-label>{{ transaction.amount }}</q-item-label>
                        <q-item-label caption lines="1">{{ transaction.date }}</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <div class="flex q-gutter-x-xs items-center">
                            <q-chip v-if="transaction.status === 'Pending'" color="yellow">{{ transaction.status
                                }}</q-chip>
                            <q-chip v-if="transaction.status === 'Processed'" color="grey-5">{{ transaction.status
                                }}</q-chip>
                            <q-icon :name="transaction.iconRight" color="grey-10" />
                        </div>
                    </q-item-section>
                </q-item>
                <q-separator v-if="i !== transactions.length - 1" />
            </template>
            <q-separator />
            <q-btn color="grey-8" class="full-width full-height text-left" flat unelevated label="View all transactions"
                no-caps />
        </q-list>
    </div>
</template>

<script setup lang="ts">
const transactions = [
    {
        id: 1,
        amount: '$2128.46',
        date: 'May 26, 2022',
        icon: 'mdi-delete',
        status: 'Pending',
        iconRight: 'mdi-chevron-right',
    },
    {
        id: 2,
        amount: '$212.46',
        date: 'May 26, 2022',
        letter: 'M',
        icon: 'mdi-navigation',
        status: 'Pending',
        iconRight: 'mdi-chevron-right',
    },
    {
        id: 3,
        amount: '$3128.46',
        date: 'May 26, 2022',
        letter: 'E',
        icon: 'mdi-palette',
        status: 'Processed',
        iconRight: 'mdi-chevron-right',
    },
    {
        id: 4,
        amount: '$2128.46',
        date: 'May 26, 2022',
        letter: 'S',
        icon: 'mdi-shield',
        status: 'Processed',
        iconRight: 'mdi-chevron-right',
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