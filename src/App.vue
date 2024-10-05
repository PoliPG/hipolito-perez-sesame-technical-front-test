<script setup lang="ts">
import { RouterView } from 'vue-router'
import OModal from './components/Modal/OModal.vue'
</script>

<template>
  <div class="bg-gray-50 min-h-svh font-figtree">
    <Suspense>
      <RouterView />
    </Suspense>
    <OModal :is-open="true">
      <template><div>Holaa</div></template>
    </OModal>
  </div>
</template>
