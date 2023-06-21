<script setup lang="ts"></script>
<template>
  <v-app-bar location="top" rounded class="mx-4 px-4">
    <template v-slot:prepend>
      <NuxtLink to="/" style="text-decoration: none; color: inherit"
        ><v-app-bar-title>AMI</v-app-bar-title></NuxtLink
      >
    </template>
    <v-spacer></v-spacer>

    <NuxtLink to="/elements"><v-btn>Elements</v-btn></NuxtLink>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <div v-if="false">
      <v-btn icon>
        <v-avatar></v-avatar>
      </v-btn>
    </div>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>
