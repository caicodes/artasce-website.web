import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/color-mode", "@nuxt/content", "@pinia/nuxt"],
  runtimeConfig: {
    // apiKey: process.env.NUXT_FIREBASE_API_KEY,
    public: {
      apiKey: process.env.NUXT_FIREBASE_API_KEY,
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
})

/*

  apiKey: process.env.NUXT_FIREBASE_API_KEY,
  authDomain: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NUXT_FIREBASE_DB_URL,
  projectId: process.env.NUXT_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NUXT_FIREBASE_MESSAGING_ID,
  appId: process.env.NUXT_FIREBASE_APP_ID,
  measurementId: process.env.NUXT_FIREBASE_MEASUREMENT_ID,

https://v3.nuxtjs.org/guide/features/runtime-config/

NUXT_API_SECRET=api_secret_token
NUXT_PUBLIC_API_BASE=https://nuxtjs.org

export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: '', // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  },
})
*/
