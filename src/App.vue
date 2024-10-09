<script setup lang="ts">
import Toast from 'primevue/toast'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-gray-50 min-h-svh font-figtree">
    <Toast />
    <Suspense>
      <RouterView />
    </Suspense>
  </div>
</template>
