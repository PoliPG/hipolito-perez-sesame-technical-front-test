<script setup lang="ts">
import AButton from '../Button/AButton.vue'
import MInput from '../Input/MInput.vue'

const emit = defineEmits(['new-candidate'])
</script>

<template>
  <div class="flex flex-wrap justify-between gap-2 mb-4">
    <div class="min-w-56">
      <MInput
        :icon="{ name: 'search', color: 'text-[#94A3B8]' }"
        size="sm"
        :animate="true"
        placeholder="Buscar"
      />
    </div>
    <AButton
      cta="Añadir candidato"
      color="blue-marguerite"
      @click="emit('new-candidate')"
    ></AButton>
  </div>
</template>
