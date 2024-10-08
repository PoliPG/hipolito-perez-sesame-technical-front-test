<script setup lang="ts">
import { computed } from 'vue'
import AIcon from '../Icons/AIcon.vue'
import type { Icons } from '@/components/Icons/types/IconTypes'

const emit = defineEmits(['open', 'close', 'change-active'])

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
  if (!showOpener) {
    emit('change-active', name)
    return
  }

  if (isActive.value) {
    emit('close')
    return
  }

  emit('open', name)
}
</script>

<template>
  <div
    :data-menu-item-name="name"
    :tabindex="1"
    class="flex items-center gap-2 px-1 w-full text-sm leading-5 cursor-pointer select-none"
    :class="[
      {
        active: isActive
      },
      `level${level}`
    ]"
    @click="toggleMenu"
    @keypress="toggleMenu"
  >
    <AIcon :width="16" :height="16" v-if="icon" :icon="icon" />
    <span class="flex-grow truncate">{{ name }}</span>
    <AIcon
      class="text-current text-gray-500 transform transition-transform duration-500"
      :width="16"
      :height="16"
      v-if="showOpener"
      icon="chevron"
    ></AIcon>
  </div>
</template>

<style lang="postcss" scoped>
.level0,
.level1 {
  @apply py-1.5;
}

.level2 {
  @apply pl-4 font-semibold border-l-2 py-1 ml-1;
}

div {
  .i-chevron {
    @apply rotate-180 transition-transform duration-500 text-gray-500;
  }

  &.level2 {
    @apply text-gray-500 border-gray-400 border-l-2;
  }
}

div.active {
  &.level1 {
    @apply text-blue-marguerite-500;
    & > .i-chevron {
      @apply text-blue-marguerite-500;
    }
  }

  &.level2 {
    @apply text-blue-marguerite-500 border-blue-marguerite-500;
  }

  .i-chevron {
    @apply rotate-0 transition-transform duration-500;
  }
}

.level0 {
  @apply uppercase text-xs;
}
</style>
