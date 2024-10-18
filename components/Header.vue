<template>
  <q-header bordered class="bg-white text-grey-8">
    <div style="max-width: 1300px; width: 100%; height: 60px; padding-inline: 60px;"
      class="flex justify-between items-center q-mx-auto">
      <NuxtLink to="/" class="text-primary text-weight-bold text-h6 flex items-center q-gutter-x-sm cursor-pointer">
        QUASARUI
      </NuxtLink>
      <div class="gt-sm flex no-wrap q-gutter-x-xs items-center">
        <NuxtLink to="/components">
          <q-btn flat padding="4px 10px" dense text-color="grey-9" color="grey-3" no-caps unelevated
            label="Components"></q-btn>
        </NuxtLink>
        <!-- <NuxtLink to="/components">
          <q-btn flat padding="4px 10px" dense text-color="grey-9" color="grey-3" no-caps unelevated
            label="Changelog"></q-btn>
        </NuxtLink> -->
        <NuxtLink to="/templates">
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
        <div class="q-gutter-x-md">
          <NuxtLink v-if="!user" to="/auth/login">
            <q-btn text-color="grey-9" flat padding="4px 10px" dense color="gray-900" no-caps unelevated
              label="Sign in"></q-btn>
          </NuxtLink>

          <NuxtLink v-if="!isAllAccess" to="/all-access">
            <q-btn padding="4px 10px" unelevated no-caps label="Get all-access" dense color="dark"
              style="border-radius: 8px;"></q-btn>
          </NuxtLink>

          <q-btn color="white" class="shadow-1" unelevated v-if="user" round>
            <q-avatar size="42px">
              <q-icon size="20px" color="grey-10" name="mdi-account-circle-outline"></q-icon>
            </q-avatar>
            <q-menu flat unelevated>
              <q-card style="width: 260px" bordered flat>
                <q-card-section style="height: 100px" class="bg-grey-2 bg-dark-grey-9"></q-card-section>
                <q-card-section class="q-px-lg q-pb-md">
                  <div class="text-center">
                    <q-avatar color="primary" class="q-mb-sm" style="margin-top: -60px" size="52px">
                      <q-icon size="20px" color="grey-1" name="mdi-account-circle-outline"></q-icon>
                    </q-avatar>

                  </div>
                  <div style="width: 100%; max-width: 100%;" class="flex flex-center">
                    <div class="text-no-wrap text-body1">{{ user.name }}
                    </div>
                  </div>
                </q-card-section>
                <q-separator />
                <q-card-section class="q-pa-sm">
                  <q-list dense>
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
          </q-btn>
        </div>
      </div>
      <q-btn @click="toggleLeftDrawer" class="lt-md" unelevated round>
        <q-icon size="20px" color="grey-10" name="mdi-menu"></q-icon>
      </q-btn>
    </div>
  </q-header>

  <q-drawer v-model="leftDrawerOpen" side="left" bordered>
    <div class="q-pa-md flex justify-end items-center">
      <q-btn dense @click="toggleLeftDrawer" color="grey-4" unelevated round>
        <q-icon size="16px" color="grey-9" name="mdi-close"></q-icon>
      </q-btn>
    </div>
    <q-separator color="gray-900" class="q-pa-none q-ma-none" />
    <div class="flex column no-wrap q-pa-lg">
      <NuxtLink class="text-grey-9 text-weight-medium q-py-sm" to="/components">
        Components
      </NuxtLink>
      <NuxtLink class="text-grey-9 text-weight-medium q-py-sm" to="/templates">
        Templates
      </NuxtLink>
    </div>
    <q-separator color="gray-900" class="q-pa-none q-ma-none" />
    <template v-if="!user">
      <div class="flex column no-wrap q-pa-lg">
        <NuxtLink class="text-grey-9 text-weight-medium q-py-sm" to="/auth/login">
          Sign in
        </NuxtLink>
        <NuxtLink v-if="!isAllAccess" class="full-width q-mt-md" to="/all-access">
          <q-btn class="full-width" padding="4px 10px" unelevated no-caps label="Get all-access" dense color="dark"
            style="border-radius: 8px;"></q-btn>
        </NuxtLink>
      </div>
    </template>
    <template v-else>
      <div class="flex column no-wrap q-pa-lg">
        <div class="text-blue-grey-8 text-caption">Signed in as</div>
        <div style="width: 100%; max-width: 100%;" class="">
          <div class="text-no-wrap text-body1">{{ user.name }}
          </div>
        </div>
      </div>
      <q-separator color="gray-900" class="q-pa-none q-ma-none" />
      <div class="flex column no-wrap q-pa-lg">
        <div class="text-grey-9 text-weight-medium q-py-sm cursor-pointer" @click="logout">
          Sign out
        </div>
      </div>
    </template>
  </q-drawer>
</template>

<script lang="ts" setup>
const { user, session, clear } = useUserSession();
const { toggleLoading, showError } = useStore();
const allComponents = useComponents();

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const logout = async () => {
  try {
    toggleLoading(true);
    await clear();
    allComponents.value = null;
    await navigateTo('/auth/login');
  } catch (error) {
    const err = handleError(error);
    showError(err);
  } finally {
    toggleLoading(false);
  }
}

const isAllAccess = computed(() => {
  if (allComponents.value) {
    const isA = allComponents.value.every(component => component.isLicensed);
    console.log(isA);
    return allComponents.value.every(component => component.isLicensed)
  }
  return false
})

</script>

<style lang="scss">
// .logo-circle {

//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 20px;
//   height: 20px;
//   font-size: 12px;
//   border: 2px solid $primary;
//   border-radius: 4px;
// }</style>
