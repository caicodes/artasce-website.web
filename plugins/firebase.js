import { initializeApp } from "firebase/app"

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: config.apiKey,
  }
  const app = initializeApp(firebaseConfig)
  console.log(app)
})
