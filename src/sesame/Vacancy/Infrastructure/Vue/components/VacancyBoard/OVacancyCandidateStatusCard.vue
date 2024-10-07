<script setup lang="ts">
import type { VacancyCandidateStatusDTO } from '@/sesame/Vacancy/Application/get-vacancy-candidate-status/VacancyCandidateStatusDTO'
import type { VacancyCandidateDTO } from '@/sesame/Candidate/Application/get-vacancy-candidates/VacancyCandidateDTO'
// Components
import MVacancyCandidateCard from './MVacancyCandidateCard.vue'
import MVacancyCandidateStatusHeader from './MVacancyCandidateStatusHeader.vue'

interface Props {
  candidateStatus: VacancyCandidateStatusDTO
  candidates: VacancyCandidateDTO[]
}

const { candidateStatus, candidates } = defineProps<Props>()
</script>

<template>
  <section class="flex-shrink-0 border-gray-[#E2E8F0] p-4 border rounded-xl w-72 h-[592px]">
    <MVacancyCandidateStatusHeader
      :key="candidateStatus.id"
      :candidate-status-name="candidateStatus.name"
      class="mb-2"
    />
    <div v-for="(candidate, index) in candidates" :key="index">
      <MVacancyCandidateCard :candidate="candidate" />
    </div>
  </section>
</template>
