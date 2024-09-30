<template>

  <!-- <pre>{{ user }}</pre>
  <div v-if="loggedIn">
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
  <Pricing></Pricing>
  <Faq></Faq>
</template>

<script lang="ts" setup>
// const { loggedIn, user, session, fetch, clear } = useUserSession()

// const logout = async () => {
//   await clear();
//   await navigateTo('/auth/login');
// }
</script>
