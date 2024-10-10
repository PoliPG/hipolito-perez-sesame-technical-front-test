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
    class="border-white py-2 border-b-2 text-center leading-6 cursor-pointer select-none"
    :class="{ active: isActive }"
  >
    <slot></slot>
  </li>
</template>

<style scoped lang="postcss">
li {
  @apply text-[#E2E8F0] hover:text-gray-800 hover:border-b-2 hover:border-b-gray-800;

  &.active {
    @apply border-b-2 border-b-blue-marguerite-500 text-blue-marguerite-500 font-bold;
  }
}
</style>
