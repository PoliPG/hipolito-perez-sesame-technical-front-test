<script setup lang="ts">
import { defineAsyncComponent, shallowRef, type Component } from 'vue'

export type Icons = 'menu' | 'star' | 'chevron'

interface Props {
  icon: Icons
  height?: number
  width?: number
}

const { icon, height = 14, width = 14 } = defineProps<Props>()

//Data
let currentIcon = shallowRef<Component | null>(null)
const iconMap = new Map<Icons, Component>()
iconMap.set(
  'menu',
  defineAsyncComponent(() => import('./AMenuIcon.vue'))
)
iconMap.set(
  'star',
  defineAsyncComponent(() => import('./AStarIcon.vue'))
)
iconMap.set(
  'chevron',
  defineAsyncComponent(() => import('./AChevron.vue'))
)

currentIcon.value = (await iconMap.get(icon)) ?? null
</script>

<template>
  <i v-if="currentIcon" :class="`i-${icon}`">
    <component :is="currentIcon" :height="height" :width="width" />
  </i>
</template>
