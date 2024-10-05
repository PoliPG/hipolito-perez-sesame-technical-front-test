<script setup lang="ts">
import type { VacancyCandidateStatusDTO } from '@/sesame/Vacancy/Application/get-vacancy-candidate-status/VacancyCandidateStatusDTO'

import OVacancyCandidateCard from './OVacancyCandidateCard.vue'

interface Props {
  candidateStatuses: VacancyCandidateStatusDTO[]
}

const { candidateStatuses } = defineProps<Props>()
</script>

<template>
  <div class="flex items-stretch gap-3 whitespace-nowrap overflow-x-scroll">
    <OVacancyCandidateCard
      v-for="candidateStatus in candidateStatuses"
      :key="candidateStatus.id"
      :candidate-status="candidateStatus"
    />
  </div>
</template>
