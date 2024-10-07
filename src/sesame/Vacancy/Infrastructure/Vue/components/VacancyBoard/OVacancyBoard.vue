<script setup lang="ts">
import type { VacancyCandidateStatusDTO } from '@/sesame/Vacancy/Application/get-vacancy-candidate-status/VacancyCandidateStatusDTO'
import type { VacancyCandidateDTO } from '@/sesame/Candidate/Application/get-vacancy-candidates/VacancyCandidateDTO'
import OVacancyCandidateStatusCard from './OVacancyCandidateStatusCard.vue'

interface Props {
  candidateStatuses: VacancyCandidateStatusDTO[]
  candidates: VacancyCandidateDTO[]
}

const { candidateStatuses, candidates } = defineProps<Props>()

function getCandidatesByStatus(status: string): VacancyCandidateDTO[] {
  return candidates.filter((candidate) => status === candidate.status)
}
</script>

<template>
  <div class="flex items-stretch gap-3 whitespace-nowrap overflow-x-scroll">
    <OVacancyCandidateStatusCard
      v-for="candidateStatus in candidateStatuses"
      :key="candidateStatus.id"
      :candidate-status="candidateStatus"
      :candidates="getCandidatesByStatus(candidateStatus.name)"
    />
  </div>
</template>
