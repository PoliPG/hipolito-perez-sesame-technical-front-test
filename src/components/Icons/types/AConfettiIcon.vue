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
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.93994 4.94125H6.82245"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.88116 4V5.88251"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.9993 4L11.5287 5.88251"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.1175 4.94125H20"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.0588 4V5.88251"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.2937 8.70627L14.3525 9.64752"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.1175 12.4713L20 12.0007"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.1175 18.1188H20"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.0588 17.1776V19.0601"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.3525 15.7826L8.2174 9.64752L4.0853 18.6647C4.00536 18.8398 3.98083 19.0351 4.015 19.2245C4.04918 19.4139 4.14043 19.5884 4.27651 19.7244C4.4126 19.8605 4.58703 19.9518 4.77643 19.986C4.96583 20.0201 5.16115 19.9956 5.33622 19.9157L14.3525 15.7836V15.7826Z"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
