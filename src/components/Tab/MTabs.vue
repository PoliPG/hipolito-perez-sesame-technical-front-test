<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ATab from './ATab.vue'

const emit = defineEmits(['change'])

interface TabDTO {
  id: string
  default?: boolean
}

interface Props {
  tabs: TabDTO[]
  activeId?: string
}

const { tabs, activeId } = defineProps<Props>()

const activeTab = ref('')

onMounted(() => {
  const activeParent = tabs.find((tab) => tab.id === activeId)
  const defaultTab = activeParent ?? tabs.find((tab) => tab.default === true)
  if (defaultTab) activeTab.value = defaultTab.id
})

function setActiveTab(id: string): void {
  activeTab.value = id
  emit('change', id)
}
</script>

<template>
  <menu class="flex items-center gap-4 md:gap-12 border-gray-200 mb-4 px-2 md:px-6 border-b">
    <ATab
      :id="tab.id"
      :active-id="activeTab"
      v-for="tab in tabs"
      :key="tab.id"
      @click="setActiveTab"
    >
      <slot :name="tab.id"></slot>
    </ATab>
    <slot name="tabs"></slot>
  </menu>
  <div>
    <slot name="content" :active-tab="activeTab"></slot>
  </div>
</template>
