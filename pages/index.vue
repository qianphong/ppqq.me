<script lang="ts" setup>
useHead({
  title: 'Hello World',
})

const locales = useLocales()
const locale = useLocale()
const date = useLocaleDate(new Date('2016-10-26') /* NUXT_BIRTHDAY */)

</script>

<template>
  <div h-screen pt-16 p-5 flex items-center>
    <div>
      <div>
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
      <div>
        <h1 class="text-xl opacity-50">Deadline</h1>
        <p class="text-4xl">
          {{ date }}
        </p>
        <div class="mt-4" />
        <label for="locale-chooser">Preview a different locale</label>
        <select
          v-model="locale"
          class="m-auto w-50 border n-border-base rounded p-1"
        >
          <option v-for="l of locales" :key="l" :value="l">
            {{ l }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<style lang=""></style>
