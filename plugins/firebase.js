/**
 *
 *  Artasce Creative
 *
 *    FIREBASE PLUGIN
 *
 *
 */
import { initializeApp } from "firebase/app"
import { getAuth } from "@firebase/auth"

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: config.apiKey,
  }
  const app = initializeApp(firebaseConfig)

  initUser()

  const auth = getAuth()

  nuxtApp.vueApp.provide("auth", auth)
})
