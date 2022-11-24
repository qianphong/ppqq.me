<script lang="ts" setup>
import '@unocss/reset/tailwind.css'
import '~/styles/main.css'

const title = 'My App'

useHead({
  title,
  titleTemplate: t => (t !== title ? `${t} - My App` : 'My App'),
  // link: [
  //   {
  //     rel: 'icon',
  //     type: 'image/png',
  //     href: '/nuxt.png',
  //   },
  // ],
})
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
