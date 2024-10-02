<script setup lang="ts">
import { computed } from 'vue'
import type { Icons } from '../Icons/AIcon.vue'
import AMenuItem from './AMenuItem.vue'

export interface MenuItem {
  icon?: Icons
  name: string
  items?: MenuItem[]
}

export interface Props {
  items: MenuItem[]
  itemActive: string
  level?: number
}

const { items, itemActive, level = 0 } = defineProps<Props>()

function findActiveChild(items: MenuItem[]): boolean {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item.items && item.items.length > 0) return findActiveChild(item.items)
    if (item.name === itemActive) {
      return true
    }
  }

  return false
}
</script>

<template>
  <nav class="flex flex-col gap-2 rounded-lg">
    <li
      v-for="(item, key) in items"
      :key="key"
      class="px-2 py-1 list-none"
      :class="{
        'bg-gray-100 text-turquoise-200 rounded-lg':
          item.items && findActiveChild(item.items) && level > 0
      }"
    >
      <AMenuItem
        :name="item.name"
        :item-active="itemActive"
        :icon="item.icon"
        :level="level"
      ></AMenuItem>
      <OMenuItem
        v-if="item.items && item.items.length > 0"
        :items="item.items"
        :item-active="itemActive"
        :level="level + 1"
      />
    </li>
  </nav>
</template>
