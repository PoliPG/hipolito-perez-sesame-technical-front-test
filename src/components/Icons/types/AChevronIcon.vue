<script setup lang="ts">
interface Props {
  height?: number
  width?: number
}

const { height = 20, width = 20 } = defineProps<Props>()
</script>

<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 10L8 6L4 10"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
