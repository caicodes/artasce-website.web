<script setup>
import NavBar from "./components/app/NavBar.vue"
</script>

<template>
  <v-app>
    <NavBar />
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- nuxt page main -->
        <NuxtPage />
      </v-container>
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>
