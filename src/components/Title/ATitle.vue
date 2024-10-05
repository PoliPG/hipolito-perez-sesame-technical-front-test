<script setup lang="ts">
interface Props {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  text: string
}
const { text } = defineProps<Props>()
</script>

<template>
  <component :is="type" class="text-turquoise-900">{{ text }}</component>
</template>

<style lang="postcss" scoped>
h1 {
  @apply text-3xl font-bold;
}

h2 {
  @apply text-2xl font-bold;
}

h3 {
  @apply text-xl font-semibold;
}

h4 {
  @apply text-lg font-semibold;
}

h5 {
  @apply text-base font-semibold;
}

h6 {
  @apply text-sm font-semibold;
}
</style>
