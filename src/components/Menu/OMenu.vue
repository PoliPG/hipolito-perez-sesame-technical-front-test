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
  }
]
</script>

<template>
  <div class="bg-white py-2">
    <div
      class="flex justify-center items-center border-[#CBD5E1] mx-2 border h-12 text-[#64748B] text-[10px]"
    >
      <span>Slot logo</span>
    </div>
    <OMenuItem class="py-3" :items="menuData" item-active="Reclutamiento"></OMenuItem>
  </div>
</template>
