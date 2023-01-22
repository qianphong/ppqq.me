<script lang="ts" setup>
import confetti from 'canvas-confetti'

useHead({
  title: 'Hello World',
})

if (!process.server) {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  })
}
</script>

<template>
  <div h-screen pt-16 p-5 flex items-center>
    <div>
      <div>
        <p text-4xl mb-15 font-bold text="#de1c31">Happy Chinese New Year</p>
        <h1 text-5xl font-bold>Hello.</h1>
        <p my-5 text-3xl>
          This is
          <a
            href="https://github.com/qianphong"
            class="text-link"
            target="_blank"
            >qianphong</a
          >
          personal website.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang=""></style>
