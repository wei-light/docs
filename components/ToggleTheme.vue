<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button aria-label="Change Color Mode" class="flex text-xl opacity-60 transition-opacity hover:opacity-70" @click="toggleDark()">
    <i class="i-[ri--sun-line] dark:i-[ri--moon-line]" />
  </button>
</template>
