// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    // Private keys that are exposed to the server
    apiSecret: process.env.API_SECRET,
    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.API_BASE
    }
  },
  nitro: {
    routeRules: {
      '/dashboard/**': { appMiddleware: ['auth'] }
    }
  }
})
