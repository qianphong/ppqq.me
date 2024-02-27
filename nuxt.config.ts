// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      mode: 'out-in',
      name: 'page',
    },
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: 'favicon.svg',
        },
      ],
    },
  },
  modules: ['@unocss/nuxt', '@nuxtjs/color-mode', '@vueuse/nuxt'],
  colorMode: {
    classSuffix: '',
  },
})
