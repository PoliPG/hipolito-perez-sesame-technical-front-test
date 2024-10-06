<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import AIcon from '../Icons/AIcon.vue'
import type { Icons } from '../Icons/types/IconTypes'
import ATextInput from './ATextInput.vue'

interface Props {
  placeholder: string
  icon?: Icons
  animate?: boolean
  size?: 'sm' | 'md'
}

const { placeholder, icon, animate = false, size = 'md' } = defineProps<Props>()

const isFocused = ref(false)
const inputElement = ref(null)
const { width } = useElementSize(inputElement)

const input = defineModel()
let initWidth = 0

onMounted(() => {
  initWidth = width.value
})
</script>

<template>
  <div
    class="flex items-center gap-2 border-gray-[#E2E8F0] bg-[#F8FAFC] border rounded-xl font-normal text-gray-800"
    :class="[{ focus: isFocused, animate }, size]"
    ref="inputElement"
    :style="`--input-width: ${initWidth}px`"
  >
    <AIcon v-if="icon" :width="16" :height="16" :icon="icon" />
    <ATextInput
      class="bg-transparent mt-px w-full"
      v-model="input"
      v-bind="$attrs"
      :placeholder="placeholder"
      @focus="isFocused = true"
      @focus-out="isFocused = false"
    />
  </div>
</template>

<style lang="postcss" scoped>
div {
  @apply transition-all w-auto duration-200;

  &.sm {
    @apply text-sm leading-4 px-3 py-2;
  }

  &.md {
    @apply text-base leading-4 px-3 py-2;
  }

  &.focus {
    @apply border-gray-400 text-gray-600;
  }

  &.animate.focus {
    @apply transition-all;
    width: calc(var(--input-width) + 5rem);
  }
}
</style>
