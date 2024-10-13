<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import type { VacancyCandidateDTO } from '@/sesame/Candidate/Application/get-vacancy-candidates/VacancyCandidateDTO'
import type { VacancyCandidateStatusDTO } from '@/sesame/Vacancy/Application/get-vacancy-candidate-status/VacancyCandidateStatusDTO'
// Components
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import '@github/relative-time-element'
import AIcon from '@/components/Icons/AIcon.vue'
import OModal from '@/components/Modal/OModal.vue'
const OCard = defineAsyncComponent(() => import('@/components/Card/OCard.vue'))
const OCandidateForm = defineAsyncComponent(() => import('../OCandidateForm.vue'))

interface Props {
  candidates: VacancyCandidateDTO[]
  candidateStatuses: VacancyCandidateStatusDTO[]
  vacancyId: string
}

const { candidates } = defineProps<Props>()
let isModalOpen = ref(false)
let candidateSelected = ref<VacancyCandidateDTO>()

function updateCandidate(candidate: VacancyCandidateDTO) {
  candidateSelected.value = candidate
  isModalOpen.value = true
}

function closeCandidateModal() {
  isModalOpen.value = false
}
</script>

<template>
  <div class="border-gray-200 border border-b-0 rounded-lg overflow-hidden">
    <DataTable
      stripedRows
      tableStyle="min-width: 50rem;"
      tableClass="text-gray-600 font-semibold"
      :value="candidates"
    >
      <Column field="firstName" header="Nombre"></Column>
      <Column field="lastName" header="Apellidos"></Column>
      <Column field="status.name" header="Estado"></Column>
      <Column field="updatedAt" header="Actualizado">
        <template #body="{ data: candidate }">
          <relative-time
            class="first-letter:capitalize"
            :datetime="candidate.updatedAt"
          ></relative-time>
        </template>
      </Column>
      <Column field="updatedAt" header="Opciones">
        <template #body="{ data: candidate }">
          <span class="text-blue-marguerite-500 text-center hover:text-blue-700 cursor-pointer">
            <AIcon
              :height="22"
              :width="22"
              icon="pencil"
              @click="updateCandidate(candidate)"
            ></AIcon>
          </span>
        </template>
      </Column>
    </DataTable>
  </div>
  <OModal :is-open="isModalOpen" @close="closeCandidateModal">
    <OCard icon="user" title="Actualizar candidato">
      <div class="w-64">
        <OCandidateForm
          :candidate="candidateSelected"
          :candidate-statuses="candidateStatuses"
          :vacancy-id="vacancyId"
          @success="closeCandidateModal"
        />
      </div>
    </OCard>
  </OModal>
</template>
