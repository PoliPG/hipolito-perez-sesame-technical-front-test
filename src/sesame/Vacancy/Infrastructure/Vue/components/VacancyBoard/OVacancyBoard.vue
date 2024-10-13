<script setup lang="ts">
import type { VacancyCandidateStatusDTO } from '@/sesame/Vacancy/Application/get-vacancy-candidate-status/VacancyCandidateStatusDTO'
import type { VacancyCandidateDTO } from '@/sesame/Candidate/Application/get-vacancy-candidates/VacancyCandidateDTO'
import OVacancyCandidateStatusCard from './OVacancyCandidateStatusCard.vue'

interface Props {
  candidateStatuses: VacancyCandidateStatusDTO[]
  candidates: VacancyCandidateDTO[]
  vacancyId: string
}

const { candidateStatuses, candidates, vacancyId } = defineProps<Props>()
</script>

<template>
  <div
    class="relative flex items-stretch gap-3 whitespace-nowrap overflow-x-scroll blue-marguerite-scrollbar"
  >
    <OVacancyCandidateStatusCard
      v-for="candidateStatus in candidateStatuses"
      :key="candidateStatus.id"
      :candidate-status="candidateStatus"
      :candidates="candidates"
      :vacancyId="vacancyId"
    />
  </div>
</template>
