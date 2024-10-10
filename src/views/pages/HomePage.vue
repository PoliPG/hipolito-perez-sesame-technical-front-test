<script setup lang="ts">
import { inject, onMounted, ref } from 'vue'
import { QueryBusKey } from '@/sesame/Shared/EventBus/Infrastructure/Vue/EventBusPlugin'
import { GetVacancyCandidateStatusQuery } from '@/sesame/Vacancy/Application/get-vacancy-candidate-status/GetVacancyCandidateStatusQuery'
import { VacancyCandidateStatusDTO } from '@/sesame/Vacancy/Application/get-vacancy-candidate-status/VacancyCandidateStatusDTO'
import { GetVacancyCandidatesQuery } from '@/sesame/Candidate/Application/get-vacancy-candidates/GetVacancyCandidatesQuery'
import type { VacancyCandidateDTO } from '@/sesame/Candidate/Application/get-vacancy-candidates/VacancyCandidateDTO'
import { usePiniaCandidateStore } from '@/sesame/Candidate/Infrastructure/Pinia/PiniaCandidateStore'
// Template
import HomeTemplate from '../templates/HomeTemplate.vue'
const store = usePiniaCandidateStore()

const vacancyId = 'c762067e-de1e-4706-9649-accad9dacb1b'
let candidateStatuses = ref<VacancyCandidateStatusDTO[]>([])
let candidates = ref<VacancyCandidateDTO[]>([])
const queryBus = inject(QueryBusKey)!

const query = new GetVacancyCandidateStatusQuery(vacancyId)
candidateStatuses.value = await queryBus.dispatch<VacancyCandidateStatusDTO[]>(query)

onMounted(async () => {
  const candidatesQuery = new GetVacancyCandidatesQuery(vacancyId)
  await queryBus.dispatch<VacancyCandidateDTO[]>(candidatesQuery)
  candidates.value = store.getCandidates
})
</script>

<template>
  <HomeTemplate
    :candidate-statuses="candidateStatuses"
    :candidates="store.getCandidates"
    :vacancy-id="vacancyId"
  />
</template>
