<script lang="ts" setup>
import '@unocss/reset/tailwind.css'
import '~/styles/main.css'

useHead({
  titleTemplate: t => (t ? `${t} - My App` : 'My App'),
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/nuxt.png',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
