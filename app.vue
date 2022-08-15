<script setup>
import NavBar from "./components/app/NavBar.vue"
const reloadPage = () => {
  window.location.reload()
}
const firebaseUser = useFirebaseUser()

const credentials = ref()

const signIn = async () => {
  const email = "yo@artasce.com"
  const password = "yoyoyo"
  credentials.value = await signInUser(email, password)
}
const signOut = async () => {
  credentials.value = await signOutUser()
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
          <v-btn
            color="success"
            size="x-large"
            class="mr-2"
            @click="reloadPage"
            >reloadPage</v-btn
          >
          <v-btn
            v-if="!firebaseUser"
            color="success"
            size="x-large"
            class="mr-2"
            @click="signIn"
            >signIn</v-btn
          >
          <v-btn
            v-if="firebaseUser"
            color="success"
            size="x-large"
            class="mr-2"
            @click="signOut"
            >signOut</v-btn
          >
        </div>

        <div v-if="firebaseUser">
          <pre>{{ firebaseUser }}</pre>
        </div>
        <div v-else>no one logged in</div>
        <nuxt-page></nuxt-page>
      </v-container>
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>
