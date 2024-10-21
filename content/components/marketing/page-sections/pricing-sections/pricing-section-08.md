<!-- Pricing Section 08 -->
::ContentCard{title="Pricing Section 08" slug="pricing-section-08"}

#preview
::pricing-section-08
::

#codebase
::CodeView

```html
<template>
    <div class="row q-col-gutter-md">
        <div v-for="(price, i) in prices" :key="i" class="col-12 col-sm-6 col-md-3">
            <q-card class="q-pa-md full-height flex column" flat bordered style="border-radius: 8px;">
                <q-item style="min-height: unset" class="flex items-center q-gutter-x-sm q-px-none text-body2">
                    <q-avatar size="36px" color="grey-2">
                        <q-icon size="16px" color="primary" :name="price.icon" />
                    </q-avatar>
                    <q-item-section style="flex: 1">
                        <strong>{{ price.title }}</strong>
                    </q-item-section>
                    <q-item-section v-if="price.new" side>
                        <q-badge color="blue-2" text-color="primary">New</q-badge>
                    </q-item-section>
                </q-item>
                <q-card-section style="flex: 1" class="q-px-none text-grey-8">
                    {{ price.text }}
                </q-card-section>
                <div class="text-grey-8">Starting</div>
                <div class="text-h6 text-grey-8">
                    <span class="text-green">${{ price.price }}</span>
                    <strike class="text-disabled q-ml-xs">${{ price.compare }}</strike>
                    <span class="text-body2">/user/month</span>
                </div>
                <div class="flex justify-end">
                    <q-btn label="Get Started" color="primary" flat no-caps unelevated></q-btn>
                </div>
            </q-card>
        </div>
    </div>
</template>

<script setup lang="ts">
const prices = [
    {
        title: 'Business',
        text: 'Business provides a suite of generative AI features to help you create high-quality content, grow your audience, and drive engagement.',
        price: 14,
        compare: 24,
        icon: 'mdi-check',
    },
    {
        title: 'Enterprise',
        text: 'Enterprise provides the best of AI for your workspace, with advanced collaboration features and controls to help you manage your team.',
        price: 30,
        compare: 36,
        icon: 'mdi-wrench',
    },
    {
        title: 'AI Messaging',
        text: 'AI Messaging provides organizations with the tools to create and manage AI-powered chatbots for customer service and support.',
        price: 10,
        compare: 12,
        new: true,
        icon: 'mdi-chat',
    },
    {
        title: 'AI Security',
        text: 'AI Security provides organizations AI-powered capabilities to protect their data and systems from cyber threats and attacks.',
        price: 10,
        compare: 12,
        new: true,
        icon: 'mdi-shield',
    },
]
</script>

<style scoped></style>
```

::