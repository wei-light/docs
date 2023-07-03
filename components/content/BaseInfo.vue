<script setup lang="ts">
defineProps<{
  name: string
  avatar: string
  sign: string
}>()
</script>

<template>
  <div class="not-prose flex items-center text-gray-700 dark:text-neutral-200">
    <div class="shrink-0 w-16 h-16 rounded-full overflow-hidden sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32">
      <img class="w-full h-full" :src="avatar" alt="user-avatar">
    </div>
    <div class="ml-6 md:ml-8 lg:ml-10">
      <p class="font-bold text-lg sm:text-2xl">
        {{ name }}
      </p>
      <p class="text-[13px] opacity-60 mt-0.5 line-clamp-1 sm:text-sm sm:mt-2 md:mt-4 lg:mt-6">
        {{ sign }}
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>
