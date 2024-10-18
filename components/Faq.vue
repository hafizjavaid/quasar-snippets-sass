<template>
    <section id="faq" class="">
        <Container>
            <div class="text-primary text-weight-medium text-body1">FAQS</div>
            <div class="text-h5 text-weight-bold q-mt-md">Frequently Asked questions
            </div>
            <div>Everything you need to know QuasarUI components</div>
            <div v-for="faqSection in faqData" :key="faqSection.id" class="q-my-xl">
                <div class="text-body1 text-weight-bold q-mb-sm"> {{ faqSection.title }} </div>
                <q-list style="border-radius: 12px" bordered>
                    <!-- FAQ 1 -->
                    <q-expansion-item style="border-radius: 12px" v-for="(faq, i) in faqSection.faqs" :key="i"
                        :label="faq.question" expand-separator>
                        <template v-slot:header="{ expanded }">
                            <q-item-section>
                                <div class="text-subtitle1 " :class="{ 'text-weight-medium': expanded }">
                                    {{ faq.question }}
                                </div>
                            </q-item-section>
                        </template>
                        <q-card>
                            <q-card-section>
                                {{ faq.answer }}
                            </q-card-section>
                        </q-card>
                    </q-expansion-item>
                </q-list>
            </div>
        </Container>
    </section>
</template>

<script setup lang="ts">
const faqData = [
    {
        id: 1,
        title: 'General',
        faqs: [
            {
                question: 'What is the all-access pass?',
                answer: 'Get lifetime access to all of the application UI, marketing, and ecommerce components, as well as all of our site templates for a single one-time purchase.'
            },
            {
                question: 'Is there a recurring fee?',
                answer: 'No, the all-access pass is a one-time purchase.'
            },
            {
                question: 'How do I access the QuasarUI components?',
                answer: 'You must be logged in with your github account in order to view the source code.'
            },
            {
                question: 'What is Quasar?',
                answer: 'Quasar is an Open Source UI Framework for Vue. It is enterprise-ready cross-platform VueJs framework. It provides developers with a set of reusable components that can be used to build out their applications. QuasarUI is built on top of Quasar and provides developers with a set of pre-built components that can be used to speed up the development process.'
            },

            {
                question: 'What is the difference between QuasarUI and Quasar?',
                answer: 'Quasar is an Open Source UI Framework for Vue. It is enterprise-ready cross-platform VueJs framework. It provides developers with a set of reusable components that can be used to build out their applications. QuasarUI is built on top of Quasar and provides developers with a set of pre-built components that can be used to speed up the development process.'

            },
            {
                question: 'What does the lock symbol mean?',
                answer: 'It means that there are NO free components in that category. Unlock the category to access the premium components.'
            }
        ]
    },
    {
        id: 2,
        title: 'Licensing',
        faqs: [
            {
                question: 'Do I have to purchase a license for each project I use these QuasarUI components in?',
                answer: 'No, you can use QuasarUI components in as many projects as you like and unlimited amount of times.'
            },
            {
                question: 'Can I use these QuasarUI componets in Commercial projects?',
                answer: 'Yes, you can use these componets in personal and commercial projects.'
            },
            {
                question: 'Can I modify the QuasarUI componets?',
                answer: 'Yes, you can modify the QuasarUI componets to fit your project needs.'
            },
            {
                question: 'Can I use these QuasarUI componets in an Open Source project?',
                answer: 'Yes! As long as you are building a project that is open source and not a direct competitor to QuasarUI componets.'
            },
            {
                question: 'Can I sell templates or themes that are built using these QuasarUI componets?',
                answer: 'No, you cannot sell templates or themes that are built using these QuasarUI componets. You can use them in your projects, but you cannot resell them as standalone products.'
            }
        ]
    },
    {
        id: 3,
        title: 'Compatibility',
        faqs: [
            {
                question: 'What versions of Quasar are these components compatible with?',
                answer: 'QuasarUI components are developed using the latest version of Quasar, which is currently v2.16.6.'
            },
            // {
            //     question: 'How do I install Vuetify?',
            //     answer: 'You can install Vuetify using npm or yarn. For more detailed information, please refer to the official documentation.'
            // },
            // {
            //     question: 'How do I get the dark mode QuasarUI componets?',
            //     answer: 'Each example has a toggle switch in the top right corner that allows you to switch between light and dark mode. When you use these QuasarUI componets in your project, they will automatically inherit the dark mode settings from your project theme.'
            // },
            {
                question: 'What browsers are supported?',
                answer: 'All evergreen browsers are supported, including Chrome, Firefox, Safari, and Edge. For more detailed information, please refer to the official documentation.'
            },
            {
                question: 'Do any of the packages come with Figma, Sketch, or Adobe XD files?',
                answer: 'No, the packages only include the source code for the components.'
            }
        ]
    },
    {
        id: 4,
        title: 'Support',
        faqs: [
            // {
            //     question: 'Do you offer technical support?',
            //     answer: 'No, I dont support that in this purchase. But you can request the components / templates, and after review I can decide weather its possible or not'
            // },
            {
                question: 'What is your refund policy?',
                answer: 'If you are unhappy with your purchase, please email hafizjaidi786@gmail.com within 10 days of your purchase for a full refund, no questions asked.'
            }
        ]
    }
];

</script>

<style scoped></style>