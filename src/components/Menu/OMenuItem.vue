<script setup lang="ts">
import AMenuItem from './AMenuItem.vue'

export interface MenuItem {
  icon?: string
  text: string
  items?: MenuItem[]
}

export interface Props {
  items: MenuItem[]
  active: string
}

const { items } = defineProps<Props>()
</script>

<template>
  <nav>
    <li v-for="(item, key) in items" :key="key" class="p-2 list-none">
      <AMenuItem :text="item.text" :active="active" :icon="item.icon"></AMenuItem>
      <OMenuItem v-if="item.items && item.items.length > 0" :items="item.items" :active="active" />
    </li>
  </nav>
</template>
