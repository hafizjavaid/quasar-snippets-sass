<template>
  <q-header reveal bordered class="bg-white text-grey-8 q-px-xl">
    <div class="flex justify-between">
      <NuxtLink to="/" class="flex no-wrap items-center cursor-pointer">
        <q-btn dense flat round :icon="leftDrawerOpen ? 'arrow_circle_left' : 'arrow_circle_right'"
          @click="toggleLeftDrawer" class="lt-md" />
        <q-img fit="contain" style="height: 60px; width: 120px" src="/logo.svg" />
      </NuxtLink>
      <div class="flex no-wrap q-gutter-x-xs items-center">
        <NuxtLink to="/components">
          <q-btn flat padding="4px 10px" dense text-color="grey-9" color="grey-3" no-caps unelevated
            label="Components"></q-btn>
        </NuxtLink>
        <NuxtLink to="/components">
          <q-btn flat padding="4px 10px" dense text-color="grey-9" color="grey-3" no-caps unelevated
            label="Changelog"></q-btn>
        </NuxtLink>
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
          <q-btn v-if="!user" text-color="grey-9" flat padding="4px 10px" dense color="gray-900" no-caps unelevated
            label="Sign in"></q-btn>

          <NuxtLink v-if="!isAllAccess" to="/all-access">
            <q-btn padding="4px 10px" unelevated no-caps label="Get all-access" dense color="dark"
              style="border-radius: 8px;"></q-btn>
          </NuxtLink>

          <q-btn color="white" class="shadow-1" unelevated v-if="user" round>
            <q-avatar size="42px">
              <!-- <q-img v-if="user.avatarUrl" :src="user.avatarUrl">
              <template v-slot:error>
                <div class="absolute-full flex flex-center bg-grey-3">
                  <q-icon size="30px" color="grey-5" name="mdi-account-circle-outline"></q-icon>
                </div>
              </template>
</q-img> -->
              <!-- <q-icon v-else name="mdi-account-circle-outline"></q-icon> -->
              <q-icon size="20px" color="grey-10" name="mdi-account-circle-outline"></q-icon>
            </q-avatar>
            <q-menu flat unelevated>
              <q-card style="width: 260px" bordered flat>
                <q-card-section style="height: 100px" class="bg-grey-2 bg-dark-grey-9"></q-card-section>
                <q-card-section class="q-px-lg q-pb-md">
                  <div class="text-center">
                    <q-avatar color="primary" class="q-mb-sm" style="margin-top: -60px" size="52px">
                      <!-- <q-img v-if="user.avatarUrl" :src="user.avatarUrl">
                        <template v-slot:error>
                          <div class="absolute-full flex flex-center bg-grey-3">
                            <q-icon color="grey-5" name="mdi-account-circle-outline"></q-icon>
                          </div>
                        </template>
                      </q-img>
                      <q-icon v-else name="mdi-account-circle-outline"></q-icon> -->
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
                  <q-list dense >
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

        <!-- <q-btn v-if="!user" color="primary" no-caps unelevated label="Login" icon-right="mdi-logout">
          <q-menu flat unelevated>
            <q-card style="width: 260px" bordered flat>
              <q-card-section style="height: 100px" class="bg-grey-2 bg-dark-grey-9"></q-card-section>
              <q-card-section class="q-px-lg q-pb-md">
                <div class="text-center">
                  <q-avatar color="grey-9" class="q-mb-sm" style="margin-top: -60px" size="72px">
                    <q-icon name="mdi-account-circle-outline"></q-icon>
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

      </div>
    </div>
  </q-header>

  <q-drawer v-model="leftDrawerOpen" side="left" bordered> Test </q-drawer>
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

<style></style>
