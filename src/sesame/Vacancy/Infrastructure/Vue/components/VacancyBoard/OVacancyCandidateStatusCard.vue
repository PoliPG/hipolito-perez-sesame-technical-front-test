<script setup lang="ts">
import { computed, inject } from 'vue'
import { useToast } from 'primevue/usetoast'
import type { Notification } from '@/sesame/Shared/Notifications/Application/Notification'
import { RequestBusKey } from '@/sesame/Shared/EventBus/Infrastructure/Vue/EventBusPlugin'
import type { VacancyCandidateStatusDTO } from '@/sesame/Vacancy/Application/get-vacancy-candidate-status/VacancyCandidateStatusDTO'
import type { VacancyCandidateDTO } from '@/sesame/Candidate/Application/get-vacancy-candidates/VacancyCandidateDTO'
// Components
import MVacancyCandidateCard from './MVacancyCandidateCard.vue'
import MVacancyCandidateStatusHeader from './MVacancyCandidateStatusHeader.vue'
import { UpdateCandidateRequest } from '@/sesame/Candidate/Application/update-candidate/UpdateCandidateRequest'

interface Props {
  candidateStatus: VacancyCandidateStatusDTO
  candidates: VacancyCandidateDTO[]
  vacancyId: string
}
const { candidateStatus, candidates, vacancyId } = defineProps<Props>()
const requestBus = inject(RequestBusKey)!
const toast = useToast()

const filterCandidates = computed(() => {
  return candidates.filter((candidate) => candidateStatus.id === candidate.status.id)
})

function onDragStart(event: DragEvent, candidate: VacancyCandidateDTO): void {
  if (!event.dataTransfer) return
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('candidateID', candidate.id)
}

async function onDrop(event: DragEvent, status: VacancyCandidateStatusDTO): Promise<void> {
  if (!event.dataTransfer) return
  const candidateID = event.dataTransfer.getData('candidateID')
  const candidate = candidates.find((candidate) => candidate.id === candidateID)
  if (!candidate) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Hubo un error inesperado',
      life: 3000
    })
    return
  }
  if (status.id === candidate.status.id) return
  await updateCandidate(candidate, status)
}

async function updateCandidate(
  candidate: VacancyCandidateDTO,
  status: VacancyCandidateStatusDTO
): Promise<void> {
  const request = new UpdateCandidateRequest(
    candidate.id,
    candidate.firstName,
    candidate.lastName,
    vacancyId,
    status.id
  )
  const notification = await requestBus.dispatch<Notification>(request)

  if (!notification.isError()) {
    toast.add({
      severity: 'success',
      summary: 'Estado actualizado',
      detail: `El estado de la candidatura de ${candidate.firstName} ha sido actualizado con éxito`,
      life: 3000
    })
    return
  }

  toast.add({
    severity: 'error',
    summary: 'Error',
    detail: notification.message,
    life: 3000
  })
  return
}
</script>

<template>
  <section
    class="flex flex-col flex-shrink-0 border-gray-[#E2E8F0] p-4 border rounded-xl w-72 h-[592px] overflow-x-hidden"
  >
    <MVacancyCandidateStatusHeader
      :key="candidateStatus.id"
      :candidate-status-name="candidateStatus.name"
      class="mb-2"
    />
    <main
      :id="candidateStatus.id"
      class="flex-grow overflow-y-auto"
      @drop="onDrop($event, candidateStatus)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div
        v-for="candidate in filterCandidates"
        :key="candidate.id"
        class="cursor-grab active:cursor-grabbing"
        draggable="true"
        @dragstart="onDragStart($event, candidate)"
      >
        <MVacancyCandidateCard :candidate="candidate" />
      </div>
    </main>
  </section>
</template>
