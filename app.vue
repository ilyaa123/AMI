<template>
  <v-app>
    <nuxt-layout>
      <nuxt-loading-indicator :throttle="0" />
      <nuxt-page />
    </nuxt-layout>
  </v-app>
</template>
<style lang="scss" scoped>
  $body-font-family: 'Roboto';
  $title-font: 'Roboto';
  .v-application {
   font-family: $body-font-family !important;
    .title { // To pin point specific classes of some components
       font-family: $title-font !important;
    }
  }
</style>