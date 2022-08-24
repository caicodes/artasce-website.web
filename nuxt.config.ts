// nuxt.config.ts
import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["vuetify/lib/styles/main.sass"],
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
  },
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
