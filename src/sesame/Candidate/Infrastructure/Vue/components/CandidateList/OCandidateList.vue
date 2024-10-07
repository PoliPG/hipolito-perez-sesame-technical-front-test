<script setup lang="ts">
import type { VacancyCandidateDTO } from '@/sesame/Candidate/Application/get-vacancy-candidates/VacancyCandidateDTO'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import '@github/relative-time-element'

interface Props {
  candidates: VacancyCandidateDTO[]
}

const { candidates } = defineProps<Props>()
</script>

<template>
  <DataTable :value="candidates" stripedRows size="large" tableStyle="min-width: 50rem">
    <Column field="firstName" header="Nombre"></Column>
    <Column field="lastName" header="Apellidos"></Column>
    <Column field="updatedAt" header="Actualizado">
      <template #body="{ data: candidate }">
        <relative-time
          class="first-letter:capitalize"
          :datetime="candidate.updatedAt"
        ></relative-time>
      </template>
    </Column>
  </DataTable>
</template>
