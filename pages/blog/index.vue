<script lang="ts" setup>
import type { LocationQuery } from 'vue-router'

useHead({
  title: 'Blog',
})

const route = useRoute()
const router = useRouter()

function getQuery(query: LocationQuery[string]) {
  if (Array.isArray(query)) {
    query = query[0]
  }
  return query ? query : ''
}

const q = ref(getQuery(route.query.q) || '')

const { data } = await useFetch(() => `/api/policy`, {
  params: { q, doctype: 'json', num: 2 },
  pick: ['data'],
})

function doSearch(e?: KeyboardEvent) {
  console.log(e)
  if (e) {
    const target = e.target as HTMLInputElement
    q.value = target.value
  } else {
    q.value = ''
  }
  router.replace({ query: { q: q.value || undefined } })
}
</script>

<template>
  <div pt-20 px-5>
    <div>
      <div lg:w-lg mx-a rounded overflow-hidden>
        <input
          type="text"
          :value="q"
          placeholder="type word to search"
          @keydown.enter="doSearch"
          h-10
          w-full
          px-5
        />
      </div>
      <div>
        Fetch result:
        <pre bg-gray-800 p-2><code>{{ data?.data.entries }}</code></pre>
      </div>
    </div>
  </div>
</template>

<style lang=""></style>
