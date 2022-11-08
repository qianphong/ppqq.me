<script lang="ts" setup>
const route = useRoute()

const layout = computed(() => {
  return (route.meta.layout || 'default').toUpperCase()
})
</script>

<template>
  <footer h-15 lg:w-xl mx-a text-center>[{{ layout }} LAYOUT]</footer>
</template>
