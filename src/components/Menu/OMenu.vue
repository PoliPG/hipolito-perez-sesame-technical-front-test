<script setup lang="ts">
import type { MenuItem } from './OMenuItem.vue'
import OMenuItem from './OMenuItem.vue'

const menuData: MenuItem[] = [
  {
    name: 'Administrador',
    items: [
      {
        icon: 'star',
        name: 'Talento',
        items: [
          {
            name: 'Reclutamiento'
          }
        ]
      }
    ]
  },
  {
    name: 'Fichaje'
  }
]
</script>

<template>
  <div class="bg-white">
    <OMenuItem class="px-2 py-3" :items="menuData" item-active="Reclutamiento"></OMenuItem>
  </div>
</template>
