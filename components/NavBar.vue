<script setup lang="ts">
const isDark = useDark()
</script>

<template>
  <div class="flex items-center justify-between h-14 px-6 md:px-8 lg:px-10">
    <NuxtLink to="/">
      <img v-show="!isDark" height="56" width="56" src="/logo.svg" alt="logo">
      <img v-show="isDark" height="56" width="56" src="/logo-dark.svg" alt="logo">
    </NuxtLink>
    <ToggleTheme />
  </div>
</template>

<style scoped>

</style>
