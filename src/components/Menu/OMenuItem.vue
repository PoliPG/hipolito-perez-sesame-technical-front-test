<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import type { Icons } from '../Icons/types/IconTypes'
import AMenuItem from './AMenuItem.vue'

export interface MenuItem {
  icon?: Icons
  name: string
  items?: MenuItem[]
}

const emit = defineEmits(['change-active'])

export interface Props {
  item: MenuItem
  activeItem: string
  level?: number
  parent?: MenuItem
}
const { item, activeItem, level = 0 } = defineProps<Props>()

let open = ref(false)

const hasChildren = computed(() => {
  return !!(item.items && item.items.length > 0)
})

onMounted(() => {
  open.value = item.items ? findActiveChild(item.items) : false
})

function findActiveChild(items: MenuItem[]): boolean {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item.items) return findActiveChild(item.items)
    if (item.name === activeItem) {
      open.value = true
      return true
    }
  }

  return false
}

function closeSubMenu() {
  open.value = false
  emit('change-active', parent ? parent.name : '')
}

function openSubMenu(name: string) {
  open.value = true
  emit('change-active', name)
}

function changeActive(name: string) {
  emit('change-active', name)
}
</script>

<template>
  <AMenuItem
    :name="item.name"
    :active-item="activeItem"
    :icon="item.icon"
    :level="level"
    :is-open="open"
    :show-opener="hasChildren"
    @close="closeSubMenu"
    @open="openSubMenu"
    @change-active="changeActive"
  />
  <component :is="level === 1 ? 'nav' : 'div'" class="overflow-hidden">
    <Transition>
      <ul v-if="open" class="flex flex-col gap-2 rounded-lg">
        <li
          v-for="(itemChild, key) in item.items"
          :key="key"
          class="px-2 py-1 list-none"
          :class="{
            'bg-gray-10 rounded-lg': open
          }"
        >
          <OMenuItem
            :item="itemChild"
            :parent="item"
            :active-item="activeItem"
            :level="level + 1"
            @change-active="changeActive"
          />
        </li>
      </ul>
    </Transition>
  </component>
</template>

<style lang="css" scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
  max-height: 900px;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-50px);
}
</style>
