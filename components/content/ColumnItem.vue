<script setup lang="ts">
import type { CSSProperties } from 'nuxt/dist/app/compat/capi'

const props = defineProps<{
  width?: number
}>()

const itemStyle = computed<CSSProperties>(() => props.width ? { flexBasis: `${props.width}%` } : { flex: 1 })
</script>

<template>
  <div class="max-[864px]:!basis-full" :style="itemStyle">
    <slot />
  </div>
</template>

<style scoped>

</style>
