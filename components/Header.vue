<script setup lang="ts"></script>

<template>
  <header
    flex
    p-5
    shadow
    justify-between
    fixed
    top-0
    w-full
    z-9
    bg-white
    dark:bg-black
  >
    <Logo />
    <nav flex>
      <div class="spacer" />
      <div flex items-center space-x-5>
        <NuxtLink to="https://qianphong.github.io" title="Blog">
          <span class="lt-md:hidden">Blog</span>
          <div i-ri-article-line md:hidden />
        </NuxtLink>
        <NuxtLink to="/projects" title="Projects">
          <span lt-md:hidden>Projects</span>
          <div i-ri-lightbulb-line md:hidden />
        </NuxtLink>
        <!-- <NuxtLink to="/demos" title="Demos">
          <span lt-md:hidden>Demos</span>
          <div i-ri-screenshot-line md:hidden />
        </NuxtLink> -->
        <a
          href="https://twitter.com/undefined1122"
          target="_blank"
          title="Twitter"
        >
          <div i-carbon:logo-twitter icon-btn />
        </a>
        <a href="https://github.com/qianphong" target="_blank" title="GitHub">
          <div i-carbon:logo-github icon-btn />
        </a>
        <ToggleTheme />
      </div>
    </nav>
  </header>
</template>
