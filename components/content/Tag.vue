<script setup lang="ts">
defineProps<{
  text: string
  type: 'gray' | 'sky' | 'green' | 'orange' | 'yellow' | 'purple'
}>()

const blockBackground = {
  gray: 'bg-neutral-400/10 dark:bg-neutral-400/20',
  sky: 'bg-sky-500/10 dark:bg-sky-500/30',
  green: 'bg-emerald-500/10 dark:bg-emerald-500/30',
  orange: 'bg-orange-500/10 dark:bg-orange-500/30',
  yellow: 'bg-yellow-500/10 dark:bg-yellow-500/30',
  purple: 'bg-purple-500/10 dark:bg-purple-500/30',
}
</script>

<template>
  <span
    class="px-1 text-xs rounded-sm"
    :class="[blockBackground[type]]"
  >
    {{ text }}
  </span>
</template>
