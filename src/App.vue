<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <Suspense>
    <RouterView class="bg-gray-50 min-h-svh font-figtree" />
  </Suspense>
</template>
