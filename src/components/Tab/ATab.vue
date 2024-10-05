<script lang="ts" setup>
import { computed } from 'vue'
const emit = defineEmits(['click'])

interface Props {
  id: string
  activeId: string
}

const { id, activeId } = defineProps<Props>()

const isActive = computed(() => {
  return id === activeId
})

function onClick(): void {
  emit('click', id)
}
</script>

<template>
  <li
    :tabindex="0"
    :data-id="id"
    @click="onClick"
    @keypress="onClick"
    class="border-white py-2 border-b-2 text-center leading-6 cursor-pointer"
    :class="{
      'border-b-2 border-b-turquoise-200 text-turquoise-200 font-bold': isActive,
      'text-[#E2E8F0]': !isActive
    }"
  >
    <slot></slot>
  </li>
</template>
