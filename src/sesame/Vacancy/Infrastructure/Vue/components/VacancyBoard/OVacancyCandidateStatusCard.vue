<script setup lang="ts">
import type { VacancyCandidateStatusDTO } from '@/sesame/Vacancy/Application/get-vacancy-candidate-status/VacancyCandidateStatusDTO'

import MVacancyCandidateStatusHeader from './MVacancyCandidateStatusHeader.vue'
import type { VacancyCandidateDTO } from '@/sesame/Candidate/Application/get-vacancy-candidates/VacancyCandidateDTO'

interface Props {
  candidateStatus: VacancyCandidateStatusDTO
  candidates: VacancyCandidateDTO[]
}

const { candidateStatus, candidates } = defineProps<Props>()
</script>

<template>
  <div class="border-gray-[#E2E8F0] p-4 border rounded-xl h-[592px]">
    <MVacancyCandidateStatusHeader
      :key="candidateStatus.id"
      :candidate-status-name="candidateStatus.name"
    />
    <div v-for="(candidate, index) in candidates" :key="index">
      {{ candidate.firstName }}
    </div>
  </div>
</template>
