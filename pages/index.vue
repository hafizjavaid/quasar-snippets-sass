<template>

  <NuxtLayout>

    <!-- <button @click="refresh">Get User</button>

    <pre>{{ user }}</pre>

    <div v-if="user">
      <div>Welcome {{ user ? user.email : user }}!</div>
      <p>Logged in since {{ session.loggedInAt }}</p>
      <button @click="logout">Logout</button>
    </div>
    <div v-else>
      <h1>Not logged in</h1>
      <a href="/auth/github">Login with GitHub</a>
    </div> -->
    <Hero></Hero>
    <Preview></Preview>
  </NuxtLayout>
</template>

<script lang="ts" setup>

definePageMeta({
  layout: 'default'
})

const { user, session, clear } = useUserSession()

const logout = async () => {
  await clear();
  await navigateTo('/auth/login');
}

const { refresh } = useFetch('/api/user');
</script>
