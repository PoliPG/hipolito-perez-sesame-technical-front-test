<script setup lang="ts">
import { ref } from 'vue'
import type { MenuItem } from './OMenuItem.vue'
import OMenuItem from './OMenuItem.vue'

const activeItem = ref('Reclutamiento')

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

function changeActive(name: string) {
  activeItem.value = name
}
</script>

<template>
  <div class="bg-white py-2">
    <div
      class="flex justify-center items-center border-[#CBD5E1] mx-2 border h-12 text-[#64748B] text-[10px]"
    >
      <span>Slot logo</span>
    </div>
    <menu class="overflow-hidden">
      <li v-for="(item, key) in menuData" :key="key" class="px-2 py-4 list-none">
        <OMenuItem :item="item" :active-item="activeItem" @change-active="changeActive" />
      </li>
    </menu>
  </div>
</template>
