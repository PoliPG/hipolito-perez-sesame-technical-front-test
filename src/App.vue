<script setup lang="ts">
import { RouterView } from 'vue-router'
import OModal from './components/Modal/OModal.vue'
import { ref } from 'vue'
import OCard from './components/Card/OCard.vue'

let openModal = ref(true)

function closeModal() {
  console.log('Close')
  openModal.value = false
}
</script>

<template>
  <div class="bg-gray-50 min-h-svh font-figtree">
    <Suspense>
      <RouterView />
    </Suspense>
    <OModal :is-open="openModal" @close="closeModal">
      <OCard>
        <div class="w-64 min-h-72"></div>
      </OCard>
    </OModal>
    <button @click="openModal = true">Abrir Modal</button>
  </div>
</template>
