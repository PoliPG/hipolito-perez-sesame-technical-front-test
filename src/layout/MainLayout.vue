<script setup lang="ts">
import { ref } from 'vue'
import { menu } from '@/config/index'
import OMenu from '@/components/Menu/OMenu.vue'
import MHeader from '@/components/Header/MHeader.vue'

interface Props {
  title: string
}

const { title } = defineProps<Props>()

let isMenuOpen = ref(false)

function toggleMenu(): void {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <main class="md:flex mx-auto px-2 w-full max-w-8xl">
    <div
      :class="{ hidden: !isMenuOpen }"
      class="lg:block md:relative fixed inset-0 bg-gray-600 bg-opacity-60 menu"
      @click="toggleMenu"
    >
      <OMenu
        :items="menu"
        default-item="Reclutamiento"
        class="md:block w-64 min-h-svh"
        :class="{ hidden: !isMenuOpen }"
        @click.prevent.stop
      />
    </div>
    <div class="md:flex-grow md:px-6 overflow-hidden">
      <MHeader class="mb-2" :title @toggle-menu="toggleMenu" />
      <slot></slot>
    </div>
  </main>
</template>
