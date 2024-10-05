<script setup lang="ts">
import { QueryBusKey } from '@/sesame/Shared/EventBus/Infrastructure/Vue/EventBusPlugin'
import { GetVacancyCandidateStatusQuery } from '@/sesame/Vacancy/Application/get-vacancy-candidate-status/GetVacancyCandidateStatusQuery'
import { VacancyCandidateStatusDTO } from '@/sesame/Vacancy/Application/get-vacancy-candidate-status/VacancyCandidateStatusDTO'
import { inject } from 'vue'
// Template
import HomeTemplate from '../templates/HomeTemplate.vue'

const queryBus = inject(QueryBusKey)!
const query = new GetVacancyCandidateStatusQuery('c762067e-de1e-4706-9649-accad9dacb1b')
const candidateStatus = await queryBus.dispatch<VacancyCandidateStatusDTO[]>(query)
</script>

<template>
  <HomeTemplate :candidate-status="candidateStatus" />
</template>
