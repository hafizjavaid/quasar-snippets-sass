<template>
  <div style="max-width: 1400px; width: 100%;" class="q-mx-auto">
    <div class="flex items-center">
      <div class="flex q-gutter-x-md">
        <q-avatar size="50px">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <div>
          <div class="text-subtitle1 text-weight-bold">Hafiz Javaid</div>
          <div class="text-body2 text-grey-8">Joined the Quasar <span class="text-grey-10 text-weight-medium">
              Discord
              server</span> on July 27th, 2017</div>
        </div>
      </div>

      <q-space></q-space>

      <div class="flex items-center q-gutter-x-sm">
        <q-btn color="grey-4" style="border-radius: 8px" unelevated padding="6px 10px" no-caps outline class="">
          <template #default>
            <q-icon size="18px" name="mdi-account-cog-outline" color="dark" class=""></q-icon>
            <div class="text-dark q-ml-sm">Profile</div>
          </template>
        </q-btn>


        <q-btn color="primary" style="border-radius: 8px" padding="6px 12px" no-caps label="Message" icon="mdi-chat"
          unelevated>
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
