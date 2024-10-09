<script setup lang="ts">
import { RequestBusKey } from '@/sesame/Shared/EventBus/Infrastructure/Vue/EventBusPlugin'
import type { VacancyCandidateStatusDTO } from '@/sesame/Vacancy/Application/get-vacancy-candidate-status/VacancyCandidateStatusDTO'
import { inject, ref } from 'vue'
// Component
import AButton from '@/components/Button/AButton.vue'
import ASelectInput from '@/components/Input/ASelectInput.vue'
import MInput from '@/components/Input/MInput.vue'
import { CreateCandidateRequest } from '@/sesame/Candidate/Application/create-candidate/CreateCandidateRequest'
import type { Notification } from '@/sesame/Shared/Notifications/Application/Notification'
import type { VacancyCandidateDTO } from '@/sesame/Candidate/Application/get-vacancy-candidates/VacancyCandidateDTO'
import { UpdateCandidateRequest } from '@/sesame/Candidate/Application/update-candidate/UpdateCandidateRequest'

const emit = defineEmits(['success'])
const requestBus = inject(RequestBusKey)!

interface Props {
  candidate?: VacancyCandidateDTO
  candidateStatuses: VacancyCandidateStatusDTO[]
  vacancyId: string
}
const { candidateStatuses, vacancyId, candidate } = defineProps<Props>()
// Data
const selectedItem = ref<VacancyCandidateStatusDTO | undefined>(
  candidateStatuses.find((status) => status.name === candidate?.status)
)
const firstName = ref<string>(candidate?.firstName ?? '')
const lastName = ref<string>(candidate?.lastName ?? '')
const notification = ref<Notification>()
// Errors
const firstNameError = ref<string>()
const lastNameError = ref<string>()
const candidateStatusError = ref<string>()

async function sendForm() {
  let request = new CreateCandidateRequest(
    firstName.value,
    lastName.value,
    vacancyId,
    selectedItem.value?.id
  )
  if (candidate) {
    request = new UpdateCandidateRequest(
      candidate.id,
      firstName.value,
      lastName.value,
      vacancyId,
      selectedItem.value?.id
    )
  }

  notification.value = await requestBus.dispatch<Notification>(request)

  if (!notification.value.isError()) {
    resetForm()
    emit('success')
    return
  }

  notification.value.getErrors().forEach((error) => {
    if (error.id === 'first-name') firstNameError.value = error.message
    if (error.id === 'last-name') firstNameError.value = error.message
    if (error.id === 'vacancy-candidate-status-id') firstNameError.value = error.message
  })
}

function resetForm() {
  firstName.value = ''
  lastName.value = ''
  selectedItem.value = undefined
}
</script>

<template>
  <form class="select-none">
    <div class="mb-3">
      <MInput v-model="firstName" placeholder="Nombre" :error="firstNameError" />
    </div>
    <div class="mb-3">
      <MInput v-model="lastName" placeholder="Apellidos" :error="lastNameError" />
    </div>
    <div class="mb-6">
      <ASelectInput
        v-model="selectedItem"
        :options="candidateStatuses"
        :error="candidateStatusError"
        placeholder="Selecciona un estado"
      />
    </div>
    <div v-if="notification?.isError()" class="bg-red-200 mb-3 p-4 font-bold text-red-600 text-sm">
      <ul class="flex flex-col gap-2">
        <li v-for="error in notification.getErrors()" :key="error.id">
          {{ error.message }}
        </li>
      </ul>
    </div>
    <div class="text-right mb-2">
      <AButton
        :cta="candidate ? 'Actualizar candidato' : 'Crear candidato'"
        color="blue-marguerite"
        @click="sendForm"
      />
    </div>
  </form>
</template>
