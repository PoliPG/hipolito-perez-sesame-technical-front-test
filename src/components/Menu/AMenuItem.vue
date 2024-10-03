<script setup lang="ts">
import { computed } from 'vue'
import AIcon, { type Icons } from '../Icons/AIcon.vue'

const emit = defineEmits(['open', 'close'])

export interface Props {
  icon?: Icons
  isOpen?: boolean
  name: string
  activeItem: string
  level: number
  showOpener: boolean
}
const { icon, name, activeItem, level, showOpener, isOpen = false } = defineProps<Props>()

const isActive = computed(() => {
  return name === activeItem || isOpen
})

function toggleMenu() {
  if (showOpener === false) return

  if (isActive.value) {
    emit('close')
    return
  }

  emit('open', name)
}
</script>

<template>
  <div
    class="flex items-center gap-2 px-1 py-1.5 w-full text-sm leading-5 cursor-pointer select-none"
    :class="[
      {
        active: isActive
      },
      `level${level}`
    ]"
    @click="toggleMenu"
  >
    <AIcon :width="14" :height="14" v-if="icon" :icon="icon" />
    <span class="flex-grow truncate">{{ name }}</span>
    <AIcon
      class="transform transition-transform duration-500"
      :width="16"
      :height="16"
      v-if="showOpener"
      icon="chevron"
    ></AIcon>
  </div>
</template>

<style lang="postcss" scoped>
.level2 {
  @apply pl-4 font-semibold border-l-2;
}

:not(.active) {
  & > .i-chevron {
    @apply rotate-180 transition-transform duration-500;
  }

  &.level2 {
    @apply text-gray-500 border-gray-400 border-l-2;
  }
}

.active {
  &.level1 {
    @apply text-turquoise-200;
  }

  &.level2 {
    @apply text-turquoise-200 border-turquoise-200;
  }
}

.level0 {
  @apply uppercase text-xs;
}
</style>
