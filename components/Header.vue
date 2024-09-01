<template>
  <q-header reveal bordered class="bg-white text-grey-8 q-px-xl">
    <div class="flex justify-between">
      <div class="flex no-wrap items-center cursor-pointer" @click="navigateTo('/')">
        <q-btn dense flat round :icon="leftDrawerOpen ? 'arrow_circle_left' : 'arrow_circle_right'"
          @click="toggleLeftDrawer" class="lt-md" />
        <q-img fit="contain" style="height: 60px; width: 120px" src="/logo.svg" />
      </div>
      <div class="flex no-wrap q-gutter-x-xs items-center">
        <NuxtLink to="/components">
          <q-btn flat padding="4px 10px" dense text-color="grey-9" color="grey-3" no-caps unelevated
            label="Components"></q-btn>
        </NuxtLink>
        <NuxtLink to="/components">
          <q-btn flat padding="4px 10px" dense text-color="grey-9" color="grey-3" no-caps unelevated
            label="Changelog"></q-btn>
        </NuxtLink>
        <NuxtLink to="/components">
          <q-btn flat padding="4px 10px" dense text-color="grey-9" color="grey-3" no-caps unelevated
            label="Templates"></q-btn>
        </NuxtLink>
        <!-- <q-icon name="mdi-magnify" size="24px" @click="toggleTheme" class="cursor-pointer" /> -->
        <q-separator color="gray-900" class="q-mx-md" vertical inset />


        <!-- <q-icon
          :name="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
          size="24px"
          @click="toggleTheme"
          class="cursor-pointer"
        /> -->
        <!-- v-if="!user" -->
        <q-btn text-color="grey-9" flat padding="4px 10px" dense color="gray-900" no-caps unelevated
          label="Sign in"></q-btn>
        <q-btn padding="4px 10px" unelevated no-caps label="Get all-access" dense color="dark"
          style="border-radius: 8px;"></q-btn>

        <!-- <q-btn color="primary" no-caps unelevated label="Login" icon-right="mdi-logout">
          <q-menu flat unelevated>
            <q-card style="width: 260px" bordered flat>
              <q-card-section style="height: 100px" class="bg-grey-2 bg-dark-grey-9"></q-card-section>
              <q-card-section class="q-px-lg q-pb-md">
                <div class="text-center">
                  <q-avatar color="grey-9" class="q-mb-sm" style="margin-top: -60px" size="72px">
                    <q-img style="width: 40px" src="https://cdn.quasar.dev/logo-v2/svg/logo-dark.svg" alt="" />
                  </q-avatar>
                  <div class="text-weight text-h6">Guest</div>
                </div>
              </q-card-section>
              <q-separator />
              <q-card-section>
                <a href="/login/github">
                  <q-btn align="left" class="full-width" rounded unelevated no-caps color="dark" icon="mdi-github"
                    label="Login with github">

                  </q-btn>
                </a>
              </q-card-section>
            </q-card>
          </q-menu>
        </q-btn> -->
        <!-- <q-btn v-else round>
          <q-avatar size="42px">
            <img
              :src="user.image ? user.image : 'https://cdn.quasar.dev/img/avatar2.jpg'"
            />
          </q-avatar>
          <q-menu flat unelevated>
            <q-card style="width: 260px" bordered flat>
              <q-card-section
                style="height: 100px"
                class="bg-grey-2 bg-dark-grey-9"
              ></q-card-section>
              <q-card-section class="q-px-lg q-pb-md">
                <div class="text-center">
                  <q-avatar
                    color="grey-9"
                    class="q-mb-sm"
                    style="margin-top: -60px"
                    size="52px"
                  >
                    <q-img
                      style="width: 32px"
                      src="https://cdn.quasar.dev/logo-v2/svg/logo-dark.svg"
                      alt=""
                    />
                  </q-avatar>
                  <div class="text-h6">{{ user.username }}</div>
                </div>
              </q-card-section>
              <q-separator />
              <q-card-section class="q-pa-sm">
                <q-list>
                  <q-item clickable v-ripple>
                    <q-item-section>
                      <div class="flex items-center q-gutter-x-sm">
                        <q-icon size="16px" name="mdi-view-dashboard-outline"></q-icon>
                        <div class="text-subtitle1 text-grey-10">Dashboard</div>
                      </div>
                    </q-item-section>
                  </q-item>
                  <q-item @click="logout" clickable v-ripple>
                    <q-item-section>
                      <div class="flex items-center q-gutter-x-sm">
                        <q-icon size="16px" name="mdi-logout"></q-icon>
                        <div class="text-subtitle1 text-grey-10">Logout</div>
                      </div>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </q-menu>
        </q-btn> -->
      </div>
    </div>
  </q-header>

  <q-drawer v-model="leftDrawerOpen" side="left" bordered> Test </q-drawer>
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar';
const user = useUser();
const leftDrawerOpen = ref(false);
const $q = useQuasar();
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

onMounted(async () => {
  // if ($q.cookies.get('isDark')) {
  //   $q.dark.set($q.cookies.get('isDark'));
  // }
});

function toggleTheme() {
  $q.dark.toggle();
  // $q.cookies.set('isDark', $q.dark.isActive.toString());
}

const logout = async () => {
  await $fetch('/api/logout', {
    method: 'POST',
  });
  user.value = null;
};
</script>

<style></style>
