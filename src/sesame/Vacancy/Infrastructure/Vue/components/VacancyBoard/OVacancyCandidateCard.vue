<script setup lang="ts">
import type { VacancyCandidateStatusDTO } from '@/sesame/Vacancy/Application/get-vacancy-candidate-status/VacancyCandidateStatusDTO'

import MVacancyCandidateStatusHeader from './MVacancyCandidateStatusHeader.vue'

interface Props {
  candidateStatus: VacancyCandidateStatusDTO
}

const { candidateStatus } = defineProps<Props>()
</script>

<template>
  <div class="border-gray-[#E2E8F0] p-4 border rounded-xl h-[592px]">
    <MVacancyCandidateStatusHeader
      :key="candidateStatus.id"
      :candidate-status-name="candidateStatus.name"
      class="px-2 font-bold"
    />
    <div></div>
  </div>
</template>
