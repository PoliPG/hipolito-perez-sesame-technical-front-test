<script setup lang="ts">
import { defineAsyncComponent, shallowRef, type Component } from 'vue'

interface Props {
  icon: string
  height?: number
  width?: number
}

const { icon, height = 14, width = 14 } = defineProps<Props>()

//Data
let currentIcon = shallowRef<Component | null>(null)
const iconMap = new Map<string, Component>()
iconMap.set(
  'menu',
  defineAsyncComponent(() => import('./AMenuIcon.vue'))
)
iconMap.set(
  'star',
  defineAsyncComponent(() => import('./AStarIcon.vue'))
)

currentIcon.value = (await iconMap.get(icon)) ?? null
</script>

<template>
  <i v-if="currentIcon">
    <component :is="currentIcon" :height="height" :width="width" />
  </i>
</template>
