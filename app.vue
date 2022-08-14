<script setup>
import ThemeToggle from './components/colormode/ThemeToggle.vue'
</script>
<template>
  <v-app>
    <v-navigation-drawer app>
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->


    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <ThemeToggle />
        <!-- nuxt page main -->
        <nuxt-page></nuxt-page>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>

</template>