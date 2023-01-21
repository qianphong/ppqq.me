<script lang="ts" setup>
import '@unocss/reset/tailwind.css'
import '~/styles/main.css'

const title = 'ppqq.me'

useHead({
  title,
  titleTemplate: t => (t !== title ? `${t} - ppqq.me` : 'ppqq.me'),
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
