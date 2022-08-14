<script setup>
import NavBar from './components/app/NavBar.vue'

const reloadPage = () => {
  window.location.reload();
}

</script>

<template>
  <v-app>
    <NavBar />
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- nuxt page main -->

        <div class="float-left bg-primar pr-4">
          <v-btn color="success" size="x-large" @click="reloadPage">refresh</v-btn>
        </div>
        <nuxt-page></nuxt-page>
      </v-container>
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>