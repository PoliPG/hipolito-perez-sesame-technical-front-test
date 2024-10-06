<script setup lang="ts">
interface Props {
  cta: string
  color: 'blue-marguerite'
}
const { cta } = defineProps<Props>()
</script>

<template>
  <button
    class="px-3 py-2 rounded-xl font-normal text-sm leading-4 transition-colors duration-200"
    :class="color"
  >
    {{ cta }}
  </button>
</template>

<style lang="postcss" scoped>
button {
  &.blue-marguerite {
    @apply text-white bg-blue-marguerite-950;
    &:hover {
      @apply bg-blue-marguerite-800;
    }
  }
}
</style>
