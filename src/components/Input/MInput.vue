<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import AIcon from '../Icons/AIcon.vue'
import type { Icons } from '../Icons/types/IconTypes'
import ATextInput from './ATextInput.vue'

interface Props {
  placeholder: string
  icon: Icons
}

const { placeholder, icon } = defineProps<Props>()

const isFocused = ref(false)
const input = ref(null)
const { width } = useElementSize(input)
let initWidth = 0

onMounted(() => {
  initWidth = width.value
})
</script>

<template>
  <div
    class="flex items-center gap-2 border-gray-[#E2E8F0] bg-[#F8FAFC] px-3 py-2 border rounded-xl font-normal text-gray-400 text-sm leading-4"
    :class="{ focus: isFocused }"
    ref="input"
    :style="`--input-width: ${initWidth}px`"
  >
    <AIcon :width="16" :height="16" :icon="icon" />
    <ATextInput
      class="bg-transparent mt-px"
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
}

.focus {
  @apply border-gray-400 transition-all text-gray-600;
  width: calc(var(--input-width) + 5rem);
}
</style>
