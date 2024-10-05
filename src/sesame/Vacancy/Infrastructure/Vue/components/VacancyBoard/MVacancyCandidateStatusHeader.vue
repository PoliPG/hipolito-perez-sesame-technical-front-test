<script setup lang="ts">
import { ref } from 'vue'

import AIcon from '@/components/Icons/AIcon.vue'
import ATitle from '@/components/Title/ATitle.vue'
import type { Icons } from '@/components/Icons/types/IconTypes'

interface Props {
  candidateStatusName: string
}

const { candidateStatusName } = defineProps<Props>()

let icon = ref<Icons>('star')
const iconMap = new Map<string, Icons>()
initMapper()
icon.value = iconMap.get(candidateStatusName) ?? 'star'

function initMapper() {
  iconMap.set('New', 'inbox')
  iconMap.set('Accepted', 'thumbs-up')
  iconMap.set('Interview', 'user')
  iconMap.set('Selected', 'confetti')
  iconMap.set('Discarded', 'ban')
}
</script>

<template>
  <header class="flex items-center gap-3 w-64">
    <AIcon :icon="icon"></AIcon>
    <ATitle type="h5" :text="candidateStatusName"></ATitle>
  </header>
</template>
