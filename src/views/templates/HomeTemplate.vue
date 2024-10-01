<script setup lang="ts">
import type { VacancyCandidateStatusDTO } from '@/sesame/Vacancy/Application/get-vacancy-candidate-status/VacancyCandidateStatusDTO'
import MHeader from '@/components/Header/MHeader.vue'
import OCard from '@/components/Card/OCard.vue'
import MTabs from '@/components/Tab/MTabs.vue'

interface Props {
  candidateStatus: VacancyCandidateStatusDTO[]
}
const { candidateStatus } = defineProps<Props>()
</script>

<template>
  <main class="px-2">
    <MHeader class="mb-2" />
    <OCard class="mb-2">
      <MTabs :tabs="[{ id: 'vacancies', default: true }, { id: 'candidates' }]">
        <template #vacancies>Vacantes</template>
        <template #candidates>Candidatos</template>
        <template #content="{ activeTab }">
          <div v-if="activeTab === 'vacancies'">
            <div v-for="candidateState in candidateStatus" :key="candidateState.id">
              <span class="px-2 font-bold">{{ candidateState.name }}</span>
            </div>
          </div>
          <div v-else-if="activeTab === 'candidates'">Candidatos</div>
        </template>
      </MTabs>
    </OCard>
  </main>
</template>
