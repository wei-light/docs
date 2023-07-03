// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@vueuse/nuxt',
  ],
  css: [
    '~/assets/css/global.css',
    '~/assets/css/fonts.css',
    '~/assets/css/prose.css',
    '~/assets/css/markdown.css',
  ],
})
