<script setup lang="ts">
import { defineAsyncComponent, shallowRef, type Component } from 'vue'
import type { Icons } from './types/IconTypes'

interface Props {
  icon: Icons
  height?: number
  width?: number
}

const { icon, height = 14, width = 14 } = defineProps<Props>()

//Data
let currentIcon = shallowRef<Component | null>(null)
const iconMap = new Map<Icons, Component>()
initMapper()

// prettier-ignore
function initMapper() {
  iconMap.set( 'menu', defineAsyncComponent(() => import('./types/AMenuIcon.vue')))
  iconMap.set('star', defineAsyncComponent(() => import('./types/AStarIcon.vue')))
  iconMap.set('chevron', defineAsyncComponent(() => import('./types/AChevronIcon.vue')))
  iconMap.set('confetti',defineAsyncComponent(() => import('./types/AConfettiIcon.vue')))
  iconMap.set('inbox', defineAsyncComponent(() => import('./types/AInboxIcon.vue')))
  iconMap.set('ban', defineAsyncComponent(() => import('./types/ABanIcon.vue')))
  iconMap.set('user', defineAsyncComponent(() => import('./types/AUserIcon.vue')))
  iconMap.set('thumbs-up', defineAsyncComponent(() => import('./types/AThumbUpIcon.vue')))
  iconMap.set('search', defineAsyncComponent(() => import('./types/ASearchIcon.vue')))
}

currentIcon.value = iconMap.get(icon) ?? null
</script>

<template>
  <i v-if="currentIcon" :class="`i-${icon}`">
    <component :is="currentIcon" :height="height" :width="width" />
  </i>
</template>
