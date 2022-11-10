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
const count = computed(() => {
  return getQuery(route.query.count) || '1'
})
const q = ref(getQuery(route.query.q) || '')
watchEffect(() => {
  router.replace({ query: { q: q.value } })
})

const { data } = await useFetch(() => `/api/policy`, {
  params: { num: count, q, doctype: 'json' },
})
</script>

<template>
  <div pt-20 px-5>
    <div>
      <div>
        <input type="text" v-model="q" />
      </div>
      <div>
        Fetch result:
        <pre bg-gray-800 p-2><code>{{ data }}</code></pre>
      </div>
    </div>
  </div>
</template>

<style lang=""></style>
