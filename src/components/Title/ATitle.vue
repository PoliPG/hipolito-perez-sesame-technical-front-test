<script setup lang="ts">
interface Props {
  text: string
}
const { text } = defineProps<Props>()
</script>

<template>
  <h1 class="font-bold text-3xl text-sesameBlue-900">{{ text }}</h1>
</template>
