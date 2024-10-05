<script setup lang="ts">
interface Props {
  src: string
  alt: string
  lazy: boolean
}
const { src, alt, lazy } = defineProps<Props>()
</script>

<template>
  <img
    class="rounded-full overflow-hidden"
    :src="src"
    :alt="alt"
    :loading="lazy ? 'lazy' : 'eager'"
  />
</template>
