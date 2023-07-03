<script setup lang="ts">
defineProps<{
  type: 'gray' | 'sky' | 'green' | 'orange' | 'yellow' | 'purple'
  align?: 'center' | 'right' | 'left'
}>()

const blockBackground = {
  gray: 'bg-neutral-400/10 dark:bg-neutral-400/20',
  sky: 'bg-sky-500/10 dark:bg-sky-500/20',
  green: 'bg-emerald-500/10 dark:bg-emerald-500/20',
  orange: 'bg-orange-500/10 dark:bg-orange-500/20',
  yellow: 'bg-yellow-500/10 dark:bg-yellow-500/20',
  purple: 'bg-purple-500/10 dark:bg-purple-500/20',
}
</script>

<template>
  <div
    class="custom-block px-4 py-2 rounded"
    :class="[blockBackground[type]]"
    :style="{ textAlign: align ?? 'left' }"
  >
    <slot />
  </div>
</template>
