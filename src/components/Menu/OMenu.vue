<script setup lang="ts">
import type { MenuItem } from './OMenuItem.vue'
import OMenuItem from './OMenuItem.vue'

const menuData: MenuItem[] = [
  {
    text: 'ADMINISTRADOR',
    items: [
      {
        icon: 'star',
        text: 'Talento',
        items: [
          {
            text: 'Reclutamiento'
          }
        ]
      }
    ]
  },
  {
    text: 'Fichaje'
  }
]
</script>

<template>
  <div>
    <OMenuItem :items="menuData" active="Reclutamiento"></OMenuItem>
  </div>
</template>
