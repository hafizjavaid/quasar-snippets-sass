<template>
  <div class="q-pa-xl">
    <div @click="groupByDir(applicationUI)">groupedData</div>
    <template v-if="show">
      <!-- Application UI -->
      <div v-for="mainCategory in groupedContent" :key="mainCategory.key" class="q-mb-xl">
        <template
          v-for="(mainTitle, index) in mainCategory.children.filter((c) => '_path' in c)"
          :key="index"
        >
          <div class="flex items-center q-gutter-x-sm text-grey-9">
            <q-icon :name="mainTitle.icon" size="24px"></q-icon>
            <div class="text-h5">{{ mainTitle.title }}</div>
          </div>
          <p>
            {{ mainTitle.description }}
          </p>
        </template>
        <q-card
          v-for="(subCategory, subCategoryIndex) in mainCategory.children.filter(
            (c) => !('_path' in c)
          )"
          :key="subCategoryIndex"
          class="q-pa-md q-mb-lg"
          bordered
          flat
          style="border-radius: 8px"
        >
          <div
            v-for="(lastCategory, lastCategoryIndex) in subCategory[
              subCategory.key
            ].children.filter((c) => '_path' in c)"
            :key="lastCategoryIndex"
            class="flex items-center q-gutter-x-sm text-grey-9"
          >
            <q-icon :name="lastCategory.icon" size="24px"></q-icon>
            <div class="text-body1 text-weight-bold">{{ lastCategory.title }}</div>
          </div>
          <div class="row q-col-gutter-md q-mt-md">
            <div
              v-for="(lastCategory2, lastCategoryIndex2) in subCategory[
                subCategory.key
              ].children.filter((c) => !('_path' in c))"
              :key="lastCategoryIndex2"
              class="col-sm-6 col-md-4 col-lg-3 col-12"
            >
              <q-card class="q-pa-sm" bordered flat style="border-radius: 8px">
                <img src="https://cdn.quasar.dev/img/mountains.jpg" />
                <q-card-section class="q-px-none q-pb-none">
                  <div class="text-body1">
                    {{
                      lastCategory2[lastCategory2.key].children.filter(
                        (c) => '_path' in c
                      )[0].title
                    }}
                  </div>
                  <div class="text-subtitle2 text-grey-7 text-weight-normal">
                    {{
                      lastCategory2[lastCategory2.key].children.filter(
                        (c) => !('_path' in c)
                      ).length
                    }}
                    snippets
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-card>
       
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
// const paths = ['application-ui', 'marketing', 'ecommerce'];
const applicationUI = await queryContent('/').find();
// const marketing = await queryContent('/marketing').only(['_path', '_dir']).find();

const show = ref(false);
const groupedContent = ref<any>([]);

// Function to group the array by '_dir' key
function groupByDir(array) {
  const group = {};

  array.forEach((item) => {
    const paths = item._path.split('/').filter(Boolean);
    let current = group;

    paths.forEach((path, index) => {
      if (!current[path]) {
        current[path] = {
          key: path,
          children: [],
        };
      }

      if (index === paths.length - 1) {
        current[path].children.push(item);
      } else {
        if (!current[path].children.find((c) => c.key === paths[index + 1])) {
          current[path].children.push({
            key: paths[index + 1],
            children: [],
          });
        }

        current = current[path].children.find((c) => c.key === paths[index + 1]);
      }
    });
  });

  const convertToArray = (obj) =>
    Object.values(obj).map((value) => {
      if (value.children.length === 1 && value.children[0].key === value.key) {
        value.children = value.children[0].children;
      }
      value.children = value.children.map((child) => {
        if (child.children) {
          return convertToArray({ [child.key]: child })[0];
        }
        return child;
      });
      return value;
    });

  const a = convertToArray(group);
  console.log(a);
  show.value = true;
  groupedContent.value = a;
  // return a;
}

// const groupedData = () => {
//   const d = groupByDir(applicationUI);
//   console.log(d);
// };
</script>
