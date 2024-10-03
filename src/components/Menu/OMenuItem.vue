<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Icons } from '../Icons/AIcon.vue'
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

let areChildrenActive = ref(false)

onMounted(() => {
  areChildrenActive.value = item.items ? findActiveChild(item.items) : false
})

function findActiveChild(items: MenuItem[]): boolean {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item.items) return findActiveChild(item.items)
    if (item.name === activeItem) {
      areChildrenActive.value = true
      return true
    }
  }

  return false
}

function closeSubMenu() {
  areChildrenActive.value = false
  emit('change-active', parent ? parent.name : '')
}

function openSubMenu(name: string) {
  areChildrenActive.value = true
  emit('change-active', name)
}
</script>

<template>
  <AMenuItem
    :name="item.name"
    :active-item="activeItem"
    :icon="item.icon"
    :level="level"
    :is-open="areChildrenActive"
    :show-opener="!!(item.items && item.items.length > 0)"
    @close="closeSubMenu"
    @open="openSubMenu"
  />
  <div class="overflow-hidden">
    <Transition>
      <nav v-if="areChildrenActive" class="flex flex-col gap-2 rounded-lg">
        <li
          v-for="(itemChild, key) in item.items"
          :key="key"
          class="px-2 py-1 list-none"
          :class="{
            'bg-gray-100 text-turquoise-200 rounded-lg': areChildrenActive
          }"
        >
          <OMenuItem
            :item="itemChild"
            :parent="item"
            :active-item="activeItem"
            :level="level + 1"
            @change-active="emit('change-active', item.name)"
          />
        </li>
      </nav>
    </Transition>
  </div>
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
