<script setup lang="ts">
import AIcon from '../Icons/AIcon.vue'
import type { Icons } from '../Icons/types/IconTypes'

interface Props {
  title?: string
  icon?: Icons
}

const { icon, title } = defineProps<Props>()
</script>

<template>
  <div
    class="border-gray-50 bg-white shadow-gray-200 shadow-sm p-4 border rounded-xl lg:rounded-3xl min-h-10"
  >
    <h2 v-if="title" class="flex items-center gap-2 mb-4">
      <AIcon v-if="icon" :width="25" :height="25" :icon="icon"></AIcon>
      <span class="text-lg">{{ title }}</span>
    </h2>
    <slot></slot>
  </div>
</template>
