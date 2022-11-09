<script lang="ts" setup>
useHead({
  title: 'Projects',
})

interface Repo {
  id: number
  name: string
  description: string
  html_url: string
  fork: boolean
}

const { data } = await useFetch<Repo[]>(
  'https://api.github.com/users/qianphong/repos',
)

const repos = computed(() =>
  data.value?.filter(
    repo => !repo.fork && repo.description !== 'No longer use',
  ),
)
</script>

<template>
  <div pt-20 px-10>
    <h2 text-3xl mb-10>
      Projects
      <span text-xs align-bottom>
        form
        <a
          href="https://github.com/qianphong?tab=repositories"
          target="_blank"
          class="text-link"
          >GitHub</a
        >
      </span>
    </h2>
    <ul>
      <li v-for="item in repos" :key="item.id">
        <div mb-6 mt-2 px-5>
          <a :href="item.html_url" class="text-lg text-link">{{ item.name }}</a>
          <div text-sm text-black text-op-50 dark:text-gray>
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
