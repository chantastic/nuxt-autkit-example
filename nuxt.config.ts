// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    workosClientId: process.env.WORKOS_CLIENT_ID,
    workosApiKey: process.env.WORKOS_API_KEY,
    workosRedirectUri: process.env.WORKOS_REDIRECT_URI,
    workosClientSecret: process.env.WORKOS_COOKIE_PASSWORD,
    public: {
      apiBase: process.env.API_BASE
    }
  },
  nitro: {
    routeRules: {
      // '/dashboard/**': { middleware: ['auth'] },
      // '/profile/**': { middleware: ['auth'] }
    }
  }
})
