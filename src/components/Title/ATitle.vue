<script setup lang="ts">
interface Props {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  text: string
}
const { text } = defineProps<Props>()
</script>

<template>
  <component :is="type" class="text-blue-marguerite-950">{{ text }}</component>
</template>

<style lang="postcss" scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-bold;
}

h1 {
  @apply text-3xl;
}

h2 {
  @apply text-2xl;
}

h3 {
  @apply text-xl;
}

h4 {
  @apply text-lg;
}

h5 {
  @apply text-base;
}

h6 {
  @apply text-sm;
}
</style>
