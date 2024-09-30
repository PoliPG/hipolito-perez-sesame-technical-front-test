<script setup lang="ts">
import type { VacancyCandidateStatusDTO } from '@/sesame/Vacancy/Application/get-vacancy-candidate-status/VacancyCandidateStatusDTO'
import OCardTabs from '@/components/Card/OCardTabs.vue'
import MHeader from '@/components/Header/MHeader.vue'

interface Props {
  candidateStatus: VacancyCandidateStatusDTO[]
}
const { candidateStatus } = defineProps<Props>()
</script>

<template>
  <main class="px-2">
    <MHeader class="mb-2" />
    <OCardTabs class="mb-2" />
    <div v-for="candidateState in candidateStatus" :key="candidateState.id">
      <span class="px-2 font-bold">{{ candidateState.name }}</span>
    </div>
  </main>
</template>
