<script setup lang="ts">
import Select from 'primevue/select'

interface Option {
  name: string
  id: string
}

interface Props {
  options: Option[]
  placeholder: string
}

const { placeholder, options } = defineProps<Props>()
const selectedItem = defineModel()
</script>

<template>
  <Select
    v-model="selectedItem"
    pt:root="cursor-pointer px-3 py-2 border rounded-xl w-full flex justify-between items-center"
    pt:overlay="rounded-b-lg overflow-hidden bg-white border cursor-pointer shadow-md"
    pt:dropdown="flex items-center"
    pt:option="text-gray-700 px-4 py-2 border-b border-b-gray-200 font-semibold hover:text-gray-900  hover:bg-gray-200"
    :options="options"
    optionLabel="name"
    :placeholder="placeholder"
    unstyled
  />
</template>

<style lang="postcss" scoped>
div {
  --p-select-overlay-background: #fff;

  &.p-select {
    @apply border;
    border-color: #e2e8f0;
    background-color: #f8fafc;
  }
}
</style>
