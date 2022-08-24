<template>
  <v-layout style="z-index: 0">
    <v-app-bar class="bg-purple-darken-2">
      <nav class="mx-auto">
        <NuxtLink class="v-btn mx-8 text-white" to="/">home</NuxtLink>
        <NuxtLink class="v-btn mx-8 text-white" to="/about">about</NuxtLink>
        <NuxtLink class="v-btn mx-8 text-white" to="/contact">contact</NuxtLink>
        <NuxtLink class="v-btn mx-8 text-white" to="/styleguide"
          >styleguide</NuxtLink
        >
      </nav>
    </v-app-bar>
    <v-navigation-drawer color="grey-darken-2"></v-navigation-drawer>
    <v-navigation-drawer
      color="grey-darken-2"
      location="right"
    ></v-navigation-drawer>
    <v-main><NuxtPage /></v-main>
  </v-layout>
</template>
