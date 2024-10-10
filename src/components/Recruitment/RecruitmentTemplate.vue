<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import router from '@/router'
import type { VacancyCandidateStatusDTO } from '@/sesame/Vacancy/Application/get-vacancy-candidate-status/VacancyCandidateStatusDTO'
import type { VacancyCandidateDTO } from '@/sesame/Candidate/Application/get-vacancy-candidates/VacancyCandidateDTO'
// Components
import OCard from '@/components/Card/OCard.vue'
import MTabs from '@/components/Tab/MTabs.vue'
import OModal from '@/components/Modal/OModal.vue'
import RecruitmentHeader from './RecruitmentHeader.vue'
import MainLayout from '@/layout/MainLayout.vue'
const OCandidateForm = defineAsyncComponent(
  () => import('@/sesame/Candidate/Infrastructure/Vue/components/OCandidateForm.vue')
)

interface Props {
  candidateStatuses: VacancyCandidateStatusDTO[]
  vacancyId: string
  candidates: VacancyCandidateDTO[]
}
const { candidateStatuses, vacancyId, candidates } = defineProps<Props>()

let isModalOpen = ref(false)
let activeTabID = ref()

switch (router.currentRoute.value.name) {
  case 'vacancy-recruitment':
    activeTabID.value = 'vacancies'
    break
  case 'candidates-recruitment':
    activeTabID.value = 'candidates'
    break

  default:
    activeTabID.value = 'vacancies'
    router.push({ name: 'vacancy-recruitment' })
    break
}

function NewCandidate() {
  isModalOpen.value = true
}

function closeCandidateModal() {
  isModalOpen.value = false
}

function changeTab(id: string) {
  if (id === 'vacancies') router.push({ name: 'vacancy-recruitment' })
  if (id === 'candidates') router.push({ name: 'candidates-recruitment' })
}
</script>

<template>
  <MainLayout title="Reclutamiento">
    <OCard class="mb-2">
      <div class="-mt-2">
        <MTabs
          :tabs="[{ id: 'vacancies', default: true }, { id: 'candidates' }]"
          :active-id="activeTabID"
          @change="changeTab"
        >
          <template #vacancies>Vacantes</template>
          <template #candidates>Candidatos</template>
          <template #content>
            <RecruitmentHeader @new-candidate="NewCandidate" />
            <router-view
              :candidate-statuses="candidateStatuses"
              :candidates="candidates"
              :vacancyId
            />
          </template>
        </MTabs>
      </div>
    </OCard>
    <OModal :is-open="isModalOpen" @close="closeCandidateModal">
      <OCard icon="user" title="Nuevo candidato">
        <div class="w-64">
          <OCandidateForm
            :candidate-statuses="candidateStatuses"
            :vacancy-id="vacancyId"
            @success="closeCandidateModal"
          />
        </div>
      </OCard>
    </OModal>
  </MainLayout>
</template>

<style lang="css" scoped>
.menu {
  transition: all 0.5s ease;
}
</style>
