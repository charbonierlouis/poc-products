// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],

  routeRules: {
    "/": { prerender: true, isr: 3600 },
    "/p/**": { isr: 3600 },
  }
})