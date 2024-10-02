<script setup lang="ts">
import { computed } from 'vue'
import AIcon, { type Icons } from '../Icons/AIcon.vue'

export interface Props {
  icon?: Icons
  name: string
  itemActive: string
  level: number
}

const { icon, name, itemActive, level } = defineProps<Props>()

const isActive = computed(() => {
  return name === itemActive
})
</script>

<template>
  <div
    class="flex items-center gap-2 text-sm leading-[17.5px]"
    :class="[
      {
        active: isActive
      },
      `level${level}`
    ]"
  >
    <AIcon :width="14" :height="14" v-if="icon" :icon="icon" />
    <span>{{ name }}</span>
  </div>
</template>

<style lang="postcss" scoped>
.active {
  @apply pl-4 border-turquoise-200 border-l-2 text-turquoise-200;
}

.level0 {
  @apply uppercase text-xs;
}

.level2 {
  @apply font-semibold;
}
</style>
