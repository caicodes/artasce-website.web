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
