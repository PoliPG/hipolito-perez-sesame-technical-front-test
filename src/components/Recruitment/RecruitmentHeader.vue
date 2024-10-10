<script setup lang="ts">
import AButton from '../Button/AButton.vue'
import MInput from '../Input/MInput.vue'
import { usePiniaCandidateStore } from '@/sesame/Candidate/Infrastructure/Pinia/PiniaCandidateStore'

const emit = defineEmits(['new-candidate'])
const store = usePiniaCandidateStore()
const search = store.candidateSearch

function changeSearch(event: Event) {
  const input = event.target as HTMLInputElement
  store.setCandidateSearch(input.value ?? '')
}
</script>

<template>
  <div class="flex flex-wrap justify-between gap-2 mb-4">
    <div class="min-w-56">
      <MInput
        v-model="search"
        :icon="{ name: 'search', color: 'text-[#94A3B8]' }"
        size="sm"
        :animate="true"
        @change="changeSearch"
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
