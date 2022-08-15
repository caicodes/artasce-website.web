<script setup>
import NavBar from "./components/app/NavBar.vue"
const reloadPage = () => {
  window.location.reload()
}

const signIn = async () => {
  const email = "yo@artasce.com"
  const password = "yoyoyo"
  const credentials = await signInUser(email, password)
  console.log(credentials)
}
const signOut = async () => {
  const result = await signOutUser()
  console.log("result", result)
}

onMounted(async () => {
  const email = "yo@artasce.com"
  const password = "yoyoyo"
  const credentials = await signInUser(email, password)
  console.log(credentials)
})
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
            color="success"
            size="x-large"
            class="mr-2"
            @click="signIn"
            >signIn</v-btn
          >
          <v-btn
            color="success"
            size="x-large"
            class="mr-2"
            @click="signOut"
            >signOut</v-btn
          >
        </div>
        <nuxt-page></nuxt-page>
      </v-container>
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>
