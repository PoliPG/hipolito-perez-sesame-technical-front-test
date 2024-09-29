<script setup lang="ts">
const props = defineProps({
  text: { type: String, required: true }
})
</script>

<template>
  <h1 class="font-bold text-3xl text-sesameBlue-900">{{ props.text }}</h1>
</template>
