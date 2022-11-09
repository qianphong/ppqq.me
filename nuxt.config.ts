// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      mode: 'out-in',
      name: 'page',
    },
  },
  modules: ['@unocss/nuxt', '@nuxtjs/color-mode', '@vueuse/nuxt'],
  // @ts-expect-error
  colorMode: {
    classSuffix: '',
  },
})
