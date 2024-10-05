<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-gray-50 min-h-svh font-figtree">
    <Suspense>
      <RouterView />
    </Suspense>
  </div>
</template>
