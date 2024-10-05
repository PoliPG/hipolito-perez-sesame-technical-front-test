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
    viewBox="0 0 14 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.00421 10.1208L3.29581 12L4.00421 8.01985L1 5.20137L5.1458 4.62227L7 1L8.8542 4.62111L13 5.20021L9.99579 8.01869L10.7042 11.9988L7.00421 10.1208Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
