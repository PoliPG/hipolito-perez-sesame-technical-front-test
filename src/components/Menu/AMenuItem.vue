<script setup lang="ts">
import { computed } from 'vue'
import AIcon from '../Icons/AIcon.vue'

export interface Props {
  icon?: string
  text: string
  active: string
}

const { icon, text, active } = defineProps<Props>()

const isActive = computed(() => {
  return text === active
})
</script>

<template>
  <div
    class="flex items-center gap-2 font-semibold text-sm leading-[17.5px]"
    :class="{
      'pl-4 border-turquoise-200 border-l-2 text-turquoise-200': isActive
    }"
  >
    <AIcon :width="14" :height="14" v-if="icon" :icon="icon" />
    <spa>{{ text }}</spa>
  </div>
</template>
