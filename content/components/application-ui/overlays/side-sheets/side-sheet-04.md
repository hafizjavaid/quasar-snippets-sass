<!-- Stacked List 07 -->
::ContentCard{title="Side Sheet 04" slug="side-sheet-04" }

#preview
::side-sheet-04
::

#codebase
::CodeView

```html
<template>
    <q-dialog full-height position="right" backdrop-filter="blur(10px)" v-model="showSideSheet">
       <q-card class="full-height" style="width: 350px">
        <q-card-section class="bg-primary text-white full-width q-py-md">
          <div class="flex justify-between items-center">
            <div class="text-h6">New Product</div>
            <q-btn flat dense round icon="mdi-close" v-close-popup />
          </div>
          <p class="text-no-wrap q-mb-none" style="text-overflow: ellipsis; max-width: 90%; overflow: hidden">
            Lorem, ipsum dolor sit amet consectetur adipisicing
          </p>
        </q-card-section>

        <q-separator></q-separator>
        <q-card-section style="max-height: calc(100dvh - 155px)" class="scroll full-width">
          <q-input outlined class="q-mb-md full-width" dense color="grey-10" v-model="deactivateText"
            placeholder="Name" />
          <q-input outlined class="q-mb-md full-width" dense color="grey-10" v-model="deactivateText"
            placeholder="Description" type="textarea" />
          <q-select class="q-mb-md" dense outlined v-model="modelMultiple" color="grey-10" multiple :options="options"
            use-chips placeholder="Tags" />
          <q-select class="q-mb-md" v-model="teamMembers" :options="members" stack-label multiple dense outlined
            color="grey-10">
            <template v-slot:option="scope">
              <q-item :class="{
                'bg-grey-4': teamMembers.find((m) => m.value === scope.opt.value),
              }" v-bind="scope.itemProps">
                <q-avatar size="30px">
                  <img :src="scope.opt.img" />
                </q-avatar>
                <q-item-section class="q-ml-sm">
                  <q-item-label>{{ scope.opt.label }}</q-item-label>
                  <q-item-label caption>{{ scope.opt.subtitle }}</q-item-label>
                </q-item-section>
              </q-item>
            </template>
            <template v-slot:selected>
              <template v-for="member in teamMembers" :key="member.value">
                <q-avatar class="q-ml-xs" size="30px">
                  <img :src="member.img" />
                </q-avatar>
              </template>
            </template>
          </q-select>
          <q-option-group class="q-mb-md" v-model="group" type="radio" :options="options1">
            <template v-slot:label="opt">
              <div class="row items-center q-mb-md">
                <div class="text-subtitle2 text-weight-bold">{{ opt.label }}</div>
                <div class="">{{ opt.subtitle }}</div>
              </div>
            </template>
          </q-option-group>
          <q-separator></q-separator>

          <q-btn class="q-mt-md" flat icon="mdi-link-variant" padding="4px 10px" unelevated color="primary" no-caps
            label="Copy link" />

          <q-btn class="q-mt-xs q-mb-xl" flat icon="mdi-help-circle" padding="4px 10px" unelevated color="grey-8"
            no-caps label="Learn more about sharing" />
        </q-card-section>
        <q-separator></q-separator>
        <q-card-actions class="q-py-md" align="right">
          <q-btn color="grey-4" style="border-radius: 12px" unelevated no-caps outline>
            <template #default>
              <div class="text-dark">Cancel</div>
            </template>
          </q-btn>
          <q-btn unelevated style="border-radius: 12px" color="primary" no-caps label="Save" />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const showSideSheet = ref(false);

const modelMultiple = ref(['Design', 'Development', 'Marketing']);
const options = ['Design', 'Development', 'Marketing', 'SEO', 'Management'];
const options1 = [
  {
    value: 'op1',
    label: 'Custom Access',
    subtitle: 'Choose who can see this projects',
  },
  {
    value: 'op2',
    label: 'Public Access',
    subtitle: 'Everyone with the link will see this projects',
  },

  {
    value: 'op3',
    label: 'Private Access',
    subtitle: 'Only team members see this projects',
  },
];
const group = ref(['op1']);
const teamMembers = ref([
  {
    value: 'op1',
    img: 'https://cdn.quasar.dev/img/avatar1.jpg',
    label: 'Private Access',
    subtitle: 'Only team members see this projects',
  },
  {
    value: 'op2',
    img: 'https://cdn.quasar.dev/img/avatar2.jpg',
    label: 'Private Access',
    subtitle: 'Only team members see this projects',
  },
  {
    value: 'op3',
    img: 'https://cdn.quasar.dev/img/avatar3.jpg',
    label: 'Private Access',
    subtitle: 'Only team members see this projects',
  },
  {
    value: 'op4',
    img: 'https://cdn.quasar.dev/img/avatar4.jpg',
    label: 'Private Access',
    subtitle: 'Only team members see this projects',
  },
]);
const members = ref([
  {
    value: 'op1',
    img: 'https://cdn.quasar.dev/img/avatar1.jpg',
    label: 'Private Access',
    subtitle: 'Only team members see this projects',
  },
  {
    value: 'op2',
    img: 'https://cdn.quasar.dev/img/avatar2.jpg',
    label: 'Private Access',
    subtitle: 'Only team members see this projects',
  },
  {
    value: 'op3',
    img: 'https://cdn.quasar.dev/img/avatar3.jpg',
    label: 'Private Access',
    subtitle: 'Only team members see this projects',
  },
  {
    value: 'op4',
    img: 'https://cdn.quasar.dev/img/avatar4.jpg',
    label: 'Private Access',
    subtitle: 'Only team members see this projects',
  },
  {
    value: 'op5',
    img: 'https://cdn.quasar.dev/img/avatar5.jpg',
    label: 'Private Access',
    subtitle: 'Only team members see this projects',
  },
  {
    value: 'op6',
    img: 'https://cdn.quasar.dev/img/avatar6.jpg',
    label: 'Private Access',
    subtitle: 'Only team members see this projects',
  },
]);
</script>

<style scoped></style>

```

::