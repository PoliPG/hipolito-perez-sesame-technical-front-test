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
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.66667 11.3333C9.244 11.3333 11.3333 9.244 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333Z"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M14 14L10 10" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>
