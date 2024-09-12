// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: false,
    timeline: { enabled: true }
  },
  modules: ['@primevue/nuxt-module', '@nuxtjs/tailwindcss'],
  css: [
    '~/assets/css/base.css',
  ],
  primevue: {
    options: { unstyled: true },
    importPT: { from: path.resolve(__dirname, './presets/lara/') },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL
    }
  },
})