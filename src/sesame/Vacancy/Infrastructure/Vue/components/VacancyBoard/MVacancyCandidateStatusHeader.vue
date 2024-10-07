<script setup lang="ts">
import { ref } from 'vue'

import AIcon from '@/components/Icons/AIcon.vue'
import ATitle from '@/components/Title/ATitle.vue'
import type { Icons } from '@/components/Icons/types/IconTypes'

interface Props {
  candidateStatusName: string
}

type designHeaderConfig = { icon: Icons; color: string }

const { candidateStatusName } = defineProps<Props>()

let designConfig = ref<designHeaderConfig>({ icon: 'star', color: '#22C55E' })
const iconMap = new Map<string, designHeaderConfig>()
initMapper()
designConfig.value = iconMap.get(candidateStatusName) ?? designConfig.value

function initMapper() {
  iconMap.set('New', { icon: 'inbox', color: '#22C55E' })
  iconMap.set('Accepted', { icon: 'thumbs-up', color: '#72dfd8' })
  iconMap.set('Interview', { icon: 'user', color: '#14B8A6' })
  iconMap.set('Selected', { icon: 'confetti', color: '#3B82F6' })
  iconMap.set('Discarded', { icon: 'ban', color: '#ED6F6F' })
}
</script>

<template>
  <div v-bind:class="$attrs.class">
    <div
      class="mb-2 rounded-sm w-full h-1"
      :style="`background-color: ${designConfig.color};`"
    ></div>
    <header class="flex items-center gap-1" :style="`color: ${designConfig.color}`">
      <AIcon :height="18" :width="18" :icon="designConfig.icon"></AIcon>
      <ATitle type="h5" class="font-bold leading-5" :text="candidateStatusName"></ATitle>
    </header>
  </div>
</template>
