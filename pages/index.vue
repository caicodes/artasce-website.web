<script setup>
definePageMeta({
  middleware: ["auth"],
  // or middleware: 'auth'
})

const firebaseUser = useFirebaseUser()
const credentials = ref()

const reloadPage = () => {
  window.location.reload()
}

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
  <div>
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
    <client-only>
      <div v-if="firebaseUser">
        <pre>{{ firebaseUser }}</pre>
      </div>
      <div v-else>no one logged in</div>
    </client-only>
  </div>
</template>
