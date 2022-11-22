<script setup lang="ts">
const colorMode = useColorMode()

function toggleDark() {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button @click="toggleDark">
    <div dark:i-carbon-moon i-carbon-sun icon-btn />
  </button>
</template>
