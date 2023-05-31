<script setup lang="ts">
const colorMode = useColorMode()

function toggle() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}

const title = computed(() => {
  return colorMode.preference === 'dark' ? '切换到浅色模式' : '切换到深色模式'
})

function toggleDark(event: MouseEvent) {
  if (process.server) return

  const isAppearanceTransition =
    // @ts-expect-error experimental API
    document.startViewTransition &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!isAppearanceTransition) {
    toggle()
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    toggle()

    await nextTick()
  })
  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath:
          colorMode.value === 'dark' ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 400,
        easing: 'ease-out',
        pseudoElement:
          colorMode.value === 'dark'
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
      },
    )
  })
}
</script>

<template>
  <button @click="toggleDark">
    <div dark:i-carbon-moon i-carbon-sun icon-btn />
  </button>
</template>

<style>
/* // 颜色模式切换动画相关css */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
::view-transition-old(root) {
  z-index: 1;
}
::view-transition-new(root) {
  z-index: 9999;
}
.dark::view-transition-old(root) {
  z-index: 9999;
}
.dark::view-transition-new(root) {
  z-index: 1;
}
</style>
